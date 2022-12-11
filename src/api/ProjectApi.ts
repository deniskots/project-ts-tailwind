// Need to use the React-specific entry point to import createApi
import {createApi} from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "../core/axios-base-query";
import {Article, GlobalFeedIn} from "./dto/global-feed.in";
import {PAGE_SIZE} from "../consts";
import {PopularTagsIn} from "./dto/popularTags.in";
import {transformResponse} from "../utils/transformResponse";
import {SinglePostIn} from "./dto/singlePost.in";
import {PostCommentsIn} from "./dto/postComments.in";
import {FavoriteArticleIn} from "./dto/get-favoriteArticle";
import {RootState} from "../store/store";

interface BaseFeedParams {
    page: number
}

interface GlobalFeedParams extends BaseFeedParams {
    tag: string | null
    isPersonalArticles: boolean
}

export interface FeedData {
    articles: Article[]
    articlesCount: number
}

export interface ProfileFeed extends BaseFeedParams {
    author: string,
    isFavorite?: boolean;
}

export interface SinglePostParams {
    slug: string
}

export interface FavoriteArticleParams {
    slug: string
}


// Define a service using a base URL and expected endpoints
export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://api.realworld.io/api'
    }),
    tagTypes: ['Article', 'Articles'],
    endpoints: (builder) => ({
        getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
            query: ({page, tag, isPersonalArticles}) => ({
                url: isPersonalArticles ? '/articles/feed' : '/articles',
                method: 'get',
                params: {
                    limit: PAGE_SIZE,
                    offset: page * PAGE_SIZE,
                    tag
                }
            }),
            transformResponse,
            providesTags: (result) =>
                result
                    ? result?.articles.map((article) => ({
                        type: 'Article',
                        slug: article.slug
                    }))
                    : ['Articles']

        }),
        getProfileFeed: builder.query<FeedData, ProfileFeed>({
            query: ({page, author, isFavorite = false}) => ({
                url: '/articles',
                method: 'get',
                params: {
                    limit: PAGE_SIZE,
                    offset: page * PAGE_SIZE,
                    author: isFavorite ? undefined : author,
                    favorited: !isFavorite ? undefined : author,
                }
            }),
            transformResponse,
        }),
        getPopularTags: builder.query<PopularTagsIn, any>({
            query: () => ({
                url: '/tags',
                method: 'get',
            })
        }),
        getSinglePost: builder.query<SinglePostIn, SinglePostParams>({
            query: ({slug}) => ({
                url: `/articles/${slug}`,
                method: 'get'
            }),
        }),

        getPostComments: builder.query<PostCommentsIn, SinglePostParams>({
            query: ({slug}) => ({
                url: `/articles/${slug}/comments`,
                method: 'get'
            })
        }),
        getFavoriteArticle: builder.mutation<FavoriteArticleIn, FavoriteArticleParams>({
            query: ({slug}) => ({
                url: `/articles/${slug}/favorite`,
                method: 'post'
            }),
            onQueryStarted: async ({}, {dispatch, queryFulfilled, getState}) => {
                const state = getState() as RootState
                try {
                    const {data} = await queryFulfilled;
                    const feedKeys = Object.keys(state.projectApi.queries);
                    for (
                        let i = 0,
                            key = feedKeys[i],
                            queryItem = state.projectApi.queries[key];
                        i < feedKeys.length;
                        i++, key = feedKeys[i], queryItem = state.projectApi.queries[key]
                    ) {
                        if (!key.startsWith('getGlobalFeed')) {
                            continue
                        }
                        dispatch(
                            projectApi.util.updateQueryData(
                                'getGlobalFeed',
                                queryItem!.originalArgs as GlobalFeedParams,
                                (draft) => {
                                    const updateId = draft.articles.findIndex(
                                        (article) => article.slug === data.article.slug
                                    );
                                    if (updateId >= 0) {
                                        draft.articles[updateId] = data.article
                                    }
                                })
                        )
                    }
                } catch
                    (e) {

                }
            },

        }),
        getDislikeArticle: builder.mutation<FavoriteArticleIn, FavoriteArticleParams>({
            query: ({slug}) => ({
                url: `/articles/${slug}/favorite`,
                method: 'delete'
            }),
            onQueryStarted: async ({}, {dispatch, queryFulfilled, getState}) => {
                try {
                    const state = getState() as RootState
                    const {data} = await queryFulfilled;
                    const feedKeys = Object.keys(state.projectApi.queries);
                    for (
                        let i = 0,
                            key = feedKeys[i],
                            queryItem = state.projectApi.queries[key];
                        i < feedKeys.length;
                        i++, key = feedKeys[i], queryItem = state.projectApi.queries[key]
                    ) {
                        if (!key.startsWith('getGlobalFeed')) {
                            continue
                        }
                        dispatch(
                            projectApi.util.updateQueryData(
                                'getGlobalFeed',
                                queryItem!.originalArgs as GlobalFeedParams,
                                (draft) => {
                                    const updateId = draft.articles.findIndex(
                                        (article) => article.slug === data.article.slug
                                    );
                                    if (updateId >= 0) {
                                        draft.articles[updateId] = data.article
                                    }
                                })
                        )
                    }
                } catch
                    (e) {

                }
            },

        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
    useGetGlobalFeedQuery,
    useGetPopularTagsQuery,
    useGetProfileFeedQuery,
    useGetSinglePostQuery,
    useGetPostCommentsQuery,
    useGetFavoriteArticleMutation,
    useGetDislikeArticleMutation
} = projectApi
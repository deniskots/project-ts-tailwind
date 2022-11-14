// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "../core/axios-base-query";
import {Article, GlobalFeedIn} from "./dto/global-feed.in";
import {PAGE_SIZE} from "../consts";
import {PopularTagsIn} from "./dto/popularTags.in";
import {transformResponse} from "../utils/transformResponse";

interface BaseFeedParams {
    page: number
}

interface GlobalFeedParams extends BaseFeedParams{
    tag: string | null
}

export interface FeedData{
    articles: Article[]
    articlesCount: number
}
export interface ProfileFeed extends BaseFeedParams{
    author: string
}


// Define a service using a base URL and expected endpoints
export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://api.realworld.io/api'
    }),
    endpoints: (builder) => ({
        getGlobalFeed: builder.query<FeedData, GlobalFeedParams>({
            query: ({page, tag}) => ({
                url: '/articles',
                method: 'get',
                params: {
                    limit: PAGE_SIZE,
                    offset: page * PAGE_SIZE,
                    tag
                }
            }),
            transformResponse,
        }),
        getProfileFeed: builder.query<FeedData, ProfileFeed>({
            query: ({page, author}) => ({
                url: '/articles',
                method: 'get',
                params: {
                    limit: PAGE_SIZE,
                    offset: page * PAGE_SIZE,
                    author
                }
            }),
        }),
        getPopularTags: builder.query<PopularTagsIn, any>({
            query: () => ({
                url: '/tags',
                method: 'get',
            })
        })
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetGlobalFeedQuery, useGetPopularTagsQuery, useGetProfileFeedQuery} = projectApi
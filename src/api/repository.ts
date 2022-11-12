// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "../core/axios-base-query";
import {GlobalFeedIn} from "./dto/global-feed.in";
import {PAGE_SIZE} from "../consts";
import {PopularTagsIn} from "./dto/popularTags.in";


interface GlobalFeedParams{
    page: number
    tag: string | null
}


// Define a service using a base URL and expected endpoints
export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://api.realworld.io/api'
    }),
    endpoints: (builder) => ({
        getGlobalFeed: builder.query<GlobalFeedIn, GlobalFeedParams>({
            query: ({page, tag}) => ({
                url: '/articles',
                method: 'get',
                params: {
                    limit: PAGE_SIZE,
                    offset: page * PAGE_SIZE,
                    tag
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
export const {useGetGlobalFeedQuery, useGetPopularTagsQuery} = projectApi
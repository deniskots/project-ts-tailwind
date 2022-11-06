// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "../core/axios-base-query";
import {GlobalFeedIn} from "./dto/global-feed.in";
import {PAGE_SIZE} from "../consts";


interface GlobalFeedParams{
    page: number
}


// Define a service using a base URL and expected endpoints
export const projectApi = createApi({
    reducerPath: 'projectApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://api.realworld.io/api'
    }),
    endpoints: (builder) => ({
        getGlobalFeed: builder.query<GlobalFeedIn, GlobalFeedParams>({
            query: ({page}) => ({
                url: '/articles',
                method: 'get',
                params: {
                    limit: PAGE_SIZE,
                    offset: page * PAGE_SIZE
                }
            }),
        }),
    }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetGlobalFeedQuery} = projectApi
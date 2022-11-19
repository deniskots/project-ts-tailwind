// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react'
import {axiosBaseQuery} from "../core/axios-base-query";

import {transformResponse} from "../utils/transformResponse";
import {GetProfileIn} from "./dto/get-profile.in";

interface ProfileParams{
    username: string
}


export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://api.realworld.io/api'
    }),
    endpoints: (builder) =>  ({
        getProfile: builder.query<GetProfileIn, ProfileParams>({
            query: ({username}) => ({
                url: `/profiles/${username}`,
                method: 'get',
            }),
        }),
    })
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {useGetProfileQuery} = profileApi
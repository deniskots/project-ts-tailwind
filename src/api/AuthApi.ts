import {createApi} from "@reduxjs/toolkit/dist/query/react";
import {axiosBaseQuery} from "../core/axios-base-query";
import {SignUpIn} from "./dto/sign-up.in";
import { SignUpOut } from "./dto/sign-up.out";
import {SignInIn} from "./dto/sign-in.in";
import {SignInOut} from "./dto/sign-in.out";


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: axiosBaseQuery({
        baseUrl: 'https://api.realworld.io/api'
    }),
    endpoints: (builder) => ({
        signUp: builder.query<SignUpIn, SignUpOut['user']>({
            query: (args) => ({
                url: '/users',
                method: 'post',
                data: {
                    user: args
                }
            }),
        }),

        signIn: builder.query<SignInIn, SignInOut['user']>({
            query: (args) => ({
                url: '/users/login',
                method: 'post',
                data: {
                    user: args
                }
            }),
        }),
    })
})

export const {
  useLazySignUpQuery,
    useLazySignInQuery
} = authApi
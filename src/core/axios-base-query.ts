import { createApi } from '@reduxjs/toolkit/query'
import type { BaseQueryFn } from '@reduxjs/toolkit/query'
import axios, {AxiosError, AxiosRequestConfig} from 'axios'
import {RootState} from "../store/store";
import {authSlice} from "../slices/AuthSlice";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: '' }
  ): BaseQueryFn<
    {
      url: string
      method: AxiosRequestConfig['method']
      data?: AxiosRequestConfig['data']
      params?: AxiosRequestConfig['params']
    },
      unknown,
    unknown
  > =>
  async ({ url, method, data, params }, {getState}) => {
    const state = getState() as RootState
      const token = state[authSlice.name].user?.token
    try {
        const headers: Record<string, string> = {}
        if(token) {
            headers['Authorization'] = `Token ${token}`
        }
      const result = await axios({ url: baseUrl + url, method, data, params, headers })
      return { data: result.data }
    } catch (axiosError) {
      let err = axiosError as AxiosError
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      }
    }
  }
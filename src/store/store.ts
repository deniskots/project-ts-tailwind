import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from 'react-redux'
import type {TypedUseSelectorHook} from 'react-redux'
import {projectApi} from "../api/ProjectApi";
import {profileApi} from "../api/ProfileApi";
import {authApi} from "../api/AuthApi";
import {authSlice} from "../slices/AuthSlice";
import {
    persistReducer, persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [authSlice.name]
}

const persistedReducer = persistReducer(persistConfig, combineReducers({
        [projectApi.reducerPath]: projectApi.reducer,
        [profileApi.reducerPath]: profileApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [authSlice.name]: authSlice.reducer
    })
)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(projectApi.middleware, profileApi.middleware, authApi.middleware),

})

export let persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
import {SignUpIn} from "../api/dto/sign-up.in";
import {createSelector, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store/store";

interface AuthState {
    user: SignUpIn['user'] | null;
}

const initialState: AuthState = {
    user: null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<SignUpIn['user']>) {
            state.user = {...action.payload}
        }
    }
})

export const selectUser = (state: RootState) => state.auth.user

export const {setUser} = authSlice.actions
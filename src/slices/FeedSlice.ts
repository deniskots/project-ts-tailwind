import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface FeedSliceState {
    selectedTag: string | null
}

const initialState: FeedSliceState = {
    selectedTag: null,
}


export const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        selectTag(state, action: PayloadAction<string | null>) {
            state.selectedTag = action.payload
        }
    },
})

export const {selectTag} = feedSlice.actions
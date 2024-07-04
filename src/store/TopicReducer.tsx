import { createSlice } from "@reduxjs/toolkit";

interface TopicState {
    value: string;
}

const initialState: TopicState = {
    value: ''
}

const TopicSlice = createSlice({
    name: 'topic',
    initialState,
    reducers: {
        setTopic: (state, action) => {
            state.value = action.payload
        }
    }
})

export const {setTopic} = TopicSlice.actions;
export default TopicSlice.reducer
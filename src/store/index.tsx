import { configureStore } from "@reduxjs/toolkit";
import TopicReducer from "./TopicReducer";


export const store = configureStore({
    reducer: {
        topic: TopicReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

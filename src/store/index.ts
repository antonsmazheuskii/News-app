import {configureStore} from "@reduxjs/toolkit";
import {spaceNewsApi} from "./services/spaceNewsApi";


export const store = configureStore({
    reducer: {
        [spaceNewsApi.reducerPath]: spaceNewsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(spaceNewsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
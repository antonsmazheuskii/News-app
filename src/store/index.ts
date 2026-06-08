import {configureStore} from "@reduxjs/toolkit";
import {spaceNewsApi} from "./services/spaceNewsApi";
import userReducer from './modules/userSlice'


export const store = configureStore({
    reducer: {
        [spaceNewsApi.reducerPath]: spaceNewsApi.reducer,
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(spaceNewsApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
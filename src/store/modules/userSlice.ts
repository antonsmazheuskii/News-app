import type {IUserState} from "../../types/user";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

const initialState: IUserState = {
    isAuthenticated: false,
    email: null,
    token: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginSuccess(state, action: PayloadAction<{ email: string; token: string }>) {
            state.isAuthenticated = true;
            state.email = action.payload.email;
            state.token = action.payload.token;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.email = null;
            state.token = null;
        },
    },
});

export const { loginSuccess, logout } = userSlice.actions;
export default userSlice.reducer;
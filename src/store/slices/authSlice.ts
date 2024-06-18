import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserProps {
    id: string;
    email: string;
    username: string;
    fullName: string;
    roles: string[];
}

export interface InitialStateProps {
    user: UserProps | null;
    isLoggedIn: boolean;
}
const initialState: InitialStateProps = {
    user: null,
    isLoggedIn: false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState: (
            state,
            action: PayloadAction<{ user: UserProps; isLoggedIn: boolean }>
        ) => {
            state.user = action.payload.user;
            state.isLoggedIn = action.payload.isLoggedIn;
        },
        forceLogout: (state) => {
            state.user = null;
            state.isLoggedIn = false;
        },
    },
});

export const { setAuthState, forceLogout } = authSlice.actions;
export const authReducer = authSlice.reducer;

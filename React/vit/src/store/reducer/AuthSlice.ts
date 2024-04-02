import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface AuthState {
    auth: boolean;
    city: string;
}

const isLoggedIn = localStorage.getItem('isLoggedIn');

const initialState: AuthState = {
    auth: isLoggedIn ? JSON.parse(isLoggedIn) : false,
    city: 'Moscow',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authToggle: state => {
            state.auth = !state.auth;
        },
        setCity: (state, action: PayloadAction<string>) => {
            state.city = action.payload;
        }
    }
});

export const {authToggle, setCity} = authSlice.actions;

export default authSlice.reducer;

import {createSlice} from "@reduxjs/toolkit";

interface AuthState {
    auth: boolean
}

const initialState: AuthState = {
    auth: false
}


export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authToggle: state => {
            state.auth = !state.auth
        }
    }
})

export default authSlice.reducer;
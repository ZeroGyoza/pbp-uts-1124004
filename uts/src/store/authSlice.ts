import { createSlice } from "@reduxjs/toolkit";

type userDetail = {
    email : string,
    name : string,
    role : string,
    id : string
}

type authState = {
    user : userDetail | null;
}

const initialState : authState = {
    user : null
}

const authSlice = createSlice({
    name : "auth", 
    initialState,
    reducers : {
        setUserInfo(state, action){
            state.user = action.payload
        }
    }
})

export const authAction = authSlice.actions;
export default authSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

type bookDetail = {
    id : string,
    judul : string,
    deskripsi : string,
    tahun : string,
    kategori : string,
    status : string,
    peminjam : null,
    imageUrl : string,
    createdAt : string,
    updatedAt : string
}

type authState = {
    user : bookDetail | null;
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
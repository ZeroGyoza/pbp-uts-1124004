import { createSlice } from "@reduxjs/toolkit";

export type post = {
        judul: String,
        deskripsi: String,
        kategori: String,
        status: String
        imageurl: String
}

type postState = {
    posts: post[] | null;
}

const initialState: postState = {
    posts: null
}

const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPost(state, action) {
            state.posts = action.payload
        }
    }
})

export const postAction = postSlice.actions;
export default postSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export type book = {
    judul: string,
    deskripsi: string,
    tahun: string,
    kategori: string
}

type postState = {
    posts: book[] | null;
}

const initialState: postState = {
    posts: null
}

const bookSlice = createSlice({
    name: "put",
    initialState,
    reducers: {
        setPost(state, action) {
            state.posts = action.payload
        }
    }
})

export const postAction = bookSlice.actions;
export default bookSlice.reducer;
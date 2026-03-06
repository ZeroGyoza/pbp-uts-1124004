import { useSelector } from "react-redux";
import { useParams } from "react-router";
import type { RootState } from "../store/store";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { useEffect, useMemo } from "react";
import { bookDetailRequest, getPostRequest } from "../api/api";
import { createSlice } from "@reduxjs/toolkit";
import { authAction } from "../store/authSlice";
import { Card, CardHeader, Avatar, CardContent, Typography } from "@mui/material";

export default function BookDetail(){
    const { id } = useParams();
    const book = useSelector((state: RootState) => state.auth.user);

    const dispatch = useAppDispatch();
    useEffect(() => {
        bookDetailRequest().then((res) => {
            dispatch(authAction.setUserInfo(res.data))
        })
    }, [id]);

    return (
         <div>
            <Card sx={{ maxWidth: 500 }}>
                <CardHeader
                    avatar = {<Avatar>{book?.imageUrl?? 'U'}</Avatar>}
                    title= {book?.judul}
                    subheader={book?.kategori}
                />
                <CardContent>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {book?.deskripsi},
                        {book?.kategori},
                        {book?.peminjam},
                        {book?.status},
                        {book?.tahun},
                        {book?.createdAt},
                        {book?.createdAt}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )

}
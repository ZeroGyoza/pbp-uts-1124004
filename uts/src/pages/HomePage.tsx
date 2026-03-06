import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useEffect, useState } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { postAction } from "../store/pageSlice";
import { getPostRequest } from "../api/api";
import { Card, CardHeader, Avatar, CardContent, Typography, CardMedia } from "@mui/material";

export default function home() {
    const posts = useSelector((state: RootState) => state.post.posts);

    const dispatch = useAppDispatch();
    useEffect(() => {
        getPostRequest().then((res) => {
            dispatch(postAction.setPost(res.data));
        })
    }, []);


    return (
        <div>
            {posts?.map((buku) => (
                <Card sx={{ maxWidth: 500 }}>
                    <CardHeader
                        title={buku?.judul}
                        subheader={buku?.kategori}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image="{buku?.imageurl}"
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {buku?.deskripsi},
                            {buku?.kategori},
                        </Typography>
                    </CardContent>
                </Card>

            ))}
        </div>
    )
}
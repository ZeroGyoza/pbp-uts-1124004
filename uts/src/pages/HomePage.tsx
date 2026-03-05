import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/useAppDispatch";
import { postAction } from "../store/pageSlice";
import { getPostRequest } from "../api/api";

export default function home(){
    const user = useSelector((state: RootState) => state.auth.user);
    const posts = useSelector((state: RootState) => state.post.posts);
    
    const dispatch = useAppDispatch();

    useEffect(() => {
        getPostRequest().then((res) => {
            dispatch(postAction.setPost(res.records));
        })
    }, []);
    
    return (<div>
        name : {user?.name}
        <br/>
        role : {user?.role}
        <br/>
        email : {user?.email} 

    </div>
    )
}
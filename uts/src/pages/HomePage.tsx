import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

export default function home(){
    const user = useSelector((state: RootState) => state.auth.user);
    
    return (<div>
        name : {user?.name}
        <br/>
        role : {user?.role}
        <br/>
        email : {user?.email} 

    </div>
    )
}
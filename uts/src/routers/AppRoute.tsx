import { Route, Routes } from "react-router";
import Login from "../pages/LoginPage";
import Home from "../pages/HomePage";

function AppRoute() {
    return (<Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/home" element={<Home/>}></Route>    
    </Routes>
    )

}

export default AppRoute;
import { Route, Routes } from "react-router";
// import Login from "../pages/LoginPage";
import Home from "../pages/HomePage";
import Book from "../pages/BookDetail";
// import Edit from "../pages/UpdateBook";

function AppRoute() {
    return (
    <Routes>
        <Route path="/" element={<Home/>}></Route>  
        <Route path="/home/:id" element = {<Book/>}></Route>
        {/* <Route path="/edit" element ={<Edit/>}></Route> */}
    </Routes>
    )

}

export default AppRoute;
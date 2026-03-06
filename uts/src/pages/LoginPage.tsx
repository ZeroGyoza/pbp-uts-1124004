// import { useState } from "react";
// import { loginRequest, userInfoRequest } from "../api/api";
// import { useNavigate } from "react-router";
// import { useAppDispatch } from "../hooks/useAppDispatch";
// import { authAction } from "../store/authSlice";
// import { Button, TextField } from "@mui/material";

// function LoginPage() {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();
//     const dispatch = useAppDispatch();

//     const login = async () => {
//         const response = await loginRequest(email, password);
//         console.log(response);

//         // if (response.status !== 200) {
//         //     alert("Login failed: " + response.data);
//         //     return;
//         // }
//         const userData = await userInfoRequest();
//         dispatch(authAction.setUserInfo(userData.user));
//         navigate("/home");
        
//     }



//    return (
//         <div>
//             <h1>Login</h1>

//             <TextField
//                 label="Email"
//                 onChange={(e) => setEmail(e.target.value)}
//             />

//             <TextField
//                 type="password"
//                 label="Password"
//                 onChange={(e) => setPassword(e.target.value)}
//             />

//             <Button onClick={login}>
//                 Login
//             </Button>

//         </div>
//     );
// }

// export default LoginPage;
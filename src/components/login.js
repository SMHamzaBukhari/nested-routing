import React, { useState } from "react";
import './login.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


function Login(){
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const obj = {username};
    const dashboard = () =>{
            navigate(`/dashboard/${username}`, {state: obj});
            }
    return(
        <> 
        <div className="outer-container">
       <div className="inner-container">
           <div className="loginTop">
               <div className="custom"></div>
               <Typography variant="h4" color="black">Login</Typography>
           </div>
           <div className="container">
           <div className="inp">
           <TextField
           color="warning"
            id="standard-basic" 
            label="Username" 
            variant="standard" 
            required={true}
            onChange={(e)=>setUsername(e.target.value)}/>
           <TextField
           color="warning"
          id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          required={true}
        />
           </div>
           <div className="forget typography">  <Typography color="gray" variant="caption"><a>Forgotten your password?</a></Typography></div>
           <div className="button">
           <Button className="btn" variant="contained" onClick={dashboard}>Login</Button>
           </div>
           <div className="loginBottom typography">
               <Typography color="gray" variant="caption">Don't have an account? <a>Sign Up</a></Typography>
               
               </div>
               </div>
       </div>
       </div>
        </>
    )
}
export default Login;
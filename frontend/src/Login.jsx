import React, {useEffect, useState} from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import {validateLogin} from "./Validation";
import { Navigate } from "react-router-dom";
export const Login =(props)=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass ,setPass] = useState('');
    const [errors,setError] = useState({})
   
    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validateLogin(email,pass));
    }
    useEffect(()=>{
        if(Object.keys(errors).length ===0 && email!=="" && pass!=""){
            
           axios.get('http://localhost:3001/findUser',{
            params : { email: email}}).then(function (response) {
           const result = response.data;
         
           let err = {}
            if(!result){
                
                err.checkUser = "User not found";
                setError(err)
            }
            else if(result.pass !== pass){
                err.checkPass = "Password incorrect";
                setError(err)
            }
            else{
                navigate("/Home",{state : {name : response.data.name}}) ;
            }
            
          });
            
        }
    },[errors])
   
  
    return( 
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor ="email">email</label>
            <input value = {email} onChange={(e)=>setEmail(e.target.value)} type  = "email" placeholder="email@gmail.com" id ="email" name="email" />
            {errors.name && <p>{errors.name}</p>}
            
            <label htmlFor ="password">password</label>
            <input value = {pass} onChange = {(e)=> setPass(e.target.value)} type = "password" placeholder="******" id ="password" name="password" />
            {errors.pass && <p>{errors.pass}</p>}
            {errors.checkUser && <p>{errors.checkUser}</p>}
            {errors.checkPass && <p>{errors.checkPass}</p>}
            <button type="submit">Login</button>
        </form>
        <button className="link-btn" onClick={()=>navigate("/Register")}>Don't have an account? Register here. </button>
        </div>
    )
}
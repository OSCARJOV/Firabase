import { async } from "@firebase/util";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../config/firebase";
import { useUserContext } from "../context/UserContext";


const Login = () => {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("")

const navigate = useNavigate()
const {user} = useUserContext()

useEffect(() => {  //si ya existe un usuario lo envia a dashboard
   if(user){
    navigate("/dashboard")
}
}, [user])


const handlesubmid = async (e) => {
    e.preventDefault();
    console.log("click");
    try {
   const credential = await login({email: email,password:password})
   console.log(credential);
    } catch (error) {
        console.log(error);
    }

}


    return (
        <>
        <h1>login</h1>
        <form onSubmit={handlesubmid}> 
            <input 
            type="text" 
            placeholder="Ingrese email" 
            value={email} 
            onChange={(e) =>setEmail(e.target.value)} />
           
            <input 
            type="password" 
            placeholder="Ingrese password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
           
            <button type="submit">Login</button>
        </form>
        </>
        )
};

export default Login;

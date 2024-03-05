import { useEffect, useState } from "react";
import {Link,useNavigate} from "react-router-dom";
import '../Styles/AdminLogin.css'
import axios from "axios";

const AdminLogin =()=>{
    
     let [uname,setuname]=useState("");
     console.log(uname);
     let [password,setpassword]=useState("");
console.log(password)
let [admin,setAdmin]=useState("");
let navigate=useNavigate();

useEffect(()=>{
axios.get('http://localhost:1008/Manager')
.then((res)=>{
   console.log(res.data)
   setAdmin(res.data)
})
.catch((err)=>{
   console.log(err);
})
},[])
     function login(e){
       let a=false;
       e.preventDefault();
       admin.map((x) =>{
         if(uname==x.email && password==x.password){
         alert("Logged in Succussfully")
         navigate('/adminhomepage')
         a=true;
         }
       } )
      if (a==false){
         alert("Not logged in succusfully")
      }

     }
     return(
        <div className="Navbar1">
        <h1>Admin page</h1>
        <form>
            <label>User Name:<input type="text" value={uname} onChange={(e) =>{setuname(e.target.value)}} placeholder="Enter your name"></input></label>
            <br></br>
            <label>Password:<input type="text" value={password} onChange={(e) =>{setpassword(e.target.value)}} placeholder="Enter Password"></input ></label>
            <br></br>
            <button onClick={login}>Log In</button>
            <p>If u dont have an Account? <Link to="/adminSignUp"> SignUp</Link></p>
        </form>

        </div>
     )
    
}
export default AdminLogin;
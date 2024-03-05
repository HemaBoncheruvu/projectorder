import '../Styles/UserLogin.css'
import { useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserLogin =() => {
   let [Name,setName]=useState("");
    let [Email,setEmial]=useState("");
    let [Phonenum,setPhonenum]=useState("");
    let [Password,setPassword]=useState("");
    let users={Name,Email,Phonenum,Password}
 let navigate=useNavigate();
    let addUser=(e)=>{
        e.preventDefault()
     axios.post('http://localhost:1008/Customers',users)
     .then((res)=>{
        console.log(res)
        alert("Registered")
        navigate('/userview')
     })
     .catch((err)=>{
        alert("Inavalid Data")
     })

     
    }
    return (
        <div className="Userlogin">
         
            <h1 >User Login</h1>
            <div className='forms'>
           <form onSubmit={addUser}>
            <label>Name     :<input type='text' value={Name}  onChange={(e)=>{setName(e.target.value)}} placeholder="Enter your name"></input></label>
            <br></br>
            <label>Email    :<input type='email' value={Email}  onChange={(e)=>{setEmial(e.target.value)}} placeholder="Enter your Email" ></input></label>
            <br></br>
            <label>Phone Number:<input type='phonenumber' value={Phonenum}     onChange={(e)=>{setPhonenum(e.target.value)}}  text="phonenumber" placeholder='Enter valid phone number'></input></label>
            <br/>
            <label>Password  :<input type='password' value={Password} onChange={(e)=>{setPassword(e.target.value)}} placeholder=""></input></label>
            <br></br>
            <button onClick={addUser} >Sudmit</button>
            
           </form>
        </div>
        </div>
    );
}
export default UserLogin;
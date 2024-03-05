import { useState } from "react";
import '../Styles/AdminSignup.css'
import axios from 'axios'
const AdminSignUp=()=>{
    let [name,setNAme]=useState("")
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")
    let [phoneNum,setPhonenum]=useState("")
    let [profile,setprofile]=useState("")
    
    let admins={name,email,password,phoneNum,profile}
    let addAdmin=(e) =>{
        e.preventDefault()
        // fetch("http://localhost:1008/Manager",{
        //   method:"POST",
        //   headers:{"content-Type":"application/json"},
        //   body:JSON.stringify(admins)  
    //})
       axios.post('http://localhost:1008/Manager',admins)
        
        .then((res)=>{
            console.log(res);
            
        })
        .catch((err)=>{
            alert("INavalid data")
        })
    }
            
    return(
        <div className="adminsignup">
            <h1>Admin SighnUp</h1>
            <div className="forms">
            <form onSubmit={addAdmin}>
                <label>AdminName:- <input type="text" value={name}  onChange={(e) =>{setNAme(e.target.value)}}  placeholder="EnterFullName" ></input></label>
                <br></br>
                <label >Email Adress <input type="email"  value={email} onChange={(e) =>{setEmail(e.target.value)}}placeholder="Enter your email Adresss"></input></label>
                <br></br>
                <label>Password <input type="password"   value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="Enter Password" ></input></label>
                <br></br>
                <label>Phone number<input value={phoneNum} onChange={(e)=>{setPhonenum(e.target.value)}} placeholder="Enter the phone number"></input></label>
                <br></br>
                <label>Set Profile<input type="phone"  value={profile} onChange={(e)=>{setprofile(e.target.value)}}     placeholder="Profile Url"></input></label>
                <br></br>
                <button >Sudmit</button>
            </form>
        </div>
        </div>
    );
}
export default AdminSignUp;
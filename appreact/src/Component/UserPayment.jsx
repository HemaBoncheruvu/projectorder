import { useState } from "react";
import axios from "axios";
import '../Styles/Userpayment.css'
const UserPayment=()=>{
    let [name,setname]=useState('');
    let[phonenum,setPhonenum]=useState('');
  let[location,setLocation]=useState('');
  let[pincode,setpincode]=useState('');
     let data={name,phonenum,location,pincode};
     
     let payment=(e)=>{
      e.preventDefault()
   axios.post('http://localhost:1008/Payment',data)
   .then((res)=>{
      console.log(res)
      alert("Payment Succussfull")
     
   })
   .catch((err)=>{
      alert("Inavalid Data")
   })

   
  }
    
    return(
        <div className="user">
             <forms onSudmit={payment}>
                <h4>Contant Deatals</h4>
              <label>
                Name:-
                <input   value={name} onChange={(e)=>{setname(e.target.value)}}  placeholder="Name" required  ></input>
     </label>
     <br/>
     <label>
        PhoneNumber:<select>
          <option>+91</option>
          <option>00</option>
          <option>78</option>
        </select>
        <input   value={phonenum}  onChange={(e)=>{setPhonenum(e.target.value)}} placeholder="phonenum" required ></input>
     </label>
       <br></br>
       <h4>Add adress</h4>
       <label>Loaction<input value={location}  onChange={(e)=>{setLocation(e.target.value)}} placeholder="location" required></input></label>
       <br/>
       <label>PinCode<input  value={pincode}     onChange={(e)=>{setpincode(e.target.value)}} placeholder="pincode" required></input></label>
       <br/>
       <button onClick={payment}>Click this to confirm</button>
             </forms>
        </div>
    )
}
export default UserPayment;
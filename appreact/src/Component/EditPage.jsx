
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const EditPage=()=>{

    let [Category,setCategory]=useState('');
    let[restaurentname,setName]=useState('');
    let[name,setDishname]=useState('');
    let[price,setPrice]=useState('');
    let[Quantity,setQuantity]=useState('');
    let[Description,setDescription]=useState('');
    let[thumbnailUl,setthumbailurl]=useState('');
    let[Rating,setRating]=useState('');

    let param =useParams()
    console.log(param.id);
    useEffect(()=>{

    
    axios.get(`http://localhost:1008/Products/${param.id}`)
    .then((response) =>{
        console.log(response.data);
        setCategory(response.data.Category)
        setName(response.data.restaurentname)
        setDishname(response.data.name)
        setPrice(response.data.price)
        setQuantity(response.data.Quantity)
        setthumbailurl(response.data.thumbnailUl)
        setRating(response.data.Rating)
        setDescription(response.data.Description)

    })
    .catch((error)=>{
        console.log(error)
    })
},[])

let data={name,restaurentname,price,Rating,Quantity,thumbnailUl,Description}
let editItem=(e)=>{
e.preventDefault();
axios.put(`http://localhost:1008/Products/${param.id}`,data)
.then((responce)=>{
alert("data updated successfully")
}
)
.catch((error)=>{
    alert("error in updating")
})}
    return(
<div className="additem">
   <form onSubmit={editItem}>
    <label> Category:<select value={Category} onChange={(e)=>setCategory(e.target.value)}>
        <option>Icecreme</option>
        <option>Panner</option>
        <option>Milk Shake</option>
        <option>Grape Guice</option>
        <option>Lemon Guice</option>
        <option>Papaya</option>
        </select>
        </label>
<label>
    Resturant Name:-<input value={restaurentname} onChange={(e)=>setName(e.target.value)} ></input>
</label>
<label>
    Dish Name:-<input value={name} onChange={(e)=>setDishname(e.target.value)}></input>
</label>
<label>
    Price:-<input value={price} onChange={(e)=>setPrice(e.target.value)}></input>
</label>
<label>
    Quantity:-<input value={Quantity} onChange={(e)=>setQuantity(e.target.value)}></input> 
</label>
<label>
    Description:-<input value={Description} onChange={(e)=>setDescription(e.target.value)}></input>

</label>
<label>
    Thumbnailurl:-<input value={thumbnailUl} onChange={(e)=>setthumbailurl(e.target.value)}></input>
</label>
<label>
    Rating:-<input value={Rating} onChange={(e)=>setRating(e.target.value)}></input>
    <br></br>
    <button onClick={editItem}>Edit product</button>
</label>

   </form>
</div>
);
}
export default EditPage;
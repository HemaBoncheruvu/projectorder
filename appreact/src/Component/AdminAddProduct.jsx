import { useState } from 'react';
import '../Styles/AddProduct.css'
import axios from 'axios';
const AdminAddProduct=()=>{
    let [Category,setCategory]=useState();
    console.log(Category)
    let[restaurentname,setRestaurentnme]=useState();
    let[name,setname]=useState();
    let[price,setprice]=useState();
    let[Rating,setRating]=useState();
    let[Quantity,setQuantity]=useState();
    let[Description,setDescription]=useState();
    let[thumbnailUl,setthumbailurl]=useState();
    let data={Category,restaurentname,name,price,Rating,Quantity,Description,thumbnailUl}
    let addDish=(e)=>{
        e.preventDefault();
        axios.post('http://localhost:1008/Products',data)
        .then((res)=>{
            console.log(res);
            alert("Dish added Successfully")
        
        })
        .catch((err)=>{
            console.log(err);
            alert("Error while adding the Dish")
        })
    }
return(
    <div className="additem">
        <form onSubmit={addDish}>
            <label>
                Food:<select value={Category} onChange={(e)=>{setCategory(e.target.value)}}>
                    <option>Icecream</option>
                    <option>Tiffins</option>
                    <option>Biriyani</option>
                    <option>Veg Food</option>
                    <option>Rice Items</option>
                    <option>Grape Juice</option>
                    <option>Juices</option>
                    <option>Fruits</option>
                </select>
                <label>
                Shopping:<select value={Category} onChange={(e)=>{setCategory(e.target.value)}}>
                    <option>Krthas</option>
                    <option>Leggins</option>
                    <option>Jeans</option>
                    <option>Tea Shirts</option>
                    <option>Shoes</option>
                    <option>Watches</option>
                    <option>formal Dreses</option>
                </select>
                </label>
            </label>
            <br></br>
            <label>
                Restaurent Name:-<input type="text" value={restaurentname} onChange={(e)=>{setRestaurentnme(e.target.value)} } placeholder="Enter the restaurent name" />
            </label>
            <br></br>
            <label>
                Dish Name:
                <input value={name} onChange={(e)=>setname(e.target.value)} type="text" placeholder="Ente the Dish name"/>
            </label>
            <br />
            <label>
                Price:-<input value={price} onChange={(e)=>setprice(e.target.value)} type="text" placeholder="Enter the dish"/>
            </label>
            <br></br>
            <label>Quantity:-<input value={Quantity} onChange={(e)=>setQuantity(e.target.value)} type="number"/></label>
            <br></br>
            <label>Desc<textarea value={Description} onChange={(e)=>setDescription(e.target.value)} cols="30" placeholder="Enter the special Reciepi" rows="2"/></label>
           
            <label>
            thumbnailUl:<input value={thumbnailUl} onChange={(e)=>setthumbailurl(e.target.value)} type="text" placeholder="Enter the image url "></input>
            </label>
           
            <label>
                Rating:-<input value={Rating} onChange={(e)=>setRating(e.target.value)} type="number"></input>
            </label>
            <br></br>
            <button onClick={addDish}>Order It now</button>
           
        </form>
       

    </div>
)
}
export default AdminAddProduct;
import {Routes, Route } from "react-router-dom";
import AdminNavabar from "./AdminNavabar";
import AdminView from "./AdminView";
import AdminAddProduct from "./AdminAddProduct";
import EditPage from "./EditPage";

const Adminhomepage=()=>{
    return(
        <div>
            <AdminNavabar></AdminNavabar>
            
            <Routes>
         <Route path='/adminviewpage' element={<AdminView/>}/>
         <Route path='/adminaddproduct' element={<AdminAddProduct/>}/>
         <Route path='/editpage/:id' element={<EditPage/>}/>
         </Routes>
           
        </div>
    );
}
export default Adminhomepage;
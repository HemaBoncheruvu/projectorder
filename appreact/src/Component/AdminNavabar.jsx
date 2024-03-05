import { Link } from "react-router-dom";
import '../Styles/AdminNavbar.css'
const AdminNavabar=()=>{
    return(
<div className="adminnavbar">
    <div className="logo">
    <h1>Food<span>Cart</span></h1>
    </div>
    <div className="options">
        <Link to='/adminhomepage/adminviewpage'>View</Link>
        <Link to='/adminhomepage/adminaddproduct/'>AddProduct</Link>
       
    </div>

</div>
    );
}
export default AdminNavabar;

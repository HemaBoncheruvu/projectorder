import {Link} from "react-router-dom";
import '../Styles/LandingPage.css'

const LoadingPage=()=>{
   return (
    <div className="LandingPage">
        <div className="Subclass">
      
        
<Link to="/Admin">
    <img id="image1" src="https://clipground.com/images/admin-png-17.png"/>
    <h1>Admin Page</h1>
   
    
</Link>
<Link to="/User">
<img id="image2" src="https://up.yimg.com/ib/th?id=OIP.A5rZGnnmCAixyCKce89DzwHaHa&%3Bpid=Api&rs=1&c=1&qlt=95&w=120&h=120"/>
<h1>User Page</h1>
</Link>
    </div>
    </div>
   )
}
export default LoadingPage;
import axios from 'axios';
//mport { Button } from 'bootstrap';
//import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EditNoteIcon from '@mui/icons-material/EditNote';
import DeleteIcon from '@mui/icons-material/Delete';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Styles/AdminView.css'
import { Link } from 'react-router-dom';
import StarIcon from '@mui/icons-material/Star';
import { useNavigate } from 'react-router-dom';
const AdminView =()=>{
  let[data,setdata]=useState([])
  let [force,setForce]=useState(true);
  useEffect(()=>{
    axios.get('http://localhost:1008/Products')
    .then((res)=>{
      console.log(res)
      setdata(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })
  },[force])
  let removeDish=(id,name)=>{
       axios.delete(`http://localhost:1008/Products/${id}`)
       .then((res)=>{
           alert(name+"Removed Successfully")
           setForce(!force)
       })
       .catch((err)=>{
        alert("Data not found")
       })
  }
  let navigate=useNavigate()
  function editproduct(id){
    navigate(`/adminhomepage/editpage/${id}`)
  }
    return(
        <div>
            
            <p>This is your view page</p>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
                                         {/* this is the nav page */}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
   <button className='btn btn primary'> Sudmit</button>
<div className="adminviewpage">
  {
    data.map((x)=>{
      return(
       
        <div class="displayproduct">
          
         
          <img src={x.thumbnailUl} width="295px" height="150px"></img>
          <p><b>{x.name}</b></p>
          <p>{x.restaurentname}</p>
         
         <div id='icon'>
         <b>₹{x.price}</b>
         <EditNoteIcon     onClick={()=>{editproduct(x.id)}}></EditNoteIcon>
         <DeleteIcon  onClick={()=>{removeDish(x.id,x.name)}}></DeleteIcon>
         </div>
         <div className="restaurent">
         <b>< StarIcon id="Star" /> {x.Rating}</b>
       
         </div>
         </div>
         
       
       
      )
    })
  }
</div>
<div id="btn">
        <Link to="/userpayment">     <button     className="b1">Proceed To Pay</button>
        </Link> 
              
               </div>

    </div>

    );
}
export default  AdminView;

import './App.css';
import LoadingPage from "./Component/LoadingPage.jsx";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import UserLogin from './Component/UserLogin.jsx';
import AdminLogin from './Component/AdminLogin.jsx';
import AdminSignUp from './Component/AdminSignUp.jsx';
import Adminhomepage from './Component/Adminhomepage.jsx';
import Error from './Component/ErrorAPge.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserProdutView from './Component/UserProductView.jsx';
import UserPayment from './Component/UserPayment.jsx';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     
     <Routes>
      <Route path="/" element={<LoadingPage/>}/>
      <Route path="/*" element={<Error/>}/>
      <Route path="/Admin" element={<AdminLogin/>}/>
      <Route path="/User" element={<UserLogin/>}/>
      <Route path="/adminSignUp" element={<AdminSignUp/>}></Route>
      <Route path='/adminhomepage/*' element={<Adminhomepage/>}></Route>
      <Route path='/userview' element={<UserProdutView/>}/>
     <Route path='/userpayment' element={<UserPayment/>}/>
            
           
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;

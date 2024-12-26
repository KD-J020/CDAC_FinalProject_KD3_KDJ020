
import './App.css';

import Home from './Screens/Home';

import Login from './Screens/Login';
import Ticket from './Screens/Ticket';
import Customer from './Screens/Customer';
import Product from './Screens/Product';
import { Routes, Route } from 'react-router-dom';
import Feedback from './Screens/Feedback';
import AddProduct from './Components/AddProduct';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="login" element={<Login />} />

        <Route path="home" element={<Home />}>
          <Route path='product' element={<Product/>}/>
          <Route path='customer' element={<Customer/>}/>
          <Route path='ticket' element={<Ticket/>}/>
          <Route path='feddback' element={<Feedback/>}/>
          <Route path='add-product' element={<AddProduct/>}/>
        </Route>
      </Routes>


      


    </div>
  );
}

export default App;

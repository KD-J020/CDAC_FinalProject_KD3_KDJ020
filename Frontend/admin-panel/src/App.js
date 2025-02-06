
import './App.css';
import Home from './Screens/Home';
import Login from './Screens/Login';
import Ticket from './Screens/Ticket';
import Customer from './Screens/Customer';
import Product from './Screens/Product';
import { Routes, Route } from 'react-router-dom';
import Feedback from './Screens/Feedback';
import AddProduct from './Components/AddProduct';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Executive from './Screens/Executive';
import AddCategory from './Components/AddCategory';
import EditCategoty from './Components/EditCategoty';
import Categories from './Screens/Categories';
import AddExecutive from './Components/AddExecutive';
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
          <Route path='executive' element={<Executive/>}/>
          <Route path='categories' element={<Categories/>}/>
          <Route path='add-category' element={<AddCategory/>}/>
          <Route path='edit-category/:id' element={<EditCategoty/>}/>
          <Route path='add-executive' element={<AddExecutive/>}/>
        </Route>
      </Routes>

<ToastContainer/>

      


    </div>
  );
}

export default App;

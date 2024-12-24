import logo from './logo.svg';
import './App.css';
import Home from './Screens/Home';
import Login from './Screens/Login';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Home />}>
           //nested Routing

        </Route>
      </Routes>



    </div>
  );
}

export default App;

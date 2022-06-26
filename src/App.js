import Navbar from './components/Navbar/Navbar' 
import { Routes, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Home from './components/Home/Home'
import Action from './Action/Action'
function App() {

  

  return (
    <div className="App">
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>} />
       <Route path='home' element={<Home/>} />
       <Route path='login' element={<Login/>} />
       <Route path='register' element={<Register/>} />
     </Routes>
    </div>
  );
}

export default App;

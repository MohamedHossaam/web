import logo from './logo.svg';
import { BrowserRouter as  Router, Routes, Route,link} from "react-router-dom";

import './App.css';
import Register from './component/Register';
import Home from './component/Home';
import Profile from './component/Profile';
import Login from './component/Login';
function App() {
  return (
    <div className="App">
    <Router>
       <Routes>
        <Route path="/" elemnet={<Login/>}></Route>
        <Route path="/register" elemnet={<Register/>}></Route>
        <Route path="/home" elemnet={<Home/>}></Route>
        <Route path="/profile" elemnet={<Profile/>}></Route>
       </Routes>
    </Router>
    </div>
  );
}

export default App;

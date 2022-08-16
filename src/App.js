
import './App.css';
import Home from './pages/home/Home';
import {
  Route,
  Routes,
  BrowserRouter,Navigate
} from "react-router-dom";
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';
import "./style/dark.scss"
import { productInputs, userInputs } from './formSource';
import { useContext, useState } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import { AuthContext } from './context/AuthContext';
import { hotelColumns, userColumns } from './datatablesource';

function App() {

  const {darkMode} = useContext(DarkModeContext)
  const {currentUser} = useContext(AuthContext)

  const RequiredAuth =({children})=>{

    return currentUser ? (children) : <Navigate to="/login"/>

  }
  console.log(currentUser)

  
  return ( 
    <div className={darkMode ? "App dark": "app"}>
  
    <BrowserRouter>
      <Routes>
        <Route path='/'>
        <Route path='login' element={<Login/>} />
        <Route index element={<RequiredAuth><Home/></RequiredAuth>} />
        

        <Route path="users">
        <Route index element={<RequiredAuth><List  columns={userColumns}/></RequiredAuth>} />
        <Route path=':userId' element={<Single/>} />
        <Route path="new" element={<RequiredAuth><New inputs = {userInputs}  title="Add New User"/></RequiredAuth> } />
        </Route>

        <Route path="hotels">
        <Route index element={<RequiredAuth><List columns={userColumns}/></RequiredAuth>} />
        <Route path=':productId' element={<RequiredAuth><Single/></RequiredAuth>} />
        <Route path="new" element={<RequiredAuth><New inputs = {productInputs} title="Add New Product"/></RequiredAuth>} />
        </Route>

        </Route>
      </Routes>
    </BrowserRouter>
     
    </div>
  );
}

export default App;

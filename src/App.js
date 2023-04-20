import './App.css';
import Home from './components/home/home';
import SobreMi from './components/sobreMi/sobreMi'
import Contacto from './components/contacto/contacto';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRouote';
import Solicitudes from './components/Solicitudes/Solicitudes';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/inicioSesion/inicioSesion';
import { useState } from 'react'





const App = () =>{

  const [isAllowed, setIsAllowed] = useState()
  const [user,setUser] = useState()

  const functionToGetchildData = (validateRouteLogin) => {
    if (validateRouteLogin === ''){
      setIsAllowed(true)
    } else {
      setIsAllowed(false)
    }
    console.log('isAllowed',isAllowed)
  }

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}> </Route>
        <Route path='/sobreMi' element={<SobreMi/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>

        <Route path='/inicioSesion' element={<Login childToParentData={functionToGetchildData}/>}></Route>

        <Route element={<ProtectedRoute isAllowed={isAllowed}/>}>
          <Route path='/solicitudes' element={<Solicitudes/>}></Route>
        </Route>

        
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

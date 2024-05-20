import { useState } from 'react'
import { Route, Routes, BrowserRouter  } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from './page/Layout';
import Home from './page/Home';
import Updatepage from './page/Updatepage';
import AddPage from './page/AddPage';

function App() {

  return (
    <>
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/add" element={<AddPage/>} />

        <Route path="/update/:id" element={<Updatepage/>}/>
        </Route>
     </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App

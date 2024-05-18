import { useState } from 'react'
import { Route, Routes, BrowserRouter  } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Layout from './page/Layout';
import Home from './page/Home';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
     <Routes>
      <Route to="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route/>
      </Route>
     </Routes>
      </BrowserRouter>

      
    </>
  )
}

export default App

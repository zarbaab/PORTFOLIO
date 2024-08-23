import React from 'react'
import Navbar from "./components/navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from './components/Portfolio';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Toaster } from "react-hot-toast";

function App() {
  return (
<>
<div>
<Navbar/>
<Home/>
<About/>
<PortFolio/>
<Experience/>
<Contact/>
<Footer/>

</div>
<Toaster/>

</>  
);
}

export default App
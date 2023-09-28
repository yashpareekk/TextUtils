
import { useState } from 'react';
import './App.css';
import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';
// import Alert from './component/Alert';
import React from "react";
import {
   BrowserRouter as Router,
   Routes,
   Route,
   // Link
 } from "react-router-dom";



function App() {
  const [Mode, setMode] = useState('light')
  // const [Alert, setAlert] = useState(null)
  // const showAlert=(message,type)=>{
  //   setAlert({
  //     msg: message,
  //     type : type
  //   })
  //}
  const toggleMode=()=>{
    if (Mode==='light') {
      setMode('dark')
      document.body.style.backgroundColor="#2C3E50 "
      document.title='TextUtils-DarkMode'
      // showAlert("Dark mode is Enabled","success")
      
    } else {
      setMode('light')
      document.body.style.backgroundColor="white"
      document.title='TextUtils-LightMode'
      // showAlert("Light mode is Enabled","success")
    }
  }
  return (
  <>
    <Router>
    
      <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="/" element={<div className='container my-3'>
            {<TextForm  heading="Enter the Text to Analyze below" Mode={Mode}/>}
            </div>}/>
            <Route exact path='/about' element={<About Mode={Mode} />} />
        </Routes>
    </Router>
    
  </>
  );
}

export default App;

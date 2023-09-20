import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React,{useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";

//we can import any css and other files here

function App() {
  const[mode,setMode]=useState('light')
  const[tag,setTag]=useState('Dark mode')
  const[tag1,setTag1]=useState('Dark Red Mode')
  const[alert,setAlert]= useState(null)

  const showAlert = (message, type)=>{
   setAlert({
    msg : message,
    type : type
   })
   setTimeout(()=>{
    setAlert(null);
   },1500)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#44465c'
      setTag('Light Mode')
      showAlert(' Dark Mode has been enabled','success ')
    }
   else{
    setMode('light')
    document.body.style.backgroundColor ='white'
    setTag('Dark Mode')
    showAlert(' Dark Mode has been Disabled','success ')
    }
  }
  const redDarkMode = ()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor ='#382222'
      setTag1('Light Mode')
      showAlert(' Dark Red Mode has been enabled','danger ')
    }
   else{
    setMode('light')
    document.body.style.backgroundColor ='white'
    setTag1('Dark Red Mode')
    showAlert(' Dark Red Mode has been Disabled','danger ')
    }
  }
  return (
  //  use HTML as it is
  <> 
  {/* <Router> */}
  <Navbar title = "TextUtiles" about = "About" mode ={mode} togglemode={toggleMode} redDarkMode ={redDarkMode} tag = {tag} tag1= {tag1}/>  {/*type 1*/}
  <Alert alert = {alert}/>
  {/* if we define string and use any type of like int then throws error */}
  {/* <Navbar />  type 2 */}
  <div className="container my-4">
  <TextForm showAlert ={showAlert} heading = "Enter your text here..." mode={mode} />
  {/* <About/> */}
  {/* <Routes>
          <Route path="/about" element={  <About />}/>
          <Route path="/" element={<TextForm showAlert ={showAlert} heading = "Enter your text here..." mode={mode} />} />
  </Routes> */}
    
  </div>
  {/* </Router> */}
  </>
  );
  
}

export default App;

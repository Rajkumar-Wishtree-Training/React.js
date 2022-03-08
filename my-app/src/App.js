import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextBox from './components/TextBox';
import React ,  {useState} from "react";
import Alert from './components/Alert';
import {BrowserRouter, Routes , Route } from 'react-router-dom';
function App() {
    const [mode , setMode] = useState('light');
    const btnStyle = {
      color : 'white',
      backgroundColor :  'grey',
      border : '2px solid grey'  
    }
    //  const [bmode , setBMode] = useState('light');
     const [alert , setAlert] = useState(null);
     const showAlert = (message , type) =>{
       setAlert({
         msg : message ,
         type : type
       })
       setTimeout(() => {
         setAlert(null)
       }, 1800);
     }
     const removeClasses = () =>{
       document.body.classList.remove('bg-primary')
       document.body.classList.remove('bg-warning')
       document.body.classList.remove('bg-success')
       document.body.classList.remove('bg-danger')
       document.body.classList.remove('bg-light')
       document.body.classList.remove('bg-dark')
     }
     const togleMode = (cls) =>{
       removeClasses();
       document.body.classList.add(cls)
       setMode(cls)
       showAlert(`${cls} mode Enabled` , 'success')
      // if(cls === 'light'){
      //   // setMode('dark')
      //   showAlert('Dark Mode Enabled','success')
      //  document.body.style.backgroundColor = 'black';
      //  document.title = 'TextUtils Dark Mode';
      // }
      // else{
      //   // setMode('light')
      //   showAlert('Light Mode Enabled','success')
      //   document.body.style.backgroundColor = 'white';
      //   document.title = 'TextUtils light Mode'
      // } 
     }
    
  return (
    <>
        <BrowserRouter>
        <Navbar title="Rajkumar"   togleMode={togleMode}/>
        <Alert alert={alert} />
        <Routes>
       
        <Route path='/' element={ <div className='container'> <TextBox heading="Enter your Text Below" mode={mode}  showAlert={showAlert} btnStyle={btnStyle}/> </div>}/> 
       
        {/* </Route> */}
       
        <Route path='/about' element={ <About mode={mode} btnStyle={btnStyle} />}/>
        </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

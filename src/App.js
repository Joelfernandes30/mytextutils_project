import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Contact from './components/Contact';
import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Cards from './components/Cards';


function App() {
  const [mode, setMode] = useState('light');

  const [alert , setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type:type
    })
  }
  
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "primary");
    }
  }

  return (
  
    <Router basename="/mytextutils_project">
      <Navbar title="Text Utils" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/> 
      
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<TextForm title="My text area"/>} />
        <Route path="/card" element ={<Cards />} />
      </Routes>
          
        
      </Router>
  );
}

export default App;

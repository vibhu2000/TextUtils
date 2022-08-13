import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null);

  const removeBodyClass = () =>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-danger')

  }

  const toggle = () => {
    removeBodyClass()
    // console.log(cls)
    // document.body.classList.add('bg-'+cls)
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#042743";
      // document.body.style.color="white"
      showAlert("Dark Mode is Enabled", "success");
      // document.title = "TextUtiles - Dark Mode";
      // setInterval(() => {
      //   document.title ='TextUtiles is Amazing'
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtiles Now'
      // }, 1500);
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      // document.body.style.color="black"
      showAlert("Light Mode is Enabled", "success")
      // document.title = "TextUtiles - Light Mode"
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      
      <Router>

        {/* <Navbar></Navbar> */}
        <Navbar title="TextUtiles" mode={mode} toggleMode={toggle} aboutText="About Us" />        {/* passing props */}
        <Alert alert={alert} />
        <div className="container my-3">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>}/>
          <Route exact path="/" element={<TextForm heading="Try TextUtils - Word Counter, Character Counter, Remove Extra Spaces" mode={mode} showAlert={showAlert} />} />
        </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

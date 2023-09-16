// import logo from './logo.svg';
import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
// import About from './Components/About';
import Alert from './Components/Alert';
// import {
//   BrowserRouter,
//   Routes as Switch,
//   Route
// } from "react-router-dom";


function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null)
    }, 1300);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      showAlert("Dark mode Enabled!", "success");
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode Enabled!", "success");
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}
      <div className={`text-${mode === "light" ? "dark" : "light"}`}>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
        <Form heading="Write Your Text!" mode={mode} />
          {/* <Switch>
            <Route exact path="/About" element={<About mode={mode} />} />
            <Route exact path="/" element={<Form heading="Write Your Text!" mode={mode} />}/>
          </Switch> */}
        </div>
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App; 
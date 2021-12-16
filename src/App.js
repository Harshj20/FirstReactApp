
import './App.css';
import React, {useState} from 'react';
import Navbar from './components/Navbar.js';
import TextArea from './components/TextArea.js';
import Alert from './components/Alert.js';
import About from './components/About.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggle=(event)=>{

    if(mode === 'light')
    {
    setMode('dark');
    document.body.style.background = 'rgb(43 47 51)';
    // document.getElementById("aboutUs").style.color = 'white';
    showAlert("Dark mode enabled", "success");
    }
    else
    {
    setMode('light');
    document.body.style.background = '#fff';
    // document.getElementById("aboutUs").style.color = 'black';
    showAlert("Dark mode disabled", "success");
    }
  }

  const showAlert=(message, type)=>{
    setAlert({
      msg: message,
      type:type
    });
    setTimeout(() => {
        setAlert(null)}, 1000
      )
}

  return (
    <>
    <Router>
    <Navbar mode={mode} title="TextUtils" tog={toggle}/>
      <Alert alert={alert}/>
      <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
            </Route>
          <Route exact path="/">
          <TextArea heading="Enter your Text" mode={mode} />
          </Route>
        </Switch>
        
        </Router>
        
    </>
  );
}

export default App;

import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Beranda from './components/Beranda';
import Pendaftaran from './components/Pendaftaran';
import Login from './components/Login';
import Vote from './components/Vote';
import CustomNavbar from './components/CustomNavbar';

class App extends Component{
  render() {
    return (
     <Router>
       <div className="App-header">
         {/* <header className="App-header"> */}
         <CustomNavbar/>
         <Route exact path="/" component={Beranda} />
         <Route path="/pendaftaran" component={Pendaftaran} />
         <Route path="/login" component={Login} />
         <Route path="/vote" component={Vote} />
         {/* </header> */}
       </div>
     </Router>
    );
  }

}

export default App;

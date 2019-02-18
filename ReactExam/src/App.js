import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Mainpage from './Components/Mainpage/Mainpage';
import Footer from './Components/Footer/Footer';
import Catalog from './Components/Catalog/NewCatalog';
import About from './Components/About/About';
import { Route } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div>

        <Navbar/>
        <Route exact path='' component={Mainpage}/>
        <Route exact path='/mainpage' component={Mainpage}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/catalog' component={Catalog}/>
        <Footer />

      </div>

      
    );
  }
}

export default App;

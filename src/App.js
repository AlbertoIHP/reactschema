//React components
import React, { Component } from 'react';

//Logo
import logo from './logo.svg';

//CSS
import './App.css';


//Routes
import Routes from './Routes/routes'


//Component for navigate throw routes
import { browserHistory } from 'react-router';

class App extends Component 
{

  constructor( props )
  {
    super( props )
    this.state = 
    {
      text: 'Presiona el boton para dirigirte al componente Example.'
    }

  }


  goExample() 
  {
    browserHistory.push('/example');
  }





  render() 
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          
         { this.state.text }   

         <button className="main-btn " onClick={ () => this.goExample() }>
           <i className="fa fa-arrow-rigth"></i>
           Ir example
         </button>

        </p>

        <p>
          <Routes />
        </p>

      </div>
    );
  }
}

export default App;

import React,{ Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component{
  constructor(){
    super();
    this.state={
      string:'Hai...',
    }
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.string}
          </p>
          <button class="btn" onClick={()=>this.setState({string:'Hello'})}> Click Here</button>
        </header>
      </div>
    );
  }
}

export default App;

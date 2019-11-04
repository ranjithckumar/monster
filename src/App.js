import React from "react";
import "./App.css";

class App extends React.Component{
  constructor(){
    super();
    this.state={
      monster:[]
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monster:users}))
  }
  render(){
    return (
      <div className="App">
        {
          this.state.monster.map(monster=> <h3 key={monster.id}>{monster.name}</h3>)
        }
      </div>
    );
  }
}

export default App;

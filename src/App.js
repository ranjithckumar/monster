import React from "react";
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import "./App.css";

class App extends React.Component{
  constructor(){
    super();
    // state gets changed due to user actions
    this.state={
      monster:[],
      searchField:''
    };
  }
  // here we using fetch api to get information about monster using below mentioned ulr.
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>response.json())
    .then(users=>this.setState({monster:users}))
  }
  render(){
    // by applying filter, we checking  wether the search value(searchField) is present in state(monster) 
    const {monster,searchField}=this.state;
    const filteredMonster= monster.filter(monster=>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        {/* Using search value here we updating searchField state  and passing props(placeholder,handleChange) 
        to SeachBox component*/}
        <SearchBox
           placeholder="Search monster"
           handleChange={e=> this.setState({searchField:e.target.value})}
        />
        {/* here we calli CardList component by passing state(monster) as props */}
        <CardList monster={filteredMonster}/>
      </div>
    );
  }
}

export default App;

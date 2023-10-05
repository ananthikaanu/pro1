import React from 'react'
import './App.css';
// import "./components/NavBar/NavBar"
// import"./components/Banner/Banner"
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPosts from "./components/RowPosts/RowPosts"
import {action,orginals} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPosts  url ={orginals}title='Netflix Orginals'/>
      <RowPosts url ={action}title = 'Action' isSmall/>
      <RowPosts url ={action}title = 'Action' isSmall/>
    </div>
  );
}

export default App;

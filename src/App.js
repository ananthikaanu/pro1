import React from 'react'
import './App.css';
// import "./components/NavBar/NavBar"
// import"./components/Banner/Banner"
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPosts from "./components/RowPosts/RowPosts"
import {action,orginals,ComedyMovies,HorrorMovies} from './urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPosts  url ={orginals}title='Netflix Orginals'/>
      <RowPosts url ={action}title = 'Action' isSmall/>
      <RowPosts url ={ComedyMovies}title = 'Comedy Movies' isSmall/>
      <RowPosts url ={HorrorMovies}title = 'Horror Movies' isSmall/>
      {/* <RowPosts url ={RomanceMovies}title = 'Romance Movies' isSmall/> */}
    </div>
  );
}

export default App;

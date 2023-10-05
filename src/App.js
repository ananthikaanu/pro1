import React from 'react'
import './App.css';
// import "./components/NavBar/NavBar"
// import"./components/Banner/Banner"
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import RowPosts from "./components/RowPosts/RowPosts"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPosts/>
      {/* <DragHandleIcon/> */}
    </div>
  );
}

export default App;

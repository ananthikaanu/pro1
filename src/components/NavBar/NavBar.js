import React from 'react'
import "./NavBar.css"
function NavBar() {
  return (
  <div>
    <div className='navbar'>
       <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo"/>
       <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"  alt="netflix-avatar"/>
    </div>
    <div className='lists'>
      <h2>Home</h2>
      <h2>TV Shows</h2>
      <h2>Movies</h2>
      <h2>New & Popular</h2>
      <h2>My List</h2>
      <h2>Browse by Languages</h2>
    </div>
  </div>
  )
}

export default NavBar
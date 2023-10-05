import React from 'react'
import "./NavBar.css"
import MenuIcon from '@mui/icons-material/Menu';
function NavBar() {
  return (
    <div className='navbar'>
      <button className='buttonn'>
      <MenuIcon />
      </button>
       <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-logo"/>
       <img className="avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"  alt="netflix-avatar"/>
      {/* <DragHandleIcon /> */}
    </div>
  )
}

export default NavBar
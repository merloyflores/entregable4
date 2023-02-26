import React from 'react'
import "./styles/Navbar.css"

const Navbar = ({handleClickShowModal}) => {

  return (
    <nav className='navbar'>
        <h1 className='navbar__title'>USERS</h1>
        <button className='navbar__btn' onClick={handleClickShowModal} ><i className='bx bx-plus'> Create new user</i></button>
    </nav>
  )
}

export default Navbar
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ user, loggedIn, logoutUser }) => {

  const navigate = useNavigate()

  const handleLogout = () => {
    logoutUser();
    navigate("/")
  }

  const loggedInLinks = () => <>
    <li>{ user.username }</li>
    <li><Link onClick={ handleLogout }>Logout</Link></li>
  </>

  const loggedOutLinks = () => <>
    <li><Link to="/login">Login</Link></li>
    <li><Link to="/signup">Signup</Link></li>
  </>

  return (
    <ul>
      <li><Link to="/">Home</Link></li>
      { loggedIn ? loggedInLinks() : loggedOutLinks() }
    </ul>
  )
}

export default Navbar
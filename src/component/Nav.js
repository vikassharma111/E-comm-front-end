import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Nav() {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/Sign up');
  }
  return (
    <div>
      <img 
      alt='logo'
      className='logo'
       src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYF8e4UeoLzZccvC2N3hfOzO4pne-4uVWmUg&s'></img>
      {auth ? <ul className=" nav-ul">
      <li><Link to="/">Products</Link></li>
      <li><Link to="/add">Add Products</Link></li>
      <li><Link to="/update">Update Products</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li> <Link onClick={logout} to="/Sign up">Logout({JSON.parse(auth).name}) </Link></li>
    </ul>
      :
      <ul className=" nav-ul nav-right">
        <li> <Link to="/Sign up">Sign up</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    }</div>
  );
}

export default Nav;


import React from 'react';
import logo from '../logo/logo.png';
import { NavLink } from 'react-router-dom';
import { BsSearch } from "react-icons/bs";


import '../Style/header.scss';

const Header = () => {
  return (
    <nav className='header'>
            <img src={logo} alt="logo" />

        <div className="navber__sec">
            <NavLink to="/tvshows">TV Shows</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/recent-movies">Recent</NavLink>
            <NavLink to="/my-list">My List</NavLink>
        </div>
        <div className='search'>
        <BsSearch className="search__icon" />
        </div>
        
    </nav>
  )
}

export default Header
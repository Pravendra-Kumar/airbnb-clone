import React from 'react'
import "./header.css"
import logo from "../../assets/logo/long-logo.png";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';

const Header = () => {
  return (
    <div className='navbar'>

    <img src={logo} alt="logo" className='navbar-logo' />
    <div className='search-bar'>
        <div className='search-bar-text'>Anywhere</div>
        <div className='search-bar-text'>Anyweak</div>
        <div className='search-bar-text2'>Addguests</div>
        <div className="search-icon-div">
              <SearchRoundedIcon className='search-icon' />
        </div>
        
    </div>
    <div className='profile-container'>
        <div className='airbnb-your-home'>Airbnb your home</div>
        <div className='globe-div'>
             <LanguageRoundedIcon className='globe-icon' />
        </div>
        <div className='profile-div'>
            
        </div>
    
    </div>
    </div>
  )
}

export default Header
import React from 'react'
import './Header.css';
import logo from "../../assets/logo/long-logo.png";
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import LanguageRoundedIcon from '@mui/icons-material/LanguageRounded';
import BasicMenu from './ProfileMenu';
import BottomNav from './BottomNav';



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
            <BasicMenu/>
        </div>
       
    </div>
    
    <BottomNav/>
    </div>
  )
}

export default Header;
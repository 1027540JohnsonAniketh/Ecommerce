import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import {auth} from './firebase';

function Header() {
    const [{basket, user},dispatch]   = useStateValue();

    const handleAuthenticaton = () => {
        if (user) {
          auth.signOut();
        }
      }

    return (
        <div className='header'>
            <Link to = '/'>
                <img  className = "header-logo"
                src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"/>
            </Link> 
            
            <div className='header-search'> 
                <input className='header-search-input' />
                <SearchIcon 
                    className = 'header-search-icon'/>
            </div>

            <div className='header-nav'>
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthenticaton} className='header-option'>
                        <span className = "header-option-line-one">Hello {!user ? 'Guest' : user.email}</span>
                        <span className = "header-option-line-two">{user ? 'Sign Out' : 'Sign In'}</span>
                    </div>
                </Link>    
                
                <Link to='/orders'>
                    <div className='header-option'>
                        <span className = "header-option-line-one">Returns</span>
                        <span className = "header-option-line-two">& Orders</span>
                    </div>
                </Link>
                
                <div className='header-option'>
                    <span className = "header-option-line-one">Your</span>
                    <span className = "header-option-line-two">Prime</span>
                </div>
            </div>

            <Link to = '/checkout'>            
                <div className = "header-option-basket">
                    <ShoppingBasketIcon/>
                    <span className = "option-line-two header-basket-count">
                        {basket?.length}
                    </span>
                </div>
            </Link>
        </div>   
    )
}

export default Header

import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

import './Header.css';
// import logo from "../../public/"
const Header = () => {
    return (
        <header className="header">
            <img className="header__logo" src="img/amazon_PNG11.png" alt="Logo" />

            <div className="header___search">
                <input className="header__searchInput" type="text" />
                <IconButton className="header__searchBtn">
                    <SearchIcon className="header__searchIcon" />
                </IconButton>
            </div>

            <nav className="header__nav">
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Hello Guest
                    </span>
                    <span className="header__optionLineTwo">
                        Sign In
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Return
                    </span>
                    <span className="header__optionLineTwo">
                        &  Orders
                    </span>
                </div>
                <div className="header__option">
                    <span className="header__optionLineOne">
                        Your
                    </span>
                    <span className="header__optionLineTwo">
                        Prime
                    </span>
                </div>
                <div className="header__optionBasket">
                    <ShoppingBasketIcon className="header__optionBasketIcon" />
                    <span className="header__optionLineTwo header__basketCount">
                        0
                    </span>
                </div>
            </nav>
        </header>
    );
}

export default Header;


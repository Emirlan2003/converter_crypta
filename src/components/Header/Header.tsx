import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='container'>
            <img src="https://www.cryptocompare.com//media/37746251/btc.png" alt="" />
            <h1 className='btc'>
                BITCOIN
            </h1>
        </div>
    );
};

export default Header;
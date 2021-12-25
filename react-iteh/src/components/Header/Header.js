import React from 'react';
import './Header.css';

export default function Header(props){
    return <div className='header'>
        <p className='heading'>LapShop</p>
        <div className='nav-item'>
            <a href='#'> Products </a>
        </div>
        <div className='nav-item'>
            <a href='#'> Shopping Cart </a>
        </div>
    </div>
}
import React from 'react';
import TopHeader from './HeaderComponents/TopHeader';
import SecondHeader from './HeaderComponents/SecondHeader';
import Navbar from './HeaderComponents/Navbar';

const Header = () => {
    return (
        <div>
            <TopHeader></TopHeader>
            <SecondHeader></SecondHeader>
            <Navbar></Navbar>
        </div>
    );
};

export default Header;
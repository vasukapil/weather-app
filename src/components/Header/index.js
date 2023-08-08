import React from 'react';
import Logo from './Logo';
import SearchBar from './SearchBar';
import ToggleSwitcher from './Toggle';


const Header = ({citySearch , setCitySearch}) => {
  return (
    <header className="bg-gray-800 p-4 flex items-center justify-between">
        <Logo/>
        <SearchBar citySearch={citySearch} setCitySearch={setCitySearch} />
        <ToggleSwitcher/>
    </header>
  );
};

export default Header;

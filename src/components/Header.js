import React from 'react';
import logo from '../assets/facebook-1.png';
import Perfil from '../assets/account.png';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <img src={logo}/>
      </nav>
      <div className="profile">
        <a href="#" className="perfil">Meu perfil</a>
        <img src={Perfil} alt=""/>
      </div>
    </header>
  )
}

export default Header;
import React from 'react';
import Player from '../Player/Player';
import logo from '../../assets/images/radionopal-logo.png';
import './Header.scss';

const Header = (props) => {
  const { title, subtitle, description } = props;
  return (
    <header className="Header flex p-8">
      <div className="absolute">
        <img className="Header__logo mb-6" src={logo} alt="Radio Nopal logo" />
        <Player />
      </div>
      <div className="text-center max-w-lg m-auto">
        <h1 className="Header__title text-4xl">{title}</h1>
        <h2 className="Header__subtitle">{subtitle}</h2>
        <span className="Header__description">{description}</span>
      </div>
    </header>
  );
};

export default Header;

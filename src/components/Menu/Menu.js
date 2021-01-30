import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = ({ showMenu }) => {
  return (
    <div
      className={`menu p-12 z-10 md:w-1/2 text-4xl fixed top-0 w-screen h-screen ${
        showMenu ? 'menu--show' : 'menu--hidden'
      }`}>
      <ul>
        <li>
          <Link to="/programacion">Programación</Link>
        </li>
        <li>
          <Link to="/">Residencia</Link>
        </li>
        <li>Educativa</li>
        <li>Archivo</li>
      </ul>
    </div>
  );
};

export default Menu;

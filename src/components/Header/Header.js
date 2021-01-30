import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaVolumeUp,
  FaInstagram,
  FaFacebookSquare,
  FaTwitterSquare,
  FaMixcloud
} from 'react-icons/fa';
import HamburgerMenu from 'react-hamburger-menu';
import Player from '../Player/Player';
import Menu from '../Menu/Menu';
import radionopalLogo from '../../assets/images/logo.svg';
import nopalLogo from '../../assets/images/nopal.svg';
import './Header.scss';
import './VolumeSlider.scss';

const initialState = {
  scroll: false,
  volume: 0.9,
  showMenu: false
};

const Header = () => {
  const [state, setState] = useState(initialState);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setState((prev) => ({ ...prev, scroll: window.scrollY > 150 }));
    });
  }, []);
  return (
    <header className={`header top-0 sticky z-10 ${state.scroll ? 'header--collapsed' : ''}`}>
      <div className="header__container md:absolute p-8 w-full">
        <div className="grid grid-cols-8 gap-4">
          <div className="header__col gap-4 flex md:block col-span-6 md:col-span-4 space-between items-start">
            <img className="header__logo w-1/6 mb-6" src={radionopalLogo} alt="Radio Nopal logo" />
            <img src={nopalLogo} className="header__nopal hidden w-1/5" alt="Radio Nopal logo" />
            <div className="inline-flex">
              <Player volume={state.volume} />
            </div>
            <div className="header__now-playing py-4 w-1/5">
              <span></span>
              Estás escuchando
              <br />
              <span>defensa personal</span>
            </div>
            <div className="header__now-playing-info w-1/5">
              @maranadalba y @eupempes magna aliqua Quis ipsum gravida
            </div>
          </div>
          <div className="col-span-2 md:col-span-4 flex space-between ml-auto">
            <div className="flex items-start mr-4">
              <FaVolumeUp size="1.5em" className="mr-2 float-left hidden md:block" />
              <input
                className="header__volume-slider mt-1 hidden md:block"
                type="range"
                min={0.0}
                max={1}
                step={0.01}
                value={state.volume}
                onChange={(event) => {
                  document.getElementById('audio-player').volume = state.volume;
                  setState((prev) => ({ ...prev, volume: event.target.value }));
                }}
              />
            </div>
            <div className="hidden md:block w-2/4">
              <input type="text" className="w-100" name="search" placeholder="buscar" />
              <div className="header__links hidden absolute right-8 justify-end pt-4">
                <span>
                  <Link className="mr-1" to="/">
                    Apóyanos
                  </Link>
                </span>
                <a href="https://www.instagram.com/radionopal/" rel="noreferrer" target="_blank">
                  <FaInstagram size="1.5em" />
                </a>
                <a href="https://twitter.com/radio_nopal" rel="noreferrer" target="_blank">
                  <FaTwitterSquare size="1.5em" />
                </a>
                <a href="https://www.facebook.com/RadioNopal" rel="noreferrer" target="_blank">
                  <FaFacebookSquare size="1.5em" />
                </a>
                <a href="https://www.mixcloud.com/radionopal" rel="noreferrer" target="_blank">
                  <FaMixcloud size="1.5em" />
                </a>
              </div>
            </div>
            <div className="float-right mt-1 md:ml-4 relative">
              <HamburgerMenu
                className="cursor-pointer z-40"
                isOpen={state.showMenu}
                menuClicked={() => setState((prev) => ({ ...prev, showMenu: !state.showMenu }))}
                width={18}
                height={15}
                strokeWidth={3}
                animationDuration={0.5}
              />
            </div>
          </div>
        </div>
      </div>
      <Menu showMenu={state.showMenu} />
    </header>
  );
};

export default Header;

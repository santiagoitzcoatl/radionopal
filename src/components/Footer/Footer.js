import React from 'react';
import { FaGlobe } from 'react-icons/fa';
import nopalLogo from '../../assets/images/nopal.svg';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer p-8 grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 bg-black text-white relative z-0">
      <div>
        <img
          src={nopalLogo}
          className="footer__nopal-img invert-svg m-auto md:m-0"
          alt="Radio Nopal logo"
        />
        <br />
        Transmitiendo desde la colonia San Rafael en Ciudad de México para todo el{' '}
        <FaGlobe style={{ display: 'inline' }} />
      </div>
      <div>Radio Nopal Rosas Moreno 123—A Colonia San Rafael Ciudad de México C.P. 06470</div>
      <div>
        Para más información escríbenos a →{' '}
        <a href="mailto:contato@radionopal.com">contato@radionopal.com</a>
      </div>
      <div>Suscríbete a nuestro Newletter</div>
    </footer>
  );
};

export default Footer;

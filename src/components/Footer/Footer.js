import React from 'react';
import nopalLogo from '../../assets/images/nopal-logo.png';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="Footer p-8 grid grid-cols-1 md:grid-cols-4 gap-x-4 gap-y-8 bg-black text-white">
      <div>
        <img src={nopalLogo} alt="Radio Nopal logo" />
        <br />
        Transmitiendo desde la colonia San Rafael en Ciudad de México para todo el 🌐
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

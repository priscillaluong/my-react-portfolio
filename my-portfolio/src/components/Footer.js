import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer>
      <a
        href="https://linkedin.com/in/priscillaluong1"
        className="fa fa-linkedin"
      ></a>
      <a href="https://github.com/priscillaluong" className="fa fa-github"></a>
      <a
        href="https://instagram.com/priscillaluong"
        className="fa fa-instagram"
      ></a>
      <div>
      <FontAwesomeIcon icon="fa-solid fa-barcode" />
      </div>

      <header className="copyright">
        &copy; 2022 Priscilla Luong. All rights reserved
      </header>
    </footer>
  );
};

export default Footer;

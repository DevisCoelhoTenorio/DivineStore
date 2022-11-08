import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from 'react';

export default function Footer() {
  return (
    <footer>
      <div className="devs-container">
        <p>
          Desenvolvido por
          <Link
            href="https://www.linkedin.com/in/devis-coelho-tenorio/"
            target="_blank"
          >
            {' '}
            Dêvis
          </Link>
          {' '}
          e
          <Link
            href="https://www.linkedin.com/in/arthurccoelho/"
            target="_blank"
          >
            {' '}
            Arthur
          </Link>
          {' '}
          Coelho
        </p>
      </div>
      <div className="footer-links">
        <p>Entre em contato ou siga a DivineBrazil: </p>
        <Link
          href="https://wa.me/5582981795512"
          target="_blank"
          className="link"
        >
          <WhatsAppIcon />
        </Link>
        <Link
          href="https://www.instagram.com/divine.brazil/"
          target="_blank"
          className="link"
        >
          <InstagramIcon />
        </Link>
      </div>
    </footer>
  );
}

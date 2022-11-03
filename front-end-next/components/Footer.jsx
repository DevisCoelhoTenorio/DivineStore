import InstagramIcon from '@mui/icons-material/Instagram';
import Link from 'next/link';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import React from "react";

export default function Footer() {
  return(
    <footer>
      <div>
        <p>Developed by Dêvis and Arthur Coelho</p>
      </div>
      <div className="footer-links">
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
  )
}

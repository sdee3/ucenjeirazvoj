import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section className='navbar'>
      <div className='container'>
        <div className='navbar__brand'>
          <Link to='/'>
            <p>info@ucenjeirazvoj.com</p>
          </Link>
        </div>
        <input type='checkbox' id='nav-check' />
        <section className='navbar__mobile-buttons'>
          <label htmlFor='nav-check'>
            <span />
            <span />
            <span />
          </label>
        </section>
        <section className='navbar__links'>
          <Link to='/'>Naslovna</Link>
          <Link to='/teme'>Teme</Link>
          <Link to='/podrska'>Podrška</Link>
          {/* <Link to='/blog'>Blog</Link> */}
          <Link to='/citati'>Citati</Link>
          <a href='#contact'>Kontakt</a>
        </section>
      </div>
    </section>
  );
}

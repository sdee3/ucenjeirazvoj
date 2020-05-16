import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <section className='navbar'>
      <div className='container'>
        <div className='navbar__brand'>
          <Link to='/'>
            <img
              alt='Učenje i razvoj navbar logo'
              src='https://image.flaticon.com/icons/png/512/46/46564.png'
            />
            <p>Učenje i razvoj</p>
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
          <Link to='/services'>Podrška</Link>
          <Link to='/blog'>Blog</Link>
          <Link to='/blog'>Citati</Link>
          <a href='#contact'>Kontakt</a>
        </section>
      </div>
    </section>
  );
}

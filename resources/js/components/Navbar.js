import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Navbar() {
  const isMobile = useMediaQuery({ query: "(max-width: 769px)" });

  return (
    <section className='navbar'>
      <div className='container'>
        <section className='navbar__links navbar__links--left'>
          <Link to='/'>Naslovna</Link>
          <Link to='/teme'>Teme</Link>
          <Link to='/usluge'>Usluge</Link>
        </section>
        <div className='navbar__brand'>
          <Link to='/'>
            <div className='navbar__brand--image'>
              <img
                src='https://res.cloudinary.com/sdee3-com/image/upload/v1591338251/ucenjeirazvoj/ucenje-i-razvoj-logo-large.png'
                alt='Ucenje i razvoj logo'
              />
            </div>
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
        <section className='navbar__links navbar__links--right'>
          {isMobile ? (
            <>
              <Link to='/teme'>Teme</Link>
              <Link to='/usluge'>Usluge</Link>
            </>
          ) : null}
          <Link to='/o-nama'>O Nama</Link>
          <Link to='/citati'>Citati</Link>
          <a href='#contact'>Kontakt</a>
        </section>
      </div>
    </section>
  );
}

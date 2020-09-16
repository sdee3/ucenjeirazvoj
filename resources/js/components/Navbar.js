import React from "react";
import { useMediaQuery } from "react-responsive";
import onClickOutside from "react-onclickoutside";
import { Link } from "react-router-dom";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 769px)" });
  const [isHamChecked, setIsHamChecked] = React.useState(false);

  Navbar.handleClickOutside = () => setIsHamChecked(false);

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
        <input
          type='checkbox'
          id='nav-check'
          checked={isHamChecked}
          onChange={() => {}}
          onClick={() => setIsHamChecked(!isHamChecked)}
        />
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
              <Link onClick={() => setIsHamChecked(false)} to='/'>
                Početna
              </Link>
              <Link onClick={() => setIsHamChecked(false)} to='/teme'>
                Teme
              </Link>
              <Link onClick={() => setIsHamChecked(false)} to='/usluge'>
                Usluge
              </Link>
            </>
          ) : null}
          <Link onClick={() => setIsHamChecked(false)} to='/o-nama'>
            O Nama
          </Link>
          <Link onClick={() => setIsHamChecked(false)} to='/citati'>
            Citati
          </Link>
          <a onClick={() => setIsHamChecked(false)} href='#contact'>
            Kontakt
          </a>
        </section>
      </div>
    </section>
  );
};

const clickOutsideConfig = {
  handleClickOutside: () => Navbar.handleClickOutside,
};

export default onClickOutside(Navbar, clickOutsideConfig);

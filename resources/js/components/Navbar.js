/* eslint-disable no-undef */
import React from "react";
import { useMediaQuery } from "react-responsive";
import onClickOutside from "react-onclickoutside";

const Navbar = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 769px)" });
  const [isHamChecked, setIsHamChecked] = React.useState(false);

  Navbar.handleClickOutside = () => setIsHamChecked(false);

  return (
    <section className='navbar'>
      <div className='container'>
        <section className='navbar__links navbar__links--left'>
          <a href={`${process.env.MIX_GATSBY_URL}`}>Naslovna</a>
        </section>
        <div className='navbar__brand'>
          <a href={`${process.env.MIX_GATSBY_URL}`}>
            <div className='navbar__brand--image'>
              <img
                src='https://res.cloudinary.com/sdee3-com/image/upload/v1591338251/ucenjeirazvoj/ucenje-i-razvoj-logo-large.png'
                alt='Ucenje i razvoj logo'
              />
            </div>
          </a>
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
              <a onClick={() => setIsHamChecked(false)} href={`${process.env.MIX_GATSBY_URL}`}>
                Početna
              </a>
            </>
          ) : null}
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

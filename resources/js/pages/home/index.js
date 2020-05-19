import React, { lazy } from "react";

const Promo = lazy(() => import("./Promo"));

export default function Home() {
  return (
    <section className='home-page'>
      <section className='home-page__main-img'>
        <div className='container'>
          <div className='heading'>
            <img
              alt='Učenje i razvoj logo'
              src='https://res.cloudinary.com/sdee3-com/image/upload/e_colorize,co_rgb:6574cd/v1589892083/ucenjeirazvoj/tree.png'
            />
            <h1>Da budemo bolja verzija sebe.</h1>
          </div>
        </div>
      </section>
      <Promo />
    </section>
  );
}

import React, { lazy } from "react";

const Promo = lazy(() => import("./Promo"));

export default function Home() {
  return (
    <section className='home-page'>
      <section className='home-page__main-img'>
        <div className='container'>
          <div className='heading'>
            <div className='image-section'></div>
          </div>
        </div>
      </section>
      <Promo />
    </section>
  );
}

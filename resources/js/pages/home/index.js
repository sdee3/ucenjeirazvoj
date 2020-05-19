import React, { lazy } from "react";

const Services = lazy(() => import("./Services"));

export default function Home() {
  return (
    <section className='home-page'>
      <section className='home-page__main-img'>
        <div className='container'>
          <h1>Da budemo bolja verzija sebe.</h1>
        </div>
      </section>
      {/* <AboutUs /> */}
      <Services />
    </section>
  );
}

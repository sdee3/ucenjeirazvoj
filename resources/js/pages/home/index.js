import React, { lazy } from "react";

const QuestionnairePromo = lazy(() => import("./QuestionnairePromo"));
const AboutUs = lazy(() => import("./AboutUs"));
const Services = lazy(() => import("./Services"));
const Promo = lazy(() => import("./Promo"));
const Clients = lazy(() => import("./Clients"));

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

import React, { lazy } from "react";
import { Helmet } from "react-helmet";

const Services = lazy(() => import("./Services"));
const Promo = lazy(() => import("./Promo"));

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Učenje i razvoj</title>
        <meta
          name='description'
          content='Učenje i razvoj - Da budemo bolja verzija sebe'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ucenjeirazvoj.com/' />
        <meta property='og:title' content='Učenje i razvoj' />
        <meta
          property='og:description'
          content='Učenje i razvoj - Da budemo bolja verzija sebe'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/sdee3-com/image/upload/v1589966037/ucenjeirazvoj/ucenjeirazvoj-main-txt.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://ucenjeirazvoj.com/' />
        <meta property='twitter:title' content='Učenje i razvoj' />
        <meta
          property='twitter:description'
          content='Učenje i razvoj - Da budemo bolja verzija sebe'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/sdee3-com/image/upload/v1589966037/ucenjeirazvoj/ucenjeirazvoj-main-txt.jpg'
        />
      </Helmet>
      <section className='home-page'>
        <section className='home-page__main-img'>
          <div className='container'>
            <h1>Da budemo bolja verzija sebe.</h1>
          </div>
        </section>
        <Services />
        <Promo />
      </section>
    </>
  );
}

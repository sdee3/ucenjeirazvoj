import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <>
      <Helmet>
        <title>Podrška | Učenje i razvoj</title>
        <meta
          name='description'
          content='Podrška koju portal Učenje i razvoj pruža roditeljima, deci, kao i svim odraslima. Učenje i razvoj - Da budemo bolja verzija sebe'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ucenjeirazvoj.com/' />
        <meta property='og:title' content='Učenje i razvoj' />
        <meta
          property='og:description'
          content='Podrška koju portal Učenje i razvoj pruža roditeljima, deci, kao i svim odraslima. Učenje i razvoj - Da budemo bolja verzija sebe'
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
          content='Podrška koju portal Učenje i razvoj pruža roditeljima, deci, kao i svim odraslima. Učenje i razvoj - Da budemo bolja verzija sebe'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/sdee3-com/image/upload/v1589966037/ucenjeirazvoj/ucenjeirazvoj-main-txt.jpg'
        />
      </Helmet>
      <section className='support-page'>
        <div className='container'>
          <h1>Podrška</h1>
          <ul>
            <li>
              <Link to='/podrska/podrska-deci'>Podrška deci</Link>
            </li>
            <li>
              <Link to='/podrska/podrska-roditeljima'>Podrška roditeljima</Link>
            </li>
            <li>
              <Link to='/podrska/podrska-odraslima'>Podrška odraslima</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

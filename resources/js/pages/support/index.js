import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <>
      <Helmet>
        <title>Usluge | Učenje i razvoj</title>
        <meta
          name='description'
          content='Usluge koje portal Učenje i razvoj pruža roditeljima, deci, kao i svim odraslima. Učenje i razvoj - Da budemo bolja verzija sebe'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ucenjeirazvoj.com/' />
        <meta property='og:title' content='Učenje i razvoj' />
        <meta
          property='og:description'
          content='Usluge koje portal Učenje i razvoj pruža roditeljima, deci, kao i svim odraslima. Učenje i razvoj - Da budemo bolja verzija sebe'
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
          content='Usluge koje portal Učenje i razvoj pruža roditeljima, deci, kao i svim odraslima. Učenje i razvoj - Da budemo bolja verzija sebe'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/sdee3-com/image/upload/v1589966037/ucenjeirazvoj/ucenjeirazvoj-main-txt.jpg'
        />
      </Helmet>
      <section className='support-page'>
        <div className='container'>
          <h1>Usluge</h1>
          <ul>
            <li>
              <Link to='/usluge/produzeni-boravak'>Produženi boravak</Link>
            </li>
            <li>
              <Link to='/usluge/radionice-za-decu'>Radionice za decu</Link>
            </li>
            <li>
              <Link to='/usluge/podrska-licnom-rastu-razvoju'>Podrška ličnom rastu i razvoju - Individualni savetodavni i terapijski rad sa decom, roditeljima i odraslima</Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

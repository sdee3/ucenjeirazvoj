import React, { lazy } from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = lazy(() => import("../../components/Breadcrumbs"));

export default function PodrskaOdraslima() {
  return (
    <>
      <Breadcrumbs
        page={
          <>
            <Link to='/podrska'>Podrška</Link>
            <i className='material-icons'>keyboard_arrow_right</i>
            <Link to={`/podrska/podrska-odraslima`}>Podrška odraslima</Link>
          </>
        }
      />
      <section className='support-page'>
        <div className='container'>
          <h1>Podrška odraslima</h1>
          <p>
            Tokom života susrećemo se sa različitim izazovima koje da bi uspešno
            rešili povremeno možemo imati potrebu za stručnom podrškom u cilju:
          </p>
          <div className='support-page__image'>
            <img
              alt='Učenje i razvoj - Podrška odraslima'
              src='https://res.cloudinary.com/sdee3-com/image/upload/v1589805767/ucenjeirazvoj/PodrskaOdraslimaGrafika.png'
            />
          </div>
        </div>
      </section>
    </>
  );
}

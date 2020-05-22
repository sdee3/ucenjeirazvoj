import React, { lazy } from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = lazy(() => import("../../components/Breadcrumbs"));

export default function PodrskaDeci() {
  return (
    <>
      <Breadcrumbs
        page={
          <>
            <Link to='/podrska'>Podrška</Link>
            <i className='material-icons'>keyboard_arrow_right</i>
            <Link to={`/podrska/podrska-deci`}>Podrška deci</Link>
          </>
        }
      />
      <section className='support-page'>
        <div className='container'>
          <h1>Podrška deci</h1>
          <p>
            Svako dete se tokom odrastanja suočava sa različitim izazovima zbog
            kojih povremeno može imati potrebu za stručnom podrškom.
          </p>
          <div className='support-page__image'>
            <img
              alt='Učenje i razvoj - Podrška deci'
              src='https://res.cloudinary.com/sdee3-com/image/upload/v1589803502/ucenjeirazvoj/PodrskaDeciGrafika.png'
            />
          </div>
        </div>
      </section>
    </>
  );
}

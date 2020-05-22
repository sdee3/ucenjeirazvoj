import React, { lazy } from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = lazy(() => import("../../components/Breadcrumbs"));

export default function PodrskaRoditeljima() {
  return (
    <>
      <Breadcrumbs
        page={
          <>
            <Link to='/podrska'>Podrška</Link>
            <i className='material-icons'>keyboard_arrow_right</i>
            <Link to={`/podrska/podrska-roditeljima`}>Podrška roditeljima</Link>
          </>
        }
      />
      <section className='support-page'>
        <div className='container'>
          <h1>Podrška roditeljima</h1>
          <p>
            Roditelji se suočavaju sa različitim izazovima tokom odrastanja dece
            zbog kojih povremeno mogu imati potrebu za stručnom podrškom u
            cilju:
          </p>
          <div className='support-page__image'>
            <img
              alt='Učenje i razvoj - Podrška roditeljima'
              src='https://res.cloudinary.com/sdee3-com/image/upload/v1589805721/ucenjeirazvoj/PodrskaRoditeljimaGrafika.png'
            />
          </div>
        </div>
      </section>
    </>
  );
}

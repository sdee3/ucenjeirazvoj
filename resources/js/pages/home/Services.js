import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className='home-page__services'>
      <div className='container'>
        <h2>Usluge</h2>
        <div className='services'>
          <Link
            className='topics-page__topics--topic'
            to='/teme/deca-i-odrastanje'
          >
            Deca i odrastanje
          </Link>
          <Link className='topics-page__topics--topic' to='/teme/roditeljstvo'>
            Roditeljstvo
          </Link>
          <Link className='topics-page__topics--topic' to='/teme/licni-razvoj'>
            Lični rast i lični razvoj
          </Link>
        </div>
      </div>
    </section>
  );
}

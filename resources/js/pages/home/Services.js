import React from "react";
import { Link } from "react-router-dom";

export default function Services() {
  return (
    <section className='home-page__services'>
      <div className='container'>
        <h2>Usluge</h2>
        <div className='services'>
          <Link
            className='topics-page__topics--topic topics-page__topics--topic-at-homepage'
            to='/teme'
          >
            Deca i odrastanje
          </Link>
          <Link
            className='topics-page__topics--topic topics-page__topics--topic-at-homepage'
            to='/teme'
          >
            Roditeljstvo
          </Link>
          <Link
            className='topics-page__topics--topic topics-page__topics--topic-at-homepage'
            to='/teme'
          >
            Lični rast i lični razvoj
          </Link>
        </div>
      </div>
    </section>
  );
}

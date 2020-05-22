import React from "react";
import { HashLink as Link } from "react-router-hash-link";

export default function Services() {
  return (
    <section className='home-page__services'>
      <div className='container'>
        <h2>Teme</h2>
        <div className='services'>
          <Link
            className='topics-page__topics--topic topics-page__topics--topic-at-homepage'
            to='/teme#Tema1'
          >
            Deca i odrastanje
          </Link>
          <Link
            className='topics-page__topics--topic topics-page__topics--topic-at-homepage'
            to='/teme#Tema2'
          >
            Roditeljstvo
          </Link>
          <Link
            className='topics-page__topics--topic topics-page__topics--topic-at-homepage'
            to='/teme#Tema3'
          >
            Lični rast i lični razvoj
          </Link>
        </div>
      </div>
    </section>
  );
}

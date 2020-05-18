import React from "react";
import { Link } from "react-router-dom";

export default function Teme() {
  return (
    <section className='topics-page container'>
      <h1>Teme</h1>
      <div className='topics-page__topics'>
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
    </section>
  );
}

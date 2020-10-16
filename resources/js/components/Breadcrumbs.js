/* eslint-disable no-undef */
import React from "react";

export default function Breadcrumbs({ page }) {
  return (
    <section className='breadcrumb'>
      <div className='container'>
        <a href={`${process.env.MIX_GATSBY_URL}`}>Početna strana</a>
        <i className='material-icons'>keyboard_arrow_right</i>
        {page}
      </div>
    </section>
  );
}

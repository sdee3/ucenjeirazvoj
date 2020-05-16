import React from "react";
import { Link } from "react-router-dom";

export default function Breadcrumbs({ page }) {
  return (
    <section className='breadcrumb'>
      <div className='container'>
        <Link to='/'>Početna strana</Link>
        <i className='material-icons'>keyboard_arrow_right</i>
        {page}
      </div>
    </section>
  );
}

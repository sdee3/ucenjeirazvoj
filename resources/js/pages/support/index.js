import React from "react";
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <section className='support-page'>
      <div className='container'>
        <h1>Podrška</h1>
        <ul>
          <li>
            <Link to='/podrska/podrska-deci'>Podrška deci</Link>
          </li>
          <li>
            <Link to='/podrska/podrska-roditeljima'>Podrška roditeljima</Link>
          </li>
          <li>
            <Link to='/podrska/podrska-odraslima'>Podrška odraslima</Link>
          </li>
        </ul>
      </div>
    </section>
  );
}

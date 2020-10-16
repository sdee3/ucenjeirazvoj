import React from "react";
import {Link} from 'react-router-dom';
import { isAuthenticated } from "../../Helpers";

export default function TopicsAdminIndex() {
  return isAuthenticated() ? (
    <div className='blog-page container text-center'>
      <Link className='button' to={'/teme/new'}>Novi Tekst</Link>
    </div>
  ) : null;
}

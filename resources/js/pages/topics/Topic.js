import React, { lazy } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { isAuthenticated, validateCookie } from "../../Helpers";

const Breadcrumbs = lazy(() => import("../../components/Breadcrumbs"));

export default function Topic({ match }) {
  const [article, setArticle] = React.useState({});
  const [parentTopic, setParentTopic] = React.useState("");

  React.useEffect(() => {
    if (match.params.slug !== "new") {
      axios
        .get(`/api/tema/${match.params.slug}`)
        .then((res) => {
          setArticle(res.data);
          setParentTopic(res.data.topic.name);
        })
        .catch((err) => console.error(err.response));
    }
  }, []);

  const deleteArticle = () => {
    if (confirm("Are you sure you want to delete this text?")) {
      validateCookie()
        .then(() =>
          axios
            .delete(`/api/tema/${match.params.slug}`)
            .then(() => (window.location.href = "/teme"))
        )
        .catch(() => {
          alert(
            "Error validating the cookie. Click OK to be redirected to the login page"
          );
          window.location.href = "/teme/admin";
        });
    }
  };

  return article ? (
    <>
      <Breadcrumbs
        page={
          <>
            <Link to='/teme'>Teme</Link>
            <i className='material-icons'>keyboard_arrow_right</i>
            <Link to={`/tema/${match.params.slug}`}>{article.name}</Link>
          </>
        }
      />
      <section className='blog-page container'>
        <section className='blog-post'>
          {isAuthenticated() ? (
            <div className='blog-post__top-buttons'>
              <Link to={`/tema/${match.params.slug}/edit`}>
                <button className='button'>Edit</button>
              </Link>
              <button className='button' onClick={deleteArticle}>
                Delete Article
              </button>
            </div>
          ) : null}
          <h1 className='blog-post__title'>{article.name}</h1>
          <section className='blog-post__author-category'>
            <span className='article-author' />
            <span className='label'>{parentTopic}</span>
          </section>
          <section
            className='blog-post__text'
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </section>
      </section>
    </>
  ) : null;
}

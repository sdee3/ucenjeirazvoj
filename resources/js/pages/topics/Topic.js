import React, { lazy } from "react";
import { Helmet } from "react-helmet";
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
      <Helmet>
        <title>{`${article.name} | Učenje i razvoj`}</title>
        <meta
          name='description'
          content={
            article.intro ? article.intro : `${article.title} | Učenje i razvoj`
          }
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ucenjeirazvoj.com/' />
        <meta
          property='og:title'
          content={`${article.name} | Učenje i razvoj`}
        />
        <meta
          property='og:description'
          content={
            article.intro ? article.intro : `${article.title} | Učenje i razvoj`
          }
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/sdee3-com/image/upload/v1589966037/ucenjeirazvoj/ucenjeirazvoj-main-txt.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://ucenjeirazvoj.com/' />
        <meta
          property='twitter:title'
          content={`${article.name} | Učenje i razvoj`}
        />
        <meta
          property='twitter:description'
          content={
            article.intro ? article.intro : `${article.title} | Učenje i razvoj`
          }
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/sdee3-com/image/upload/v1589966037/ucenjeirazvoj/ucenjeirazvoj-main-txt.jpg'
        />
      </Helmet>
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
                <button className='button'>Izmeni tekst</button>
              </Link>
              <button className='button' onClick={deleteArticle}>
                Obriši tekst
              </button>
            </div>
          ) : null}
          <h1 className='blog-post__title'>{article.name}</h1>
          <section className='blog-post__author-category'>
            <span className='article-author' />
            <span className='label'>{parentTopic}</span>
          </section>
          {article.intro ? (
            <section className='blog-post__intro'>{article.intro}</section>
          ) : null}
          <section
            className='blog-post__text'
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
        </section>
      </section>
    </>
  ) : null;
}

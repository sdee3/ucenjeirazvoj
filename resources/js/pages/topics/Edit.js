import React, { lazy } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  quillFormats,
  quillModules,
  isAuthenticated,
  validateCookie,
} from "../../Helpers";
import { AlertContext } from "../../app";
import Page404 from "../404";

const ReactQuill = lazy(() => import("react-quill"));

export default function Edit({ match }) {
  const [article, setArticle] = React.useState({});
  const [originalTitle, setOriginalTitle] = React.useState("");
  const [originalSlug, setOriginalSlug] = React.useState("");

  const setAlert = React.useContext(AlertContext);

  React.useEffect(() => {
    const { slug } = match.params;

    axios
      .get(`/api/tema/${slug}`)
      .then((res) => {
        setArticle(res.data);
        setOriginalTitle(res.data.name);
        setOriginalSlug(slug);
      })
      .catch((err) => console.error(err.response));
  }, []);

  const handleChange = (value) => {
    setArticle({ ...article, content: value });
  };

  const updateArticle = () => {
    validateCookie()
      .then(() =>
        axios.put(`/api/tema/${originalSlug}`, article).then(() => {
          setAlert(
            "Article updated successfully! You will soon be redirected back to the article...",
            "success"
          );

          setTimeout(() => {
            window.location.href = `/tema/${article.slug}`;
          }, 2500);
        })
      )
      .catch((err) => setAlert(err.response.data.messages[0], "danger"));
  };

  return Object.keys(article).length && isAuthenticated() ? (
    <section className='blog-page container'>
      <Link to={`/tema/${article.slug}`}>
        <button className='button btn-big'>Go Back</button>
      </Link>
      <h1 className='h1-small'>You are editing {originalTitle}:</h1>
      <section className='edit-article__inputs'>
        <div className='edit-article__inputs--category-select'>
          <span>Category:</span>
          <section className='edit-article__category-checkboxes'>
            {/* <Category
              categories={categoriesContext.categories}
              category_id={article.category_id}
              handleRadioChange={handleRadioChange}
            /> */}
          </section>
        </div>
        <input
          onChange={(e) => setArticle({ ...article, name: e.target.value })}
          placeholder='Title'
          value={article.name}
        />
        <div className='input-group-prepend'>
          <div className='input-group-prepend__pre-input-text'>{`/tema/`}</div>
          <input
            onChange={(e) => setArticle({ ...article, slug: e.target.value })}
            placeholder='Article URL (automatically starts with /tema/)'
            value={article.slug}
          />
        </div>
        <ReactQuill
          formats={quillFormats}
          modules={quillModules}
          onChange={handleChange}
          value={article.content}
        />
        <section className='text-center'>
          <button className='button btn-big' onClick={updateArticle}>
            Save Changes
          </button>
        </section>
      </section>
    </section>
  ) : (
    <Page404 />
  );
}

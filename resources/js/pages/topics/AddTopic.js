import React, { lazy } from "react";
import { Link } from "react-router-dom";
import {
  quillFormats,
  quillModules,
  isAuthenticated,
  validateCookie,
} from "../../Helpers";
import axios from "axios";
import { AlertContext } from "../../app";
import Page404 from "../404";

const Breadcrumbs = lazy(() => import("../../components/Breadcrumbs"));
const Topic = lazy(() => import("../../components/Topic"));
const ReactQuill = lazy(() => import("react-quill"));

export default function AddTopic() {
  const [topic, setTopic] = React.useState({
    name: "",
    topic_id: 0,
    slug: "",
    content: "",
  });
  const [parentTopics, setParentTopics] = React.useState([]);

  const setAlert = React.useContext(AlertContext);

  React.useEffect(() => {
    axios.get("/api/topics").then((res) => setParentTopics(res.data));
  }, []);

  const handleChange = (value) => {
    if (value.indexOf("data:image") > 0) {
      let valuesArray = value.split("</p>");

      for (let i = 0; i < valuesArray.length; i++) {
        if (valuesArray[i].indexOf("data:image") > 0) {
          let imgStringArray =
            valuesArray[i].split(`<p><img src="data:`) ||
            valuesArray[i].split(`<img src="data:`);

          if (imgStringArray[1]) {
            const sanitizedImgData = imgStringArray[1].split(`">`)[0];

            axios
              .post("/api/upload", { data: sanitizedImgData })
              .then((response) => {
                valuesArray[i] = `<img src="/${response.data}" />`;
                var output = valuesArray.join("</p>");

                setTopic({ ...topic, content: output });
              })
              .catch((err) => setAlert(err, "danger"));
          }
        }
      }
    } else {
      setTopic({ ...topic, content: value });
    }
  };

  const submitArticle = () => {
    validateCookie()
      .then(() => {
        axios
          .post("/api/subtopics", topic)
          .then(() => {
            window.location.href = "/teme";
          })
          .catch((err) => setAlert(err.response.data.message, "danger"));
      })
      .catch(() => {
        alert(
          "Error validating the cookie. Click OK to be redirected to the login page"
        );
        window.location.href = "/blog/admin";
      });
  };

  const handleRadioChange = (e) => {
    const newParentTopic = parentTopics.filter(
      (c) => c.name === e.target.value
    )[0];

    setTopic({ ...topic, topic_id: newParentTopic.id });
  };

  return isAuthenticated() ? (
    <>
      <Breadcrumbs
        page={
          <>
            <Link to='/teme'>Teme</Link>
            <i className='material-icons'>keyboard_arrow_right</i>
            <Link to='/blog/new'>Novi tekst</Link>
          </>
        }
      />
      <section className='blog-page blog-page__add-article container'>
        <h1>Novi tekst</h1>
        <form
          className='add-article__form'
          onSubmit={(e) => {
            e.preventDefault();
            submitArticle();
          }}
        >
          <div className='edit-article__inputs--category-select'>
            <span>Category:</span>
            <section className='edit-article__category-checkboxes'>
              <Topic
                categories={parentTopics}
                handleRadioChange={handleRadioChange}
              />
            </section>
          </div>
          <input
            onChange={(e) => setTopic({ ...topic, name: e.target.value })}
            placeholder='Title'
            value={topic.name}
          />
          <div className='input-group-prepend'>
            <div className='input-group-prepend__pre-input-text'>{`/tema/`}</div>
            <input
              onChange={(e) => setTopic({ ...topic, slug: e.target.value })}
              placeholder='Article URL (automatically starts with /tema/)'
              value={topic.slug}
            />
          </div>
          <ReactQuill
            formats={quillFormats}
            modules={quillModules}
            onChange={handleChange}
            value={topic.content}
          />
          <input className='button' type='submit' value='Submit New Topic' />
        </form>
      </section>
    </>
  ) : (
    <Page404 />
  );
}

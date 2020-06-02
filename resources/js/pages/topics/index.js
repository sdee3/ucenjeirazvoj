import React from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../Helpers";

export default function Teme() {
  const [fetchedTopics, setFetchedTopics] = React.useState([]);
  const [fetchedSubTopics, setFetchedSubTopics] = React.useState([]);

  const fetchSubTopicsByParentId = (id) => {
    return fetchedSubTopics.filter((subtopic) => subtopic.topic_id == id);
  };

  React.useEffect(() => {
    axios
      .get("/api/topics")
      .then((res) => setFetchedTopics(res.data))
      .catch((err) => console.error(err.response));

    axios
      .get("/api/subtopics")
      .then((res) => setFetchedSubTopics(res.data))
      .catch((err) => console.error(err.response));
  }, []);

  return (
    <>
      <Helmet>
        <title>Teme | Učenje i razvoj</title>
        <meta
          name='description'
          content='Teme o deci i odrastanju, roditeljstvu, ličnom rastu i ličnom razvoju. Učenje i razvoj | Da budemo bolja verzija sebe.'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ucenjeirazvoj.com/' />
        <meta property='og:title' content='Učenje i razvoj' />
        <meta
          property='og:description'
          content='Teme o deci i odrastanju, roditeljstvu, ličnom rastu i ličnom razvoju. Učenje i razvoj | Da budemo bolja verzija sebe.'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/sdee3-com/image/upload/v1589966037/ucenjeirazvoj/ucenjeirazvoj-main-txt.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://ucenjeirazvoj.com/' />
        <meta property='twitter:title' content='Učenje i razvoj' />
        <meta
          property='twitter:description'
          content='Teme o deci i odrastanju, roditeljstvu, ličnom rastu i ličnom razvoju. Učenje i razvoj | Da budemo bolja verzija sebe.'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/sdee3-com/image/upload/v1589966037/ucenjeirazvoj/ucenjeirazvoj-main-txt.jpg'
        />
      </Helmet>
      <section className='topics-page container'>
        <div className='blog-page__top-heading'>
          <h1>Teme</h1>
          {isAuthenticated() ? (
            <Link to='/teme/new'>
              <button className='button'>Novi tekst</button>
            </Link>
          ) : null}
        </div>
        <div className='topics-page__topics'>
          {fetchedTopics.length
            ? fetchedTopics.map((topic) => {
                return (
                  <section
                    id={`Tema${topic.id}`}
                    className='topics-page__topics--topic'
                    key={topic.id}
                  >
                    <h2>{topic.name}</h2>
                    {fetchSubTopicsByParentId(topic.id).map((subtopic) => {
                      return (
                        <Link
                          className='topics-page__topics--subtopic'
                          key={subtopic.id}
                          to={`/tema/${subtopic.slug}`}
                        >
                          {subtopic.name}
                        </Link>
                      );
                    })}
                  </section>
                );
              })
            : null}
        </div>
      </section>
    </>
  );
}

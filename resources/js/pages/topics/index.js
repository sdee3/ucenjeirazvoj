import React from "react";
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
  );
}

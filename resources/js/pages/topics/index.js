import React from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../Helpers";

export default function Teme() {
  const [fetchedTopics, setFetchedTopics] = React.useState([]);
  const [fetchedSubTopics, setFetchedSubTopics] = React.useState([]);
  const [latestFetchedSubTopics, setLatestFetchedSubTopics] = React.useState(
    []
  );

  const [allSubtopicsToggled, setAllSubtopicsToggled] = React.useState(false);

  const fetchSubTopicsByParentId = (id) => {
    return fetchedSubTopics.filter((subtopic) => subtopic.topic_id == id);
  };

  const fetchLatestSubTopicsByTopic = (id) => {
    let result = [];

    for (let i = 0; i < latestFetchedSubTopics.length; i++) {
      latestFetchedSubTopics[i].forEach((subtopic) => {
        if (subtopic.topic_id === id) result.push(subtopic);
      });
    }

    return result;
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

    axios
      .get("/api/subtopics/latest")
      .then((res) => setLatestFetchedSubTopics(res.data))
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
          {!allSubtopicsToggled
            ? fetchedTopics.length
              ? fetchedTopics.map((topic) => {
                  return (
                    <section
                      className='topics-page__topics--topic'
                      key={topic.id}
                    >
                      <h2>{topic.name}</h2>
                      <div className='topics-page__topics--subtopics'>
                        {fetchLatestSubTopicsByTopic(topic.id).map(
                          (subtopic) => {
                            return (
                              <Link
                                key={subtopic.id}
                                to={`/tema/${subtopic.slug}`}
                              >
                                <div className='topics-page__topics--subtopic'>
                                  {subtopic.img_url ? (
                                    <img
                                      src={subtopic.img_url}
                                      alt={`${subtopic.name} | Učenje i razvoj`}
                                    />
                                  ) : null}
                                  <p>{subtopic.name}</p>
                                </div>
                              </Link>
                            );
                          }
                        )}
                      </div>
                      <div
                        className='topics-page__topics--subtopics-toggle-all'
                        onClick={() =>
                          setAllSubtopicsToggled(!allSubtopicsToggled)
                        }
                      >
                        {allSubtopicsToggled ? (
                          <i className='fas fa-caret-up'></i>
                        ) : (
                          <i className='fas fa-caret-down'></i>
                        )}
                      </div>
                    </section>
                  );
                })
              : null
            : fetchedTopics.length
            ? fetchedTopics.map((topic) => {
                return (
                  <section
                    className='topics-page__topics--topic'
                    key={topic.id}
                  >
                    <h2>{topic.name}</h2>
                    <div className='topics-page__topics--subtopics'>
                      {fetchSubTopicsByParentId(topic.id).map((subtopic) => {
                        return (
                          <Link key={subtopic.id} to={`/tema/${subtopic.slug}`}>
                            <div className='topics-page__topics--subtopic'>
                              {subtopic.img_url ? (
                                <img
                                  src={subtopic.img_url}
                                  alt={`${subtopic.name} | Učenje i razvoj`}
                                />
                              ) : null}
                              <h3>{subtopic.name}</h3>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                    <div
                      className='topics-page__topics--subtopics-toggle-all'
                      onClick={() =>
                        setAllSubtopicsToggled(!allSubtopicsToggled)
                      }
                    >
                      {allSubtopicsToggled ? (
                        <i className='fas fa-caret-up'></i>
                      ) : (
                        <i className='fas fa-caret-down'></i>
                      )}
                    </div>
                  </section>
                );
              })
            : null}
        </div>
      </section>
    </>
  );
}

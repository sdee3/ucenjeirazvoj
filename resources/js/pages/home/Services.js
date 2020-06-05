import React from "react";
import axios from "axios";
import { HashLink as Link } from "react-router-hash-link";

export default function Services() {
  const [fetchedTopics, setFetchedTopics] = React.useState([]);
  const [fetchedSubTopics, setFetchedSubTopics] = React.useState([]);

  const fetchLatestSubTopicsByTopic = (id) => {
    let result = [];

    for (let i = 0; i < fetchedSubTopics.length; i++) {
      fetchedSubTopics[i].forEach((subtopic) => {
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
      .get("/api/subtopics/latest")
      .then((res) => setFetchedSubTopics(res.data))
      .catch((err) => console.error(err.response));
  }, []);

  return (
    <section className='home-page__services'>
      <div className='container'>
        <h2>Teme</h2>
        <div className='services'>
          {fetchedTopics.length
            ? fetchedTopics.map((topic) => {
                return (
                  <section className='services__topics--topic' key={topic.id}>
                    <h3>{topic.name}</h3>
                    <div className='services__topics--subtopics'>
                      {fetchLatestSubTopicsByTopic(topic.id).map((subtopic) => {
                        return (
                          <Link key={subtopic.id} to={`/tema/${subtopic.slug}`}>
                            <div className='services__topics--subtopic'>
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
                      })}
                    </div>
                  </section>
                );
              })
            : null}
        </div>
      </div>
    </section>
  );
}

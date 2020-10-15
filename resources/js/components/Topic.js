import React from "react";
import axios from "axios";
import { AlertContext } from "../app";

export default function Topic({ topics, topic_id, handleRadioChange }) {
  const [isEditable, setIsEditable] = React.useState(false);
  const [values, setValues] = React.useState([]);
  const [newValues, setNewValues] = React.useState([]);
  const [inputVisible, setInputVisible] = React.useState(false);
  const [newCategory, setNewCategory] = React.useState({ name: "" });

  const setAlert = React.useContext(AlertContext);

  React.useEffect(() => {
    if (topics && topics.length) {
      setValues(topics.map((c) => c.name));
    }
  }, []);

  const syncValues = () => {
    topics.forEach((category, index) => {
      const element = document.getElementById(index);
      let newValuesArray = newValues;
      newValuesArray[index] = element.innerText;

      setNewValues(newValuesArray);
    });
  };

  const handleKeyPress = (e) => {
    const { id } = e.currentTarget;

    if (e.key === "Enter") {
      e.preventDefault();
      syncValues();

      axios.put("/api/topics", newValues).then(() => {
        setIsEditable(false);
      });
    } else {
      let newValuesArray = values;
      newValuesArray[id] = e.currentTarget.innerText;

      setNewValues(newValuesArray);
    }
  };

  const submitCategory = (e) => {
    e.preventDefault();
    if (newCategory.name.length) {
      axios
        .post("/api/topics", newCategory)
        .then(() => {
          setAlert("Uspešno kreiranje teme!", "success");
          setInputVisible(false);
        })
        .catch((err) => setAlert(err, "danger"));
    } else {
      setAlert("Ime teme je obavezno!", "danger");
    }
  };
/* 
  const deleteCategory = (id) => {
    if (confirm("Da li sigurno želite da obrišete ovu temu?")) {
      axios
        .delete(`/api/topics/${id}`)
        .then(() => {
          setAlert("Tema uspešno izbirsana!", "success");
        })
        .catch((err) => setAlert(err, "danger"));
    }
  }; */

  const toggleEditable = (e) => {
    e.preventDefault();
    setIsEditable(!isEditable);
  };

  return (
    <>
      {topics
        ? topics.map((topic, index) => (
            <label className='category__container' key={topic.id}>
              <span
                className={
                  isEditable
                    ? "category__value category__value--active"
                    : "category__value"
                }
                contentEditable={isEditable}
                id={index}
                onClick={(e) => e.preventDefault()}
                onKeyPress={handleKeyPress}
              >
                {topic.name}
              </span>
              {topic_id ? (
                <input
                  defaultChecked={topic_id === topic.id}
                  name='radio'
                  onChange={handleRadioChange}
                  type='radio'
                  value={topic.name}
                />
              ) : (
                <input
                  name='radio'
                  onChange={handleRadioChange}
                  type='radio'
                  value={topic.name}
                />
              )}
              <span className='category__checkmark' />
              {isEditable ? null : (
                <button
                  className='button button--edit'
                  onClick={toggleEditable}
                >
                  Izmena imena
                </button>
              )}
              {/* <button
                className='button button--edit'
                onClick={(e) => {
                  e.preventDefault();
                  deleteCategory(topic.id);
                }}
              >
                Obriši
              </button> */}
            </label>
          ))
        : null}
      {inputVisible ? (
        <div>
          <input
            className='input'
            onChange={(e) =>
              setNewCategory({ ...newCategory, name: e.target.value })
            }
            onKeyPress={(e) => (e.key === "Enter" ? submitCategory(e) : null)}
            placeholder='Dodaj novu temu'
            value={newCategory.name}
          />
          <button onClick={submitCategory} className='button button--save'>
            Sačuvaj
          </button>
        </div>
      ) : null}
    </>
  );
}

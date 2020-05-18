import React, { lazy } from "react";
import { decaOdrastanjeTeme } from "../../Helpers";
import "react-dropdown/style.css";

const Dropdown = lazy(() => import("react-dropdown"));

export default function DecaOdrastanje() {
  const [selectedTopic, setSelectedTopic] = React.useState("");

  return (
    <section className='topics-page__deca-odrastanje'>
      <div className='container'>
        <h1>Deca i odrastanje</h1>
        <h2>Teme:</h2>
        <Dropdown
          onChange={(obj) => setSelectedTopic(obj.value)}
          options={decaOdrastanjeTeme}
          placeholder='Odaberite neku od ponudjenih tema...'
          value={selectedTopic}
        />
      </div>
    </section>
  );
}

import React from "react";
import Dropdown from "react-dropdown";
import { roditeljstvoTeme } from "../../Helpers";
import "react-dropdown/style.css";

export default function Roditeljstvo() {
  const [selectedTopic, setSelectedTopic] = React.useState("");

  return (
    <section className='topics-page__roditeljstvo'>
      <div className='container'>
        <h1>Roditeljstvo</h1>
        <h2>Teme:</h2>
        <Dropdown
          onChange={(obj) => setSelectedTopic(obj.value)}
          options={roditeljstvoTeme}
          placeholder='Odaberite neku od ponudjenih tema...'
          value={selectedTopic}
        />
      </div>
    </section>
  );
}

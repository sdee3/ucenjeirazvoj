import React from "react";
import Dropdown from "react-dropdown";
import { licniRazvojTeme } from "../../Helpers";
import "react-dropdown/style.css";

export default function LicniRazvoj() {
  const [selectedTopic, setSelectedTopic] = React.useState("");

  return (
    <section className='topics-page__licni-razvoj'>
      <div className='container'>
        <h1>Lični rast i lični razvoj</h1>
        <h2>Teme:</h2>
        <Dropdown
          onChange={(obj) => setSelectedTopic(obj.value)}
          options={licniRazvojTeme}
          placeholder='Odaberite neku od ponudjenih tema...'
          value={selectedTopic}
        />
      </div>
    </section>
  );
}

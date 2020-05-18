import React, { lazy } from "react";
import { licniRazvojTeme } from "../../Helpers";
import "react-dropdown/style.css";

const Dropdown = lazy(() => import("react-dropdown"));

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

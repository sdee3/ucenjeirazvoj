import React from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <h2>Kontaktirajte nas</h2>
        <section className='contact-sections'>
          <section>
            <h3>Preko forme:</h3>
            <ContactForm />
          </section>
          <section>
            <h3>Informacije o nama</h3>
            <p>Učenje i razvoj</p>
            <div className='contact-sections__image' />
            <p>
              Email:{" "}
              <a href='mailto:info@ucenjeirazvoj.com'>info@ucenjeirazvoj.com</a>
            </p>
          </section>
        </section>
      </div>
    </section>
  );
}

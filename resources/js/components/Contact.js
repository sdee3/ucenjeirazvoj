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
            <div className='contact-sections__image' />
            <p>Adresa:</p>
            <p>Milentija Popovića 4, 11070, Beograd</p>
            <p>Kontakt telefoni:</p>
            <p>
              <a href='tel:+381693607149'>069/3607149</a>,{" "}
              <a href='tel:+381644180789'>064/4180789</a>
            </p>
            <p>
              Email:{" "}
              <a href='mailto:info@ucenjeirazvoj.com'>info@ucenjeirazvoj.com</a>
            </p>
            <a
              className='footer__social-link'
              href='https://www.instagram.com/centarzaucenjeirazvoj/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-instagram' /> @centarzaucenjeirazvoj
            </a>
            <a
              className='footer__social-link'
              href='https://www.facebook.com/Ucenjeirazvoj-102507074853308/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <i className='fab fa-facebook' /> Centar za učenje i razvoj
            </a>
          </section>
        </section>
      </div>
    </section>
  );
}

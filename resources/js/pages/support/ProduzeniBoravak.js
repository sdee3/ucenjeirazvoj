import React, { lazy } from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = lazy(() => import("../../components/Breadcrumbs"));

export default function ProduzeniBoravak() {
  return (
    <>
      <Breadcrumbs
        page={
          <>
            <Link to='/usluge'>Usluge</Link>
            <i className='material-icons'>keyboard_arrow_right</i>
            <Link to={`/usluge/produzeni-boravak`}>Produženi boravak i program za predškolce</Link>
          </>
        }
      />
      <section className='support-page'>
        <div className='container'>
          <h1>Produženi boravak i program za predškolce</h1>
          <p>
          Produženi boravak je otvoren za decu od I do IV razreda osnovne škole. Nalazi se na Novom Beogradu, preko puta Hajata, pored OŠ &quot;Jovan Dučić&quot; i u blizini OŠ &quot;Laza Kostić&quot;.
          </p>
          <p>Program rada produženog  boravka svakom detetu nudi mogućnost da na kvalitetan i zabavan način provede vreme, završi školske obaveze i učestvuju u različitim aktivnostima koje pozitivno utiču na kognitivni, emocionalni i socijalni razvoj.</p>
          <strong>Naša ponuda produženog boravka obuhvata:</strong>
          <ul>
            <li>Rad u malim grupama;</li>
            <li>Individualni pristup;</li>
            <li>Dovođenje dece iz škole i u školu </li>
            <li>Pomoć u pisanju domaćih zadataka;</li>
            <li>Učenje školskog gradiva;</li>
            <li>Radionice iz oblasti razvoja kognitivnih  veština (koncentracija, pamćenje, tehnike učenja)</li>
            <li>Radionice podsticanja motivacije i samopouzdanja;</li>
            <li>Radionice podsticanja emocionalne pismenosti i socijlanih veština;</li>
            <li>Igranje i boravak na otvorenom;</li>
            <li>Voćnu užinu</li>
          </ul>
          <p>Može se ugovoriti produženi boravak na nedelju dana, dve nedelje ili na mesec dana, a moguć je dogovor i za neku drugu varijantu jer shvatamo važnost prilagođavanja Vašim potrebama.</p>
          <p>Dodatno se može organizovati ručak.</p>
          <h3>Čemu težimo u radu?</h3>
          <p>Najčešće deca dočekaju školu kognitivno spremna, ali nenaviknuta na svakodnevne zadatke, sedenje u klupama i izazove koje škola sa sobom nosi: mnogo više obaveza, odgovornosti, sazrevanja, samostalnosti, konflikata među vršnjacima i različitih socijalnih situacija. Rad smo nastojali da  organizujemo tako da pomaže deci da steknu radne navike, da se osamostale, a da teškoće na koje nailaze prilikom rada na domaćim zadacima i usvajanja gradiva rešavaju, uz podršku i usmeravanje osobe koja sa decom radi.</p>
          <p>Prilikom rada sa decom školskog uzrasta pratimo nastavni plan i program i proširujemo ga tematskim povezivanjem različitih sadržaja.Polazimo od toga da je učenje prirodni proces i oslanjamo se na dečju radoznalost i potrebu da uče i otkrivaju stvari oko sebe. Koristimo realne, svakodnevne situacije da pomognemo deci da na zabavan i očigledan način saznaju i primene naučeno.</p>
          <p>Tokom <strong>letnjeg i zimskog raspusta</strong> organizujemo različite programe za decu.</p>
          <p><strong>Program za predškolce</strong> osmišljen je da kroz organizovane aktivnosti podstiče razvoj kreativnosti, psihološku i emocionalnu pripremu dece za školu, razvoj motorike, koncentraciju i upornost. Nastojimo da aktivnostima obuhvatimo sve segmente celovite pripreme za polazak u školu: </p>
          <ul>
            <li>Grafomotorički segment,</li>
            <li>Segment razvoja predčitalačkih veština  i temeljne pripreme za čitanje,</li>
            <li>Segment upoznavanja sveta oko nas,</li>
            <li>Segment vezan za matematiku, matematičke pojmove i osnovne matematičke operacije.</li>
          </ul>
          <div className='support-page__image'>
            <img
              alt='Učenje i razvoj - Usluge produzenog boravka'
              src='https://res.cloudinary.com/sdee3-com/image/upload/v1600185633/ucenjeirazvoj/vece/usluge.jpg'
            />
          </div>
        </div>
      </section>
    </>
  );
}

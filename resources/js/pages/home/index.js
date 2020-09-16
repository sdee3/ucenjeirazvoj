import React, { lazy } from "react";
import { Helmet } from "react-helmet";
import { useMediaQuery } from "react-responsive";

const Promo = lazy(() => import("./Promo"));

export default function Home() {
  const isMobile = useMediaQuery({ query: "(max-width: 769px)" });

  return (
    <>
      <Helmet>
        <title>Učenje i razvoj</title>
        <meta
          name='description'
          content='Učenje i razvoj - Da budemo bolja verzija sebe'
        />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://ucenjeirazvoj.com/' />
        <meta property='og:title' content='Učenje i razvoj' />
        <meta
          property='og:description'
          content='Učenje i razvoj - Da budemo bolja verzija sebe'
        />
        <meta
          property='og:image'
          content='https://res.cloudinary.com/sdee3-com/image/upload/v1592039530/ucenjeirazvoj/ucenje-i-razvoj-cover.jpg'
        />
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://ucenjeirazvoj.com/' />
        <meta property='twitter:title' content='Učenje i razvoj' />
        <meta
          property='twitter:description'
          content='Učenje i razvoj - Da budemo bolja verzija sebe'
        />
        <meta
          property='twitter:image'
          content='https://res.cloudinary.com/sdee3-com/image/upload/v1592039530/ucenjeirazvoj/ucenje-i-razvoj-cover.jpg'
        />
      </Helmet>
      <section className='home-page'>
        <section className='home-page__main-img'>
          <img
            alt='Učenje i razvoj cover'
            src={
              isMobile
                ? "https://res.cloudinary.com/sdee3-com/image/upload/v1600187912/ucenjeirazvoj/homepage-mobile.jpg"
                : "https://res.cloudinary.com/sdee3-com/image/upload/v1600187912/ucenjeirazvoj/homepage.jpg"
            }
          />
        </section>
        <div className='container'>
          <p>
            Centar za učenje i razvoj je edukativni centar koji svoj program
            ostvaruje kroz sledeće aktivnosti:
          </p>
          <ul>
            <h3>
              <li>Produženi boravak za školsku decu i program za predškolce</li>
            </h3>
          </ul>
          <p>
            U produženom boravku, u radu sa decom od I do IV razreda, koristimo
            elemente igre, kao i elemente slobodnog i usmerenog učenja, kako bi
            razvijali motivaciju i želju za učenjem, rastom i postignućem a
            omogućili detetu da sa voljom i lakoćom savlada gradivo. Za učenike
            koji pohađaju škole u našem okruženju organizujemo:
          </p>
          <ul>
            <li>
              odvođenje dece u školu i dovođenje iz škole u prostorije Centra po
              rasporedu;
            </li>
            <li>
              aktivnosti koje se odnose na izradu domaćih zadataka i
              savladavanje tekućeg gradiva;
            </li>
            <li>
              kreativne, stvaralačke, kulinarske i edukativne radionice sa
              decom,
            </li>
            <li>slobodno vreme za igru i druženje;</li>
            <li>psihološko-pedagoške radionice za decu;</li>
            <li>dodatne aktivnosti u vidu časova engleskog jezika.</li>
          </ul>
          <p>
            OŠ “Jovan Dučić” se nalazi odmah pored Centra u bloku 21 a OŠ “Laza
            Kostić” je u blizini, sa roditeljima dece iz ostalih škola postoji
            mogućnost dogovora.
          </p>
          <p>
            Takođe, organizujemo program za decu tokom{" "}
            <strong>letnjeg i zimskog raspusta</strong> sa edukativnim
            sadržajima.
          </p>
          <p>
            <strong>Program za predškolce</strong> realizuje se jednom nedeljno
            u trajanju od dva sata. Rad se fokusira na razvoju različitih
            sposobnosti potrebnih za polazak u školu sa akcentom na verbalnu
            fluentonst, numerički faktor, perceptivni faktor, faktor memorije,
            faktor rezonovanja, spacijalni faktor kada su u pitanju kognitivne
            veštine ali obuhvata i različite elemente socijalne i emocionalne
            inteligencije, takođe veoma važne na tom uzrastu. Realizuje se kroz
            različite aktvnosti: vežbamo govor, crtamo, učimo slova kroz igru,
            na zabavan način učimo matematiku, organizujemo radionice (osećanja,
            odnosi sa drugima, konflikti, lepo ponašanje…
          </p>
          <ul>
            <h3>
              <li>
                Program za rani razvoj socijalne i emocionalne inteligencije
              </li>
            </h3>
          </ul>
          <p>
            Deca koja poseduju socijalne i emocionalne veštine lakše se
            suočavaju sa problemima i uspešnije ih rešavaju. Veliki deo tih
            veština se može naučiti i zbog toga je veoma važno afirmisati
            emocionalno i socijalno vaspitanja dece, koje omogućava da odrastu u
            emocionalno i socijalno inteligentne odrasle osobe. Mnogobrojna
            istraživanja su pokazala da uspeh u znatno većem procentu zavisi
            socio-emocionalne inteligencije nego od opštih intelektulanih
            sposobnosti. Takođe, intelektualne sposobnosti su velikim delom
            genetski determinisane a emocionalna i socijalna inteligencija se
            razvijaju i podložnije su učenju i vaspitavanju.
          </p>
          <p>
            Program se može realizvati kroz individulni rad ili u maloj grupi,
            za decu od 5 do 12 godina. Teme koje obuhvata odnose se na: verbalnu
            komunikaciju; neverbalnu komunikaciju; kako biti deo grupe; moja
            osećanja; brinem o sebi, brinem o drugima; rešavanje problema;
            slušanje-dvosmerna ulica; asertivnost.
          </p>
          <ul>
            <h3>
              <li>
                Programi ličnog rasta i razvoja - Individualni svetodavni i
                terapijski rad sa decom, roditeljima i odraslima
              </li>
            </h3>
          </ul>
          <p>
            Uz pomoć savetovanja i psihoterapije možemo se osloboditi
            emocionalnih problema, disfunkcionalnih ponašanja i iracionalnog
            načina razmišljanja. Svrha savetodavno-terapijskog rada sa{" "}
            <strong>odraslima</strong>{" "}
            je da naučimo kako da živimo kvalitetnije i budemo uspešniji u
            obavljanju svojih uloga. Rezultat pravovremeno sprovedenih
            psihoterapijskih intervencija je da postanemo zadovoljniji,
            sigurniji u sebe, sposobniji za bliskost, ljubav, uspešniji u učenju
            i obavljanju profesionalnih delatnosti.
          </p>
          <p>
            Kada se <strong>dete</strong> uključi u proces psihoterapijskog
            savetovanja, pristup u radu sa njim je kreativan i nenametljiv, uz
            neophodno poverenje u njegove kapacitete i potencijale. Kognitivne
            tehnike u tretmanu dece i mladih, polaze od pretpostavke da je
            ponašanje uslovljeno načinom na koji interpretiramo situacije ili
            događaje, odnosno načinom na koji mislimo. Tako posmatrano, reakcije
            i ponašanja su rezultat naučenih obrazaca mišljenja. To istovremeno
            znači da je disfunkcionalne obrasce moguće menjati, odnosno naučiti
            nove. Stoga različitim tehnikama na strukturisan i pristupačan način
            učimo dete da promenom sopstvenih misli menja osećanja a zatim i
            ponašanje.
          </p>
          <p>
            Savetovanje <strong>roditelja</strong> stavlja akcenat na probleme
            vezane za vaspitanje, učenje i roditeljstvo. Cilj savetovanja je
            unapređivanje roditeljskih veština. Savetovanje se može obavljati sa
            jednim ili sa oba roditelja. Roditelji na ovaj način mogu razrešiti
            dileme u vezi vaspitanja, steći znanja i uvide gde eventualno greše
            u tom procesu.
          </p>
        </div>
      </section>
    </>
  );
}

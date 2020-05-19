import React, { lazy } from "react";

const Services = lazy(() => import("./Services"));

export default function Promo() {
  return (
    <section className='home-page__promo'>
      <div className='container'>
        <div className='image'>
          <img
            alt='Abraham Maslov Citat Učenje i razvoj'
            src='https://res.cloudinary.com/sdee3-com/image/upload/v1589890925/ucenjeirazvoj/HomepageCitatAbrahamMaslov.png'
          />
        </div>
        <p>
          Ljudi su po prirodi skloni samoaktualizaciji i zato je sjajno kad pred
          sobom imamo cilj i želju da razvijamo potencijale i sposobnosti u
          različitim područjima i periodima života.
        </p>
        <p>
          Međutim, prvi korak, da bismo u tom procesu uspeli, je da prihvatimo
          naše sadašnje <strong>ja</strong>, I da prema sebi, ovde i sada,
          nastupamo iz pozicije <strong>ja vredim</strong>.
        </p>
        <p>
          Pozicija Ja vredim je pozicija samosvesti, koja omogućava spontanost i
          bliskost, konstruktivne odnose s drugim ljudima, rast i razvoj
          ličnosti, sposobnost za kreativnost i rad.
        </p>
        <p>
          Kako je pozitivan odnos prema sebi preduslov za pozitivne odnose prema
          drugima i prema svetu, možemo reći da je ova pozicija prirodna
          pozicija ljudi prema sopstvenom biću.
        </p>
        <p>
          Samo iz nje, možemo se graditi, razvijati postojeće, otkrivati nove
          potencijale, prevazići neprijatne emocije, neuspehe i greške, bolna
          iskustva, (samo)destruktivna ponašanja...Dakle, bilo koja osoba, baš
          takva kakva je, je ok, vredana i zaslužuje da voli i prihvata sebe, da
          je vole i prihvataju drugi, a iz te životne pozicije može uspeti da
          raste, uči, razvija se i bude još bolja verzija sebe.
        </p>
        <Services />
        <p>
          Nezavisno iz kog razloga bi <strong>dete</strong> bilo uključeno u
          proces psihoterapijskog savetovanja, pristup u radu sa njim je
          kreativan i nenametljiv, uz neophodno poverenje u njegove kapacitete i
          potencijale. Kognitivne tehnike u tretmanu dece i mladih, polaze od
          pretpostavke da je ponašanje uslovljeno načinom na koji interpretiramo
          situacije ili događaje, načinom na koji mislimo. U tom smislu,
          reakcije i ponašanja su rezultat naučenih obrazaca mišljenja. To
          istovremeno znači da je disfunkcionalne obrasce ponašanja moguće
          menjati, odnosno učiti nove. Stoga različitim tehnikama na
          strukturisan i pristupačan način učimo dete novim principima mišljenja
          koja će odrediti njegove buduće emocionalne reakcije i ponašanje.
        </p>
        <p>
          Savetovanje <strong>roditelja</strong> stavlja akcenat na probleme
          vezane za vaspitanje, učenje i roditeljstvo. Cilj savetovanja je
          unapređivanje roditeljskih veština. Savetovanje se može obavljati sa
          jednim ili sa oba roditelja. Roditelji na ovaj način mogu razrešiti
          dileme u vezi vaspitanja, steći znanja i uvide gde eventualno greše u
          tom procesu.
        </p>
        <p>
          <strong>Odrasli</strong> se uz pomoć savetovanja I psihoterapije mogu
          osloboditi emocionalnih problema, disfunkcionalnih ponašanja i
          iracionalnog načina razmišljanja. Svrha savetodavno terapijskog rada
          je da učimo kako da kvalitetnije živimo i budemo uspešniji u
          obavljanju svojih uloga. Kao rezultat pravovremeno sprovedenih
          psihoterapijskih postupaka kroz savetodavni rad, omogućiće nam da
          postanemo srećniji i zadovoljniji, sigurniji u sebe, sposobniji za
          bliskost, ljubav, uspešniji su u učenju i obavljanju profesionalne
          delatnosti, žive kvalitetnije.
        </p>
      </div>
    </section>
  );
}

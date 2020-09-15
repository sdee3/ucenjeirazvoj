import React, { lazy } from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = lazy(() => import("../../components/Breadcrumbs"));

export default function PodrskaOdraslima() {
  return (
    <>
      <Breadcrumbs
        page={
          <>
            <Link to='/usluge'>Usluge</Link>
            <i className='material-icons'>keyboard_arrow_right</i>
            <Link to={`/usluge/podrska-licnom-rastu-razvoju`}>
              Podrška ličnom rastu i razvoju
            </Link>
          </>
        }
      />
      <section className='support-page'>
        <div className='container'>
          <h1 className="text-center">
            Podrška ličnom rastu i razvoju - Individualni svetodavni i
            terapijski rad sa decom, roditeljima i odraslima
          </h1>
          <br />
          <br />
          <ul>
            <li><strong>Rad sa decom</strong></li>
          </ul>
          <p>
            Kada se dete uključi u proces psihoterapijskog savetovanja, pristup
            u radu sa njim je kreativan i nenametljiv, uz neophodno poverenje u
            njegove kapacitete i potencijale. Kognitivne tehnike u tretmanu dece
            i mladih, polaze od pretpostavke da je ponašanje uslovljeno načinom
            na koji interpretiramo situacije ili događaje, odnosno načinom na
            koji mislimo. Tako posmatrano, reakcije i ponašanja su rezultat
            naučenih obrazaca mišljenja. To istovremeno znači da je
            disfunkcionalne obrasce moguće menjati, odnosno naučiti nove. Stoga
            različitim tehnikama na strukturisan i pristupačan način učimo dete
            da promenom sopstvenih misli menja osećanja a zatim i ponašanje.
          </p>
          <p>
            Svako dete se tokom odrastanja suočava sa različitim izazovima zbog
            kojih povremeno može imati potrebu za stručnom podrškom u cilju:
          </p>
          <div className='support-page__image'>
            <img
              alt='Učenje i razvoj - Podrška deci'
              src='https://res.cloudinary.com/sdee3-com/image/upload/v1589803502/ucenjeirazvoj/PodrskaDeciGrafika.png'
            />
          </div>
          <br />
          <br />

          <ul>
            <li><strong>Rad sa roditeljima</strong></li>
          </ul>
          <p>
            Savetovanje roditelja stavlja akcenat na probleme vezane za
            vaspitanje, učenje i roditeljstvo. Cilj savetovanja je unapređivanje
            roditeljskih veština. Savetovanje se može obavljati sa jednim ili sa
            oba roditelja. Roditelji na ovaj način mogu razrešiti dileme u vezi
            vaspitanja, steći znanja i uvide gde eventualno greše u tom procesu.
          </p>
          <p>
            Roditelji se suočavaju sa različitim izazovima tokom odrastanja dece
            zbog kojih povremeno mogu imati potrebu za stručnom podrškom u
            cilju:
          </p>
          <div className='support-page__image'>
            <img
              alt='Učenje i razvoj - Podrška roditeljima'
              src='https://res.cloudinary.com/sdee3-com/image/upload/v1589805721/ucenjeirazvoj/PodrskaRoditeljimaGrafika.png'
            />
          </div>
          <br />
          <br />

          <ul>
            <li><strong>Lični rast i razvoj</strong></li>
          </ul>
          <p>
            Uz pomoć savetovanja i psihoterapije možemo se osloboditi
            emocionalnih problema, difunkcionalnih ponašanja i iracionalnog
            načina razmišljanja. Svrha savetodavno-terapijskog rada je da nučimo
            kako da živimo kvalitetnije i budemo uspešniji u obavljanju svojih
            uloga. Rezultat pravovremeno sprovedenih psihoterapijskih
            intervencija je da postanemo zadovoljniji, sigurniji u sebe,
            sposobniji za bliskost, ljubav, uspešniji u učenju i obavljanju
            profesionalnih delatnosti.
          </p>
          <p>
            Tokom života susrećemo se sa različitim izazovima koje da bi uspešno
            rešili povremeno možemo imati potrebu za stručnom podrškom u cilju:
          </p>
          <div className='support-page__image'>
            <img
              alt='Učenje i razvoj - Podrška odraslima'
              src='https://res.cloudinary.com/sdee3-com/image/upload/v1589805767/ucenjeirazvoj/PodrskaOdraslimaGrafika.png'
            />
          </div>
        </div>
      </section>
    </>
  );
}

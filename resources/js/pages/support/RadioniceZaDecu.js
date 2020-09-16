import React, { lazy } from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = lazy(() => import("../../components/Breadcrumbs"));

export default function RadioniceZaDecu() {
  return (
    <>
      <Breadcrumbs
        page={
          <>
            <Link to='/usluge'>Usluge</Link>
            <i className='material-icons'>keyboard_arrow_right</i>
            <Link to={`/usluge/radionice-za-decu`}>Radionice za decu</Link>
          </>
        }
      />
      <section className='support-page'>
        <div className='container'>
          <h1>Radionice za decu</h1>
          <h2>Radionice za decu predškolskog uzrasta, priprema za školu</h2>
          <p>
            Program za predškolce osmišljen je kroz različite aktivnosti kojima
            nastojimo da obuhvatmo sve segmente celovite pripreme i spremnosti
            deteta za polazak u školu. U okviru radionica kroz organizovane
            aktivnosti podstičemo kognitivni razvoj, ali i socijalni i
            emocionalni aspekt dečijeg rasta i razvoja.Program radionica se
            satoji iz tri celine: podsticanje socio-emocionalnog razvoja; razvoj
            veština komunikacije i priprema za početno čitanje i pisanje; razvoj
            logičkih i matematičkih pojmova
          </p>
          <h3>Ciljevi:</h3>
          <ul>
            <li>
              Psihološko-emocionalna i obrazovna priprema i spremnost za školu
            </li>
            <li>Podsticanje i unapredjenje razvoja fine i grube motorike</li>
            <li>Razvoj kreativnosti </li>
            <li>Razvoj mišljenja i bogaćenje postojeceg recnika </li>
            <li>Razvoj predčitalačkih veština (analiza i sinteza glasova)</li>
          </ul>
          <p>
            <strong>Uzrast deteta</strong>: godina pred polazak u školu
          </p>
          <p>
            <strong>Trajanje radionica</strong>: jednom nedeljno, 2 sata
          </p>

          <h2>Radionice za razvoj socijalne i emocionalne inteligencije</h2>
          <p>
            Program je osmišljen kroz devet tema u okviru kojih su obuhvaćeni
            najvažniji aspekti socijalne i emocionalne kompetentnosti,
            prilagođeni razvojnim karakteristikama dečijeg uzrasta. Uzimajući u
            obzir da se obrazovni sistem strogo bazira na razvoju intelektualnih
            veština i sposobnosti, veoma je važno da roditelji uvide značaj
            razvoja emocionalne i socijalne inteligencije svoje dece.
          </p>
          <p>
            Naučno je dokazano da emotivna inteligencija pomaže deci da kroz ceo
            život izgrađuju stabilne veze, da izlaze na kraj sa problemima
            (razvijaju adekvatne strategije na frustraciju), da budu uspešnija i
            da generalno budu zadovoljnija u životu. Deca sa razvijenom
            emotivnom inteligencijom bolje upravljaju emocijama i samim tim se
            uspešnije nose sa teškoćama, a u kasnijem životu, upravo zbog ovih
            sposobnosti i vestina, donose bolje odluke i postavljaju ciljeve
            koji su im dostižni. Ovo je vrlo bitno, jer ljudi koji uspevaju da
            se svakodnevno nose sa svim životnim aspektima (poteškoćama,
            gubicima...), imaju više šansi da budu zadovoljni sa svojim životom.
            Razvijanjem veština samosvesti i samokontrole, razvija se i
            tolerancija na stres kod dece, koja kasnije odrastaju u mentalno
            stabilne i integrisane osobe. Deca sa visokom emocionalnom
            inteligencijom predodređena su za uspeh, lično i profesionalno
            samoostvarenje, upravo zbog ove veštine.
          </p>
          <p>
            Socijalna inteligencija je poseban vid inteligencije, koji obuhvata
            više međusobno povezanih sposobnosti kao što su: emocionalna
            osetljivost, socijalna analitičnost, dobra samokontrola,
            socijabilnost, tolerancija i socijalna adaptibilnost. Socijalna
            inteligencija obuhvata i sposobnost tačnog prepoznavanja i
            razumevanja osećanja drugih, kao i pronicljivost u otkrivanju i
            tumačenju često skrivenih namera drugih, interpersonalnih stavova na
            osnovu primetnih (neverbalnih) znakova u ponašanju. Tako da možemo
            zaključiti da su emocionalna i scijalna inteligencija medjusobno
            povezane i uslovljene.
          </p>
          <p>
            <strong>Cilj</strong>: razvoj veština socijalne i emocionalne
            inteligencije
          </p>
          <p>Program radionica obuhvata sledeće teme:</p>
          <ul>
            <li>Komunikacija</li>
            <li>Neverbalna komunikacija</li>
            <li>Kako biti deo grupe</li>
            <li>Moja osećanja</li>
            <li>Brinem o sebi, brinem o drugima</li>
            <li>Rešavanje problema</li>
            <li>Slušanje - dvosmerna ulica</li>
            <li>Asertivnost</li>
            <li>Upravljanje konfliktima</li>
          </ul>
          <p>
            <strong>Uzrast deteta</strong>: od 5 do 12 godina
          </p>
          <p>
            <strong>Trajanje radionica</strong>: jednom nedeljno, 2 sata
          </p>
          <p>
            <em>
              Po završetku programa dete će dobiti portfolio, roditelji izveštaj
              o napretku deteta.
            </em>
          </p>
          <h2>Radionice za razvoj pažnje i koncentracije</h2>
          <p>
            Pažnja spada u jednu od najvažnijih veština koja je deci potrebna za
            uspešno učenje. Pažnja se može razvijati od najranijeg uzrasta.
          </p>
          <p>Program radionica će se realizovati kroz sledeće aktivnosti:</p>
          <ul>
            <li>Misaone zadatke</li>
            <li>Vežbe kombinacija</li>
            <li>Igre razvrstavanja po kriterijumima</li>
            <li>Zadatke opažanja</li>
            <li>Vežbe razvrstavanja</li>
            <li>Slagalice</li>
          </ul>
          <p>
            <strong>Cilj</strong>: Unapređenje veštine svesnog usmeravanja
            pažnje (voljna pažnja)
          </p>
          <p>
            <strong>Uzrast deteta</strong>: od 6 do 8 godina
          </p>
          <p>
            <strong>Trajanje radionice</strong>: jednom nedeljno, 1 sat
          </p>

          <p>
            <strong>
              <em>&quot;Kreativna subota&quot;</em>
            </strong>{" "}
            u okviru &quot;Centar za učenje i razvoj&quot; osmišljena je
            radionica da roditeljima omogući dodatno vreme za njih, prijatelje,
            obaveze, a deci dodatno druženje i rad na razvoju kognitivnih,
            emocionalnih, socijalnih veština, kreativnosti, stvaralaštva i fine
            motorike kroz slikanje, crtanje, modelovanje, igru, edukativne
            filmove u cilju povezivanja postojećih znanja dece sa novim
            saznanjima.
          </p>
          <p>
            Aktivosti na radionicama su organizovane tako da pažnja dece bude
            &quot;zaokupljena&quot; sve vreme a da se u isto vreme radi na
            razvoju različitih sposobnosti.
          </p>
          <p>Program “Kreativna subota” će se održavati od 12h do 15h.</p>
          <p>
            <strong>Uzrast deteta</strong>: od 4 do 8 godina
          </p>
          <p>
            Tačan program radionice biće objavljen nedelju dana unapred.
            Prijavljivanje se vrši u toku nedelje do popune mesta.
          </p>
        </div>
      </section>
    </>
  );
}

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
          name="description"
          content="Učenje i razvoj - Da budemo bolja verzija sebe"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ucenjeirazvoj.com/" />
        <meta property="og:title" content="Učenje i razvoj" />
        <meta
          property="og:description"
          content="Učenje i razvoj - Da budemo bolja verzija sebe"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/sdee3-com/image/upload/v1592039530/ucenjeirazvoj/ucenje-i-razvoj-cover.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://ucenjeirazvoj.com/" />
        <meta property="twitter:title" content="Učenje i razvoj" />
        <meta
          property="twitter:description"
          content="Učenje i razvoj - Da budemo bolja verzija sebe"
        />
        <meta
          property="twitter:image"
          content="https://res.cloudinary.com/sdee3-com/image/upload/v1592039530/ucenjeirazvoj/ucenje-i-razvoj-cover.jpg"
        />
      </Helmet>
      <section className="home-page">
        <section className="home-page__main-img">
          <img
            alt="Učenje i razvoj cover"
            src={
              isMobile
                ? "https://res.cloudinary.com/sdee3-com/image/upload/v1600187912/ucenjeirazvoj/homepage-mobile.jpg"
                : "https://res.cloudinary.com/sdee3-com/image/upload/v1600187912/ucenjeirazvoj/homepage.jpg"
            }
          />
        </section>

        <Promo />
      </section>
    </>
  );
}

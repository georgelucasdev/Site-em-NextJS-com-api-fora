import Head from "next/head";
import Script from "next/script";
//import "../pages/bootstrap.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <meta name="robots" content="index, follow"/>
        <meta name="description" content="Demostração de meus projetos, caso goste entre
        em cotato conosco na pagina contato."/>
        <meta name="author" content="George Lucas"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>George Lucas Dev</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossOrigin="anonymous"
        />
      </Head>

      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossorigin="anonymous"
      />
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;

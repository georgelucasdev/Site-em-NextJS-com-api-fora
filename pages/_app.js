import Head from "next/head";
import Script from "next/script";
import bootstrap from "reactstrap";
import "../styles/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Demostração de meus projetos, caso goste entre
        em cotato conosco na pagina contato."
        />
        <meta name="author" content="George Lucas" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>George Lucas Dev</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
      </Head>

      <Script
        defer
        src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js" type="text/javascript"></Script>
      <Script defer type="text/javascript" src="../components/scripts.js"></Script>
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

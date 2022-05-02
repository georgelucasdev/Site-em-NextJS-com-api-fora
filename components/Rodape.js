import react from "react";
import Link from "next/link";
import Image from "next/image";

import { Container, Jumbotron } from "reactstrap";

const Rodape = () => {
  return (
    <div>
      <br/>
    <nav className="navbar navbar-light bg-light">
      <Container>
      <a className="navbar-brand">George Lucas Aplicativos®   // 2010 - 2022 //</a>
      <Link href="mailto:contato@georgelucas.dev">
                <a className="nav-link" aria-current="page">
                  Contato
                </a>
              </Link>
    </Container>
    </nav>
    </div>
  );
};
export default Rodape;

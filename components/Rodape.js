import react from "react";
import Link from "next/link";
import Image from "next/image";

import { Container, Jumbotron } from "reactstrap";

const Rodape = () => {
  return (
    <div className="divrodape">
      <br />
        <Container className="containerRodape">
          <h6 className="rodapetext">
            George Lucas Aplicativos® // 2010 - 2022 //
          </h6>
          <Link className="nav-link" aria-current="page" href="mailto:contato@georgelucas.dev">
            <a>Contato</a>
          </Link>
        </Container>
    </div>
  );
};
export default Rodape;

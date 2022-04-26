import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid row justify-content-evenly">
        <div className="col-0">
          <Image src={Logo} width={64} height={64} />
        </div>
      </div>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="col-11">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link href="/">
              <a
                className="nav-link active"
                aria-current="page"
                margin-left="50px"
              >
                Inicio
              </a>
            </Link>
            <Link href="projetos">
              <a className="nav-link active" aria-current="page">
                Projetos
              </a>
            </Link>
            <Link href="contato">
              <a className="nav-link active" aria-current="page">
                Contato
              </a>
            </Link>
            <Link href="politica-de-privacidade">
              <a className="nav-link active" aria-current="page">
              Politica de Privacidade
              </a>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

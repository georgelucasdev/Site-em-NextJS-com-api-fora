import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logo.png"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Image src={Logo} width={64} height={64} line-height={5} />
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
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link href="/">
              <a className="nav-link active" aria-current="page">
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
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

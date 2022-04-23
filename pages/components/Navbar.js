import React from "react";
import Link from "next/link";


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link href="/">
              <a className="navbar-brand"> George Lucas Dev </a>
            </Link>
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
              <a className="nav-link active" aria-current="page">Inicio</a>
            </Link>
            <Link href="projetos">
              <a className="nav-link active" aria-current="page">Projetos</a>
            </Link>
            <Link href="sobre">
              <a className="nav-link active" aria-current="page">Sobre nós</a>
            </Link>
            <Link href="contato">
              <a className="nav-link active" aria-current="page">Contato</a>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

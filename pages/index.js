import react from "react";
import next from "next";
import Navbar from "./components/Navbar";
import MyApp from "./_app";
import { Container, Carousel, Jumbotron } from "reactstrap";
import Rodape from "./components/Rodape";
import Image from "next/image";
import Link from "next/link";
import Image1 from "../public/px1.jpg";

export default function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <Container>
        <div
          id="carouselSlidesOnly"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Image src={Image1} class="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <Image src={Image1} class="d-block w-100" alt="" />
            </div>
            <div className="carousel-item">
              <Image src={Image1} class="d-block w-100" alt="" />
            </div>
          </div>
        </div>
      </Container>
      <Rodape />
    </div>
  );
}

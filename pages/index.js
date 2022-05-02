import Navbar from "../components/Navbar";
import { Container, Carousel } from "reactstrap";
import Rodape from "../components/Rodape";

export default function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <Container>
        <h1 className="texto1">Bem vindo, nosso site esta em manutenção
        <br/>estamos preparando o melhor para todos!</h1>
        <image />
      </Container>
      <Rodape />
    </div>
  );
}

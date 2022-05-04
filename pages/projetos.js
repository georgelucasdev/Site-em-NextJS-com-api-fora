import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";
import Link from "next/link";
import { Container, } from "reactstrap";
import Bebet from '../public/aventuras-bebe.png';
import Image from "next/image";


function Projetos() {
  return (
    <div>
      <Navbar />
      <Container>
        <Container className="container-1-pro"><Image className="bebet"  src={Bebet} /> <h2 className="h2p1">Aventuras BeBê Tubarão,<br/> um jogo feito para 
        um jogo feito<br/> para crianças de 1 a 5 anos feito<br/> sem anuncios para que<br/> os pais possam deixar a criança<br/> se divertir sem chance de arrependimento!</h2></Container>
      </Container>
      <Rodape />
    </div>
  );
}
export default Projetos;

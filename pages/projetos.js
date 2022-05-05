import Navbar from "../components/Navbar";
import Rodape from "../components/Rodape";
import Link from "next/link";
import { Container } from "reactstrap";
import Bebet from "../public/aventuras-bebe.png";
import Image from "next/image";
import classicblocks from '../public/classicblocks.png'
import coloridas from '../public/coloridas.jpg'
import fallbeans from '../public/fallbeans.png'
import desafio from '../public/desafio.png'
import survival from '../public/survival.png'

function Projetos() {
  return (
    <div>
      <Navbar />
      <Container>
        <Container className="container-1-pro">
          <Image src={Bebet}  width={900} height={0} />
          <h2 className="h2p1 h2p1C">
            Aventuras BeBê Tubarão,
            <br /> um jogo feito para um jogo feito
            <br /> para crianças de 1 a 5 anos feito
            <br /> sem anuncios para que
            <br /> os pais possam deixar a criança
            <br /> se divertir sem chance de arrependimento!
          </h2>
        </Container>
        <br/>
        <Container className="container-2-pro">
          <h2 className="h2p2 h2p2C">
            Classic Blocks,
            <br /> e jogo feito no estilo de 
            <br /> quebrar os blocos quando chega
            <br /> em uma quantidade atualmente
            <br /> funcionando em modo offline
            <br /> porem o futuro reserva misterios!
          </h2>
          <Image src={classicblocks}  width={900} height={0} />
        </Container>
        <br/>
        <Container className="container-3-pro">
          <Image src={fallbeans}  width={500} height={0} />
          <h2 className="h2p3 h2p3C">
            Fall Beans,
            <br /> Jogo feito apartir de um classico
            <br /> disponivel na steam bastante
            <br /> conhecido, no formato de single
            <br /> player você vai ter diversão
            <br /> na dosse correta todos os dias.
          </h2>
        </Container>
        <br/>
        <Container className="container-4-pro">
          <h2 className="h2p4 h2p4C">
            Desafio: Retângulo Max,
            <br /> um otimo jogo para testa
            <br /> sua capacidade de aprendizado
            <br /> e coodenação motora
            <br /> tendo que por os quadrados
            <br /> muito bem alinhados.
          </h2>
          <Image src={desafio}  width={900} height={0} />
        </Container>
        <br/>
        <Container className="container-5-pro">
          <Image src={survival}  width={900} height={0} />
          <h2 className="h2p5 h2p5C">
            Survival Enernal Rise,
            <br /> jogo com objetivo simples
            <br /> de levar um objeto ate o
            <br /> ponto desejado porem
            <br /> cheio de obstáculos que
            <br /> irar fazer você pirar com este jogo
          </h2>
        </Container>
        <br/>
        <Container className="container-6-pro">
          <h2 className="h2p6 h2p6C">
            Águas Coloridas,
            <br /> um passatempo casual voltado
            <br /> a você ter que trocar o liquido
            <br /> de um repipiente ao outro
            <br /> porem fica mais complicado quando
            <br /> a quantidade de recipientes almenta
          </h2>
          <Image src={coloridas}  width={900} height={0} />
        </Container>
      </Container>
      <Rodape />
    </div>
  );
}
export default Projetos;

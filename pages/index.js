import react from "react";
import Navbar from "./components/Navbar";
import MyApp from "./_app";
import { Jumbotron, Container } from 'reactstrap';

export default function Home() {
  return (
    <div>
      <Navbar />
      <br/>
        <Container>
          <h2>Serviços</h2>
        </Container>
    </div>
  );
}

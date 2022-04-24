import react from "react";
import Navbar from "./components/Navbar";
import MyApp from "./_app";
import { Jumbotron, Container } from 'reactstrap';
import footer from './components/footer'
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <br/>
        <Container>
          <h2>Serviços</h2>
        </Container>
        
        <Footer/>
    </div>
  );
}

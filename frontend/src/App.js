import Header from "./components/Header";
import Footer from "./components/Footer";
import {Container,Row,Col} from 'react-bootstrap';
import './index.css'
import Test from "./components/Test";
function App() {
  return (
    <>
    <Header/>
    <Container>

    <main>
      Proshop
    </main>
    </Container>
    <Test/>
    <Footer/> 

   
    </>
  );
}

export default App;

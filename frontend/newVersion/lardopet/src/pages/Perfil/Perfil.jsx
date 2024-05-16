import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Container } from '../../styles/GlobalStyle';

export const Perfil = () => {
  return (
    <Container>
      <Header />
      <h1>Bem vindo(a)!</h1>
      <button>Sair</button>
      <Footer />
    </Container>
  );
}
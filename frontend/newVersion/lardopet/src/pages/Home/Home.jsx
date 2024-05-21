import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Container } from '../../styles/GlobalStyle';
import * as S from './styles';
import cachorro02 from '../../assets/cachorro02.jpg';

export const Home = () => {
  return (
    <Container>
      <Header />
      <S.Wrapper>
        <S.LeftSection>
          <S.TextContainer>
            <S.Title>Bem-vindo ao Lar do Pet!</S.Title>
            <S.Text>
              Nossa missão é conectar tutores dedicados com adotantes amorosos
              para oferecer uma segunda chance aos animais resgatados. No Lar do
              Pet, acreditamos que cada animal merece um lar seguro e cheio de
              amor.
            </S.Text>
            <S.Text>
              Explore nosso site para encontrar o novo membro da sua família.
              Temos uma variedade de pets que aguardam ansiosamente por uma nova
              oportunidade de serem felizes. Cada animal tem uma história única
              e está à espera de alguém especial como você para fazer parte de
              sua vida.
            </S.Text>
            <h2>Por que escolher o Lar do Pet?</h2>
            <S.Text>
              <strong>Resgate e Cuidado:</strong> Trabalhamos com resgatistas
              autônomos para garantir que cada animal receba o cuidado
              necessário antes de ser adotado.
            </S.Text>
            <S.Text>
              <strong>Adoção Responsável:</strong> Facilitamos o processo de
              adoção para garantir que cada pet encontre um lar adequado e
              amoroso.
            </S.Text>
            <S.Text>
              <strong>Suporte e Acompanhamento:</strong> Oferecemos suporte
              contínuo aos adotantes para garantir a adaptação e bem-estar do
              novo membro da família.
            </S.Text>
            <S.Text>Venha nos conhecer e faça parte dessa causa!</S.Text>
          </S.TextContainer>
          <S.ButtonContainer>
            <S.Button to="/pets">Quero adotar</S.Button>
            <S.Button to="/login">Quero doar</S.Button>
          </S.ButtonContainer>
        </S.LeftSection>
        <S.RightImage src={cachorro02} alt="Dog" />
      </S.Wrapper>
      <Footer />
    </Container>
  );
};

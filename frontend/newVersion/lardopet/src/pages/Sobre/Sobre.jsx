import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Container } from '../../styles/GlobalStyle';
import * as S from './styles';
import gato01 from '../../assets/gato01.jpg';
import cachorro01 from '../../assets/cachorro01.jpg';
import cachorro02 from '../../assets/cachorro02.jpg';

export const Sobre = () => {
  const images = [cachorro01, gato01, cachorro02];

  return (
    <Container>
      <img src="../../assets/gato01" alt="" />
      <Header />
      <S.Wrapper>
        <S.Container>
          <S.Title>Quem somos?</S.Title>
          <S.Text>
            No Lar do Pet, nossa paixão é fazer a diferença na vida dos animais
            resgatados. Somos uma equipe de voluntários dedicados, resgatistas e
            amantes dos animais, unidos pelo objetivo comum de proporcionar um
            lar seguro e amoroso para cada pet necessitado.
          </S.Text>
          <h2>Nossa Missão</h2>
          <S.Text>
            Nossa missão é simples, mas poderosa: transformar vidas através da
            adoção responsável. Acreditamos que cada animal merece uma segunda
            chance e que cada adoção deve ser feita com responsabilidade e
            carinho. Nos empenhamos em garantir que cada pet e cada adotante
            recebam o suporte necessário para uma adaptação feliz e saudável.
          </S.Text>
          <h2>Nossa Visão</h2>
          <S.Text>
            Sonhamos com um mundo onde todos os animais tenham um lar amoroso e
            onde a adoção seja a primeira escolha. Acreditamos que, juntos,
            podemos fazer a diferença e criar um futuro melhor para os animais e
            as pessoas.
          </S.Text>
          <h2>Junte-se a Nós</h2>
          <S.Text>
            Você pode fazer parte dessa transformação. Seja adotando,
            voluntariando ou doando, sua contribuição é essencial para
            continuarmos nosso trabalho. Juntos, podemos mudar vidas, uma adoção
            de cada vez.
          </S.Text>
        </S.Container>
        <S.ImagesWrapper>
          {images.map((image) => (
            <S.PetImage key={image} src={image} alt="pet" />
          ))}
        </S.ImagesWrapper>
      </S.Wrapper>
      <Footer />
    </Container>
  );
};

import * as S from "./styles";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

export const Home: React.FC = () => {
  return (
    <>
      <Header />
      <S.Wrapper>
        <S.LeftSection>
          <S.LeftContainer>
            <S.Title>Adote um amigo!</S.Title>
            <S.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, nisl nec fermentum commodo, purus felis scelerisque
              libero, nec ultrices nunc justo at justo. Nullam nec elit
              consectetur, ultricies sapien ut, ultrices lorem. Donec euismod
              tempus odio, a lacinia eros. Sed nec nunc nec odio ultricies
            </S.Text>
            <S.Text>
              luctus. Proin nec malesuada purus. Donec eget nunc auctor, varius
              libero in, tincidunt purus. Nulla facilisi. Nullam nec elit
              consectetur, ultricies sapien ut, ultrices lorem. Donec euismod
              tempus odio, a lacinia eros. Sed nec nunc nec odio ultricies
            </S.Text>
            <S.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              vehicula, nisl nec fermentum commodo, purus felis scelerisque
              libero, nec ultrices nunc justo at justo. Nullam nec
            </S.Text>
          </S.LeftContainer>
          <S.ButtonWrapper>
            <S.Button to='/pets'>Quero adotar</S.Button>
            <S.Button to='/petsing'>Quero doar</S.Button>
          </S.ButtonWrapper>
        </S.LeftSection>
        <S.RightImage
          src="https://s3.amazonaws.com/petz-cdm-stg/ea136d7f-af86-4a0c-9b3a-5b44ffc89c0b.jpeg"
          alt="Dog"
        />
      </S.Wrapper>
      <Footer />
    </>
  );
};

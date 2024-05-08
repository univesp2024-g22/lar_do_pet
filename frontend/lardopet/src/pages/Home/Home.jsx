import * as S from './styles';

export const Home = () => {
  return (
    <S.Wrapper>
      <S.LeftSection>
        <S.TextContainer>
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
        </S.TextContainer>
        <S.ButtonContainer>
          <S.Button to="/pets">Quero adotar</S.Button>
          <S.Button to="/login">Quero doar</S.Button>
        </S.ButtonContainer>
      </S.LeftSection>
      <S.RightImage
        src="https://s3.amazonaws.com/petz-cdm-stg/ea136d7f-af86-4a0c-9b3a-5b44ffc89c0b.jpeg"
        alt="Dog"
      />
    </S.Wrapper>
  );
};

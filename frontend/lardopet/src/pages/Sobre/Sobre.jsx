import * as S from './styles';

export const Sobre = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>Quem somos?</S.Title>
        <S.Text>
          Somos um projeto que tem como objetivo resgatar e ajudar animais de
          rua a encontrarem um lar.
        </S.Text>
        <S.Text>
          Nossos parceiros são pessoas que amam animais e que estão dispostas a
          ajudar esses amiguinhos de quatro patas a encontrar um lar.
        </S.Text>
      </S.Container>
      <S.ImagesWrapper>
        {Array(3).fill(
          <S.PetImage
            src="https://s3.amazonaws.com/petz-cdm-stg/ea136d7f-af86-4a0c-9b3a-5b44ffc89c0b.jpeg"
            alt="pet"
          />,
        )}
      </S.ImagesWrapper>
    </S.Wrapper>
  );
};

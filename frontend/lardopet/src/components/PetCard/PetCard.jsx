/* eslint-disable react/prop-types */
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import * as S from './styles';

export const PetCard = ({
  foto,
  nome,
  genero,
  idade,
  local,
  cidade,
  estado,
}) => {
  return (
    <>
      <S.Card>
        <S.PetImage src={foto} alt="Dog" />
        <S.PetName>{nome}</S.PetName>
        <S.PetInfosContainer>
          <S.PetGender>
            {genero}
            {genero === 'Fêmea' ? <BsGenderFemale /> : <BsGenderMale />}
          </S.PetGender>
          <S.PetAge>
            {idade}
            {idade > 1 ? ' anos' : ' ano'}
          </S.PetAge>
          <S.PetLocation>
            {local}, {cidade}, {estado}
          </S.PetLocation>
        </S.PetInfosContainer>
        <S.AdoptButtonWrapper>
          <S.AdoptButton to="/login">Quero adotar</S.AdoptButton>
        </S.AdoptButtonWrapper>
      </S.Card>
    </>
  );
};

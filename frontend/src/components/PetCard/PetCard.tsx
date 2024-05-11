import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { Pet } from "../../data/api";
import * as S from "./styles";

interface PetCardProps {
  pet: Pet;
}

export const PetCard: React.FC<PetCardProps> = ({ pet }) => {
  return (
    <>
      <S.Card>
        <S.PetImage src={pet.foto} alt="Dog" />
        <S.PetName>{pet.nome}</S.PetName>
        <S.PetInfosContainer>
          <S.PetGender>
            {pet.genero}
            {pet.genero === "Fêmea" ? <BsGenderFemale /> : <BsGenderMale />}
          </S.PetGender>
          <S.PetAge>
            {pet.idade} 
            {pet.idade > 1 ? ' anos' : ' ano'}
            </S.PetAge>
          <S.PetLocation>
            {pet.local}, {pet.cidade}, {pet.estado}
          </S.PetLocation>
        </S.PetInfosContainer>
        <S.AdoptButtonWrapper>
          <S.AdoptButton to='/login'>Quero adotar</S.AdoptButton>
        </S.AdoptButtonWrapper>
      </S.Card>
    </>
  );
};

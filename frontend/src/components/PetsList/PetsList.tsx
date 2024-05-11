import { pets } from "../../data/api";
import { PetCard } from "../PetCard/PetCard";
import * as S from "./styles";

export const PetsList: React.FC = () => {
  return (
    <>
      <S.Container>
        {pets.map((pet) => {
          return <PetCard key={pet.id} pet={pet} />;
        })}
      </S.Container>
    </>
  );
};

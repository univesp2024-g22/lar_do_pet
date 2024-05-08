import { Pets } from "../../data/api";
import { PetCard } from "../../components/PetCard/PetCard";
import * as S from "./styles";

export const PetsList = () => {
  return (
    <>
      <h1 style={{textAlign:"center", paddingTop: "2rem"}}>Pets que precisam de um lar</h1>
    <S.Container>
      {Pets.map((pet) => (
        <PetCard key={pet.id} {...pet} />
      ))}
    </S.Container>
    </>
  )
}
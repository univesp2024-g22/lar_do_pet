import { collection, getDocs } from 'firebase/firestore';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { PetCard } from '../../components/PetCard/PetCard';
import { Container } from '../../styles/GlobalStyle';
import * as S from "./styles";
import { useEffect, useState } from 'react';
import { db } from '../../config/firebase/firebase';

export const Pets = () => {
  // testando a criação de um usuário no banco de dados do firebase
  const [pets, setPets] = useState([]);

  useEffect(() => {
    const fetchPets = async () => {
      const petsCollection = collection(db, 'pets');
      const petsSnapshot = await getDocs(petsCollection);
      const petsList = petsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPets(petsList);
    };

    fetchPets();
  }, []);

  const handleDelete = (id) => {
    setPets((prevPets) => prevPets.filter((pet) => pet.id !== id));
  };


  return (
    <Container>
      <Header />
      <S.Title>Pets que precisam de um lar</S.Title>
    <S.Container>
      {pets.map((pet) => (
        <PetCard key={pet.id} {...pet} onDelete={handleDelete} />
      ))}
    </S.Container>
      <Footer />
    </Container>
  );
}
/* eslint-disable react/prop-types */
import { BsGenderFemale, BsGenderMale } from 'react-icons/bs';
import * as S from './styles';
import { useAuth } from '../../context/authContext';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { TutorContact } from '../TutorContact/TutorContact';
import { deleteDoc, doc } from 'firebase/firestore';
import { deleteObject, ref } from 'firebase/storage';
import { db, storage } from '../../config/firebase/firebase';

export const PetCard = ({
  id,
  name,
  genero,
  idade,
  tempo,
  userBairro,
  userCidade,
  userEstado,
  porte,
  imageUrl,
  imagePath, // caminho da imagem no Storage
  userFirstName,
  userPhone,
  userEmail,
  userId,
  onDelete,
}) => {
  const { currentUser } = useAuth();
  const [contatoVisivel, setContatoVisivel] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setContatoVisivel(!contatoVisivel);
  };

  const deletePet = async () => {
    const confirmed = window.confirm(
      'Tem certeza de que deseja excluir este pet? Esta ação não pode ser desfeita.',
    );
    if (!confirmed) return;

    setLoading(true);

    try {
      // Excluir imagem do Storage
      const imageRef = ref(storage, imagePath);
      await deleteObject(imageRef);

      // Excluir dados do Firestore
      await deleteDoc(doc(db, 'pets', id));

      console.log('Pet excluído com sucesso');
      window.alert('Pet excluído com sucesso.');
      // Atualize a lista de pets após a exclusão, se necessário
      onDelete(id);
    } catch (error) {
      console.error('Erro ao excluir o pet:', error);
      window.alert(
        'Ocorreu um erro ao excluir o pet. Por favor, tente novamente.',
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <S.Card>
        <S.PetImage src={imageUrl} alt="Dog" />
        <S.PetName>{name}</S.PetName>
        <S.PetInfosContainer>
          <S.PetInfos>
            <span>Idade: {' ' + idade + ' ' + tempo}</span>
            <span>Porte: {' ' + porte}</span>
            <S.PetGender>
              Gênero: {' ' + genero}{' '}
              {genero === 'Fêmea' ? <BsGenderFemale /> : <BsGenderMale />}
            </S.PetGender>
            <span>Bairro: {' ' + userBairro}</span>
            <span>Cidade: {' ' + userCidade}</span>
            <span>Estado: {' ' + userEstado}</span>
            {contatoVisivel && (
              <TutorContact
                userFirstName={userFirstName}
                userEmail={userEmail}
                userPhone={userPhone}
              />
            )}
          </S.PetInfos>
        </S.PetInfosContainer>
        <S.AdoptButtonWrapper>
          {!currentUser && (
            <S.AdoptButton to="/login">Quero adotar</S.AdoptButton>
          )}
          {currentUser && userId !== currentUser.uid && (
            <Button onClick={handleClick} text={'Informações do tutor'} />
          )}
          {currentUser && userId === currentUser.uid && (
            <Button
              onClick={deletePet}
              text={loading ? 'Excluindo...' : 'Remover Pet'}
              style={{ backgroundColor: 'red' }}
            />
          )}
        </S.AdoptButtonWrapper>
      </S.Card>
    </>
  );
};

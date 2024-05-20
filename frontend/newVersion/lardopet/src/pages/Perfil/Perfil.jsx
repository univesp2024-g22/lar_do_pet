import { collection, deleteDoc, doc, getDocs, query, where } from 'firebase/firestore';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { db, storage } from '../../config/firebase/firebase';
import { useAuth } from '../../context/authContext';
import { Container } from '../../styles/GlobalStyle';
import * as S from './styles';
import { deleteObject, listAll, ref } from 'firebase/storage';
import { deleteUser } from 'firebase/auth';
import { Button } from '../../components/Button/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Perfil = () => {
  const { currentUser, userData } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const deleteUserPets = async () => {
    const q = query(collection(db, "pets"), where("userId", "==", currentUser.uid));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((document) => {
      deleteDoc(doc(db, "pets", document.id));
    });

    // Excluir o documento do usuário
    const userDocRef = doc(db, "users", currentUser.uid);
    await deleteDoc(userDocRef);
  };

  const deleteUserFiles = async () => {
    const storageRef = ref(storage, `users/${currentUser.uid}/`);
    const listRef = await listAll(storageRef);
    
    for (const itemRef of listRef.items) {
      await deleteObject(itemRef);
    }
  };

  const deleteUserAccount = async () => {
    const confirmed = window.confirm("Tem certeza de que deseja excluir sua conta? Esta ação não pode ser desfeita.");
    if (!confirmed) return;

    setLoading(true);

    try {
      // Excluir dados do Firestore
      await deleteUserPets();

      // Excluir arquivos do Storage
      await deleteUserFiles();

      // Excluir usuário do Authentication
      await deleteUser(currentUser);

      console.log("Conta do usuário e todos os dados relacionados excluídos com sucesso");

      // Redirecionar ou fazer algo após a exclusão da conta
      navigate('/login');
    } catch (error) {
      console.error("Erro ao excluir a conta e os dados do usuário:", error);
      window.alert("Ocorreu um erro ao excluir a conta. Por favor, tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Header />
      <S.Content>
        <S.Title>
          Bem vindo(a)
          {', '}
          {currentUser && userData.firstName}!
        </S.Title>
        <S.ButtonContainer>
          <S.TextChoice>Escolha uma opção</S.TextChoice>
          <S.Button to="/pets">Adotar um Pet</S.Button>
          <S.Button to="/cadastro-pet">Doar um Pet</S.Button>
          <Button onClick={deleteUserAccount} text={!loading ? 'Excluir minha conta' : 'Excluindo...'} />
        </S.ButtonContainer>
      </S.Content>
      <Footer />
    </Container>
  );
};

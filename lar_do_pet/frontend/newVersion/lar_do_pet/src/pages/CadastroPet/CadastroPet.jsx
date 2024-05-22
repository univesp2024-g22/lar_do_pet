/* eslint-disable no-unused-vars */

import { ref, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { db, /*auth,*/ storage } from '../../config/firebase/firebase';

/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Container } from '../../styles/GlobalStyle';
import { Input } from '../../components/Input/Input';
import * as S from './styles';
import { Button } from '../../components/Button/Button';
import { useAuth } from '../../context/authContext';
import { useNavigate } from 'react-router-dom';

export const CadastroPet = () => {
  const navigate = useNavigate();
  const { currentUser, userData } = useAuth();
  const [pet, setPet] = useState({
    name: '',
    idade: '',
    tempo: '',
    genero: '',
    porte: ''
  });
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleChange = e => {
    const { name, value } = e.target;
    setPet(prevPet => ({ ...prevPet, [name]: value }));
  };

  const handleImageChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!currentUser) {
      alert("Você precisa estar logado para cadastrar um pet.");
      return;
    }

    if (!image) {
      alert("Por favor, envie uma foto do pet.");
      return;
    }

    const storageRef = ref(storage, `users/${currentUser.uid}/${image.name}`);
    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      'state_changed',
      snapshot => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        setProgress(progress);
      },
      error => {
        console.error(error);
        alert("Erro ao fazer upload da imagem.");
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async url => {
          try {
            await addDoc(collection(db, 'pets'), {
              ...pet,
              imageUrl: url,
              imagePath: storageRef.fullPath,
              userId: currentUser.uid,
              userBairro: userData?.bairro,
              userCidade: userData?.cidade,
              userEstado: userData?.uf,
              userEmail: userData?.email,
              userFirstName: userData?.firstName,
              userPhone: userData?.phone,
              createdAt: new Date()
            });
            alert("Pet cadastrado com sucesso!");
            navigate('/pets')
          } catch (error) {
            console.error("Erro ao cadastrar o pet: ", error);
            alert("Erro ao cadastrar o pet.");
          }
        });
      }
    );
  };



  const [error, setError] = useState('');



  return (
    <>
      <Container>
        <Header />
        <S.Container>
          <S.Title>Cadastre seu Pet aqui</S.Title>

          <S.Content onSubmit={handleSubmit}>
            <S.Span>* preenchimento obrigatório</S.Span>
            <S.Row>
              <Input
                label="Nome"
                name="name"
                type={'text'}
                value={pet.name}
                onChange={handleChange}
                required
              />
            </S.Row>
            <S.Row style={{ flexDirection: 'column', gap: '0.625rem' }}>
              <S.Label htmlFor="idade">
                Idade: <S.Strong>*</S.Strong>
              </S.Label>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <S.Input
                  name="idade"
                  type="number"
                  value={pet.idade}
                  onChange={handleChange}
                  required
                />
                <S.Input
                  placeholder="anos ou meses?"
                  name="tempo"
                  value={pet.tempo}
                  onChange={handleChange}
                  required
                ></S.Input>
              </div>
            </S.Row>

            <S.Row>
              <S.Div>
                <S.Label htmlFor="genero">
                  Gênero: <S.Strong>*</S.Strong>
                </S.Label>
                <S.Input
                  name="genero"
                  id="genero"
                  value={pet.genero}
                  placeholder="Macho ou Fêmea?"
                  onChange={handleChange}
                  required
                ></S.Input>
              </S.Div>
              <S.Div>
                <S.Label htmlFor="porte">
                  Porte: <S.Strong>*</S.Strong>
                </S.Label>
                <S.Input
                  name="porte"
                  id="porte"
                  value={pet.porte}
                  placeholder="Pequeno, Médio ou Grande?"
                  onChange={handleChange}
                  required
                ></S.Input>
              </S.Div>
            </S.Row>
            <S.Row>
              <Input
                label="Foto"
                name="foto"
                type="file"
                onChange={handleImageChange}
                required
              />
            </S.Row>
            {error && <S.Error>{error}</S.Error>}
            <Button
              text="Cadastrar"
              onClick={handleSubmit}
              style={{ width: '20rem' }}
            />
          </S.Content>
        </S.Container>
        <Footer />
      </Container>
    </>
  );
};

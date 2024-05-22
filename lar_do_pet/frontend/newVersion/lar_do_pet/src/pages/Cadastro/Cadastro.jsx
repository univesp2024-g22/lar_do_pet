/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { cepApi } from '../../services/api';
import { Container } from '../../styles/GlobalStyle';
// import { v4 as uuid } from 'uuid';
import { Input } from '../../components/Input/Input';
import * as S from './styles';
import { Button } from '../../components/Button/Button';
import { Link, useNavigate } from 'react-router-dom/dist';
import { auth, db } from '../../config/firebase/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc} from 'firebase/firestore';

export const Cadastro = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confEmail, setConfEmail] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [number, setNumber] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUF] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  // const userId = uuid();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  //chat gpt inicio
  const registerUser = async (email, password, userDetails) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
  
      // Armazena as informações adicionais do usuário no Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        firstName: userDetails.firstName,
        lastName: userDetails.lastName,
        phone: userDetails.phone,
        cep: userDetails.cep,
        logradouro: userDetails.logradouro,
        number: userDetails.number,
        bairro: userDetails.bairro,
        cidade: userDetails.cidade,
        uf: userDetails.uf,
        createdAt: new Date(),
      });
  
      console.log('Usuário registrado com sucesso:', user);
      navigate('/perfil');
    } catch (error) {
      console.error('Erro ao registrar usuário:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!firstName || !lastName || !phone || !email || !confEmail || !cep || !logradouro || !number || !bairro || !cidade || !uf || !password || !confPassword) {
      setError('Preencha todos os campos');
      return;
    }
    setError('');
    const userDetails = { bairro, cidade, uf, logradouro, number, phone, firstName, lastName, cep};
    await registerUser(email, password, userDetails);
  };
  //chat gpt final



  //consumindo a api do ViaCep com axios para preencher os campos de endereço de forma automática com base no CEP
  const handleCep = (cep) => {
    if (cep.length !== 8) {
      return;
    }
    cepApi.get(`/${cep}/json/`).then((response) => {
      const data = response.data;
      setLogradouro(data.logradouro);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setUF(data.uf);
    });
  };


  //valida se os e-mails coincidem
  const validateEmail = () => {
    if (email !== confEmail) {
      setErrorEmail('Os e-mails não coincidem');
    } else {
      setErrorEmail('');
    }
  };

  //valida se as senhas coincidem
  const validatePassword = () => {
    if (password !== confPassword) {
      setErrorPassword('As senhas não coincidem');
    } else {
      setErrorPassword('');
    }
  }

  return (
    <>
      <Container>
        <Header />
        <S.Container>
          <S.Title>Cadastro</S.Title>

          <S.Content onSubmit={handleSubmit}>
          <span style={{width:'100%', color:'red', marginBottom:'1rem', fontSize:'.6rem', fontWeight:'700'}}>* preenchimento obrigatório</span>
            <S.Row>
              <Input
                label="Nome"
                name="firstName"
                type={'text'}
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                maxLength="15"
                styleContainer={{ width: '30%' }}
                required
              />
              <Input
                label="Sobrenome"
                name="lastName"
                type={'text'}
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                styleContainer={{ width: '50%' }}
                required
              />
              <Input
                label={'Telefone'}
                name="phone"
                type="tel"
                value={phone}
                minLength="10"
                maxLength="11"
                onChange={(e) => setPhone(e.target.value)}
                styleContainer={{ width: '20%' }}
                required
              />
            </S.Row>
            <S.Row>
              <Input
                label="E-mail"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={validateEmail}
                error={errorEmail}
                required
              />
              <Input
                label="Confirme o e-mail"
                name="confEmail"
                type="email"
                value={confEmail}
                onChange={(e) => setConfEmail(e.target.value)}
                onBlur={validateEmail}
                error={errorEmail}
                required
              />
            </S.Row>
            <S.Row>
              <Input
                label="CEP"
                name="cep"
                type="text"
                value={cep}
                onChange={(e) => setCep(e.target.value)}
                onBlur={(e) => handleCep(e.target.value)}
                styleContainer={{ width: '30%' }}
                minLength="8"
                maxLength="8"
                required
              />
              <Input
                label="Endereço"
                name="endereco"
                type="text"
                value={logradouro}
                disabled={true}
              />
              <Input
                label="Nº"
                name="numero"
                type="text"
                styleContainer={{ width: '20%' }}
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                required
              />
            </S.Row>

            <S.Row>
              <Input
                label="Bairro"
                name="bairro"
                type="text"
                value={bairro}
                disabled={true}
              />
              <Input
                label="Cidade"
                name="cidade"
                type="text"
                value={cidade}
                disabled={true}
              />
              <Input
                label="Estado"
                name="estado"
                type="text"
                value={uf}
                disabled={true}
              />
            </S.Row>
            <S.Row>
              <Input
                label="Senha"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
                error={errorPassword}
                required
              />
              <Input
                label="Confirme a senha"
                name="confPassword"
                type="password"
                value={confPassword}
                onChange={(e) => setConfPassword(e.target.value)}
                onBlur={validatePassword}
                error={errorPassword}
                required
              />
            </S.Row>
           
            {error && <S.Error>{error}</S.Error>}
            <Button
              text="Cadastrar"
              onClick={handleSubmit}
              style={{ width: '20rem' }}
            />
            <S.TextSignup>
              Já tem uma conta?{' '}
              <S.Strong>
                <Link to="/login">Faça login.</Link>
              </S.Strong>
            </S.TextSignup>
          </S.Content>
        </S.Container>
        <Footer />
      </Container>
    </>
  );
};

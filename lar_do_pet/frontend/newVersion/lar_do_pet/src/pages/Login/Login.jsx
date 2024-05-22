//componentes da página
import { Container } from '../../styles/GlobalStyle';
import { Header } from '../../components/Header/Header';
import { Input } from '../../components/Input/Input';
import { Button } from '../../components/Button/Button';
import { Footer } from '../../components/Footer/Footer';
//hooks
import { useState } from 'react';
//react-router-dom
import { Link, useNavigate } from 'react-router-dom';
//firebase
import { auth } from '../../config/firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
//estilos
import * as S from './styles';

export const Login = () => {
  //credenciais de login
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  //mensagens de erro
  const [error, setError] = useState('');
  const [msg, setMsg] = useState(''); //para exibir a mensagem de erro ao tentar logar com credenciais inválidas
  //navegação
  const navigate = useNavigate();

  //função para logar o usuário
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      //verifica se os campos estão preenchidos
      if (!email | !password) {
        setMsg('');
        setError('Preencha todos os campos');
        return;
      } 
        //loga o usuário
        setError('');
        setMsg('');
        await signInWithEmailAndPassword(auth, email, password);
        console.log('Usuário logado com sucesso!');
        navigate('/perfil');
      
    } catch (error) {
      //exibe a mensagem de erro
      console.log('Erro de login: ', error);
      setError('');
      setMsg('E-mail e/ou senha inválidos. Tente novamente.');
    }
  };

  return (
    <Container>
      <Header />
      <S.Container>
        <S.Title>Login</S.Title>
        <S.Form onSubmit={handleSubmit}>
        <span style={{width:'100%', color:'red', marginBottom:'1rem', fontSize:'.6rem', fontWeight:'700'}}>* preenchimento obrigatório</span>
          <Input
            label="E-mail"
            type="email"
            name="username"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <Input
            label="Senha"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          {error && <S.Error>{error}</S.Error>}
          {msg && <S.Error>{msg}</S.Error>}
          <Button type="submit" text="Entrar" onClick={handleSubmit} />
          <S.TextSignup>
            Não tem uma conta?{' '}
            <S.Strong>
              <Link to="/cadastro">Cadastre-se.</Link>
            </S.Strong>
          </S.TextSignup>
        </S.Form>
      </S.Container>
      <Footer />
    </Container>
  );
};

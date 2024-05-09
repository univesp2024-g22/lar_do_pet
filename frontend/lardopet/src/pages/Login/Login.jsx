// import { loginValidate } from '../../validation/loginValidate';
import * as S from './styles';
import { Input } from '../../components/Form/Input';
import { Button } from '../../components/Button/Button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';

export const Login = () => {
  // const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!email | !senha) {
      setError('Preencha todos os campos');
      return
    }

    // const res = login(email, password);

    // if (res) {
    //   setError(res);
    //   return
    // }

    navigate('/perfil')
  };

  return (
    <S.Container>
      <S.Title>Login</S.Title>
      <S.Content autoComplete='off'>
        <Input
          type="email"
          label="E-mail"
          value={email}
          onChange={(e) => [setEmail(e.target.value), setError('')]}
        />
        <Input
          type="password"
          label="Senha"
          value={senha}
          onChange={(e) => [setSenha(e.target.value), setError('')]}
        />
        <S.Error>{error}</S.Error>
        <Button text="Entrar" onClick={handleSubmit} />
        <S.TextSignup>
          Não tem uma conta?{' '}
          <S.Strong>
            <Link to="/cadastro">Cadastre-se.</Link>
          </S.Strong>
        </S.TextSignup>
      </S.Content>
    </S.Container>
  );
};

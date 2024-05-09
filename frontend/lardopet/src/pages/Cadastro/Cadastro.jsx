// import { loginValidate } from '../../validation/loginValidate';
import * as S from './styles';
import { Input } from '../../components/Form/Input';
import { v4 as uuid } from 'uuid';
import { Button } from '../../components/Button/Button';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../../hooks/useAuth';

export const Cadastro = () => {
  // const { login } = useAuth();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [confEmail, setConfEmail] = useState('');
  const [cep, setCep] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [error, setError] = useState('');
  const id = uuid();

  const handleSubmit = () => {
    if (!email | !senha | !name | !phone | !endereco | !cidade | !estado | !confEmail | !cep | !confSenha) {
      setError('Preencha todos os campos');
      return;
    }

    // const res = login(email, password);

    // if (res) {
    //   setError(res);
    //   return
    // }

    navigate('/perfil');
  };

  return (
    <S.Container>
      <S.Title>Cadastro</S.Title>

      <S.Content autoComplete='off'>
        <S.Row>
          <Input
            label={'Nome'}
            type="text"
            // placeholder="Nome Completo"
            value={name}
            onChange={(e) => [setName(e.target.value), setError('')]}
          />
          <Input
            label={'Celular'}
            name="phone"
            type="tel"
            // placeholder="Celular: (xx) xxxxx-xxxx"
            value={phone}
            onChange={(e) => [setPhone(e.target.value), setError('')]}
          />
        </S.Row>
        <S.Row>
          <Input
            label={'E-mail'}
            type="email"
            // placeholder="E-mail"
            value={email}
            onChange={(e) => [setEmail(e.target.value), setError('')]}
          />
          <Input
            label={'Confirme o e-mail'}
            type="email"
            // placeholder="E-mail"
            value={confEmail}
            onChange={(e) => [setConfEmail(e.target.value), setError('')]}
          />
        </S.Row>
        <S.Row>
          <Input
            type="text"
            label={'CEP'}
            name="cep"
            value={cep}
            onChange={(e) => [setCep(e.target.value), setError('')]}
            styleContainer={{ width: '30%' }}
          />
          <Input
            type="text"
            label={'Endereço'}
            name="endereco"
            value={endereco}
            onChange={(e) => [setEndereco(e.target.value), setError('')]}
          />
        </S.Row>

        <S.Row>
          <Input
            type="text"
            label={'Cidade'}
            name="cidade"
            value={cidade}
            onChange={(e) => [setCidade(e.target.value), setError('')]}
          />
          <Input
            type="text"
            label={'Estado'}
            name="estado"
            value={estado}
            onChange={(e) => [setEstado(e.target.value), setError('')]}
          />
        </S.Row>
        <S.Row>
          <Input
            label={'Senha'}
            type="password"
            value={senha}
            onChange={(e) => [setSenha(e.target.value), setError('')]}
          />
          <Input
            label={'Confirme a senha'}
            type="password"
            value={confSenha}
            onChange={(e) => [setConfSenha(e.target.value), setError('')]}
          />
        </S.Row>
        <Input
          name="id"
          value={id}
          disabled={true}
          styleContainer={{ display: 'none' }}
        />
        <S.Error>{error}</S.Error>
        <Button text="Cadastrar" onClick={handleSubmit} style={{width:'20rem'}}/>
        <S.TextSignup>
          Já tem uma conta?{' '}
          <S.Strong>
            <Link to="/login">Faça login.</Link>
          </S.Strong>
        </S.TextSignup>
      </S.Content>
    </S.Container>
  );
};

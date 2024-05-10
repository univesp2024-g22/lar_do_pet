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

  const [nome, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [confirmeEmail, setConfEmail] = useState('');
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmeSenha, setConfSenha] = useState('');
  const [error, setError] = useState('');
  const id = uuid();

  const handleSubmit = async () => {
    const values = { nome, phone, email, confirmeEmail, cep, endereco, numero, bairro, cidade, estado, senha, confirmeSenha };
    try {
      const response = await fetch('http://localhost:8000/api/v1/usuarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao enviar os dados');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Falha na requisição:', error);
    }
  };

  const confirmSubmit = () => {
    if (!nome || !phone || !email || !confirmeEmail || !cep || !endereco || !numero || !bairro || !cidade || !estado || !senha || !confirmeSenha) {
      setError('Preencha todos os campos');
      return true;
    }
    return false;
  };

  const handleClick = () => {
    const errorOccurred = confirmSubmit();
    if (!errorOccurred) {
      handleSubmit();
    }
  };

  //   // const res = login(email, password);

  //   // if (res) {
  //   //   setError(res);
  //   //   return
  //   // }

  //   navigate('/perfil');
  // };

  return (
    <S.Container>
      <S.Title>Cadastro</S.Title>

      <S.Content autoComplete='off'>
        <S.Row>
          <Input
            label={'Nome'}
            type="text"
            // placeholder="Nome Completo"
            value={nome}
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
            value={confirmeEmail}
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
                    <Input
            type="text"
            label={'Nº'}
            name="numero"
            value={numero}
            onChange={(e) => [setNumero(e.target.value), setError('')]}
            styleContainer={{ width: '20%' }}
          />
        </S.Row>

        <S.Row>
        <Input
            type="text"
            label={'Bairro'}
            name="bairro"
            value={bairro}
            onChange={(e) => [setBairro(e.target.value), setError('')]}
          />
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
            value={confirmeSenha}
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
        <Button text="Cadastrar" onClick={handleClick} style={{width:'20rem'}}/>
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

import { useState } from "react";

export const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [porte, setPorte] = useState('');
  const [id, setId] = useState('');


  // função para cadastrar o pet
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     if (
  //       !nome |
  //       !genero |
  //       !idade |
  //       !porte
  //     ) {
  //       setError('Preencha todos os campos');
  //       return;
  //     } else {
  //       await createUserWithEmailAndPassword(auth, email, password);
  //       console.log('Pet cadastrado com sucesso!');
  //       setError('');
  //     }
  //   } catch (error) {
  //     console.log('Erro ao criar usuário: ', error);
  //   }
  // };

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
                label={'Celular'}
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
            {/* este input não aparece na tela pois é o id gerado para o usuário no momento do cadastro */}
            <Input
              type="text"
              name="id"
              value={id}
              disabled={true}
              styleContainer={{ display: 'none' }}
            />
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
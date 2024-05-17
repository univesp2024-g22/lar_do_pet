import { useState } from 'react';
import { Footer } from '../../components/Footer/Footer';
import { Header } from '../../components/Header/Header';
import { Container } from '../../styles/GlobalStyle';
import { Input } from '../../components/Input/Input';
import * as S from './styles';
import { Button } from '../../components/Button/Button';
// import { Link} from 'react-router-dom/dist';

export const CadastroPet = () => {
  const [name, setName] = useState('');
  const [idade, setIdade] = useState('');
  const [genero, setGenero] = useState('');
  const [porte, setPorte] = useState('');
  // const [logradouro, setLogradouro] = useState('');
  // const [bairro, setBairro] = useState('');
  // const [cidade, setCidade] = useState('');
  // const [uf, setUF] = useState('');
  // const [id, setId] = useState('');
  const [error, setError] = useState('');

  // função para cadastrar o pet
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!name | !genero | !idade | !porte) {
        setError('Preencha todos os campos');
        return;
      } else {
        // await createUserWithEmailAndPassword(auth, email, password);
        console.log('Pet cadastrado com sucesso!');
        setError('');
      }
    } catch (error) {
      console.log('Erro ao criar usuário: ', error);
    }
  };

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
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                  value={idade}
                  onChange={(e) => setIdade(e.target.value)}
                  required
                />
                <S.Select name="anosMeses" id="anosMeses">
                  <option value="anos">anos</option>
                  <option value="meses">meses</option>
                </S.Select>
              </div>
            </S.Row>

            <S.Row>
              <S.Div>
                <S.Label htmlFor="genero">
                  Gênero: <S.Strong>*</S.Strong>
                </S.Label>
                <S.Select
                  name="genero"
                  id="genero"
                  onChange={(e) => setGenero(e.target.value)}
                >
                  <option value="femea">Fêmea</option>
                  <option value="macho">Macho</option>
                </S.Select>
              </S.Div>
              <S.Div>
                <S.Label htmlFor="porte">
                  Porte: <S.Strong>*</S.Strong>
                </S.Label>
                <S.Select
                  name="porte"
                  id="porte"
                  onChange={(e) => setPorte(e.target.value)}
                >
                  <option value="pequeno">Pequeno</option>
                  <option value="medio">Médio</option>
                  <option value="grande">Grande</option>
                </S.Select>
              </S.Div>
            </S.Row>
            <S.Row>
              <Input label="Foto" name="foto" type="file" required />
            </S.Row>
            {/* este input não aparece na tela pois é o id gerado para o usuário no momento do cadastro */}
            {/* <Input
              type="text"
              name="id"
              value={id}
              disabled={true}
              styleContainer={{ display: 'none' }}
            /> */}
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

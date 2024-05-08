import { Link } from "react-router-dom";
import * as S from "../../styles/GlobalStyles";

export const Cadastro = () => {
  return (
    <S.Container>
      <h1>Cadastro</h1>
      <Link to="/sobre">Sobre</Link>
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
    </S.Container>
  );
}
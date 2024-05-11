import logo from "../../assets/img/new-logo-pet.png";
import * as S from "./styles";
import { FiLogIn } from "react-icons/fi";
import Menu from "../layout/menu/Menu";
import { Link } from "react-router-dom";

export const Header: React.FC = () => {
  return (
    <S.StyledHeader>
      <S.Wrapper>
        <Link to="/">
          <S.Logo src={logo} alt="logo" />
        </Link>
        <Menu />
        <S.ButtonWrapper>
          <S.Button to='/login'>
            Entrar
            <FiLogIn />
          </S.Button>
          <S.Button to='/signup'>Cadastre-se</S.Button>
        </S.ButtonWrapper>
      </S.Wrapper>
    </S.StyledHeader>
  );
};

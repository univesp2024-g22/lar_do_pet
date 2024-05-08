import { useLocation } from 'react-router-dom';
import logo from '../../assets/new-logo-pet.png';
import * as S from './styles';
export const Header = () => {
  const { pathname } = useLocation('');

  return (
    <S.Header>
      <S.Nav>
        <S.Logo src={logo} alt="Logo Lar do Pet" />
        <S.Menu>
          <S.MenuItem>
            <S.MenuLink to="/">Home</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/sobre">Sobre</S.MenuLink>
          </S.MenuItem>
          <S.MenuItem>
            <S.MenuLink to="/pets">Pets para adoção</S.MenuLink>
          </S.MenuItem>
          {pathname !== '/perfil' && pathname !== '/login' && (
            <S.MenuItem>
              <S.MenuLink to="/login">Login</S.MenuLink>
            </S.MenuItem>
          )}
          {pathname !== '/perfil' && pathname !== '/cadastro' && (
            <S.MenuItem>
              <S.MenuLink to="/cadastro">Cadastro</S.MenuLink>
            </S.MenuItem>
          )}
        </S.Menu>
      </S.Nav>
    </S.Header>
  );
};

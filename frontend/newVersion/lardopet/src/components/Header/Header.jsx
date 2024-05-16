import { useLocation } from 'react-router-dom';
import * as S from './styles';
import Logo from '../../assets/logo.png';

export const Header = () => {
  const { pathname } = useLocation();
  return (
    <>
      <S.Header>
        <S.Navbar>
          <S.Logo src={Logo} alt="Logo lar do Pet" />
          <S.Menu>
            <S.MenuItem>
              <S.MenuLink to="/">Home</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/sobre">Sobre</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/pets">Pets</S.MenuLink>
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
        </S.Navbar>
      </S.Header>
    </>
  );
};

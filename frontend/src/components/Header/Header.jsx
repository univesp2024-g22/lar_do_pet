import { useLocation } from 'react-router-dom';
import * as S from './styles';
import Logo from '../../assets/logo.png';
import { useAuth } from '../../context/authContext';

export const Header = () => {
  const { currentUser, logout } = useAuth();
  const { pathname } = useLocation();
  return (
    <>
      <S.Header>
        <S.Navbar>
          <S.Logo src={Logo} alt="Logo lar do Pet" />
          <S.Menu>
            <S.MenuItem>
              {currentUser ? (
                <S.MenuLink to="/perfil">Home</S.MenuLink>
              ) : (
                <S.MenuLink to="/">Home</S.MenuLink>
              )}
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/sobre">Sobre</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              <S.MenuLink to="/pets">Pets</S.MenuLink>
            </S.MenuItem>
            <S.MenuItem>
              {pathname !== '/perfil' &&
                pathname !== '/login' &&
                !currentUser && <S.MenuLink to="/login">Login</S.MenuLink>}
              {pathname !== '/perfil' &&
                pathname !== '/cadastro' &&
                !currentUser && (
                  <S.MenuLink to="/cadastro">Cadastro</S.MenuLink>
                )}
            </S.MenuItem>
            <S.MenuItem>
              {currentUser && <S.MenuLink to="/login" onClick={logout}>Sair</S.MenuLink>}
            </S.MenuItem>
          </S.Menu>
        </S.Navbar>
      </S.Header>
    </>
  );
};

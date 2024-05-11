import { useLocation } from "react-router-dom";

import * as S from "./styles";

export default function Menu() {
  const {pathname} = useLocation()
  return (
    <S.MenuWrapper>
            <S.Menu>
              <S.MenuItem>
                <S.MenuLink to="/" active={pathname === '/'}>Home</S.MenuLink>
              </S.MenuItem>
              <S.MenuHr />
              <S.MenuItem>
                <S.MenuLink to="/about" active={pathname === '/about'} >Sobre nós</S.MenuLink>
              </S.MenuItem>
              <S.MenuHr />
              <S.MenuItem>
                <S.MenuLink to="/pets" active={pathname === '/pets'} >Pets para adoção</S.MenuLink>
              </S.MenuItem>
            </S.Menu>
          </S.MenuWrapper>
  );
}

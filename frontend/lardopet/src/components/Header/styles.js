import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  background-color: var(--verde);
  padding: 0.5rem 1rem;
  position: fixed;
  z-index: 999;
  width: 100%;
  top: 0;
  left: 0;
`;

export const Nav = styled.nav`
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  height: 3%.5rem;
  /* background-color: var(--color02); */
`;
export const Logo = styled.img`
  max-width: 50px;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 1rem;

  /* @media (max-width: 768px) {
    display: none;
  } */
`;

export const MenuItem = styled.li`
  list-style: none;
  `

export const MenuLink = styled(Link)`
  color: var(--branco);
  border-radius: 0.25rem;
  padding: 0.5rem;

  &:hover {
    color: var(--verde);
    background-color: var(--branco);
  }
`
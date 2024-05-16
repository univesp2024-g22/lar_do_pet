import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  width: 100%;
  background-color: var(--verde);
  padding: 0 0.5rem;
`;

export const Navbar = styled.nav`
  max-width: 1240px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 4rem;
`;
export const Logo = styled.img`
  width: 3rem;
  height: 3rem;
`;

export const Menu = styled.ul`
  display: flex;
  gap: 1rem;
`;

export const MenuItem = styled.li`
  list-style: none;
`;

export const MenuLink = styled(Link)`
  text-decoration: none;
  color: var(--branco);
  font-weight: 600;
  padding: 0.5rem;
  border-radius: 5px;
  &:hover {
    color: var(--verde);
    background-color: var(--branco);
  }
`;

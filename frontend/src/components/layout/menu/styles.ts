import { Link } from "react-router-dom";
import styled from "styled-components";

export const MenuWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.2rem;
    justify-content: center;
  }
`;

export const MenuItem = styled.li`
  margin: 0 10px;
`;

interface MenuLinkProps {
  active: boolean
}
export const MenuLink = styled(Link)<MenuLinkProps>`
  color: ${props => props.active ? '#f2b630' : '#FFF'};
  text-decoration: none;
  /* font-size: 1.1rem; */
  font-weight: 500;
  padding: 0.3rem;
  border-radius: 5px;
  background-color: ${props => props.active ? 'var(--color01)' : ''};
  transition: all 0.2s ease;

  &:hover {
    color: ${props => props.active ? '' : 'var(--color05)'};
  }

`;

export const MenuHr = styled.hr`
  height: 1.9rem;
  border: none;
  border: 1px solid var(--color05);

  @media (max-width: 768px) {
    display: none;
  }
`;
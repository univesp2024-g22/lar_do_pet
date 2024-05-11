import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color06);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
  max-width: 1240px;
  max-height: 95px;
  padding: 0 2rem;
  margin: 0 auto;
`;

export const Logo = styled.img`
  margin: 1rem 0;
  padding-top: 5px;
  width: 5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.2rem;
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 5px;
  height: 30px;
  margin: auto 0px;
  padding: 0 10px;
  width: 125px;
  text-decoration: none;

  background-color: var(--color05);
  color: var(--color01);
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: bold;
  transition: all 0.2s ease;

  &:hover {
    border: solid 1px var(--color05);
    background-color: var(--color01);
    color: var(--color05);
    box-shadow: 0 0 5px var(--color05);
  }
`;

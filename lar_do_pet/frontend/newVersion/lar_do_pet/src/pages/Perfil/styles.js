import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: var(--verde);
`;

export const TextChoice = styled.h2`
  color: var(--verde);
  margin-top: 1rem;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  width: 100%;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 40px;
  /* width: 40%; */
  background-color: var(--verde);
  color: var(--branco);
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border: solid 1px var(--verde);
    background-color: var(--branco);
    color: var(--verde);
    box-shadow: 0 0 10px var(--verde);
  }
`;

import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled.main`
  max-width: 1240px;
  display: flex;
  gap: 2rem;
  margin: 2rem auto;
`;

export const LeftSection = styled.section`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0.5rem 1rem;

  @media(max-width: 935px) {
    justify-content: space-evenly;
    padding: 0 1rem;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 1rem;
  text-align: justify;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1.5rem;
`;

export const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  height: 40px;
  width: 40%;
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

export const RightImage = styled.img`
  width: 95%;
  height: 100%;
  margin: auto auto;
  border-radius: 10px;

  @media(max-width: 935px) {
    display: none;
  }
`;

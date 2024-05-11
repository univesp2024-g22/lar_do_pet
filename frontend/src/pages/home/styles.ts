import { Link } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 3rem;
  justify-content: center;
  padding: 0 9rem;
  margin: 4rem auto;
`;

export const LeftSection = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 1rem;
  text-align: justify;
`;

export const ButtonWrapper = styled.div`
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
  background-color: var(--color05);
  color: var(--color01);
  cursor: pointer;
  font-size: 1.3rem;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    border: solid 1px var(--color05);
    background-color: var(--color01);
    color: var(--color05);
    box-shadow: 0 0 10px var(--color05);
  }
`;

export const RightImage = styled.img`
  max-height: 400px;
  border-radius: 10px;
`;

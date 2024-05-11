import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2rem;
`;

export const Title = styled.h1`
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const Content = styled.div`
  width: 80%;
  max-width: 768px;
  display: flex;
  justify-content: center;
  box-shadow: 0 1px 2px var(--color05);
  padding: 2rem 0;
  background-color: #fff;
`;

export const Row = styled.div`
  display: flex;
  gap: 1.25rem;

  @media (max-width: 550px) {
    display: block;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: end;
`;

export const TextLogin = styled.span`
 display: flex;
 align-items: flex-end;
 gap: .2rem;
`

export const LoginLink = styled(Link)`
 text-decoration: none;
 color: var(--color05);
 &:hover {
  cursor: pointer;
  font-weight: 600;
 }
`

export const Button = styled.button`
  padding: 0.5rem;
  font-size: 1.25rem;
  cursor: pointer;
  background-color: var(--color05);
  color: var(--color01);
  border: none;
  border-radius: 5px;
  font-weight: 700;
  transition: all 0.2s ease;

  &:hover {
    border: solid 0.5px var(--color05);
    background-color: var(--color01);
    color: var(--color05);
    box-shadow: 2px 2px 5px var(--color05);
  }
`;

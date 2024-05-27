import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  width: 100%;
  margin: 0 auto;
`;

export const Title = styled.h1`
  color: var(--verde);
`;

export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background-color: var(--amarelo);
  color: var(--branco);
  font-weight: bold;
  width: 100%;

  &:focus,
  :hover {
    background-color: var(--branco);
    outline: none;
    color: var(--preto);
    box-shadow: 0 0 0 0.125rem var(--verde);
  }
`;
export const Label = styled.label`
  color: var(--verde);
  font-size: 0.865rem;
  font-weight: bold;
  padding: 0.125rem;
`;

export const Error = styled.p`
  color: var(--vermelho);
  font-size: 0.875rem;
  margin-top: 0.25rem;
`;

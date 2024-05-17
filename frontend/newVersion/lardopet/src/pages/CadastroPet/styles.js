import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
  gap: 0.625rem;
`;

export const Content = styled.form`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 2px var(--verde);
  border-radius: 0.375rem;
  padding: 1.25rem;
`;

export const Title = styled.h1`
  color: var(--verde);
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  /* background: black; */
`;

export const TextSignup = styled.span`
  font-size: 0.875rem;
`;

export const Error = styled.span`
  color: var(--vermelho);
  font-size: 0.875rem;
`;

export const Strong = styled.strong`
  color: #f00
`;

export const Label = styled.label`
  color: var(--verde);
  font-size: 0.865rem;
  font-weight: bold;
  padding: 0.125rem;
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

export const Select = styled.select`
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

export const Span = styled.span`
  width: 100%;
  color: #f00;
  margin-bottom: 1rem;
  font-size: .6rem;
  font-weight: 700;
`;

export const Div = styled.div`
  display: 'flex';
  flex-direction: 'column';
  gap: '0.625rem';
  width: '50%';
`;

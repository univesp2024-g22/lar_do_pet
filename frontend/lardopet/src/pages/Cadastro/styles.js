import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 1240px;
  margin: 2rem auto;
  /* background-color: #00f5f5; */
  gap: 0.625rem;
`;

export const Content = styled.form`
  gap: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* max-width: 1240px; */
  width: 60%;
  box-shadow: 0 1px 2px var(--verde);
  /* background-color: var(--amarelo); */
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
`;

export const TextSignup = styled.span`
  font-size: 0.875rem;
`;

export const Error = styled.span`
  color: var(--vermelho);
  font-size: 0.875rem;
`;

export const Strong = styled.strong`
  a {
    color: var(--verde);
  }
`;
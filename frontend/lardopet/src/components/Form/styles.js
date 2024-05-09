import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.625rem;
  width: 100%;
  margin: 0 auto;
  `

export const Input = styled.input`
  outline: none;
  border: none;
  border-radius: 0.5rem;
  padding: 0.5rem;
  /* margin: 0.5rem; */
  background-color: var(--amarelo);
  color: var(--branco);
  font-weight: bold;
  width: 100%;

  &:focus {
    background-color: var(--verde);
  
  }
`
export const Label = styled.label`
  color: var(--verde);
  font-size: .865rem;
  font-weight: bold;
  padding: 0.125rem;
  /* background-color: aqua; */
`
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 1rem;
  width: 100%;
`;

export const FieldStyled = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid;
  outline: none;
  font-size: 1.125rem;
  width: 100%;
`;
export const Label = styled.label`
  text-transform: capitalize;
`;

export const RequiredLabel = styled.span`
  color: var(--color02);
`;

export const ErrorStyled = styled.span`
  color: var(--color02);
  font-size: 0.875rem;
`;

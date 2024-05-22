import styled from "styled-components";

export const Button = styled.button`
  border: none;
  border-radius: 5px;
  height: 40px;
  width: 100%;
  padding: 0 1rem;
  background-color: var(--verde);
  color: var(--branco);
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: bold;
  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: var(--branco);
    color: var(--verde);
    box-shadow: 0 0 5px var(--verde);
  }
`;

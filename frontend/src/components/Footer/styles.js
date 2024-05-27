import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 0.8rem;
  width: 100%;
  background-color: var(--verde);
`;

export const Text = styled.p`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--branco);
`;

export const IconsWrapper = styled.div`
  display: flex;
  line-height: 1.5;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  
  svg {
    cursor: pointer;
    transition: 0.3s;
    font-size: 1rem;
    color: var(--branco);
    &:hover {
      transform: scale(1);
      box-shadow: 0 0 5px var(--amarelo);
    }
  }
`;

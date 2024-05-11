import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  display: flex;
  gap: 1rem;
  justify-content: center;
  padding: 1rem;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: var(--color06);
  margin-top: auto;
`;

export const Text = styled.p`
  color: var(--color01);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  line-height: 1.5;
`;

export const IconsWrapper = styled.div`
  display: flex;
  line-height: 1.5;
  align-items: center;
  gap: 0.5rem;

  svg {
    color: var(--color01);
    cursor: pointer;
    transition: 0.3s;
    font-size: 1rem;
    &:hover {
      transform: scale(1);
      // box-shadow: 0 0 5px var(--color05);
    }
  }
`;

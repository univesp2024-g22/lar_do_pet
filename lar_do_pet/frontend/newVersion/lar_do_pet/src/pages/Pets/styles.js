import styled from "styled-components";

export const Container = styled.main`
  max-width: 1240px;
  height: 100%;
  margin: 2rem auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 2rem;

  & > * {
    flex: 1 250px;
  }
`;

export const Title = styled.h1`
  font-weight: 600;
  color: var(--verde);
  padding: 1rem 0;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2.7rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  margin-top: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const Button = styled.button`
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
export const PetWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

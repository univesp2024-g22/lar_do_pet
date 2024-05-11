import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  padding: 0 9rem;
  margin: auto;
  width: 70%;
  height: 73vh;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.9rem;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 1rem;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  gap: 3rem;
`;

export const PetImage = styled.img`
  height: 200px;
  margin-top: 1rem;
  border-radius: 10px;
`;

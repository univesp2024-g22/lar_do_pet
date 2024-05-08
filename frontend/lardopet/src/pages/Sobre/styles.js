import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 0 9rem;
  margin: 2rem auto;
  max-width: 1240px;
  min-height: 72.7vh;

  @media (max-width: 935px) {
    height: 76.3vh;
}

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.9rem;
  text-align: center;
  padding: 0 1rem;

  @media (max-width: 935px) {
    width: 100vw;
}
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

  @media (max-width: 935px) {
    gap: 1rem;
}
`;

export const PetImage = styled.img`
  height: 200px;
  margin-top: 1rem;
  border-radius: 10px;

  @media (max-width: 935px) {
    height: 150px;
}
`;

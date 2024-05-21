import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 3rem;
  padding: 2rem 0;
  max-width: 1240px;

`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.9rem;
  max-width: 800px;
  margin: 1rem auto;
`;

export const Title = styled.h1`
  color: var(--verde);
  font-weight: 600;
`;

export const Text = styled.p`
  font-size: 1rem;
`;

export const ImagesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  justify-content: space-between;
  /* background-color: aqua; */
  /* height: inherit; */
  /* padding: 1rem 0;  */
  /* margin: 0 1rem; */

  @media (max-width: 935px) {
    gap: 1rem;
}
`;

export const PetImage = styled.img`
  width: 200px;
  /* margin-top: 1rem; */
  border-radius: 10px;

  @media (max-width: 935px) {
    height: 150px;
}
`;

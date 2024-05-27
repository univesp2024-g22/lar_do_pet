import { Link } from "react-router-dom";
import styled from "styled-components";

export const Card = styled.article`
  background-color: var(--amarelo);
  width: 100%;
  padding: 1rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 10px;
`;

export const PetImage = styled.img`
  width: 230px;
  height: 250px;
  object-fit: contain;
`;

export const PetInfosContainer = styled.div`
  padding: 0 10px 10px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const PetName = styled.h2`
  margin: 1rem 0;
  font-size: 1.2rem;
  font-weight: 700;
  text-align: center;
  min-height: 2rem;
`;

export const PetGender = styled.span`
  width: 100%;
`;

export const PetInfos = styled.div`
  width: 100%;
  display: flex;
  gap: 0.2rem;
  flex-direction: column;
  margin-bottom: 10px;
`;

export const AdoptButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const AdoptButton = styled(Link)`
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

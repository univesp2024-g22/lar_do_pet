import { Link } from "react-router-dom";
import styled from "styled-components";

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border: none;
  border-radius: 5px;
  height: 30px;
  margin: auto 0px;
  padding: 0 10px;
  width: 120px;
  text-decoration: none;

  background-color: var(--color05);
  color: var(--color01);
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: bold;

  &:hover {
    background-color: var(--color01);
    color: var(--color05);
    box-shadow: 0 0 5px var(--color05);
  }`
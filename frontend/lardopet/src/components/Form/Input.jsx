/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as S from './styles';
export const Input = ({ label, ...props }) => {
  return (
    <S.Container style={props.styleContainer}>
      <S.Label>{`${label} :`}</S.Label>
      <S.Input {...props}/> 
    </S.Container>
  );
};

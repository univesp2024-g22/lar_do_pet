/* eslint-disable react/prop-types */
import * as S from './styles';
export const Button = ({ text, type = 'button', onClick, style }) => {
  return (
    <S.Button type={type} onClick={onClick} style={style}>
      {text}
    </S.Button>
  );
};
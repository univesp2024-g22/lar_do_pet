import * as S from './styles';
import { FaRegCopyright } from 'react-icons/fa';
import { FiInstagram, FiFacebook } from 'react-icons/fi';
export const Footer = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <S.Footer>
      <S.Text>
        <FaRegCopyright /> {anoAtual} Lar do Pet. Todos os direitos reservados.
      </S.Text>
      <S.IconsWrapper>
        <FiInstagram />
        <FiFacebook />
      </S.IconsWrapper>
    </S.Footer>
  );
};
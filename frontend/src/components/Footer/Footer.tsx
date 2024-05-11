import { FiFacebook, FiInstagram } from "react-icons/fi";
import * as S from "./styles";
import { FaRegCopyright } from "react-icons/fa6";

export const Footer: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Text>
        <FaRegCopyright /> {new Date().getFullYear()} Lar do Pet. Todos os direitos reservados.
      </S.Text>
      <S.IconsWrapper>
        <FiInstagram />
        <FiFacebook />
      </S.IconsWrapper>
    </S.Wrapper>
  );
};

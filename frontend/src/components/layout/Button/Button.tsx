import * as S from './styles';

interface ButtonProps {
  children: React.ReactNode;
  to: string;
  active: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <S.Button {...props}>{children}</S.Button>;
}
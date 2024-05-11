import { Field, ErrorMessage } from "formik";
import * as S from "./styles";

interface InputProps {
  name: string;
  type?: string;
  label: string;
  required?: boolean;
  disabled?: boolean;
  accept?: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  name,
  type = "",
  label,
  required,
  disabled,
  accept,
  ...props
}) => {
  return (
    <S.Container>
      <S.Label>
        {label || name} {required && <S.RequiredLabel>*</S.RequiredLabel>}
      </S.Label>
      <Field
        as={S.FieldStyled}
        name={name}
        type={type}
        disabled={disabled}
        accept={accept}
        {...props}
      />
      <ErrorMessage name={name} component={S.ErrorStyled} />
    </S.Container>
  );
};

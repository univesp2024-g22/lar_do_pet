/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as S from './styles';
export const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  onBlur,
  error,
  disabled,
  styleContainer,
  minLength,
  maxLength,
  required,
  ...props
}) => {
  return (
    <S.Container style={styleContainer}>
      <S.Label htmlFor={name}>
        {`${label} : `}
        {required && <span style={{ color: 'red' }}>*</span>}
      </S.Label>
      <S.Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        minLength={minLength}
        maxLength={maxLength}
        required={required}
        {...props}
      />
      {error && <S.Error>{error}</S.Error>}
    </S.Container>
  );
};

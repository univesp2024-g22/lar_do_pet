import * as Yup from 'yup';

export const loginValidate = Yup.object({
  email: Yup.string().email('Email inválido!').required('E-mail obrigatório!'),
  password: Yup.string().min(6, 'A senha deve conter no mínimo 6 caracteres!').required('Senha obrigatória!')
})
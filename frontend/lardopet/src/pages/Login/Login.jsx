import { loginValidate } from '../../validation/loginValidate';
import { Form, FormikProvider, useFormik } from 'formik';
import { EmailInput } from '../../components/Form/EmailInput';
import { PasswordInput } from '../../components/Form/PasswordInput';
import { v4 as uuid } from 'uuid';
import { Button } from '../../components/Button/Button';
import { TextInput } from '../../components/Form/TextInput';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [loginError, setLoginError] = useState('');
  const URL = useNavigate();
  const id = uuid();

  const handleSubmit = (values) => {
    try {
      if (values.email === 'aaa@aaa.com' && values.password === '123456') {
        setLoginError('');
        URL('/perfil');
        console.log('Login efetuado com sucesso!');
      } else {
        throw new Error();
      }
    } catch (error) {
      setLoginError('E-mail e/ou senha inválido(s)!');
    }
  };

  const form = useFormik({
    initialValues: {
      id: id,
      email: '',
      password: '',
    },
    validationSchema: loginValidate,
    onSubmit: handleSubmit,
  });
  return (
    <>
      <h1>Login</h1>
      <FormikProvider value={form}>
        <Form>
          <EmailInput
            name="email"
            label="E-mail"
            placeholder="exemplo@exemplo.com"
            onChange={form.handleChange}
            error={form.errors.email}
          />
          <PasswordInput
            name="password"
            label="Senha"
            placeholder="Digite sua senha"
            onChange={form.handleChange}
            error={form.errors.password}
          />
          <TextInput
            name="id"
            value={id}
            disabled={true}
            onChange={form.handleChange}
            error={form.errors.password}
            style={{ display: 'none' }}
          />

          <Button type="button" onClick={form.submitForm}>
            Entrar
          </Button>
        </Form>
      </FormikProvider>
      {loginError && <span style={{ color: 'red' }}>{loginError}</span>}
    </>
  );
};

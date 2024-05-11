import { Form, Formik, FormikHelpers } from "formik";
import { Input } from "../../components/Input/Input";
import * as Yup from "yup";
import * as S from "../signup/styles"
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";

interface FormData {
  email: string;
  senha: string;
}

export const Login: React.FC = () => {
  const initialValues: FormData = {
    email: "",
    senha: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
  });

  const handleSubmit = (
    values: FormData,
    { setSubmitting }: FormikHelpers<FormData>
  ) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <>
       <Header />
      <S.Container style={{width: '50%'}}>
        <S.Title>Faça seu login abaixo</S.Title>
        <S.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form style={{ width: "90%" }}>
                
                <S.Row>
                  <Input name="email" type="email" label="email" required />
                </S.Row>
                <S.Row>
                  <Input name="senha" type="password" label="senha" required />
                </S.Row>
                <S.ButtonWrapper>
                  <S.TextLogin >
                    Não possui cadastro? 
                    <S.LoginLink to='/signup'>Clique aqui.</S.LoginLink>
                  </S.TextLogin >
                  <S.Button type="submit" disabled={isSubmitting}>
                    Entrar
                  </S.Button>
                </S.ButtonWrapper>
              </Form>
            )}
          </Formik>
        </S.Content>
      </S.Container>
      <Footer />
    </>
  )
}
import { Form, Formik, FormikHelpers } from "formik";
import { Input } from "../../components/Input/Input";
import * as Yup from "yup";
import * as S from "./styles";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
// import { isValidCPF } from "./validationCPF";

interface FormData {
  cpf: string;
  dataNascimento: Date;
  nome: string;
  sobrenome: string;
  cep: string;
  bairro: string;
  endereco: string;
  numero: string;
  cidade: string;
  estado: string;
  email: string;
  senha: string;
  confirmeEmail: string;
  confirmeSenha: string;
}

export const Signup: React.FC = () => {
  const initialValues: FormData = {
    cpf: "",
    dataNascimento: new Date(),
    nome: "",
    sobrenome: "",
    cep: "",
    bairro: "",
    endereco: "",
    numero: "",
    cidade: "",
    estado: "",
    email: "",
    confirmeEmail: "",
    senha: "",
    confirmeSenha: "",
  };

  const validationSchema = Yup.object({
    cpf: Yup.string()
      .min(11, "CPF incompleto (deve conter 11 dígitos)")
      .max(11, "CPF incorreto (deve conter 11 dígitos)")
      .required("Campo obrigatório"),
    dataNascimento: Yup.string()
      .test(
        "validar-data",
        "A data de nascimento não pode ser maior que a data atual",
        function (value) {
          if (!value) return true; // Se value for undefined, considera-se válido
          const currentDate = new Date();
          const selectedDate = new Date(value);
          return selectedDate <= currentDate;
        }
      )
      .required("Campo obrigatório"),
    nome: Yup.string()
      .min(2, "O nome deve ter no mínimo 2 caracteres")
      .required("Campo obrigatório"),
    sobrenome: Yup.string()
      .min(2, "O sobrenome deve ter no mínimo 2 caracteres")
      .required("Campo obrigatório"),
    cep: Yup.string()
      .min(8, "CEP incompleto (deve conter 8 dígitos)")
      .max(8, "CEP incorreto (deve conter 8 dígitos)")
      .required("Campo obrigatório"),
    numero: Yup.string().required("Campo obrigatório"),
    email: Yup.string().email("Email inválido").required("Campo obrigatório"),
    confirmeEmail: Yup.string()
      .oneOf([Yup.ref("email"), undefined], "Emails não conferem")
      .required("Campo obrigatório"),
    senha: Yup.string().required("Campo obrigatório"),
    confirmeSenha: Yup.string()
      .oneOf([Yup.ref("senha"), undefined], "Senhas não conferem")
      .required("Campo obrigatório"),
  });

  
  const handleSubmit = async (
    values: FormData,
    { setSubmitting }: FormikHelpers<FormData>
  ) => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/usuarios/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });
  
      if (!response.ok) {
        throw new Error('Erro ao enviar os dados');
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Falha na requisição:', error);
    }
    setSubmitting(false);
  };  

  return (
    <>
      <Header />
      <S.Container>
        <S.Title>Cadastre-se abaixo</S.Title>
        <S.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form style={{ width: "90%" }}>
                <S.Row>
                  <Input name="cpf" type="text" label="cpf" required />
                  <Input
                    name="dataNascimento"
                    type="date"
                    label="data de nascimento"
                    required
                  />
                </S.Row>
                <S.Row>
                  <Input name="nome" label="nome" required />
                  <Input name="sobrenome" label="sobrenome" required />
                </S.Row>
                <S.Row>
                  <Input name="cep" label="cep" required />
                  <Input name="bairro" label="bairro" />
                  {/* <Input name="bairro" label="bairro" disabled={true} /> */}
                </S.Row>
                <S.Row>
                  <Input name="endereço" label="endereço" />
                  {/* <Input name="endereço" label="endereço" disabled={true} /> */}
                  <Input name="numero" label="nº" required />
                </S.Row>
                <S.Row>
                  <Input name="cidade" label="cidade" />
                  <Input name="estado" label="estado" />
                  {/* <Input name="cidade" label="cidade" disabled={true} /> */}
                  {/* <Input name="estado" label="estado" disabled={true} /> */}
                </S.Row>
                <S.Row>
                  <Input name="email" type="email" label="email" required />
                  <Input
                    name="confirmeEmail"
                    type="email"
                    label="confirmar email"
                    required
                  />
                </S.Row>
                <S.Row>
                  <Input name="senha" type="password" label="senha" required />
                  <Input
                    name="confirmeSenha"
                    type="password"
                    label="confirmar senha"
                    required
                  />
                </S.Row>
                <S.ButtonWrapper>
                  <S.TextLogin >
                    Já possui cadastro? 
                    <S.LoginLink to='/login'>Clique aqui.</S.LoginLink>
                  </S.TextLogin >
                  <S.Button type="submit" disabled={isSubmitting}>
                    Cadastrar
                  </S.Button>
                </S.ButtonWrapper>
              </Form>
            )}
          </Formik>
        </S.Content>
      </S.Container>
      <Footer />
    </>
  );
};

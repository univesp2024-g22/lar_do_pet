import { Form, Formik, FormikHelpers } from "formik";
import { Input } from "../../components/Input/Input";
import * as Yup from "yup";
import * as S from "./styles";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
// import { Label } from "../../components/Input/styles";

interface FormData {
  nomePet: string;
  idadePet: number | null;
  cepPet: number | null;
}

export const Petsing: React.FC = () => {
  const initialValues: FormData = {
    nomePet: "",
    idadePet: null,
    cepPet: null,
  };

  const validationSchema = Yup.object({
    nomePet: Yup.string()
      .required("Campo obrigatório"),
    idadePet: Yup.number()
      .min(0, "A idade do pet não pode ser negativa")
      .required("Campo obrigatório"),
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
      <S.Container>
        <S.Title>Cadastro de Pets</S.Title>
        <S.Content>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form style={{ width: "90%" }}>
                <Input name="nomePet" label="Nome do Pet" required />
                <S.Row>
                  <Input name="idadePet" type="number" label="Idade do Pet" required />
                  <Input name="fotosPet" type="file" accept="image/*" label="Fotos do Pet" required />
                </S.Row>
                <S.Row>
                  <Input name="cepPet" type="number" placeholder="1234678" label="CEP" required />
                  <Input name="bairroPet" label="Bairro" required />
                </S.Row>
                <S.Row>
                  <Input name="cidadePet" label="Cidade" required />
                  <Input name="cidadePet" label="Estado" required />
                </S.Row>
                <S.Button type="submit" disabled={isSubmitting}>
                  Cadastrar
                </S.Button>
              </Form>
            )}
          </Formik>
        </S.Content>
      </S.Container>
      <Footer />
    </>
  );
};

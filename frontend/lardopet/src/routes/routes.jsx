/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Cadastro } from '../pages/Cadastro/Cadastro';
import { Login } from '../pages/Login/Login';
import { Sobre } from '../pages/Sobre/Sobre';
import { Home } from '../pages/Home/Home';
// import { GlobalStyles } from '../styles/GlobalStyles';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { PetsList } from '../pages/Pets/PetsList';
import { Perfil } from '../pages/Perfil/Perfil';
// import { useAuth } from '../hooks/useAuth';
// import { Page404 } from './pages/Page404/Page404';

//Rota privada para o perfil do usuário logado
const Private = ({ Item }) => {
  const { signed } = false;
  return signed > 0 ? <Item /> : <Login />;
};

export const RoutesApp = () => {
  return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/pets" element={<PetsList />} />
          <Route exact path="/perfil" element={<Private Item={Perfil} />} />
          {/* <Route path="/*" element={<Page404 />}/> */}
        </Routes>
        <Footer />
        {/* <GlobalStyles /> */}
      </BrowserRouter>
  );
}

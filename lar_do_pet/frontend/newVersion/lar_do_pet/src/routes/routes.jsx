import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { Sobre } from '../pages/Sobre/Sobre';
import { Pets } from '../pages/Pets/Pets';
import { Login } from '../pages/Login/Login';
import { Cadastro } from '../pages/Cadastro/Cadastro';
import { Perfil } from '../pages/Perfil/Perfil';
import { CadastroPet } from '../pages/CadastroPet/CadastroPet';

export const RoutesApp = () => {




  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/cadastro-pet" element={<CadastroPet />} />
        <Route path="/perfil" element={<Perfil />} />
      </Routes>
    </BrowserRouter>
  );
};

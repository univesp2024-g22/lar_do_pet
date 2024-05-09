/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */

import { RoutesApp } from "./routes/routes";
import { GlobalStyles } from "./styles/GlobalStyles";
// import { AuthProvider } from "./hooks/useAuth";

function App() {
  return (
    <>
      <RoutesApp />
      <GlobalStyles />
    </>
  );
}

export default App;

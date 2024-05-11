import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";
import { GlobalStyles } from "./styles/GlobalStyles";
export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyles />
    </>
  );
}

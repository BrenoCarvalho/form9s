import {
  BrowserRouter,
  Routes as RoutesComponent,
  Route,
} from "react-router-dom";
import HomePage from "./pages/Home";
import FormPage from "./pages/Form";

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesComponent>
        <Route path="/" element={<HomePage />} />
        <Route path="/formulario" element={<FormPage />} />
      </RoutesComponent>
    </BrowserRouter>
  );
};

export default Routes;

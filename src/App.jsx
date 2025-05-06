import "./App.css";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { CustomLink } from "./components/Routes/CustomLink";
import { MainRoutes } from "./components/Routes/MainRoutes";

function App() {
  return (
    <>
      <BrowserRouter>
        <header>
          <CustomLink to="/">Главная</CustomLink>
          <CustomLink to="/History">История</CustomLink>
          <CustomLink to="/Culture">Культура</CustomLink>
          <CustomLink to="/reference">Справка</CustomLink>
        </header>
        <main>
          <MainRoutes />
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;

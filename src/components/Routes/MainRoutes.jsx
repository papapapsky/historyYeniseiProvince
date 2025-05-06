import { Routes, Route } from "react-router-dom";
import { MainPage } from "./Pages/MainPage";
import { HistoryPage } from "./Pages/HistoryPage";
import { CulturePage } from "./Pages/CulturePage";
import { Reference } from "./Pages/ReferencePage";
import { Test } from "./Pages/Test";
import { TestRoute } from "./Pages/TestDetails/TestRoute";

export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/History" element={<HistoryPage />} />
      <Route path="/Culture" element={<CulturePage />} />
      <Route path="/Reference" element={<Reference />} />
      <Route path="/Test" element={<Test />} />
      <Route path="/TestStart" element={<TestRoute />} />
    </Routes>
  );
};

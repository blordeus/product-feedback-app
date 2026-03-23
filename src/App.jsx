import { Routes, Route } from "react-router-dom";
import Suggestions from "./pages/Suggestions";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Suggestions />} />
    </Routes>
  );
}
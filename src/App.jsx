import { Routes, Route } from "react-router-dom";
import Suggestions from "./pages/Suggestions";
import FeedbackDetail from "./pages/FeedbackDetail";
import NewFeedback from "./pages/NewFeedback";
import EditFeedback from "./pages/EditFeedback";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Suggestions />} />
      <Route path="/feedback/:id" element={<FeedbackDetail />} />
      <Route path="/new" element={<NewFeedback />} />
      <Route path="/edit/:id" element={<EditFeedback />} />
    </Routes>
  );
}
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Suggestions from "./pages/Suggestions";
import FeedbackDetail from "./pages/FeedbackDetail";
import NewFeedback from "./pages/NewFeedback";
import EditFeedback from "./pages/EditFeedback";
import Roadmap from "./pages/Roadmap";
import data from "./data/data.json";

export default function App() {
  const [productRequests, setProductRequests] = useState(data.productRequests);

  function handleAddFeedback(newFeedback) {
    setProductRequests((currentItems) => [newFeedback, ...currentItems]);
  }

  function handleUpdateFeedback(updatedFeedback) {
    setProductRequests((currentItems) =>
      currentItems.map((item) =>
        item.id === updatedFeedback.id ? updatedFeedback : item
      )
    );
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<Suggestions productRequests={productRequests} />}
      />
      <Route
        path="/feedback/:id"
        element={<FeedbackDetail productRequests={productRequests} />}
      />
      <Route
        path="/new"
        element={
          <NewFeedback
            productRequests={productRequests}
            onAddFeedback={handleAddFeedback}
          />
        }
      />
      <Route
        path="/edit/:id"
        element={
          <EditFeedback
            productRequests={productRequests}
            onUpdateFeedback={handleUpdateFeedback}
          />
        }
      />
      <Route
        path="/roadmap"
        element={<Roadmap productRequests={productRequests} />}
      />
    </Routes>
  );
}
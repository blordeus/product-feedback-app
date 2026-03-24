import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Suggestions from "./pages/Suggestions";
import FeedbackDetail from "./pages/FeedbackDetail";
import NewFeedback from "./pages/NewFeedback";
import EditFeedback from "./pages/EditFeedback";
import Roadmap from "./pages/Roadmap";
import data from "./data/data.json";

const STORAGE_KEY = "product-feedback-app-data";

export default function App() {
  const [productRequests, setProductRequests] = useState(() => {
    const storedValue = localStorage.getItem(STORAGE_KEY);

    if (storedValue) {
      try {
        return JSON.parse(storedValue);
      } catch (error) {
        console.error("Failed to parse stored product requests:", error);
      }
    }

    return data.productRequests;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(productRequests));
  }, [productRequests]);

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

  function handleDeleteFeedback(feedbackId) {
    setProductRequests((currentItems) =>
      currentItems.filter((item) => item.id !== feedbackId)
    );
  }

  function handleAddComment(feedbackId, newComment) {
    setProductRequests((currentItems) =>
      currentItems.map((item) => {
        if (item.id !== feedbackId) return item;

        const nextComments = item.comments ? [...item.comments, newComment] : [newComment];

        return {
          ...item,
          comments: nextComments,
        };
      })
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
        element={
          <FeedbackDetail
            productRequests={productRequests}
            onAddComment={handleAddComment}
          />
        }
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
            onDeleteFeedback={handleDeleteFeedback}
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
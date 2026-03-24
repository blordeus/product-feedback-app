import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CustomDropdown from "../components/shared/CustomDropdown";

const initialFormValues = {
  title: "",
  category: "feature",
  detail: "",
};

const categoryOptions = [
  { label: "Feature", value: "feature" },
  { label: "UI", value: "ui" },
  { label: "UX", value: "ux" },
  { label: "Enhancement", value: "enhancement" },
  { label: "Bug", value: "bug" },
];

export default function NewFeedback({ productRequests, onAddFeedback }) {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));
  }

  function validateForm() {
    const nextErrors = {};

    if (!formValues.title.trim()) {
      nextErrors.title = "Can't be empty";
    }

    if (!formValues.category.trim()) {
      nextErrors.category = "Please select a category";
    }

    if (!formValues.detail.trim()) {
      nextErrors.detail = "Can't be empty";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const nextId =
      productRequests.length > 0
        ? Math.max(...productRequests.map((item) => item.id)) + 1
        : 1;

    const newFeedback = {
      id: nextId,
      title: formValues.title.trim(),
      category: formValues.category,
      upvotes: 0,
      status: "suggestion",
      description: formValues.detail.trim(),
      comments: [],
    };

    onAddFeedback(newFeedback);
    navigate("/");
  }

  return (
    <main className="mx-auto max-w-[540px] px-4 py-8 sm:px-6 sm:py-14">
      <Link to="/" className="text-[14px] font-bold text-text hover:underline">
        ← Go Back
      </Link>

      <div className="relative mt-14 rounded-[10px] bg-white p-6 sm:p-10">
        <div className="absolute -top-7 left-6 flex h-14 w-14 items-center justify-center rounded-full bg-[linear-gradient(135deg,#E84D70_0%,#A337F6_55%,#28A7ED_100%)] text-[28px] font-bold text-white sm:left-10">
          +
        </div>

        <h1 className="text-[18px] font-bold text-dark sm:text-[24px]">
          Create New Feedback
        </h1>

        <form className="mt-10 space-y-6" onSubmit={handleSubmit} noValidate>
          <div>
            <label
              htmlFor="title"
              className="block text-[13px] font-bold text-dark sm:text-[14px]"
            >
              Feedback Title
            </label>
            <p className="mt-1 text-[13px] text-text sm:text-[14px]">
              Add a short, descriptive headline
            </p>
            <input
              id="title"
              name="title"
              type="text"
              value={formValues.title}
              onChange={handleChange}
              className={`mt-4 w-full rounded-[5px] bg-bg px-4 py-3 text-[15px] text-dark outline-none ${
                errors.title
                  ? "ring-2 ring-danger"
                  : "focus:ring-2 focus:ring-secondary"
              }`}
            />
            {errors.title ? (
              <p className="mt-2 text-[14px] text-danger">{errors.title}</p>
            ) : null}
          </div>

          <div>
            <CustomDropdown
              label="Category"
              hint="Choose a category for your feedback"
              name="category"
              value={formValues.category}
              options={categoryOptions}
              onChange={handleChange}
            />
            {errors.category ? (
              <p className="mt-2 text-[14px] text-danger">{errors.category}</p>
            ) : null}
          </div>

          <div>
            <label
              htmlFor="detail"
              className="block text-[13px] font-bold text-dark sm:text-[14px]"
            >
              Feedback Detail
            </label>
            <p className="mt-1 text-[13px] text-text sm:text-[14px]">
              Include any specific comments on what should be improved, added,
              etc.
            </p>
            <textarea
              id="detail"
              name="detail"
              rows={5}
              value={formValues.detail}
              onChange={handleChange}
              className={`mt-4 w-full rounded-[5px] bg-bg px-4 py-3 text-[15px] text-dark outline-none ${
                errors.detail
                  ? "ring-2 ring-danger"
                  : "focus:ring-2 focus:ring-secondary"
              }`}
            />
            {errors.detail ? (
              <p className="mt-2 text-[14px] text-danger">{errors.detail}</p>
            ) : null}
          </div>

          <div className="flex flex-col-reverse gap-4 sm:flex-row sm:justify-end">
            <Link
              to="/"
              className="rounded-[10px] bg-dark px-6 py-3 text-center text-[14px] font-bold text-white"
            >
              Cancel
            </Link>

            <button
              type="submit"
              className="rounded-[10px] bg-primary px-6 py-3 text-[14px] font-bold text-white"
            >
              Add Feedback
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

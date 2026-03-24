import { useEffect, useRef, useState } from "react";

export default function CustomDropdown({
  label,
  hint,
  name,
  value,
  options,
  onChange,
  className = "",
  variant = "form",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  const selectedOption = options.find((option) => option.value === value);

  useEffect(() => {
    function handleClickOutside(event) {
      if (!containerRef.current?.contains(event.target)) {
        setIsOpen(false);
      }
    }

    function handleEscape(event) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  function handleSelect(nextValue) {
    onChange({
      target: {
        name,
        value: nextValue,
      },
    });

    setIsOpen(false);
  }

  const triggerClasses =
    variant === "header"
      ? "flex w-full items-center justify-between bg-transparent text-left text-[14px] font-bold text-white outline-none"
      : "flex w-full items-center justify-between rounded-[5px] bg-bg px-4 py-3 text-left text-[15px] text-dark outline-none focus:ring-2 focus:ring-secondary";

  const panelClasses =
    variant === "header"
      ? "absolute left-0 top-[calc(100%+1.5rem)] z-20 min-w-[255px] overflow-hidden rounded-[10px] bg-white shadow-[0_10px_40px_rgba(55,63,104,0.35)]"
      : "absolute left-0 right-0 top-[calc(100%+1rem)] z-20 overflow-hidden rounded-[10px] bg-white shadow-[0_10px_40px_rgba(55,63,104,0.35)]";

  return (
    <div className={className}>
      {label ? (
        <label
          id={`${name}-label`}
          className="block text-[13px] font-bold text-dark sm:text-[14px]"
        >
          {label}
        </label>
      ) : null}

      {hint ? (
        <p className="mt-1 text-[13px] text-text sm:text-[14px]">{hint}</p>
      ) : null}

      <div ref={containerRef} className={label || hint ? "relative mt-4" : "relative"}>
        <button
          type="button"
          role="combobox"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-labelledby={label ? `${name}-label` : undefined}
          className={triggerClasses}
        >
          <span>{selectedOption?.label ?? "Select an option"}</span>
          <span
            className={`ml-2 text-secondary transition-transform ${
              isOpen ? "rotate-180" : ""
            } ${variant === "header" ? "text-white" : ""}`}
          >
            ▼
          </span>
        </button>

        {isOpen ? (
          <div className={panelClasses}>
            <ul role="listbox" className="divide-y divide-[#3A4374]/15">
              {options.map((option) => {
                const isSelected = option.value === value;

                return (
                  <li key={option.value}>
                    <button
                      type="button"
                      role="option"
                      aria-selected={isSelected}
                      onClick={() => handleSelect(option.value)}
                      className="flex w-full items-center justify-between px-6 py-3 text-left text-[16px] text-text hover:text-primary focus:outline-none focus:text-primary"
                    >
                      <span>{option.label}</span>
                      {isSelected ? (
                        <span className="font-bold text-primary">✓</span>
                      ) : null}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
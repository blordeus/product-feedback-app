export default function Tag({ children }) {
  return (
    <span className="bg-light text-secondary text-xs font-semibold px-3 py-1 rounded-lg">
      {children}
    </span>
  );
}
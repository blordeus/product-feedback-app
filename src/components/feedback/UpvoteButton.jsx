export default function UpvoteButton({ count }) {
  return (
    <button className="bg-light px-3 py-2 rounded-lg flex flex-col items-center text-sm font-semibold">
      <span>▲</span>
      <span>{count}</span>
    </button>
  );
}
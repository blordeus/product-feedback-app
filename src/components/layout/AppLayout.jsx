export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-bg p-6 lg:flex lg:gap-8">
      {children}
    </div>
  );
}
export default function MobileHeader({ isMenuOpen, onToggleMenu }) {
  return (
    <header className="rounded-[10px] bg-[linear-gradient(135deg,#28A7ED_0%,#A337F6_55%,#E84D70_100%)] px-6 py-4 text-white lg:hidden">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-[15px] font-bold leading-none">Frontend Mentor</h1>
          <p className="mt-1 text-[13px] text-white/75">Feedback Board</p>
        </div>

        <button
          type="button"
          onClick={onToggleMenu}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center text-white"
        >
          <span className="text-[24px] leading-none">
            {isMenuOpen ? "×" : "☰"}
          </span>
        </button>
      </div>
    </header>
  );
}
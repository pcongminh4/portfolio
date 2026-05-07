import type { MouseEvent } from 'react';

type HeaderProps = {
  onNavigateHome?: () => void;
  showSectionLinks?: boolean;
};

function Header({ onNavigateHome, showSectionLinks = true }: HeaderProps) {
  const handleHomeClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!onNavigateHome) {
      return;
    }

    event.preventDefault();
    onNavigateHome();
  };

  return (
    <header className="sticky top-0 z-20 border-b border-line bg-[#f8f4ef]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" onClick={handleHomeClick} className="font-serif text-2xl italic tracking-tight">
          Minh Portfolio
        </a>
        {showSectionLinks ? (
          <nav className="hidden items-center gap-6 text-sm font-medium text-ink/75 md:flex">
            <a href="#skills" className="transition hover:text-ink">
              Kỹ năng
            </a>
            <a href="#projects" className="transition hover:text-ink">
              Dự án
            </a>
            <a href="#contact" className="transition hover:text-ink">
              Liên hệ
            </a>
          </nav>
        ) : null}
        <a
          href="https://github.com/pcongminh4"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-ink/15 bg-white/70 px-4 py-2 text-sm font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-glow"
        >
          GitHub
        </a>
      </div>
    </header>
  );
}

export default Header;

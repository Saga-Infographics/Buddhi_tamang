import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  activePage: string;
}

const navigationItems = [
  { label: "Home", path: "/" },
  { label: "Biography", path: "/biography" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

const socialMediaIcons = [
  { alt: "Facebook", src: "/facebook.svg", url: "https://www.facebook.com/buddhitamangofficial" },
  { alt: "Instagram", src: "/instagram.svg", url: "https://www.instagram.com/buddhitamangofficial/" },
  { alt: "TikTok", src: "/tiktok.svg", url: "https://www.tiktok.com/@buddhitamangofficial" },
];

export const Header = ({ activePage }: HeaderProps): JSX.Element => {
  const [openMobile, setOpenMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (openMobile) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [openMobile]);

  return (
    <><header className={`w-full sticky top-0 z-40 transition-all duration-500 ease-in-out ${scrolled
        ? 'bg-white/98 backdrop-blur-xl shadow-2xl border-b-2 border-[#7B1E2C]/10'
        : 'bg-white/90 backdrop-blur-lg shadow-md border-b border-slate-100'}`}>
      {/* Decorative top line */}
      <div className={`w-full h-0.5 bg-gradient-to-r from-transparent via-[#7B1E2C] to-transparent transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`}></div>
      
      <nav className="max-w-[1200px] mx-auto flex items-center justify-between gap-6 px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group relative">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[#7B1E2C] to-[#5a1620] rounded-xl blur-md opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative w-12 h-12 bg-gradient-to-br from-[#7B1E2C] via-[#8a2333] to-[#5a1620] text-white rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 ease-in-out overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <img className="relative w-6 h-6 group-hover:rotate-[360deg] transition-transform duration-700 ease-in-out" alt="Gem" src="/gem.svg" />
            </div>
          </div>
          <div>
            <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#7B1E2C] text-xl tracking-tight leading-5 group-hover:text-[#5a1620] transition-colors duration-300">
              Buddhi Tamang
            </h1>
            <p className="text-xs text-gray-500 font-medium tracking-wide group-hover:text-gray-700 transition-colors duration-300">Actor • Theatre Practitioner</p>
          </div>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7B1E2C] to-[#5a1620] group-hover:w-full transition-all duration-500"></div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-1.5">
            {navigationItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`[font-family:'Open_Sans',Helvetica] text-sm tracking-[0] leading-[22px] whitespace-nowrap px-5 py-2.5 rounded-lg transition-all duration-300 ease-in-out relative overflow-hidden group ${item.label === activePage
                      ? "font-bold text-white bg-gradient-to-r from-[#7B1E2C] to-[#5a1620] shadow-lg shadow-[#7B1E2C]/20"
                      : "font-medium text-[#171a1f] hover:text-[#7B1E2C]"}`}
                >
                  {item.label !== activePage && (
                    <span className="absolute inset-0 bg-gradient-to-r from-[#fff5f2] to-[#fde2e4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
                  )}
                  {item.label === activePage && (
                    <>
                      <span className="absolute inset-0 bg-gradient-to-r from-[#5a1620] to-[#7B1E2C] -z-10"></span>
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-white/40 rounded-full"></span>
                    </>
                  )}
                  <span className="relative z-10 flex items-center gap-1.5">
                    {item.label}
                    {item.label !== activePage && (
                      <span className="w-0 group-hover:w-1 h-1 rounded-full bg-[#7B1E2C] transition-all duration-300"></span>
                    )}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2.5 pl-6 border-l-2 border-slate-200">
            {socialMediaIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.alt}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B1E2C] to-[#5a1620] rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-sm"></div>
                <div className="relative w-10 h-10 rounded-lg p-0 bg-gradient-to-br from-slate-50 via-white to-slate-50 border border-slate-200 hover:border-[#7B1E2C]/50 hover:shadow-lg hover:shadow-[#7B1E2C]/10 transition-all duration-300 ease-in-out flex items-center justify-center group-hover:scale-110 group-hover:-translate-y-0.5">
                  <img className="w-5 h-5 opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300 ease-in-out" alt={icon.alt} src={icon.src} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setOpenMobile((v) => !v)}
            aria-label="Toggle navigation"
            className="relative w-11 h-11 rounded-lg flex items-center justify-center border-2 border-slate-200 hover:border-[#7B1E2C] hover:bg-[#fff5f2] transition-all duration-300 ease-in-out active:scale-95 group overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-br from-[#7B1E2C]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7B1E2C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="relative z-10 transition-transform duration-300 group-hover:scale-110">
              <path d={openMobile ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
            </svg>
          </button>
      </div>
    </nav><div className="md:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-40 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-sm transition-all duration-500 ease-in-out ${openMobile ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
          onClick={() => setOpenMobile(false)}
          aria-hidden="true" />

        {/* Enhanced mobile menu */}
        <aside className={`fixed top-20 right-4 z-50 w-[340px] bg-gradient-to-b from-white via-white to-[#fff5f2] rounded-2xl shadow-2xl border-2 border-[#7B1E2C]/10 transform transition-all duration-500 ease-out overflow-hidden ${openMobile ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 -translate-y-4 scale-95 pointer-events-none'}`} role="dialog" aria-modal="true">
          {/* Decorative gradient */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7B1E2C] via-[#8a2333] to-[#5a1620]"></div>
          
          <div className="relative">
            <button
              onClick={() => setOpenMobile(false)}
              aria-label="Close menu"
              className="absolute right-4 top-4 w-9 h-9 rounded-lg flex items-center justify-center border-2 border-slate-200 bg-white hover:border-[#7B1E2C] hover:bg-[#fff5f2] hover:rotate-90 transition-all duration-300 ease-in-out active:scale-95 z-10"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#7B1E2C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Logo */}
            <div className="px-6 pt-6 pb-4 border-b-2 border-slate-100">
              <div className="flex items-center gap-3 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7B1E2C] to-[#5a1620] rounded-xl blur-md opacity-30"></div>
                  <div className="relative w-12 h-12 bg-gradient-to-br from-[#7B1E2C] via-[#8a2333] to-[#5a1620] text-white rounded-xl flex items-center justify-center shadow-lg">
                    <img className="w-6 h-6" alt="Gem" src="/gem.svg" />
                  </div>
                </div>
                <div>
                  <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#7B1E2C] text-lg">Buddhi Tamang</h2>
                  <p className="text-xs text-gray-500 font-medium">Actor • Theatre</p>
                </div>
              </div>
            </div>

            <div className="px-4 py-4">
              <nav>
                <ul className="flex flex-col gap-1.5">
                  {navigationItems.map((item, idx) => (
                    <li key={idx}>
                      <Link
                        to={item.path}
                        onClick={() => setOpenMobile(false)}
                        className={`relative block px-4 py-3.5 rounded-xl text-base [font-family:'Open_Sans',Helvetica] font-medium transition-all duration-300 ease-in-out group overflow-hidden ${item.label === activePage
                            ? 'text-white bg-gradient-to-r from-[#7B1E2C] to-[#5a1620] shadow-lg shadow-[#7B1E2C]/20'
                            : 'text-[#171a1f] hover:text-[#7B1E2C] hover:bg-gradient-to-r hover:from-[#fff5f2] hover:to-[#fde2e4] hover:shadow-md'}`}
                      >
                        {item.label === activePage && (
                          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-white/40 rounded-r-full"></span>
                        )}
                        <span className="relative z-10 flex items-center justify-between">
                          {item.label}
                          {item.label !== activePage && (
                            <span className="w-0 h-0.5 bg-[#7B1E2C] group-hover:w-4 transition-all duration-300 rounded-full"></span>
                          )}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="px-6 py-5 border-t-2 border-slate-100 bg-gradient-to-br from-white to-[#fff5f2] rounded-b-2xl">
              <p className="text-xs text-gray-500 font-semibold mb-3 uppercase tracking-wider">Connect with Buddhi</p>
              <div className="flex items-center gap-3">
                {socialMediaIcons.map((icon, index) => (
                  <a
                    key={index}
                    href={icon.url}
                    aria-label={icon.alt}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative w-11 h-11 rounded-xl bg-white border-2 border-slate-200 hover:border-[#7B1E2C]/50 hover:shadow-lg hover:shadow-[#7B1E2C]/10 flex items-center justify-center transition-all duration-300 ease-in-out hover:scale-110 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-[#7B1E2C]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity duration-300"></div>
                    <img src={icon.src} alt={icon.alt} className="relative w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </header>
    </>
  );
};

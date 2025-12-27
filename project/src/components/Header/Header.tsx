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
    <>
      <header className={`w-full sticky top-0 z-40 transition-all duration-700 ease-in-out ${
        scrolled
          ? 'bg-white/96 backdrop-blur-2xl shadow-2xl'
          : 'bg-white/80 backdrop-blur-xl'
      }`}>
        {/* Animated gradient background */}
        <div className={`absolute inset-0 pointer-events-none transition-opacity duration-700 ${scrolled ? 'opacity-100' : 'opacity-0'}`}>
          <div className="absolute top-0 left-1/4 w-64 h-32 bg-gradient-to-br from-[#7B1E2C]/5 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-1/4 w-64 h-32 bg-gradient-to-bl from-[#7B1E2C]/5 to-transparent rounded-full blur-3xl"></div>
        </div>

        {/* Top animated gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#7B1E2C] to-transparent"></div>
        
        <nav className="relative max-w-[1280px] mx-auto flex items-center justify-between gap-8 px-6 py-5">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-3.5 group flex-shrink-0 relative">
            <div className="relative">
              {/* Animated glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-[#7B1E2C] via-[#8a2333] to-[#5a1620] rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
              
              {/* Main logo container */}
              <div className="relative w-14 h-14 bg-gradient-to-br from-[#7B1E2C] via-[#8a2333] to-[#5a1620] rounded-xl flex items-center justify-center shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/20">
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Icon */}
                <img 
                  className="relative w-7 h-7 group-hover:scale-125 group-hover:rotate-[360deg] transition-all duration-700 ease-out" 
                  alt="Gem" 
                  src="/gem.svg" 
                />
              </div>
            </div>

            {/* Brand text */}
            <div className="relative">
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#7B1E2C] text-2xl tracking-tight leading-6 group-hover:text-[#5a1620] transition-colors duration-300">
                Buddhi Tamang
              </h1>
              <p className="text-xs text-gray-500 font-semibold tracking-widest uppercase group-hover:text-[#7B1E2C] transition-colors duration-300 mt-0.5">
                Actor & Storyteller
              </p>
              
              {/* Animated underline */}
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-[#7B1E2C] to-[#5a1620] group-hover:w-full transition-all duration-500"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`relative px-5 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 overflow-hidden group rounded-lg ${
                  item.label === activePage
                    ? 'text-white'
                    : 'text-gray-700 hover:text-[#7B1E2C]'
                }`}
              >
                {/* Background layers */}
                {item.label === activePage ? (
                  <>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#7B1E2C] via-[#8a2333] to-[#5a1620] transition-all duration-300 shadow-lg shadow-[#7B1E2C]/30"></span>
                    <span className="absolute inset-0 bg-gradient-to-r from-[#5a1620] to-[#7B1E2C] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </>
                ) : (
                  <span className="absolute inset-0 bg-gradient-to-r from-[#fff5f2] to-[#fde2e4] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
                )}

                {/* Text content */}
                <span className="relative z-10 flex items-center gap-2">
                  {item.label}
                  {item.label !== activePage && (
                    <span className="w-1 h-1 rounded-full bg-[#7B1E2C] opacity-0 group-hover:opacity-100 transition-all duration-300 scale-0 group-hover:scale-100"></span>
                  )}
                  {item.label === activePage && (
                    <span className="ml-1.5 inline-block w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></span>
                  )}
                </span>
              </Link>
            ))}
          </div>

          {/* Right section - Social icons */}
          <div className="hidden lg:flex items-center gap-3 ml-auto">
            {socialMediaIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={icon.alt}
                className="group relative"
              >
                {/* Animated background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B1E2C]/20 to-[#5a1620]/10 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-1"></div>
                
                {/* Icon container */}
                <div className="relative w-11 h-11 rounded-xl bg-gradient-to-br from-white/80 via-slate-50 to-white border border-slate-200/60 hover:border-[#7B1E2C]/40 flex items-center justify-center shadow-md hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                  <img 
                    className="w-5 h-5 opacity-60 group-hover:opacity-100 group-hover:scale-120 transition-all duration-300" 
                    alt={icon.alt} 
                    src={icon.src} 
                  />
                </div>
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setOpenMobile(!openMobile)}
              aria-label="Toggle navigation"
              className="relative w-12 h-12 rounded-xl flex items-center justify-center border-2 border-slate-200 hover:border-[#7B1E2C] hover:bg-[#fff5f2] transition-all duration-300 group overflow-hidden active:scale-95"
            >
              <span className="absolute inset-0 bg-gradient-to-br from-[#7B1E2C]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="#7B1E2C" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="relative z-10 transition-all duration-300 group-hover:scale-110"
              >
                <path d={openMobile ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div className="lg:hidden">
        {/* Backdrop */}
        <div
          className={`fixed inset-0 z-30 bg-gradient-to-b from-black/30 to-black/50 backdrop-blur-md transition-all duration-500 ease-in-out ${
            openMobile ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setOpenMobile(false)}
          aria-hidden="true"
        />

        {/* Mobile menu panel */}
        <aside
          className={`fixed top-20 right-4 z-40 w-80 bg-gradient-to-br from-white via-white to-[#fff5f2] rounded-3xl shadow-2xl border border-[#7B1E2C]/10 transform transition-all duration-500 ease-out overflow-hidden ${
            openMobile
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 -translate-y-6 scale-95 pointer-events-none'
          }`}
          role="dialog"
          aria-modal="true"
        >
          {/* Top gradient accent */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#7B1E2C] via-[#8a2333] to-[#5a1620]"></div>

          {/* Close button */}
          <button
            onClick={() => setOpenMobile(false)}
            className="absolute right-5 top-5 w-10 h-10 rounded-xl flex items-center justify-center border-2 border-slate-200 bg-white hover:border-[#7B1E2C] hover:bg-[#fff5f2] hover:rotate-90 transition-all duration-300 z-10 group"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7B1E2C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Logo section */}
          <div className="px-6 pt-7 pb-5 border-b-2 border-slate-100">
            <div className="flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7B1E2C] to-[#5a1620] rounded-xl blur-md opacity-40"></div>
                <div className="relative w-12 h-12 bg-gradient-to-br from-[#7B1E2C] via-[#8a2333] to-[#5a1620] rounded-xl flex items-center justify-center shadow-xl border border-white/20">
                  <img className="w-6 h-6" alt="Gem" src="/gem.svg" />
                </div>
              </div>
              <div>
                <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#7B1E2C] text-xl">
                  Buddhi Tamang
                </h2>
                <p className="text-xs text-gray-500 font-semibold tracking-wide uppercase">Actor • Theatre</p>
              </div>
            </div>
          </div>

          {/* Navigation items */}
          <nav className="px-4 py-5">
            <ul className="flex flex-col gap-2">
              {navigationItems.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.path}
                    onClick={() => setOpenMobile(false)}
                    className={`relative block px-4 py-3.5 rounded-xl text-base font-medium transition-all duration-300 overflow-hidden group ${
                      item.label === activePage
                        ? 'text-white'
                        : 'text-gray-700 hover:text-[#7B1E2C]'
                    }`}
                  >
                    {/* Background */}
                    {item.label === activePage ? (
                      <span className="absolute inset-0 bg-gradient-to-r from-[#7B1E2C] to-[#5a1620] shadow-lg shadow-[#7B1E2C]/20"></span>
                    ) : (
                      <span className="absolute inset-0 bg-gradient-to-r from-[#fff5f2] to-[#fde2e4] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    )}

                    {/* Content */}
                    <span className="relative z-10 flex items-center justify-between">
                      {item.label}
                      {item.label === activePage ? (
                        <span className="w-2 h-2 rounded-full bg-white/60 animate-pulse"></span>
                      ) : (
                        <span className="w-0 h-0.5 bg-[#7B1E2C] group-hover:w-4 transition-all duration-300 rounded-full"></span>
                      )}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social section */}
          <div className="px-6 py-6 border-t-2 border-slate-100 bg-gradient-to-br from-white to-[#fff5f2]">
            <p className="text-xs font-bold text-gray-600 mb-4 uppercase tracking-widest">Follow on Social</p>
            <div className="flex items-center gap-3">
              {socialMediaIcons.map((icon, index) => (
                <a
                  key={index}
                  href={icon.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={icon.alt}
                  className="group relative flex-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7B1E2C]/20 to-[#5a1620]/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -inset-1"></div>
                  <div className="relative w-full py-3 rounded-xl bg-white border-2 border-slate-200 hover:border-[#7B1E2C]/50 hover:shadow-lg hover:shadow-[#7B1E2C]/10 flex items-center justify-center transition-all duration-300 group-hover:scale-105">
                    <img src={icon.src} alt={icon.alt} className="w-5 h-5 opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
};

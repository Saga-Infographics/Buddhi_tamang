import { Link } from "react-router-dom";
import { Button } from "../ui/button";

const socialIcons = [
  { src: "/container-3.svg", alt: "Facebook", url: "https://www.facebook.com/buddhitamangofficial" },
  { src: "/container.svg", alt: "Instagram", url: "https://www.instagram.com/buddhitamangofficial/" },
  // YouTube (placeholder)
  { src: "/container-2.svg", alt: "YouTube", url: "#" },
];

const sectionLinks = [
  { label: "Home", path: "/" },
  { label: "Biography", path: "/biography" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Media", path: "/media" },
  { label: "Contact", path: "/contact" },
];

export const Footer = (): JSX.Element => {
  return (
    <footer className="w-full relative bg-gradient-to-br from-[#2a0e13] via-[#1a0a0c] to-[#0f0608] text-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-[#7B1E2C] to-transparent rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-[#7B1E2C]/40 to-transparent rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="relative z-10">
        {/* Top decorative line */}
        <div className="w-full h-1 bg-gradient-to-r from-transparent via-[#7B1E2C] to-transparent"></div>
        
        <div className="max-w-[1200px] mx-auto px-6 pt-16 pb-8">
          <div className="grid md:grid-cols-3 gap-10 mb-12">
            <div className="space-y-5">
              <div className="flex items-center gap-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7B1E2C] to-[#5a1620] rounded-lg flex items-center justify-center shadow-xl transform transition-transform group-hover:scale-110 group-hover:rotate-6 duration-300">
                  <img className="w-6 h-6" alt="Gem" src="/gem.svg" />
                </div>
                <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-white text-2xl tracking-wide">
                  Buddhi Tamang
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed max-w-md">
                Award-winning theatre director, playwright and performer. Creating culturally rooted productions that engage communities and spark social conversations across Nepal.
              </p>

              <div>
                <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider font-semibold">Follow the Journey</p>
                <div className="flex items-center gap-3">
                  {socialIcons.map((icon, index) => (
                    <a
                      key={index}
                      href={icon.url ?? '#'}
                      aria-label={icon.alt}
                      className="group w-10 h-10 rounded-lg bg-gradient-to-br from-[#7B1E2C]/30 to-[#7B1E2C]/10 flex items-center justify-center hover:from-[#7B1E2C] hover:to-[#5a1620] transition-all duration-300 shadow-lg border border-[#7B1E2C]/20 hover:border-[#7B1E2C] hover:scale-110 hover:-translate-y-1"
                      target={icon.url && icon.url !== '#' ? '_blank' : undefined}
                      rel={icon.url && icon.url !== '#' ? 'noopener noreferrer' : undefined}
                    >
                      <img className="w-5 h-5 filter invert brightness-150 group-hover:brightness-200 transition-all" alt={icon.alt} src={icon.src} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white mb-5 text-lg flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[#7B1E2C] to-[#5a1620] rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-3 text-sm text-slate-300">
                {sectionLinks.map((link, i) => (
                  <li key={i} className="group">
                    <Link 
                      to={link.path} 
                      className="flex items-center gap-2 hover:text-[#e8a5a9] transition-all duration-200 hover:translate-x-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#7B1E2C]/40 group-hover:bg-[#e8a5a9] transition-colors"></span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-5 text-lg flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-[#7B1E2C] to-[#5a1620] rounded-full"></span>
                Stay Connected
              </h4>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Subscribe for exclusive updates on upcoming productions, behind-the-scenes content, and cultural events.
              </p>
              <form className="space-y-3">
                <input 
                  aria-label="Email" 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full px-4 py-3 rounded-lg text-sm text-white bg-white/5 backdrop-blur-sm border border-white/10 focus:border-[#7B1E2C] focus:outline-none focus:ring-2 focus:ring-[#7B1E2C]/30 placeholder-slate-500 transition-all" 
                />
                <Button 
                  type="submit" 
                  className="w-full py-3 bg-gradient-to-r from-[#7B1E2C] to-[#5a1620] hover:from-[#8a2333] hover:to-[#6a1a25] shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 font-semibold"
                >
                  Subscribe Now
                </Button>
              </form>
            </div>
          </div>

          <div className="relative">
            <div className="w-full h-px bg-gradient-to-r from-transparent via-[#7B1E2C]/40 to-transparent mb-8"></div>
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
              <div className="flex items-center gap-2 text-slate-400">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                <span>© {new Date().getFullYear()} Buddhi Tamang. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span>Developed by</span>
                <a href="#" className="text-[#e8a5a9] hover:text-white transition font-semibold hover:underline">Saga Infographics</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

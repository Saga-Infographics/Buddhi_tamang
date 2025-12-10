// React import not required with the new JSX transform
import { Button } from "../../components/ui/button";
import { ContactInfoSection } from "./sections/ContactInfoSection";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

const socialMediaButtons = [
  {
    icon: "/facebook-1.svg",
    alt: "Facebook",
    url: "https://www.facebook.com/BuddhiTamangOfficial",
  },
  {
    icon: "/instagram.svg",
    alt: "Instagram",
    url: "https://www.instagram.com/buddhitamang.official/",
  },
  {
    icon: "/youtube.svg",
    alt: "YouTube",
    url: "https://www.youtube.com/@BuddhiTamang",
  },
  {
    icon: "/tiktok.svg",
    alt: "TikTok",
    url: "https://www.tiktok.com/@buddhitamang",
  },
];

export const Contact = (): JSX.Element => {
  return (
    <div className="bg-gradient-to-b from-[#fff5f2] to-white w-full relative min-h-screen">
      <SEO
        title="Contact Buddhi Tamang — Booking, Social & Fan Connect"
        description="Get in touch with Buddhi Tamang for film, theatre, and media bookings. Follow him on social media and discover his official contact information."
        path="/contact"
      />
      <Header activePage="Contact" />

      <section className="w-full py-16 md:py-28">
        <div className="container mx-auto px-6 md:px-40">
          <div className="text-center mb-12">
            <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#7B1E2C] text-5xl md:text-6xl tracking-[0] leading-[70px] mb-4">
              Connect with Buddhi Tamang
            </h1>
            <p className="[font-family:'Open_Sans',Helvetica] text-lg md:text-xl text-[#171a1fcc] max-w-3xl mx-auto leading-8">
              Official contact page for Buddhi Tamang — award-winning Nepali actor, theatre performer, and cultural icon. Reach out for professional bookings, fan messages, and media collaborations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left: Booking Form / Contact Info */}
            <div className="bg-white shadow-lg rounded-xl p-8 hover:shadow-2xl transition-shadow duration-300">
              <ContactInfoSection />
            </div>

            {/* Right: Contact Details */}
            <aside className="bg-[#fff5f2] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col gap-8">
              <div>
                <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#7B1E2C] text-3xl mb-6">
                  Direct Contact
                </h2>
                <div className="flex flex-col gap-5">
                  <div className="flex items-center gap-4">
                    <img className="w-7 h-7" src="/mail.svg" alt="Email" />
                    <div>
                      <div className="text-sm text-[#171a1f] font-semibold">Email</div>
                      <div className="text-lg text-[#7B1E2C] font-bold">booking@buddhitamang.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <img className="w-7 h-7" src="/phone.svg" alt="Phone" />
                    <div>
                      <div className="text-sm text-[#171a1f] font-semibold">Phone</div>
                      <div className="text-lg text-[#7B1E2C] font-bold">+977 986-0765125</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#7B1E2C] text-3xl mb-4">
                  Follow Buddhi Tamang
                </h2>
                <p className="text-[#171a1fcc] text-sm mb-4">
                  Stay updated with Buddhi Tamang’s latest projects, behind-the-scenes videos, and exclusive content on social media.
                </p>
                <div className="flex gap-4">
                  {socialMediaButtons.map((social, idx) => (
                    <a
                      key={idx}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.alt}
                      className="transform hover:scale-110 transition-transform duration-300"
                    >
                      <Button
                        variant="outline"
                        size="icon"
                        className="w-12 h-12 bg-white border border-[#7B1E2C] rounded-full flex items-center justify-center shadow-md hover:shadow-lg"
                      >
                        <img src={social.icon} alt={social.alt} className="w-6 h-6" />
                      </Button>
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#7B1E2C] text-3xl mb-4">
                  Location
                </h2>
                <div className="flex items-start gap-4">
                  <img className="w-7 h-7 mt-1" src="/home-2-1.svg" alt="Location" />
                  <div className="text-[#171a1fcc] text-sm">
                    <div className="mb-2">
                      <span className="font-semibold text-[#171a1f]">Permanent Address:</span> Gaighat, Nepal
                    </div>
                    <div>
                      <span className="font-semibold text-[#171a1f]">Current Residence:</span> Kathmandu, Nepal
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-4 text-center">
                <Button asChild>
                  <a href="/media" className="px-8 py-3 bg-[#7B1E2C] text-white font-semibold rounded-lg hover:bg-[#5a1620] transition-colors">
                    Explore Media Gallery
                  </a>
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

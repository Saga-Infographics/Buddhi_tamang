// React import removed because JSX runtime is automatic in this project (no direct React symbol usage)
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import HeroImage from "../../components/ui/HeroImage";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <SEO title="Home" description="Actor and theatre practitioner Buddhi Tamang — portfolio, biography and contact for bookings." path="/" image="/images/pkdai2.jpg" />
      <Header activePage="Home" />
      <section className="relative w-full h-auto md:h-[640px] bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* decorative soft blob */}
          <div className="hidden md:block absolute -right-40 top-10 w-[520px] h-[520px] bg-gradient-to-tr from-[#e6f0ff] to-[#f8fafc] rounded-full opacity-60 transform rotate-12 filter blur-3xl" />
        </div>

        {/* Mobile: inline hero image shown above the text flow */}
        <div className="block md:hidden px-6 mb-6">
          <div className="w-full rounded-lg overflow-hidden shadow-md">
            <img
              src="/images/pkdai2.jpg"
              alt="Buddhi Tamang"
              className="w-full h-64 object-cover block"
              loading="lazy"
              decoding="async"
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
            />
          </div>
        </div>

        <div className="relative md:absolute md:top-1/2 md:left-40 md:-translate-y-1/2 max-w-xl md:max-w-2xl px-6 md:px-0">
          <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#0f2650] text-4xl md:text-6xl tracking-tight leading-tight mb-4">
            Buddhi Tamang
          </h1>
          <p className="[font-family:'Playfair_Display',Helvetica] font-medium text-[#263247] text-lg md:text-2xl tracking-normal leading-8 mb-6">
            Actor • Theatre Practitioner
          </p>

          <div className="max-w-xl mb-8">
            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#36454f] text-base md:text-lg tracking-[0] leading-7 mb-4">
              Buddhi Tamang is an actor and theatre practitioner from Nepal whose work spans stage and screen. He is known for performances that blend traditional Nepali theatre with contemporary approaches.
            </p>

            <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#36454f] text-base md:text-lg tracking-[0] leading-7 mb-4">
              Buddhi has collaborated with Mandala Theatre Nepal and other companies, appearing in productions that engage with social themes and community narratives. He also mentors emerging actors through workshops and community projects.
            </p>

            <ul className="list-disc list-inside text-sm text-[#49545a] space-y-1">
              <li><strong>Film debut:</strong> Maun (2013)</li>
              <li><strong>Notable stage work:</strong> Sunkeshari, Jhimke Mama, Masantaar</li>
              <li><strong>Recent work:</strong> Barista Balaram (2025) — film role</li>
              <li><strong>Affiliation:</strong> Mandala Theatre Nepal</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-[#18386e] text-white px-6 py-3 text-base h-auto rounded-md shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
            <Button asChild variant="outline" className="border-[#18386e] text-[#18386e] hover:bg-[#18386e]/10 px-6 py-3 text-base h-auto rounded-md">
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>

        {/* Right-side hero image - replace /images/hero-photo.svg with your actual photo */}
            <div className="hidden md:block md:absolute md:top-1/2 md:right-40 md:-translate-y-1/2 w-[300px] h-auto md:h-[520px]">
          <div className="relative">
            <HeroImage
              src="/images/pkdai2.jpg"
              alt="Buddhi Tamang"
              caption="Buddhi Tamang"
              rotate={6}
              className="md:!w-[420px] md:!h-[520px]"
            />
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-6 text-center">
            Featured Work
          </h2>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-16 text-center max-w-3xl mx-auto">
            Explore some of my most memorable performances and projects.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Jhimke Mama",
                type: "Play (Performer)",
                description:
                  "A production in which Buddhi Tamang performed; this original play (2020) is based on a real story by Durga Prasad Pandey and explores identity within village life.",
                image: "/images/jhimkey_mama.jpg"
              },
              {
                title: "Masaantaar",
                type: "Play (Performer)",
                description:
                  "A production exploring resistance to superstition and social pressures; Buddhi Tamang appeared in this piece which examines rural belief systems.",
                image: "/images/masantaar.jpg"
              },
              {
                title: "Kaalaa Patthar Maathi",
                type: "Play (Performer)",
                description: "A stage work addressing family and survival in Nepal's mountain communities — featuring Buddhi Tamang in a principal role.",
                image: "/images/kaalaa_pathar_mathi.jpg"
              }
            ].map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-slate-200 rounded-lg mb-4 overflow-hidden relative">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain block bg-black"
                      loading="lazy"
                      decoding="async"
                      onError={(e) => {
                        // hide the broken image so the gradient fallback is visible
                        (e.currentTarget as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 group-hover:scale-105 transition-transform duration-300" />
                  )}
                </div>
                <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-xl tracking-[0] leading-7 mb-2">
                  {item.title}
                </h3>
                <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-base tracking-[0] leading-6">
                  {item.type}
                </p>
                <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-sm tracking-[0] leading-5 mt-2">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full py-24 bg-slate-50">
      <div className="container mx-auto px-6 md:px-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src="/images/pkdai2.jpg"
                alt="Buddhi Tamang on bridge"
                className="w-full h-full object-cover block rounded-lg"
                loading="lazy"
                decoding="async"
                onError={(e) => ((e.currentTarget as HTMLImageElement).src = '/images/pkdai2.jpg')}
              />
            </div>
            <div>
              <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-6">
                About Me
              </h2>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-6">
                With over 15 years of experience in the performing arts, I have dedicated my career to bringing compelling stories and characters to audiences around the world.
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-8">
                From classical theater to contemporary cinema, my versatility and commitment to craft have earned recognition from both critics and peers.
              </p>
              <Button asChild className="bg-[#18386e] hover:bg-[#18386e]/90 text-white px-8 py-6 text-base h-auto">
                <Link to="/biography">Read Full Biography</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

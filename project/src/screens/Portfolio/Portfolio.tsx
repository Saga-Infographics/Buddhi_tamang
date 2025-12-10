import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";
import { Button } from "../../components/ui/button";

const categories = ["All", "Film", "Direction", "Theatre"];

const portfolioItems = [
  // Films
  { title: "Kabaddi 4: The Final Match", category: "Film", year: "2023", role: "Chhantyal", description: "Popular sports comedy film series", image: "/images/kabaddi4.jpg" },
  { title: "Chhakka Panja 4", category: "Film", year: "2023", role: "Budhhi", description: "Hit comedy franchise", image: "/images/chhakka-panja4.jpg" },
  { title: "Mantra", category: "Film", year: "2022", role: "Supporting Role", description: "Nepali feature film", image: "/images/mantra.jpg" },
  { title: "Senti Virus", category: "Film", year: "2020", role: "Dhrubaram's neighbour", description: "Comedy film", image: "/images/senti-virus.jpg" },
  { title: "Bir Bikram 2", category: "Film", year: "2019", role: "Bagh Bahadur", description: "Action sequel", image: "/images/bir-bikram2.jpg" },
  { title: "Saili", category: "Film", year: "2019", role: "Supporting", description: "Nepali drama", image: "/images/saili.jpg" },
  { title: "Chhakka Panja 3", category: "Film", year: "2018", role: "Budhhi", description: "Comedy franchise installment", image: "/images/chhakka-panja3.jpg" },
  { title: "Damaruko Dandibiyo", category: "Film", year: "2018", role: "Mukhiya", description: "Village drama", image: "/images/damaruko.jpg" },
  { title: "Kohalpur Express", category: "Film", year: "2018", role: "Sher Bahadur", description: "Road movie", image: "/images/kohalpur.jpg" },
  { title: "Panche Baja", category: "Film", year: "2018", role: "Sahile", description: "Nepali feature film", image: "/images/panche-baja.jpg" },
  { title: "Mr. Jholay", category: "Film", year: "2018", role: "Guna Prasad", description: "Comedy film", image: "/images/mr-jholay.jpg" },
  { title: "A Mero Hajur 2", category: "Film", year: "2017", role: "Shree Dharmendra", description: "Romantic film sequel", image: "/images/a-mero-hajur2.jpg" },
  { title: "Ghampani", category: "Film", year: "2017", role: "Nima", description: "Social drama", image: "/images/ghampani.jpg" },
  { title: "Bijuli Machine", category: "Film", year: "2016", role: "Ram Dai", description: "Rural electrification story", image: "/images/bijuli-machine.jpg" },
  { title: "Purano Dunga", category: "Film", year: "2016", role: "Bideshi", description: "Romantic drama", image: "/images/purano-dunga.jpg" },
  { title: "Chhakka Panja", category: "Film", year: "2016", role: "Budhhi", description: "Hit comedy that started the franchise", image: "/images/chhakka-panja.jpg" },
  { title: "Kabaddi Kabaddi", category: "Film", year: "2015", role: "Chhantyal", description: "Sports comedy sequel", image: "/images/kabaddi-kabaddi.jpg" },
  { title: "Woda Number 6", category: "Film", year: "2015", role: "Budhhi", description: "Political satire comedy", image: "/images/woda-number6.jpg" },
  { title: "Hostel Returns", category: "Film", year: "2015", role: "Pk Don (Breakout role)", description: "Breakout film role in the popular Nepali movie", image: "/images/hostel_return2.jpg" },
  { title: "Shaabhala", category: "Film", year: "2014", role: "Ram", description: "Short film", image: "/images/shaabhala.jpg" },
  { title: "Talakjung vs Tulke", category: "Film", year: "2014", role: "Hanuman", description: "Comedy film", image: "/images/talakjung.jpg" },
  { title: "Kabaddi", category: "Film", year: "2014", role: "Chhantyal", description: "Popular sports comedy that launched the series", image: "/images/kabaddi.jpg" },
  { title: "Saanghuro", category: "Film", year: "2013", role: "Nare", description: "Early film appearance", image: "/images/saanghuro.jpg" },
  { title: "Maun", category: "Film", year: "2013", role: "Aman's friend", description: "Appeared in supporting role", image: "/images/maun_2013.jpg" },
  { title: "Barista Balaram", category: "Film", year: "2025", role: "Maila", description: "Recently released film", image: "/images/barista-balaram_2.jpg" },
  
  // Theatre
  { title: "Sunkeshari", category: "Theatre", year: "2023", role: "Actor", description: "A play based on a Karnali folk story; premiered at Rongo Harshe Bingo Barshe (Dhaka, 2012) and opened Kathmandu International Theatre Festival 2012; later staged at major festivals including Bharat Rang Mahotsav.", image: "/images/Final_sunkeshari-poster-KTM.jpg" },
  { title: "Jhimke Mama", category: "Theatre", year: "2020", role: "Writer & Director", description: "Original play based on a real story told by advocate Durga Prasad Pandey, set in imaginary village Deurali", image: "/images/jhimkey_mama.jpg" },
  { title: "Masaantaar", category: "Theatre", year: "2017", role: "Writer & Director", description: "Story of a young boy and his sister who tries to go against superstitions but is threatened by the society and people who have strong belief on ghosts and traditional healers.", image: "/images/masantaar.jpg" },
  { title: "Kalapattharmathi", category: "Theatre", year: "2017", role: "Director", description: "Theatrical production at Mandala Theatre Nepal", image: "/images/kaalaa_pathar_mathi.jpg" },
  { title: "Aakash Ko Bato", category: "Theatre", year: "—", role: "Director", description: "Stage production presented by Mandala Theatre (Aakash Ko Bato / The Sky Route). Visit Mandala Theatre for production details and credits.", image: "/images/aakashkobato.webp" },
];

export const Portfolio = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Build structured data for each production (CreativeWork)
    const structuredData = portfolioItems.map((item) => ({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: item.title,
      description: item.description,
      image: item.image ? item.image : undefined,
      datePublished: item.year && item.year !== '—' ? item.year : undefined,
      author: {
        "@type": "Person",
        name: "Buddhi Tamang",
      },
    }));

  const filteredItems = (() => {
    if (activeCategory !== "All") {
      return portfolioItems.filter((item) => item.category === activeCategory);
    }

    // When viewing "All", dedupe items by title so the same production
    // (which may have multiple entries for different roles) only appears once.
    const seen = new Set<string>();
    return portfolioItems.filter((item) => {
      const key = (item.title || "").toString().toLowerCase().trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  })();

  return (
    <div className="bg-white w-full relative">
      <SEO title="Portfolio — Buddhi Tamang" description="Selected theatrical and film work by Buddhi Tamang — directing, writing and acting credits." path="/portfolio" structuredData={structuredData} />
      <Header activePage="Portfolio" />

      <section className="relative w-full py-24 bg-white">
  <div className="container mx-auto px-6 md:px-40">
          <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#7B1E2C] text-5xl tracking-[0] leading-[60px] mb-6 text-center">
            Portfolio
          </h1>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-12 text-center max-w-3xl mx-auto">
            A comprehensive collection of film and theatrical works spanning acting, directing, and writing. From blockbuster comedies to intimate stage productions, each work explores Nepali culture, social issues, and the human experience.
          </p>

          <div className="flex justify-center gap-4 mb-16">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "outline"}
                className={
                  activeCategory === category
                    ? "bg-[#7B1E2C] hover:bg-[#7B1E2C]/90 text-white px-8"
                    : "border-[#dee1e6] text-[#171a1f] hover:bg-slate-50 px-8"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer border border-solid border-[#dee1e6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="aspect-[4/5] bg-slate-200 overflow-hidden">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-slate-300 to-slate-400 group-hover:scale-105 transition-transform duration-300" />
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#7B1E2C] text-sm tracking-[0] leading-5">
                      {item.category}
                    </span>
                    <span className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-sm tracking-[0] leading-5">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#7B1E2C] text-xl tracking-[0] leading-7 mb-2">
                    {item.title}
                  </h3>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-base tracking-[0] leading-6 mb-2">
                    {item.role}
                  </p>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-sm tracking-[0] leading-5">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

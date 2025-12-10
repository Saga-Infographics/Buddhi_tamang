import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";
import { Button } from "../../components/ui/button";

const categories = ["All", "Film", "Direction", "Theatre"];

const portfolioItems = [
  // Films
  {
    title: "Kabaddi 4: The Final Match",
    category: "Film",
    year: "2023",
    role: "Chhantyal",
    description:
      "Buddhi Tamang appears as Chhantyal in this blockbuster finale of the Kabaddi series, one of Nepal's most searched and loved film franchises.",
    image: "/images/kabaddi4.jpg",
  },
  {
    title: "Chhakka Panja 4",
    category: "Film",
    year: "2023",
    role: "Budhhi",
    description:
      "Part of Nepal’s biggest comedy franchise, Buddhi Tamang returns as Budhhi, making this film a highly searched title in Nepali cinema.",
    image: "/images/chhakka-panja4.jpg",
  },
  {
    title: "Mantra",
    category: "Film",
    year: "2022",
    role: "Supporting Role",
    description:
      "A Nepali feature film where Buddhi Tamang delivers an impactful supporting performance that continues to draw search interest.",
    image: "/images/mantra.jpg",
  },
  {
    title: "Senti Virus",
    category: "Film",
    year: "2020",
    role: "Dhrubaram's neighbour",
    description:
      "Buddhi Tamang adds comedic timing to this popular 2020 Nepali comedy, making his role widely searched among fans.",
    image: "/images/senti-virus.jpg",
  },
  {
    title: "Bir Bikram 2",
    category: "Film",
    year: "2019",
    role: "Bagh Bahadur",
    description:
      "An action-packed sequel featuring Buddhi Tamang as Bagh Bahadur, a role often looked up by viewers of the Bir Bikram series.",
    image: "/images/bir-bikram2.jpg",
  },
  {
    title: "Saili",
    category: "Film",
    year: "2019",
    role: "Supporting",
    description:
      "A critically appreciated drama where Buddhi Tamang’s supporting role contributes to the film’s strong online search presence.",
    image: "/images/saili.jpg",
  },
  {
    title: "Chhakka Panja 3",
    category: "Film",
    year: "2018",
    role: "Budhhi",
    description:
      "Buddhi Tamang reprises his iconic character in one of Nepal’s most searched and successful comedy film installments.",
    image: "/images/chhakka-panja3.jpg",
  },
  {
    title: "Damaruko Dandibiyo",
    category: "Film",
    year: "2018",
    role: "Mukhiya",
    description:
      "Buddhi Tamang plays Mukhiya in this cultural sports drama, a movie frequently searched for its strong ensemble cast.",
    image: "/images/damaruko.jpg",
  },
  {
    title: "Kohalpur Express",
    category: "Film",
    year: "2018",
    role: "Sher Bahadur",
    description:
      "A comedy-adventure film where Buddhi Tamang’s character Sher Bahadur remains a notable and searchable part of the story.",
    image: "/images/kohalpur.jpg",
  },
  {
    title: "Panche Baja",
    category: "Film",
    year: "2018",
    role: "Sahile",
    description:
      "Features Buddhi Tamang as Sahile; the film is often searched by fans of Nepali rural dramas and ensemble casts.",
    image: "/images/panche-baja.jpg",
  },
  {
    title: "Mr. Jholay",
    category: "Film",
    year: "2018",
    role: "Guna Prasad",
    description:
      "A comedy entertainer where Buddhi Tamang’s role as Guna Prasad contributes to its frequent online search traction.",
    image: "/images/mr-jholay.jpg",
  },
  {
    title: "A Mero Hajur 2",
    category: "Film",
    year: "2017",
    role: "Shree Dharmendra",
    description:
      "Features Buddhi Tamang in a memorable role, helping the movie remain one of the most searched titles in the franchise.",
    image: "/images/a-mero-hajur2.jpg",
  },
  {
    title: "Ghampani",
    category: "Film",
    year: "2017",
    role: "Nima",
    description:
      "A highly acclaimed social drama where Buddhi Tamang’s portrayal of Nima is still widely searched by audiences.",
    image: "/images/ghampani.jpg",
  },
  {
    title: "Bijuli Machine",
    category: "Film",
    year: "2016",
    role: "Ram Dai",
    description:
      "Buddhi Tamang plays Ram Dai in this popular film, now a frequently searched title due to its unique storyline.",
    image: "/images/bijuli-machine.jpg",
  },
  {
    title: "Purano Dunga",
    category: "Film",
    year: "2016",
    role: "Bideshi",
    description:
      "A Nepali drama film where Buddhi Tamang’s character adds depth and continues to draw search attention.",
    image: "/images/purano-dunga.jpg",
  },
  {
    title: "Chhakka Panja",
    category: "Film",
    year: "2016",
    role: "Budhhi",
    description:
      "The mega-hit film that began the franchise; Buddhi Tamang's performance is one of Nepal's most searched comedy roles.",
    image: "/images/chhakka-panja.jpg",
  },
  {
    title: "Kabaddi Kabaddi",
    category: "Film",
    year: "2015",
    role: "Chhantyal",
    description:
      "Buddhi Tamang appears again as Chhantyal in the beloved Kabaddi sequel, a film with strong search popularity.",
    image: "/images/kabaddi-kabaddi.jpg",
  },
  {
    title: "Woda Number 6",
    category: "Film",
    year: "2015",
    role: "Budhhi",
    description:
      "A political satire where Buddhi Tamang’s role is a major reason the film still trends in Nepali movie searches.",
    image: "/images/woda-number6.jpg",
  },
  {
    title: "Shaabhala",
    category: "Film",
    year: "2014",
    role: "Ram",
    description:
      "A short film featuring Buddhi Tamang early in his career, often searched by fans following his filmography journey.",
    image: "/images/shaabhala.jpg",
  },
  {
    title: "Talakjung vs Tulke",
    category: "Film",
    year: "2014",
    role: "Hanuman",
    description:
      "This critically acclaimed film includes Buddhi Tamang in a standout role that remains highly searched to this day.",
    image: "/images/talakjung.jpg",
  },
  {
    title: "Kabaddi",
    category: "Film",
    year: "2014",
    role: "Chhantyal",
    description:
      "The iconic film that launched the Kabaddi franchise; Buddhi Tamang’s character is one of the most searched in Nepali cinema.",
    image: "/images/kabaddi.jpg",
  },
  {
    title: "Saanghuro",
    category: "Film",
    year: "2013",
    role: "Nare",
    description:
      "An early film appearance by Buddhi Tamang, now gaining more searches as audiences revisit his early work.",
    image: "/images/saanghuro.jpg",
  },

  // Direction
  {
    title: "Milarepa",
    category: "Direction",
    year: "2025",
    role: "Co-director (with Umesh Tamang)",
    description:
      "Mandala Theatre selected Milarepa as one of its major productions for the 2082/2025 season. Buddhi Tamang shaped performance style and actor training methods for this spiritually-rooted, character-driven play.",
    image: "/images/milarepa.jpg",
  },
  {
    title: "Maasinya",
    category: "Direction",
    year: "2024",
    role: "Co-director (with Sonam Lama)",
    description:
      "Maasinya is a socially-focused Mandala Theatre production. Buddhi Tamang co-directed the play, enhancing themes of cultural identity and social reflection.",
    image: "/images/maasinya.jpg",
  },
  {
    title: "Yojanapark",
    category: "Direction",
    year: "2016",
    role: "Director",
    description:
      "Buddhi Tamang directed this experimental Mandala Theatre play, marking an early milestone in his directing career with contemporary stage work.",
    image: "/images/yojanapark.jpg",
  },

  // Theatre
  {
    title: "Hari Hajurba",
    category: "Theatre",
    year: "2024-2025",
    role: "Producer",
    description:
      "Buddhi Tamang collaborated on production management, budgeting, and creative coordination for Mandala Theatre's Hari Hajurba during the 2024–2025 season.",
    image: "/images/hari-hajurba.jpg",
  },
  {
    title: "Mitjyu",
    category: "Theatre",
    year: "2014",
    role: "Actor",
    description:
      "Mitjyu is a significant Mandala Theatre play. Buddhi Tamang’s role as a main cast member helped define his early theatre career before transitioning into directing.",
    image: "/images/mitjyu.jpg",
  },
];

export const Portfolio = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("All");

  const structuredData = portfolioItems.map((item) => ({
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: item.title,
    description: item.description,
    image: item.image ? `https://yourdomain.com${item.image}` : undefined,
    datePublished: item.year && item.year !== "—" ? item.year : undefined,
    author: { "@type": "Person", name: "Buddhi Tamang" },
  }));

  const filteredItems = (() => {
    if (activeCategory !== "All") {
      return portfolioItems.filter((item) => item.category === activeCategory);
    }
    const seen = new Set<string>();
    return portfolioItems.filter((item) => {
      const key = (item.title || "").toLowerCase().trim();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  })();

  return (
    <div className="bg-[#f8f8f8] min-h-screen relative">
      <SEO
        title="Portfolio — Buddhi Tamang | Nepali Actor, Director & Theatre Practitioner"
        description="Explore Buddhi Tamang's complete portfolio of Nepali films, theatre performances, and directorial works."
        path="/portfolio"
        image="/images/kabaddi.jpg"
        structuredData={structuredData}
      />
      <Header activePage="Portfolio" />

      <section className="py-24">
        <div className="container mx-auto px-6 md:px-20">
          <h1 className="text-5xl font-extrabold text-[#7B1E2C] text-center mb-4">
            Portfolio
          </h1>
          <p className="text-center text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            A curated collection of films, theatre performances, and directorial works. Discover iconic roles and creative contributions by Buddhi Tamang.
          </p>

          {/* Category Filters */}
          <div className="flex justify-center flex-wrap gap-4 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 shadow-sm ${
                  activeCategory === category
                    ? "bg-[#7B1E2C] text-white shadow-md hover:scale-105"
                    : "bg-white text-gray-800 border border-gray-300 hover:bg-[#f3e5e8] hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-500 bg-gradient-to-br from-white to-[#fdf2f4]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} — ${item.role} by Buddhi Tamang`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-1"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
                </div>

                <div className="p-6 space-y-2">
                  <div className="flex items-center justify-between text-sm text-gray-500 font-medium">
                    <span className="bg-[#fde2e4] text-[#7B1E2C] px-2 py-1 rounded-md">{item.category}</span>
                    <span>{item.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#7B1E2C] group-hover:text-[#a31f3d] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-700 font-medium">{item.role}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
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

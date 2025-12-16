import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

const categories = ["All", "Film", "Direction", "Theatre"];

const portfolioItems = [
  // Films
  { year: "2013", title: "Saanghuro", role: "Nare", description: "Buddhi Tamang appears as Nare in this critically acclaimed 2013 Nepali drama exploring rural family life and social challenges. His performance drew attention for authenticity and nuanced expression.", image: "/images/saanghuro.jpg", category: "Film" },
  { year: "2014", title: "Kabaddi", role: "Chhantyal", description: "The iconic film that started the Kabaddi franchise, featuring Buddhi Tamang as Chhantyal. His comic timing and memorable expressions became a hit among Nepali audiences.", image: "/images/kabaddi.jpg", category: "Film" },
  { year: "2014", title: "Talakjung vs Tulke", role: "Hanuman", description: "Buddhi Tamang plays Hanuman in this award-winning social drama highlighting rural struggles and societal conflicts in Nepal. His role received praise for depth and humor.", image: "/images/talakjung.jpg", category: "Film" },
  { year: "2014", title: "Shaabhala", role: "Ram (short film)", description: "A 2014 short film where Buddhi Tamang’s performance as Ram stands out for its subtle comedic flair and emotional depth.", image: "/images/shaabhala.jpg", category: "Film" },
  { year: "2015", title: "Woda Number 6", role: "Budhhi", description: "A political satire featuring Buddhi Tamang as Budhhi, showcasing his unique blend of humor and social commentary. This role remains one of the most searched in Nepali cinema.", image: "/images/woda-number6.jpg", category: "Film" },
  { year: "2015", title: "Kabaddi Kabaddi", role: "Chhantyal", description: "Sequel to the popular Kabaddi film, Buddhi Tamang reprises his role as Chhantyal, strengthening his reputation as a leading comedic actor in Nepal.", image: "/images/kabaddi-kabaddi.jpg", category: "Film" },
  { year: "2016", title: "Chhakka Panja", role: "Budhhi", description: "Nepal's biggest comedy franchise. Buddhi Tamang’s portrayal of Budhhi contributed to its massive popularity and high online search interest.", image: "/images/chhakka-panja.jpg", category: "Film" },
  { year: "2016", title: "Purano Dunga", role: "Bideshi", description: "Buddhi Tamang adds depth to this 2016 Nepali drama as Bideshi, reflecting rural cultural nuances and audience engagement.", image: "/images/purano-dunga.jpg", category: "Film" },
  { year: "2016", title: "Bijuli Machine", role: "Ram Dai", description: "A unique story where Buddhi Tamang plays Ram Dai. His performance helped elevate this experimental narrative to mainstream recognition.", image: "/images/bijuli-machine.jpg", category: "Film" },
  { year: "2017", title: "Ghampani", role: "Nima", description: "A social drama where Buddhi Tamang’s Nima adds humor and realism to address themes of love, caste, and tradition.", image: "/images/ghampani.jpg", category: "Film" },
  { year: "2017", title: "A Mero Hajur 2", role: "Shree Dharmendra", description: "A family drama featuring Buddhi Tamang’s comic performance as Shree Dharmendra, making the film highly searched by audiences.", image: "/images/a-mero-hajur2.jpg", category: "Film" },
  { year: "2018", title: "Mr. Jholay", role: "Guna Prasad", description: "Comedy entertainer with Buddhi Tamang delivering a hilarious and memorable role as Guna Prasad.", image: "/images/mr-jholay.jpg", category: "Film" },
  { year: "2018", title: "Panche Baja", role: "Sahile", description: "Rural drama featuring Buddhi Tamang as Sahile, blending comedy and authenticity to engage audiences.", image: "/images/panche-baja.jpg", category: "Film" },
  { year: "2018", title: "Kohalpur Express", role: "Sher Bahadur", description: "Buddhi Tamang portrays Sher Bahadur in this adventure-comedy, combining humor with regional storytelling.", image: "/images/kohalpur.jpg", category: "Film" },
  { year: "2018", title: "Damaruko Dandibiyo", role: "Mukhiya", description: "A cultural sports drama, where Buddhi Tamang plays Mukhiya, contributing significantly to the ensemble cast’s performance.", image: "/images/damaruko.jpg", category: "Film" },
  { year: "2018", title: "Chhakka Panja 3", role: "Budhhi", description: "Buddhi Tamang reprises Budhhi in this successful comedy, solidifying his iconic status in Nepali cinema.", image: "/images/chhakka-panja3.jpg", category: "Film" },
  { year: "2019", title: "Saili", role: "(supporting)", description: "Critically acclaimed drama featuring Buddhi Tamang in a supporting role, highlighting his range as an actor.", image: "/images/saili.jpg", category: "Film" },
  { year: "2019", title: "Bir Bikram 2", role: "Bagh Bahadur", description: "Action-packed sequel where Buddhi Tamang shines as Bagh Bahadur, delivering both comedy and memorable scenes.", image: "/images/bir-bikram2.jpg", category: "Film" },
  { year: "2020", title: "Senti Virus", role: "Dhrubaram's neighbour", description: "Buddhi Tamang adds comedic charm in this popular 2020 comedy, engaging audiences nationwide.", image: "/images/senti-virus.jpg", category: "Film" },
  { year: "2022", title: "Mantra", role: "(supporting)", description: "Nepali feature film with Buddhi Tamang delivering a compelling supporting performance.", image: "/images/mantra.jpg", category: "Film" },
  { year: "2023", title: "Chhakka Panja 4", role: "Budhhi", description: "Part of Nepal’s blockbuster comedy franchise, Buddhi Tamang’s Budhhi role remains highly searched.", image: "/images/chhakka-panja4.jpg", category: "Film" },
  { year: "2023", title: "Kabaddi 4: The Final Match", role: "Chhantyal", description: "Buddhi Tamang in the finale of the Kabaddi franchise, a performance widely appreciated and searched online.", image: "/images/kabaddi4.jpg", category: "Film" },

  // Direction
  { year: "2025", title: "Milarepa", role: "Co-director", description: "Buddhi Tamang co-directed this spiritual Mandala Theatre play, focusing on character-driven performance and actor training.", image: "/images/milarepa.jpg", category: "Direction" },
  { year: "2024", title: "Maasinya", role: "Co-director", description: "Socially conscious theatre production co-directed by Buddhi Tamang, emphasizing cultural identity and social reflection.", image: "/images/maasinya.jpg", category: "Direction" },
  { year: "2016", title: "Yojanapark", role: "Director", description: "Experimental Mandala Theatre production directed by Buddhi Tamang, exploring contemporary storytelling on stage.", image: "/images/yojanapark.jpg", category: "Direction" },

  // Theatre
  { year: "2014", title: "Mitjyu", role: "Actor", description: "Mandala Theatre play with Buddhi Tamang as a lead actor, shaping his early theatre career.", image: "/images/mitjyu.jpg", category: "Theatre" },
  { year: "2024-2025", title: "Hari Hajurba", role: "Producer", description: "Production management and creative coordination by Buddhi Tamang for Mandala Theatre.", image: "/images/hari-hajurba.jpg", category: "Theatre" },
];

export const Portfolio = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === activeCategory);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": portfolioItems.map(item => ({
      "@type": "CreativeWork",
      name: item.title,
      description: item.description,
      image: item.image ? `https://yourdomain.com${item.image}` : undefined,
      datePublished: item.year,
      creator: { "@type": "Person", name: "Buddhi Tamang" },
    })),
  };

  return (
    <div className="bg-gradient-to-b from-[#fff5f2] to-white text-gray-900">
      <SEO
        title="Buddhi Tamang — Nepali Actor, Comedian & Theatre Practitioner"
        description="Explore Buddhi Tamang's complete portfolio of films, theatre performances, and directorial works. Discover iconic roles and contributions to Nepali cinema."
        path="/portfolio"
        image="/images/buddhi-tamang-hero.jpg"
        structuredData={structuredData}
      />

      <Header activePage="Portfolio" />

      <section className="bg-white py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-12">
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#7B1E2C] mb-2 sm:mb-3 md:mb-4">Buddhi Tamang Portfolio</h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 mb-2 sm:mb-3 md:mb-4">
              Discover the complete works of Buddhi Tamang — iconic Nepali actor, comedian, and theatre practitioner known for his unforgettable performances in film and theatre.
            </p>
          </div>
          <div className="flex-1 flex justify-center">
            <img src="/images/buddhi-tamang-hero.jpg" alt="Buddhi Tamang" className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md object-cover" />
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-2 sm:px-3 md:px-4 lg:px-5 py-1 sm:py-1.5 md:py-2 rounded-full text-xs sm:text-sm md:text-base font-semibold transition ${
                  activeCategory === cat ? "bg-[#7B1E2C] text-white shadow-lg" : "bg-white text-gray-800 border border-gray-300 hover:bg-[#fde2e4]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {filteredItems.map((item, idx) => (
              <article key={idx} className="bg-white rounded-lg overflow-hidden shadow hover:shadow-2xl transition-shadow duration-300">
                <div className="aspect-w-3 aspect-h-4 overflow-hidden">
                  <img src={item.image} alt={`${item.title} — ${item.role}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 sm:p-5 md:p-6">
                  <span className="bg-[#fde2e4] text-[#7B1E2C] px-2 py-1 rounded-full text-xs font-medium">{item.category}</span>
                  <h3 className="text-lg sm:text-xl font-semibold text-[#7B1E2C] mt-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium mt-1">{item.role}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-2">{item.description}</p>
                  <span className="text-gray-400 text-xs mt-1 block">{item.year}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// React import not required with the new JSX transform
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

const filmography = [
  { year: "2014", title: "Kabaddi", role: "Chhantyal", description: "The iconic Nepali film that launched the Kabaddi franchise; Buddhi Tamang’s performance as Chhantyal captivated audiences." },
  { year: "2016", title: "Chhakka Panja", role: "Budhhi", description: "Nepali comedy blockbuster; Buddhi Tamang became widely recognized for his hilarious and memorable role." },
  { year: "2018", title: "Chhakka Panja 3", role: "Budhhi", description: "One of Nepal’s most successful comedy franchises; Buddhi Tamang reprised his iconic comedic character." },
  { year: "2023", title: "Chhakka Panja 4", role: "Budhhi", description: "Latest installment in the hit comedy series featuring Buddhi Tamang delivering his signature humor." },
  { year: "2023", title: "Kabaddi 4: The Final Match", role: "Chhantyal", description: "Blockbuster finale of the Kabaddi series with Buddhi Tamang’s unforgettable performance." },
];

const affiliations = [
  { organisation: "Kathmandu Theatre Groups", role: "Early stage training and performance" },
  { organisation: "Mandala Theatre", role: "Performer / collaborator" },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Buddhi Tamang",
  "image": "https://yourdomain.com/images/buddhi-tamang-portrait-og.svg",
  "url": "https://yourdomain.com/buddhi-tamang/biography",
  "sameAs": [
    "https://www.imdb.com/name/nm12345678",
    "https://www.facebook.com/buddhitamang",
    "https://twitter.com/buddhitamang"
  ],
  "jobTitle": "Actor, Theatre Practitioner, Mentor",
  "worksFor": { "@type": "Organization", "name": "Mandala Theatre" },
  "description": "Buddhi Tamang is a renowned Nepali actor, theatre practitioner, and mentor, known for blockbuster films like Kabaddi series and Chhakka Panja series, and for his contributions to Nepali theatre."
};

export const Biography = (): JSX.Element => {
  return (
    <>
      <SEO
        title="Buddhi Tamang — Biography & Blockbuster Films"
        description="Discover Buddhi Tamang's biography, top Nepali comedy films, theatre contributions, and professional affiliations. Explore the journey of one of Nepal’s most versatile actors."
        path="/buddhi-tamang/biography"
        image="/images/buddhi-tamang-portrait-og.svg"
        structuredData={structuredData}
      />
      <Header activePage="Biography" />

      <section className="w-full bg-gradient-to-b from-[#fff5f2] to-white py-10 sm:py-16 md:py-20 lg:py-28">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 xl:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 items-center mb-12 sm:mb-16 md:mb-24">
            {/* Portrait */}
            <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <img
                src="/images/buddhi.png"
                alt="Buddhi Tamang, Nepali actor and theatre practitioner"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Biography Text */}
            <div>
              <h1 className="text-[#7B1E2C] font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6">Buddhi Tamang</h1>
              <p className="text-[#171a1fcc] text-base sm:text-lg md:text-xl mb-3 sm:mb-4 leading-relaxed">
                Buddhi Tamang is a celebrated Nepali actor, theatre practitioner, and mentor. Born in 1982 in Kavrepalanchok, Nepal, he has become a household name through his signature comedic roles and versatile performances across theatre and film.
              </p>
              <p className="text-[#171a1fcc] text-base sm:text-lg md:text-xl mb-3 sm:mb-4 leading-relaxed">
                He is widely recognized for his iconic characters in the <strong>Kabaddi</strong> and <strong>Chhakka Panja</strong> film series, and for his impactful contributions to Nepali theatre as a performer and mentor.
              </p>
              <p className="text-[#171a1fcc] text-base sm:text-lg md:text-xl leading-relaxed">
                With a career spanning over a decade, Buddhi Tamang continues to entertain and inspire audiences, combining traditional Nepali storytelling with contemporary acting techniques.
              </p>
            </div>
          </div>

          {/* Affiliations */}
          <div className="mb-12 sm:mb-16 md:mb-24">
            <h2 className="text-[#7B1E2C] text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 md:mb-12">Professional Roles & Affiliations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {affiliations.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="font-semibold text-2xl mb-3">{item.organisation}</h3>
                  <p className="text-gray-700">{item.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Filmography */}
          <div>
            <h2 className="text-[#7B1E2C] text-2xl sm:text-3xl md:text-4xl font-semibold mb-6 sm:mb-8 md:mb-12">Top Blockbuster Films</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
              {filmography.map((film, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-4 sm:p-5 md:p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#7B1E2C] hover:scale-105 transform transition-transform duration-300"
                >
                  <h3 className="text-lg sm:text-xl font-bold text-[#7B1E2C] mb-1">{film.title} ({film.year})</h3>
                  <p className="text-xs sm:text-sm text-gray-500 mb-1"><strong>Role:</strong> {film.role}</p>
                  <p className="text-xs sm:text-sm text-gray-600">{film.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <a
              href="/media"
              className="inline-block px-8 py-4 bg-[#7B1E2C] text-white font-semibold rounded-lg hover:bg-[#5a1620] transition-colors shadow-lg hover:shadow-xl"
            >
              Explore Media Gallery
            </a>
            <a
              href="/contact"
              className="inline-block ml-4 px-8 py-4 border-2 border-[#7B1E2C] text-[#7B1E2C] font-semibold rounded-lg hover:bg-[#7B1E2C] hover:text-white transition-colors shadow-lg hover:shadow-xl"
            >
              Contact Buddhi Tamang
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

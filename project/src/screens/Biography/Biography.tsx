// React import not required with the new JSX transform
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";
import { Button } from "../../components/ui/button";

const filmography = [
  { year: "2013", title: "Saanghuro", role: "Nare", description: "An early Nepali drama introducing Buddhi Tamang to the audience, where he delivers a nuanced performance as Nare." },
  { year: "2014", title: "Kabaddi", role: "Chhantyal", description: "The iconic film that launched the Kabaddi franchise; Buddhi Tamang’s portrayal of Chhantyal gained massive attention." },
  { year: "2014", title: "Talakjung vs Tulke", role: "Hanuman", description: "A critically acclaimed Nepali film featuring Buddhi Tamang in a memorable supporting role." },
  { year: "2014", title: "Shaabhala", role: "Ram (short film)", description: "A short film showcasing Buddhi Tamang’s early versatility and acting depth." },
  { year: "2015", title: "Woda Number 6", role: "Budhhi", description: "A political satire where Buddhi Tamang delivers his signature comedic timing as Budhhi." },
  { year: "2015", title: "Kabaddi Kabaddi", role: "Chhantyal", description: "Sequel to Kabaddi, Buddhi Tamang reprises his role, contributing to the franchise’s immense popularity." },
  { year: "2016", title: "Chhakka Panja", role: "Budhhi", description: "Nepali comedy blockbuster; Buddhi Tamang’s performance became widely searched and appreciated." },
  { year: "2016", title: "Purano Dunga", role: "Bideshi", description: "A dramatic portrayal in a social narrative film, highlighting Buddhi Tamang’s versatility." },
  { year: "2016", title: "Bijuli Machine", role: "Ram Dai", description: "A film combining humor and social commentary, featuring Buddhi Tamang’s notable role." },
  { year: "2017", title: "Ghampani", role: "Nima", description: "A highly acclaimed social drama where Buddhi Tamang delivers an unforgettable performance." },
  { year: "2017", title: "A Mero Hajur 2", role: "Shree Dharmendra", description: "A popular romantic drama featuring Buddhi Tamang in a supporting but memorable role." },
  { year: "2018", title: "Mr. Jholay", role: "Guna Prasad", description: "Comedy entertainer; Buddhi Tamang brings charm and humor to his character." },
  { year: "2018", title: "Panche Baja", role: "Sahile", description: "A rural drama highlighting Buddhi Tamang’s ability to portray relatable characters authentically." },
  { year: "2018", title: "Kohalpur Express", role: "Sher Bahadur", description: "A comedic adventure film featuring Buddhi Tamang in a prominent, highly searched role." },
  { year: "2018", title: "Damaruko Dandibiyo", role: "Mukhiya", description: "A cultural sports drama where Buddhi Tamang plays the central role of Mukhiya." },
  { year: "2018", title: "Chhakka Panja 3", role: "Budhhi", description: "Buddhi Tamang reprises his iconic comedic character in one of Nepal’s most successful film franchises." },
  { year: "2019", title: "Saili", role: "(supporting)", description: "A critically acclaimed drama showcasing Buddhi Tamang’s skill in supporting roles." },
  { year: "2019", title: "Bir Bikram 2", role: "Bagh Bahadur", description: "Action-packed sequel featuring Buddhi Tamang in a fan-favorite role." },
  { year: "2020", title: "Senti Virus", role: "Dhrubaram's neighbour", description: "Popular 2020 comedy film where Buddhi Tamang adds memorable humor as the neighbor." },
  { year: "2022", title: "Mantra", role: "(supporting)", description: "A drama film with Buddhi Tamang in a supporting role that continues to draw audience attention." },
  { year: "2023", title: "Chhakka Panja 4", role: "Budhhi", description: "Latest installment in the hit comedy franchise featuring Buddhi Tamang reprising his iconic role." },
  { year: "2023", title: "Kabaddi 4: The Final Match", role: "Chhantyal", description: "Blockbuster finale of the Kabaddi series featuring Buddhi Tamang’s memorable performance." },
];

const affiliations = [
  { organisation: "Kathmandu theatre groups", role: "Early stage training and performance" },
  { organisation: "Mandala Theatre (collaborations)", role: "Performer / collaborator" },
];

// Structured Data for JSON-LD SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Buddhi Tamang",
  image: "https://yourdomain.com/images/buddhi-tamang-portrait-og.svg",
  url: "https://yourdomain.com/buddhi-tamang/biography",
  sameAs: [
    "https://www.imdb.com/name/nm12345678",
    "https://www.facebook.com/buddhitamang",
    "https://twitter.com/buddhitamang",
  ],
  jobTitle: "Actor, Theatre Practitioner, Mentor",
  worksFor: { "@type": "Organization", name: "Mandala Theatre" },
  description:
    "Buddhi Tamang is a Nepali actor, theatre practitioner, and mentor known for his roles in films like Kabaddi series, Chhakka Panja series, and contributions to Nepali theatre.",
};

export const Biography = (): JSX.Element => {
  return (
    <>
      <SEO
        title="Buddhi Tamang — Biography & Filmography"
        description="Explore Buddhi Tamang’s biography, selected filmography, theatre contributions, and professional affiliations. Discover the journey of one of Nepal’s most versatile actors."
        path="/buddhi-tamang/biography"
        image="/images/buddhi-tamang-portrait-og.svg"
        structuredData={structuredData}
      />
      <Header activePage="Biography" />

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-24">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="/images/pkdai2.jpg"
                alt="Portrait of Buddhi Tamang, Nepali actor and theatre practitioner"
                className="w-full h-full object-cover block rounded-lg"
                loading="lazy"
              />
            </div>
            <div>
              <h1 className="font-bold text-[#7B1E2C] text-5xl mb-8">
                Buddhi Tamang
              </h1>
              <p className="text-[#171a1fcc] text-lg mb-6">
                Buddhi Tamang is a celebrated Nepali actor, theatre practitioner, and mentor. Born in 1982 in Kavrepalanchok, Nepal, he has become renowned for his remarkable versatility across stage and screen. His signature expressions and performances are cherished across generations.
              </p>
              <p className="text-[#171a1fcc] text-lg mb-6">
                From early stage training in Kathmandu’s theatre scene to starring in blockbuster films, Buddhi Tamang has created memorable characters in the Kabaddi series, Chhakka Panja series, and numerous critically acclaimed films. His contributions to Nepali theatre include directing, mentoring, and leading cultural productions.
              </p>
              <p className="text-[#171a1fcc] text-lg">
                I have been actively mentoring emerging actors, blending traditional Nepali theatre forms with contemporary techniques. My work embodies cultural storytelling that resonates with local and international audiences.
              </p>
            </div>
          </div>

          {/* Affiliations */}
          <div className="mb-24">
            <h2 className="text-[#7B1E2C] text-4xl mb-12">Professional Roles & Affiliations</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {affiliations.map((item, index) => (
                <div key={index} className="border rounded-lg p-8">
                  <h3 className="font-semibold text-2xl mb-3">{item.organisation}</h3>
                  <p className="text-lg">{item.role}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Filmography */}
          <div>
            <h2 className="text-[#7B1E2C] text-4xl mb-12">Selected Filmography</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filmography.map((film, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                  <h3 className="font-semibold text-[#7B1E2C] text-xl">{film.title} ({film.year})</h3>
                  <p className="text-[#171a1fcc] text-sm mb-1">Role: {film.role}</p>
                  <p className="text-gray-600 text-sm">{film.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <a href="/portfolio">See Works</a>
            </Button>
            <Button asChild variant="outline" className="ml-4">
              <a href="/contact">Contact</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

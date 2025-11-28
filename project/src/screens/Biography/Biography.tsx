// React import not required with the new JSX transform
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

// Filmography and selected credits (paraphrased from public sources)
const filmography = [
  { year: "2013", title: "Saanghuro", role: "Nare" },
  { year: "2014", title: "Kabaddi", role: "Chhantyal" },
  { year: "2014", title: "Talakjung vs Tulke", role: "Hanuman" },
  { year: "2014", title: "Shaabhala", role: "Ram (short film)" },
  { year: "2015", title: "Woda Number 6", role: "Budhhi" },
  { year: "2015", title: "Kabaddi Kabaddi", role: "Chhantyal" },
  { year: "2016", title: "Chhakka Panja", role: "Budhhi" },
  { year: "2016", title: "Purano Dunga", role: "Bideshi" },
  { year: "2016", title: "Bijuli Machine", role: "Ram Dai" },
  { year: "2017", title: "Ghampani", role: "Nima" },
  { year: "2017", title: "A Mero Hajur 2", role: "Shree Dharmendra" },
  { year: "2018", title: "Mr. Jholay", role: "Guna Prasad" },
  { year: "2018", title: "Panche Baja", role: "Sahile" },
  { year: "2018", title: "Kohalpur Express", role: "Sher Bahadur" },
  { year: "2018", title: "Damaruko Dandibiyo", role: "Mukhiya" },
  { year: "2018", title: "Chhakka Panja 3", role: "Budhhi" },
  { year: "2019", title: "Saili", role: "(supporting)" },
  { year: "2019", title: "Bir Bikram 2", role: "Bagh Bahadur" },
  { year: "2020", title: "Senti Virus", role: "Dhrubaram's neighbour" },
  { year: "2022", title: "Mantra", role: "(supporting)" },
  { year: "2023", title: "Chhakka Panja 4", role: "Budhhi" },
  { year: "2023", title: "Kabaddi 4: The Final Match", role: "Chhantyal" },
  // The Wikipedia page contains additional entries and guest appearances; this list is a representative extraction.
];

const affiliations = [
  { organisation: "Kathmandu theatre groups", role: "Early stage training and performance" },
  { organisation: "Mandala Theatre (collaborations)", role: "Performer / collaborator" },
];

export const Biography = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <SEO title="Biography" description="Biography and achievements of Buddhi Tamang — actor and theatre practitioner." path="/biography" />
      <Header activePage="Biography" />

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-24">
            <div className="aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src="/images/pkdai2.jpg"
                alt="Buddhi Tamang"
                className="w-full h-full object-cover block rounded-lg"
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = '/images/pkdai.jpg';
                }}
              />
            </div>
            <div>
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#7B1E2C] text-5xl tracking-[0] leading-[60px] mb-8">
                Buddhi Tamang
              </h1>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-6">
                Buddhi Tamang (born 2 March 1983) is a Nepali film and theatre actor and practitioner known for his powerful stage presence and comic timing. Based in Kathmandu, he has appeared in numerous Nepali feature films, television series and stage productions. Buddhi married Anu Theeng in 2022.
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-6">
                Trained through intensive theatre workshops and long-term collaboration with Mandala Theatre, Buddhi blends physical theatre, traditional performance forms, and contemporary techniques to create emotionally resonant performances. His work frequently explores social themes and human relationships.
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-6">
                On stage and screen, Buddhi has taken on a variety of roles — from bold leading performances to subtle character work. He is widely recognized for his roles in productions such as "Sunkeshari," "Jhimke Mama," "Masantaar," and "Kaalaa Pathar Mathi." His performances are noted for their emotional depth, clarity, and physical commitment.
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7">
                Outside performance, Buddhi teaches workshops for emerging actors and participates in community-based projects that use theatre as a tool for social engagement and education.
              </p>
            </div>
          </div>

          <div className="mb-24">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#7B1E2C] text-4xl tracking-[0] leading-[48px] mb-12">
              Professional Roles & Affiliations
            </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {affiliations.map((item, index) => (
                <div key={index} className="border border-solid border-[#dee1e6] rounded-lg p-8">
                  <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-2xl tracking-[0] leading-8 mb-3">
                    {item.organisation}
                  </h3>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-lg tracking-[0] leading-7 mb-2">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#7B1E2C] text-4xl tracking-[0] leading-[48px] mb-12">
              Selected Filmography
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {(() => {
                const mid = Math.ceil(filmography.length / 2);
                const left = filmography.slice(0, mid);
                const right = filmography.slice(mid);
                const renderTable = (list: typeof filmography) => (
                  <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse">
                      <thead>
                        <tr>
                          <th className="text-left w-24 pr-6 pb-4 text-[#7B1E2C] font-bold [font-family:'Playfair_Display',Helvetica] text-xl">Year</th>
                          <th className="text-left pb-4 text-[#171a1f] font-semibold [font-family:'Playfair_Display',Helvetica] text-xl">Film / Role</th>
                        </tr>
                      </thead>
                      <tbody>
                        {list.map((item, index) => (
                          <tr key={index} className="border-t last:border-b-0 border-[#e6e9ee]">
                            <td className="align-top py-4 pr-6 [font-family:'Playfair_Display',Helvetica] text-[#7B1E2C] font-bold text-lg w-24">{item.year}</td>
                            <td className="py-4">
                              <div className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#7B1E2C] text-lg mb-1">{item.title}</div>
                              <div className="[font-family:'Open_Sans',Helvetica] text-[#171a1fcc] text-sm">Role: {item.role}</div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                );

                return (
                  <>
                    {renderTable(left)}
                    {renderTable(right)}
                  </>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

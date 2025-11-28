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
      <SEO
        title="Buddhi Tamang — Biography"
        description="I’m Buddhi Tamang, an actor and theatre practitioner born in 1982 in Kavrepalanchok, Nepal. My work spans traditional Nepali theatre, contemporary film, and community workshops emphasizing cultural authenticity and emotional depth."
        path="/buddhi-tamang/biography"
        image="/images/buddhi-tamang-portrait-og.svg"
      />
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
                I’m Buddhi Tamang, an actor and theatre practitioner born in 1982 in Kavrepalanchok, Nepal. My journey began in Kathmandu’s vibrant cultural scene, where I discovered a deep passion for storytelling through theatre.
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-6">
                Over the years, I’ve worked across traditional Nepali theatre, contemporary films, and community-based workshops. My craft is rooted in authenticity — bringing honesty, emotional depth, and cultural nuance to every character I portray. I believe stories have the power to connect us, and I’m committed to telling the ones that matter.
              </p>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7">
                Trained through intensive theatre workshops and collaborations with Kathmandu companies, I blend physical theatre, traditional performance forms, and contemporary techniques to create emotionally resonant performances. I also teach workshops that mentor emerging actors in voice, movement, and ensemble work.
              </p>
            </div>
          </div>

          {/* Impact & Mentoring - infographic-style cards */}
          <section className="w-full py-12 bg-slate-50 rounded-lg mt-8">
            <div className="container mx-auto px-6 md:px-40">
              <div className="text-center mb-8">
                <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl md:text-4xl mb-2">Buddhi Tamang — Actor, Theatre Practitioner & Mentor</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">As an actor, theatre practitioner, and mentor, I collaborate with creative companies and local communities to develop performances that blend traditional Nepali theatre forms with contemporary storytelling.</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Overview card */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform transform-gpu hover:-translate-y-1 overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-12 h-12 rounded-md bg-[#7B1E2C] text-white flex items-center justify-center">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M12 2a4 4 0 100 8 4 4 0 000-8zM6 20a6 6 0 0112 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-muted-foreground">Actor & Practitioner</div>
                      <div className="font-semibold text-lg text-slate-800 mt-1">Blending tradition with contemporary storytelling</div>
                      <p className="text-sm text-muted-foreground mt-2 break-words">Collaborates with companies and communities to develop culturally rooted, modern narratives.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform transform-gpu hover:-translate-y-1 overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-12 h-12 flex items-center justify-center rounded-md bg-[#7B1E2C] text-white text-lg font-bold">20+</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-muted-foreground">Years</div>
                      <div className="text-lg font-semibold text-slate-800">Versatile Performer</div>
                      <p className="text-sm text-muted-foreground mt-2 break-words">Over two decades of work across theatre, film, and television — memorable characters, strong stage presence, and a reputation for authenticity.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform transform-gpu hover:-translate-y-1 overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-12 h-12 flex items-center justify-center rounded-md bg-[#cc5500] text-white text-lg font-bold">★</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-muted-foreground">Cultural Impact</div>
                      <div className="text-lg font-semibold text-slate-800">Recognizable Style</div>
                      <p className="text-sm text-muted-foreground mt-2 break-words">The signature “Hait” expression and memorable performances have become part of Nepali pop culture, influencing comedy and film audiences nationwide.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform transform-gpu hover:-translate-y-1 overflow-hidden">
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-12 h-12 flex items-center justify-center rounded-md bg-[#f59e0b] text-white text-lg font-bold">WS</div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm text-muted-foreground">Community</div>
                      <div className="text-lg font-semibold text-slate-800">Mentoring & Workshops</div>
                      <p className="text-sm text-muted-foreground mt-2 break-words">Leads workshops and community theatre projects focused on voice, movement, and ensemble work — nurturing emerging actors and creative confidence.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex gap-4 justify-center">
                <a href="/portfolio" className="inline-block">
                  <button className="bg-[#cc5500] text-white px-6 py-3 rounded-full shadow hover:shadow-lg">See Work</button>
                </a>
                <a href="/contact" className="inline-block">
                  <button className="border border-[#cc5500] text-[#cc5500] px-6 py-3 rounded-full">Contact</button>
                </a>
              </div>
            </div>
          </section>

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

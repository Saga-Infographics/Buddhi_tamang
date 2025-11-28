// React import not required with the new JSX transform
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

const achievements = [
  {
    year: "2023",
    title: "Lead Actor - Sunkeshari",
    description: "Lead performance in a major Mandala Theatre production."
  },
  {
    year: "2020",
    title: "Actor / Collaborator - Jhimke Mama",
    description: "Original production staged at Mandala Theatre Nepal."
  },
  {
    year: "2017",
    title: "Actor - Masantaar",
    description: "Political satire exploring rural superstition and social change."
  },
  {
    year: "2016",
    title: "Actor - Kaalaa Pathar Mathi",
    description: "Notable production performed across Kathmandu venues."
  }
];

const training = [
  {
    institution: "Mandala Theatre Nepal",
    degree: "Company member & collaborator",
    year: "Present"
  },
  {
    institution: "Theatre workshops & movement training",
    degree: "Acting, voice and physical theatre",
    year: "Various"
  }
];

export const Biography = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <SEO title="Biography" description="Biography and achievements of Buddhi Tamang — actor and theatre practitioner." path="/biography" />
      <Header activePage="Biography" />

      <section className="w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start mb-24">
            <div className="aspect-[3/4] rounded-lg sticky top-8 overflow-hidden">
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
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#18386e] text-5xl tracking-[0] leading-[60px] mb-8">
                Buddhi Tamang
              </h1>
              <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-6">
                Buddhi Tamang is a Nepali actor and theatre practitioner known for his powerful stage presence and commitment to storytelling rooted in Nepali culture. Based in Kathmandu, Buddhi has worked extensively with Mandala Theatre Nepal and other companies across the country.
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
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-12">
              Professional Roles & Affiliations
            </h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {training.map((item, index) => (
                <div key={index} className="border border-solid border-[#dee1e6] rounded-lg p-8">
                  <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-2xl tracking-[0] leading-8 mb-3">
                    {item.institution}
                  </h3>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1f] text-lg tracking-[0] leading-7 mb-2">
                    {item.degree}
                  </p>
                  <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-base tracking-[0] leading-6">
                    {item.year}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-4xl tracking-[0] leading-[48px] mb-12">
              Major Works & Productions
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex gap-8 items-start pb-6 border-b border-solid border-[#dee1e6] last:border-0">
                   <span className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#18386e] text-3xl tracking-[0] leading-9 w-20 md:w-20 flex-shrink-0">
                    {achievement.year}
                  </span>
                  <div className="flex-1">
                    <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-2xl tracking-[0] leading-8 mb-2">
                      {achievement.title}
                    </h3>
                    <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

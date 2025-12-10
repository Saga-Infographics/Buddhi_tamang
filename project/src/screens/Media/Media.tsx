// React import not required with the new JSX transform
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

// Theatre media featuring or contextually related to Buddhi Tamang
const videos = [
  {
    title: "Aakashko Bato — Mandala Theatre Production",
    type: "Theatre Performance",
    year: "2024",
    description:
      "Aakashko Bato is one of Mandala Theatre’s impactful productions known for its emotional depth and social storytelling. Although Buddhi Tamang is not directly featured in this play, its expressive performance style and character-driven narrative resonate strongly with the artistic values that influenced his theatrical foundation.",
    source: "https://mandalatheatre.com/productions/aakashko-bato-the-sky-route/",
  },
  {
    title: "Jhimke Mama — Mandala Theatre Production",
    type: "Theatre Performance",
    year: "2020",
    description:
      "Jhimke Mama blends humour, local culture, and social commentary—elements strongly associated with Buddhi Tamang’s comedic identity. While not starring him, the thematic tone and performance rhythm reflect the same genre of Nepali theatre that shaped his early career.",
    source: "https://mandalatheatre.com/productions/jhimke-mama/",
  },
  {
    title: "Masaantaar — Mandala Theatre Production",
    type: "Theatre Performance",
    year: "2017",
    description:
      "Masaantaar is a powerful drama exploring identity, transformation, and societal change. These are core themes that align with the artistic environment Buddhi Tamang grew within during his theatre years, making this production contextually relevant to his overall theatre journey.",
    source: "https://mandalatheatre.com/productions/masaantaar/",
  },
];

const photos = [
  {
    title: "Jhimke Mama – Official Theatre Poster",
    category: "Poster",
    src: "https://mandalatheatre.com/wp-content/uploads/2020/01/Jhimke-Mama-Poster.jpg",
    source: "https://mandalatheatre.com/productions/jhimke-mama/",
  },
  {
    title: "Milarepa Theatre Event – Mandala Theatre",
    category: "Event",
    src: "https://mandalatheatre.com/wp-content/uploads/2025/10/WhatsApp-Image-2025-10-16-at-12.50.36_1d5bb35a-819x1024.avif",
    source: "https://mandalatheatre.com/events/milarepa/",
  },
  {
    title: "Aakashko Bato – Visual Poster",
    category: "Poster",
    src: "/images/aakashkobato.webp",
    source: "https://mandalatheatre.com/productions/aakashko-bato-the-sky-route/",
  },
];

export const Media = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <SEO
        title="Buddhi Tamang – Theatre Media Gallery | Photos & Productions"
        description="Explore Buddhi Tamang’s theatre journey through curated visuals, production posters, and Mandala Theatre-related performances that reflect his artistic influence in Nepali theatre."
        path="/media"
      />

      <Header activePage="Media" />

      <section className="relative w-full py-12 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-40">

          {/* Page Title */}
          <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#7B1E2C] text-5xl tracking-[0] leading-[60px] mb-6">
            Buddhi Tamang – Media Gallery
          </h1>

          {/* Intro */}
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg tracking-[0] leading-7 mb-16 max-w-3xl">
            Explore a curated gallery of theatre posters, video highlights, and stage visuals associated
            with Mandala Theatre’s artistic environment. These productions represent the kind of 
            performance culture, storytelling style, and theatrical expression that helped shape 
            Buddhi Tamang’s path in Nepali performing arts.
          </p>

          {/* Video Section */}
          <div className="mb-24">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#7B1E2C] text-4xl tracking-[0] leading-[48px] mb-12">
              Theatre Video Highlights
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <a
                  key={index}
                  href={video.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-solid border-[#dee1e6] rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="aspect-video bg-slate-200 relative overflow-hidden">
                    <img
                      src={video.source + "thumb.jpg"}
                      alt={video.title}
                      className="w-full h-full object-cover"
                      onError={(e: any) => {
                        e.currentTarget.style.display = "none";
                      }}
                    />

                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:bg-white transition-colors">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#7B1E2C] border-b-8 border-b-transparent ml-1" />
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="[font-family:'Open_Sans',Helvetica] font-semibold text-[#7B1E2C] text-sm">
                        {video.type}
                      </span>
                      <span className="[font-family:'Open_Sans',Helvetica] text-sm text-[#171a1fcc]">
                        {video.year}
                      </span>
                    </div>

                    <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#7B1E2C] text-xl">
                      {video.title}
                    </h3>

                    <p className="mt-3 text-sm text-slate-600 leading-5">
                      {video.description}
                    </p>

                    <div className="mt-3 text-sm text-slate-500">
                      <span>Source: </span>
                      <a
                        href={video.source}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#7B1E2C] underline"
                      >
                        Mandala Theatre
                      </a>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Photo Section */}
          <div>
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#7B1E2C] text-4xl tracking-[0] leading-[48px] mb-12">
              Photo & Poster Gallery
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {photos.map((photo, index) => (
                <a
                  key={index}
                  href={photo.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block overflow-hidden rounded-lg"
                >
                  <div className="aspect-square bg-slate-200 relative overflow-hidden">
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    <div className="absolute left-3 top-3 bg-white/80 text-xs px-2 py-1 rounded text-[#7B1E2C]">
                      {photo.category}
                    </div>
                  </div>

                  <div className="pt-3">
                    <p className="[font-family:'Open_Sans',Helvetica] text-[#171a1fcc] text-sm leading-5">
                      {photo.title}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

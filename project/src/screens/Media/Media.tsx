// React import not required with the new JSX transform
import { useState } from "react";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

// Featured showreel and performance clips
const featuredVideos = [
  {
    title: "Buddhi Tamang – Acting Showreel",
    type: "Showreel",
    year: "2024",
    description: "A compilation of Buddhi Tamang's most memorable performances across film and theatre, showcasing his versatility and range as an actor.",
    thumbnail: "/images/showreel-thumb.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example",
  },
  {
    title: "Kabaddi Series – Behind the Scenes",
    type: "Behind the Scenes",
    year: "2015-2023",
    description: "Go behind the scenes of the iconic Kabaddi franchise that made Buddhi Tamang a household name with his unforgettable 'Hait' dialogue.",
    thumbnail: "/images/kabaddi-bts.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example",
  },
  {
    title: "Milarepa – Theatre Rehearsal",
    type: "Theatre Rehearsal",
    year: "2025",
    description: "Exclusive look at the creative process behind Milarepa, Mandala Theatre's production co-directed by Buddhi Tamang.",
    thumbnail: "/images/milarepa-rehearsal.jpg",
    videoUrl: "https://www.youtube.com/watch?v=example",
  },
];

// Theatre and film stills
const photos = [
  {
    title: "Kabaddi Franchise",
    category: "Film",
    src: "/images/kabaddi.jpg",
    year: "2014-2023",
  },
  {
    title: "Chhakka Panja Series",
    category: "Film",
    src: "/images/chhakka-panja.jpg",
    year: "2016-2023",
  },
  {
    title: "Milarepa Theatre Production",
    category: "Theatre",
    src: "/images/milarepa.jpg",
    year: "2025",
  },
  {
    title: "Woda Number 6",
    category: "Film",
    src: "/images/woda-number6.jpg",
    year: "2015",
  },
  {
    title: "Mitjyu Theatre",
    category: "Theatre",
    src: "/images/mitjyu.jpg",
    year: "2014",
  },
  {
    title: "Yojanapark Production",
    category: "Theatre",
    src: "/images/yojanapark.jpg",
    year: "2016",
  },
  {
    title: "Maasinya Theatre",
    category: "Theatre",
    src: "/images/maasinya.jpg",
    year: "2024",
  },
  {
    title: "Chhakka Panja 4",
    category: "Film",
    src: "/images/chhakka-panja4.jpg",
    year: "2023",
  },
  {
    title: "Hostel Returns - Breakout Role",
    category: "Film",
    src: "/images/hostel_return2.jpg",
    year: "2015",
  },
  {
    title: "Kabaddi 4: The Final Match",
    category: "Film",
    src: "/images/kabaddi4.jpg",
    year: "2023",
  },
  {
    title: "Ghampani",
    category: "Film",
    src: "/images/ghampani.jpg",
    year: "2017",
  },
  {
    title: "Bijuli Machine",
    category: "Film",
    src: "/images/bijuli-machine.jpg",
    year: "2016",
  },
  {
    title: "Kohalpur Express",
    category: "Film",
    src: "/images/kohalpur.jpg",
    year: "2018",
  },
  {
    title: "Mr. Jholay",
    category: "Film",
    src: "/images/mr-jholay.jpg",
    year: "2018",
  },
  {
    title: "Purano Dunga",
    category: "Film",
    src: "/images/purano-dunga.jpg",
    year: "2016",
  },
  {
    title: "Barista Balaram",
    category: "Film",
    src: "/images/barista-balaram_2.jpg",
    year: "2025",
  },
  {
    title: "Saanghuro",
    category: "Film",
    src: "/images/saanghuro.jpg",
    year: "2013",
  },
  {
    title: "Bir Bikram 2",
    category: "Film",
    src: "/images/bir-bikram2.jpg",
    year: "2019",
  },
  {
    title: "Damaruko Dandibiyo",
    category: "Film",
    src: "/images/damaruko.jpg",
    year: "2018",
  },
  {
    title: "Hari Hajurba Theatre",
    category: "Theatre",
    src: "/images/hari-hajurba.jpg",
    year: "2024-2025",
  },
  {
    title: "A Mero Hajur 2",
    category: "Film",
    src: "/images/a-mero-hajur2.jpg",
    year: "2017",
  },
  {
    title: "Panche Baja",
    category: "Film",
    src: "/images/panche-baja.jpg",
    year: "2018",
  },
  {
    title: "Senti Virus",
    category: "Film",
    src: "/images/senti-virus.jpg",
    year: "2020",
  },
  {
    title: "Saili",
    category: "Film",
    src: "/images/saili.jpg",
    year: "2019",
  },
];

// Featured Iconic Films
const featuredFilms = [
  {
    title: "Kabaddi (2014)",
    role: "Chhantyal",
    description: "Buddhi Tamang gained nationwide recognition with Kabaddi (2014), a film that kickstarted the beloved Kabaddi franchise in Nepali cinema. His comedic timing and unforgettable portrayal of Chhantyal made the movie a cultural phenomenon, earning massive attention from audiences and critics alike.",
    image: "/images/kabaddi.jpg",
    year: "2014",
  },
  {
    title: "Chhakka Panja (2016)",
    role: "Budhhi",
    description: "Chhakka Panja (2016) became one of Nepal's biggest comedy blockbusters, and Buddhi Tamang's performance as Budhhi stood out as a fan favorite. Known for his signature humor and expressive acting, he helped make the film a massive box office success.",
    image: "/images/chhakka-panja.jpg",
    year: "2016",
  },
  {
    title: "Chhakka Panja 3 (2018)",
    role: "Budhhi",
    description: "In Chhakka Panja 3 (2018), Buddhi Tamang reprised his iconic role of Budhhi, bringing laughter and memorable moments to audiences. The film solidified his reputation as one of Nepal's most beloved comedic actors.",
    image: "/images/chhakka-panja3.jpg",
    year: "2018",
  },
  {
    title: "Chhakka Panja 4 (2023)",
    role: "Budhhi",
    description: "Continuing the franchise's legacy, Chhakka Panja 4 (2023) features Buddhi Tamang in his signature role of Budhhi. This blockbuster hit captivated audiences nationwide, reaffirming his status as a top-tier comedic actor in Nepali cinema.",
    image: "/images/chhakka-panja4.jpg",
    year: "2023",
  },
  {
    title: "Kabaddi 4: The Final Match (2023)",
    role: "Chhantyal",
    description: "The grand finale of the Kabaddi series, Kabaddi 4: The Final Match (2023), showcases Buddhi Tamang reprising his beloved role as Chhantyal. The film achieved huge box office success, highlighting his enduring popularity and impact on the Nepali film industry.",
    image: "/images/kabaddi4.jpg",
    year: "2023",
  },
];

// Press and interview clips
const pressMedia = [
  {
    title: "Interview: Journey from Theatre to Film",
    type: "Interview",
    outlet: "The Kathmandu Post",
    description: "Buddhi Tamang discusses his transition from theatre to becoming one of Nepal's most beloved character actors.",
    date: "2023",
  },
  {
    title: "The Story Behind 'Hait'",
    type: "Feature",
    outlet: "Republica",
    description: "How a single word became a cultural phenomenon and changed Buddhi Tamang's career forever.",
    date: "2022",
  },
  {
    title: "Directing at Mandala Theatre",
    type: "Interview",
    outlet: "The Himalayan Times",
    description: "Insights into Buddhi's work as a director and his vision for contemporary Nepali theatre.",
    date: "2024",
  },
];

export const Media = (): JSX.Element => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const filteredPhotos = selectedCategory === "All" 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="bg-white w-full relative">
      <SEO
        title="Media Gallery — Buddhi Tamang"
        description="Explore photos, videos, and press coverage of Buddhi Tamang's work across film, television, and theatre. From iconic film moments to behind-the-scenes theatre productions."
        path="/media"
      />

      <Header activePage="Media" />

      {/* Hero Section */}
      <section className="relative w-full py-16 bg-gradient-to-br from-[#7B1E2C]/5 to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h1 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#7B1E2C] text-4xl md:text-5xl tracking-[0] leading-tight mb-4">
            Media Gallery
          </h1>
          <p className="[font-family:'Open_Sans',Helvetica] font-normal text-[#171a1fcc] text-lg md:text-xl tracking-[0] leading-7 max-w-3xl">
            A visual journey through Buddhi Tamang's career — from iconic film moments to powerful theatre productions, behind-the-scenes glimpses, and press features.
          </p>
        </div>
      </section>

      {/* Featured Videos Section */}
      <section className="relative w-full py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#7B1E2C] text-3xl md:text-4xl">
              Featured Videos
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredVideos.map((video, index) => (
              <div
                key={index}
                className="group block border border-solid border-[#dee1e6] rounded-xl overflow-hidden hover:shadow-2xl hover:border-[#7B1E2C]/20 transition-all duration-300"
              >
                <div className="aspect-video bg-gradient-to-br from-slate-900 to-slate-700 relative overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                    onError={(e: any) => {
                      e.currentTarget.src = "/images/video-placeholder.jpg";
                    }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-[#7B1E2C] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8 5v14l11-7L8 5z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold text-[#7B1E2C] bg-[#7B1E2C]/5 px-2 py-1 rounded">
                      {video.type}
                    </span>
                    <span className="text-xs text-[#171a1fcc]">{video.year}</span>
                  </div>

                  <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-lg mb-2 group-hover:text-[#7B1E2C] transition-colors">
                    {video.title}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Iconic Films Section */}
      <section className="relative w-full py-16 bg-gradient-to-br from-[#7B1E2C]/5 to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#7B1E2C] text-3xl md:text-4xl mb-4">
              Iconic Film Performances
            </h2>
            <p className="text-[#171a1fcc] text-lg max-w-3xl mx-auto">
              Celebrating the blockbuster franchises that made Buddhi Tamang a household name across Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {featuredFilms.map((film, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl overflow-hidden border border-[#dee1e6] hover:shadow-2xl hover:border-[#7B1E2C]/30 transition-all duration-300"
              >
                <div className="md:flex">
                  <div className="md:w-2/5 aspect-[3/4] md:aspect-auto bg-slate-200 overflow-hidden">
                    <img
                      src={film.image}
                      alt={film.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e: any) => {
                        e.currentTarget.src = "/images/placeholder.jpg";
                      }}
                    />
                  </div>
                  <div className="md:w-3/5 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs font-semibold text-[#7B1E2C] bg-[#7B1E2C]/10 px-3 py-1 rounded-full">
                          {film.year}
                        </span>
                        <span className="text-sm text-slate-600 italic">Role: {film.role}</span>
                      </div>
                      
                      <h3 className="[font-family:'Playfair_Display',Helvetica] font-bold text-[#171a1f] text-xl md:text-2xl mb-3 group-hover:text-[#7B1E2C] transition-colors">
                        {film.title}
                      </h3>
                      
                      <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                        {film.description}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <div className="flex items-center gap-2 text-[#7B1E2C]">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/>
                        </svg>
                        <span className="text-sm font-medium">Blockbuster Hit</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Interviews Section */}
      <section className="relative w-full py-16 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#7B1E2C] text-3xl md:text-4xl mb-8">
            Press & Interviews
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pressMedia.map((item, index) => (
              <div
                key={index}
                className="border border-[#dee1e6] rounded-xl p-6 hover:shadow-lg hover:border-[#7B1E2C]/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="text-xs font-semibold text-[#7B1E2C] bg-[#7B1E2C]/5 px-2 py-1 rounded">
                    {item.type}
                  </span>
                  <span className="text-xs text-slate-500">{item.date}</span>
                </div>
                
                <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#171a1f] text-lg mb-2">
                  {item.title}
                </h3>
                
                <p className="text-sm text-slate-600 mb-3 leading-relaxed">
                  {item.description}
                </p>
                
                <p className="text-xs text-slate-500 italic">
                  Published by {item.outlet}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative w-full py-12 bg-gradient-to-br from-[#7B1E2C]/5 to-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
          <h3 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-[#7B1E2C] text-2xl md:text-3xl mb-4">
            Interested in Working Together?
          </h3>
          <p className="text-[#171a1fcc] text-base md:text-lg mb-6 max-w-2xl mx-auto">
            For collaboration inquiries, casting opportunities, or media requests, feel free to get in touch.
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#7B1E2C] hover:bg-[#5a1620] text-white font-medium px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Me
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

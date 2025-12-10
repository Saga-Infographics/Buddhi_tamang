// React import removed because JSX runtime is automatic in this project (no direct React symbol usage)
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import HeroImage from "../../components/ui/HeroImage";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { SEO } from "../../components/SEO/SEO";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-white w-full relative">
      <SEO
        title="Buddhi Tamang — Nepali Actor, Comedian & Theatre Practitioner"
        description="Discover the journey of Buddhi Tamang, a versatile Nepali actor and theatre practitioner known for his impactful characters, comedic style, and cultural storytelling in film, theatre, and television."
        path="/buddhi-tamang"
        image="/images/buddhi-tamang-portrait-og.svg"
      />

      <Header activePage="Home" />

      {/* Hero */}
      <section className="relative w-full md:min-h-[680px] bg-gradient-to-br from-foreground/2 to-white overflow-visible isolate">
        <div className="absolute inset-0 pointer-events-none -z-20">
          <div className="hidden md:block absolute -right-40 top-6 w-[560px] h-[560px] bg-gradient-to-tr from-[#fff1f2] to-[#fffaf0] rounded-full opacity-40 transform rotate-12 filter blur-3xl" />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-24 py-12 md:py-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="max-w-xl">
              <h1 className="[font-family:'Playfair_Display',Helvetica] font-extrabold text-primary text-4xl md:text-6xl leading-tight mb-4">
                Buddhi Tamang
              </h1>

              <p className="text-accent/90 font-semibold text-lg md:text-2xl mb-6">
                Versatile Nepali Actor & Storyteller — bringing characters to life on stage and screen.
              </p>

              <p className="text-black text-base md:text-lg leading-relaxed mb-4">
                I’m Buddhi Tamang, a Nepali actor and theatre practitioner born in Kavrepalanchok in 1982. My artistic journey began in Kathmandu’s vibrant theatre movement, where I discovered my passion for authentic storytelling and performance.
              </p>

              <p className="text-black text-base md:text-lg leading-relaxed mb-6">
                Over the years, I’ve worked across traditional theatre, mainstream Nepali cinema, comedic television, and community-based workshops. My focus is on delivering honest, emotionally grounded performances that connect deeply with audiences.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Button asChild size="lg" className="shadow-2xl">
                  <Link to="/media">
                    <span className="relative z-10 flex items-center gap-3 px-1">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
                        <path d="M5 3v18l15-9L5 3z" fill="rgba(255,255,255,0.95)" />
                      </svg>
                      <span>Watch Reel</span>
                    </span>
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link to="/portfolio">
                    <span className="relative z-10">Explore Portfolio</span>
                  </Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link to="/contact">
                    <span className="relative z-10">Book for Projects</span>
                  </Link>
                </Button>
              </div>

              {/* Stat Cards */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 min-h-[300px] flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#7B1E2C] to-[#5a1620] text-white flex items-center justify-center shadow-inner mb-4">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2v20M5 7h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <circle cx="8" cy="17" r="1.6" fill="currentColor" />
                      <circle cx="16" cy="17" r="1.6" fill="currentColor" />
                    </svg>
                  </div>

                  <p className="text-sm text-gray-500">Years</p>
                  <p className="text-3xl font-bold text-[#171a1f]">15+</p>

                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    Extensive experience in theatre, film, and television comedy.
                  </p>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 min-h-[300px] flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#cc5500] to-[#b24600] text-white flex items-center justify-center shadow-inner mb-4">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
                      <path d="M7 11h.01M12 11h.01M17 11h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <p className="text-sm text-gray-500">Stage & Screen</p>
                  <p className="text-3xl font-bold text-[#171a1f]">30+</p>

                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    A rich collection of films, theatre productions, and television roles.
                  </p>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 min-h-[300px] flex flex-col">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#d17d05] text-white flex items-center justify-center shadow-inner mb-4">
                    <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M5 21h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M7 17h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>

                  <p className="text-sm text-gray-500">Community</p>
                  <p className="text-2xl font-bold text-[#171a1f]">Workshops</p>

                  <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                    Supporting young performers through creative workshops and community theatre.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center md:justify-end">
              <div className="w-[340px] md:w-[460px] lg:w-[520px]">
                <HeroImage
                  src="/images/pkdai2.jpg"
                  alt="Portrait of Buddhi Tamang"
                  caption="Buddhi Tamang"
                  rotate={4}
                  className="rounded-lg shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="w-full py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-12">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl md:text-4xl mb-3">
              Selected Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A showcase of film and theatre projects that highlight range, comedic timing, and emotional depth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Kabaddi Franchise",
                tag: "Film Series",
                description:
                  "Featuring Buddhi Tamang as the much-loved Chhantyal character, known for the viral 'Hait' expression. His comedic timing and cultural humor played a major role in the franchise's nationwide popularity.",
                image: "/images/kabaddi.jpg"
              },
              {
                title: "Chhakka Panja Franchise",
                tag: "Film Series",
                description:
                  "One of Nepal's most successful comedy franchises, where Buddhi Tamang’s unforgettable performances enhance the humor, heart, and storytelling of each film.",
                image: "/images/chhakka-panja.jpg"
              },
              {
                title: "Milarepa",
                tag: "Theatre",
                description:
                  "A powerful theatrical production co-produced and co-directed by Buddhi Tamang, exploring the spiritual journey of Milarepa through expressive stagecraft and deep narrative storytelling.",
                image: "/images/milarepa.jpg"
              },
            ].map((item, idx) => (
              <article
                key={idx}
                className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="text-xs text-muted-foreground px-2 py-1 rounded bg-muted/10">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/portfolio">See Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Infographic Section */}
      <section className="w-full py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-8">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl md:text-4xl mb-2">
              Buddhi Tamang — Actor, Theatre Practitioner & Mentor
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Known for blending traditional Nepali theatre with modern storytelling, Buddhi Tamang
              delivers powerful performances across film, stage, and television while mentoring
              emerging artists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card A */}
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 min-h-[160px] lg:aspect-square">
              <div className="flex flex-col sm:flex-row items-start gap-4 h-full">
                <div className="flex-none w-10 sm:w-12 h-10 sm:h-12 rounded-md bg-[#7B1E2C] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2a4 4 0 100 8 4 4 0 000-8zM6 20a6 6 0 0112 0" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="text-sm text-muted-foreground">Actor & Practitioner</div>
                  <div className="font-semibold text-lg text-[#171a1f] mt-1">
                    Traditional & Contemporary Storytelling
                  </div>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    Combining classical Nepali theatre roots with modern performance techniques.
                  </p>
                </div>
              </div>
            </div>

            {/* Card B */}
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 min-h-[160px] lg:aspect-square">
              <div className="flex flex-col sm:flex-row items-start gap-4 h-full">
                <div className="flex-none w-10 sm:w-12 h-10 sm:h-12 rounded-md bg-gradient-to-br from-[#cc5500] to-[#a84200] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="text-sm text-muted-foreground">Versatile Performer</div>
                  <div className="font-semibold text-lg text-[#171a1f] mt-1">
                    Theatre, Film & Television
                  </div>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    Known for impactful character roles in Nepali films and the popular sitcom
                    <em> Meri Bassai</em>.
                  </p>
                </div>
              </div>
            </div>

            {/* Card C */}
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 min-h-[160px] lg:aspect-square">
              <div className="flex flex-col sm:flex-row items-start gap-4 h-full">
                <div className="flex-none w-10 sm:w-12 h-10 sm:h-12 rounded-md bg-[#f59e0b] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 2l2.9 6.2L21 9l-5 3.8L17 21l-5-3.2L7 21l1-8.2L3 9l6.1-.8L12 2z"
                      stroke="currentColor"
                      strokeWidth="0.9"
                    />
                  </svg>
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="text-sm text-muted-foreground">Cultural Impact</div>
                  <div className="font-semibold text-lg text-[#171a1f] mt-1">
                    Memorable Characters & Expressions
                  </div>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    Loved for his signature “Hait” expression and iconic comedic moments in Nepali
                    pop culture.
                  </p>
                </div>
              </div>
            </div>

            {/* Card D */}
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 min-h-[160px] lg:aspect-square">
              <div className="flex flex-col sm:flex-row items-start gap-4 h-full">
                <div className="flex-none w-10 sm:w-12 h-10 sm:h-12 rounded-md bg-[#7B1E2C] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M12 4v8M8 12h8M4 20h16" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </div>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="text-sm text-muted-foreground">Mentoring & Community</div>
                  <div className="font-semibold text-lg text-[#171a1f] mt-1">
                    Creative Development & Youth Programs
                  </div>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed">
                    Dedicated to training young artists through workshops, community theatre, and
                    storytelling initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button asChild>
              <a href="/biography">Read Full Biography</a>
            </Button>
            <Button asChild variant="outline" className="ml-4">
              <a href="/contact">Contact</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

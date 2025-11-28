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
        title="Buddhi Tamang — Nepali Actor & Theatre Practitioner"
        description="I’m Buddhi Tamang, an actor and theatre practitioner born in 1982 in Kavrepalanchok, Nepal. Rooted in Kathmandu’s theatre scene, I work across traditional Nepali theatre, contemporary film, and community workshops."
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
                Versatile Actor & Storyteller — stage and screen performances that stay with you.
              </p>

              <p className="text-black text-base md:text-lg leading-relaxed mb-4">
                I’m Buddhi Tamang, an actor and theatre practitioner born in 1982 in Kavrepalanchok, Nepal. My journey began in Kathmandu’s vibrant cultural scene, where I discovered a deep passion for storytelling through theatre.
              </p>

              <p className="text-black text-base md:text-lg leading-relaxed mb-6">
                Over the years, I’ve worked across traditional Nepali theatre, contemporary films, and community-based workshops. My craft is rooted in authenticity — bringing honesty, emotional depth, and cultural nuance to every character I portray. I believe stories have the power to connect us, and I’m committed to telling the ones that matter.
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
                  <Link to="/portfolio"><span className="relative z-10">Explore Portfolio</span></Link>
                </Button>

                <Button asChild variant="outline" size="lg">
                  <Link to="/contact"><span className="relative z-10">Book for Projects</span></Link>
                </Button>
              </div>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                {/* Card 1 - Experience */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform transform-gpu hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-14 h-14 rounded-lg bg-gradient-to-br from-[#7B1E2C] to-[#5a1620] text-white flex items-center justify-center shadow"> 
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M12 2v20M5 7h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="8" cy="17" r="1.6" fill="currentColor" />
                        <circle cx="16" cy="17" r="1.6" fill="currentColor" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">Years</div>
                      <div className="text-2xl font-bold text-[#171a1f]">15+</div>
                      <div className="text-sm text-slate-500 mt-2">Experience across theatre, film, and television</div>
                    </div>
                  </div>
                </div>

                {/* Card 2 - Productions */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform transform-gpu hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-14 h-14 rounded-lg bg-gradient-to-br from-[#cc5500] to-[#b24600] text-white flex items-center justify-center shadow"> 
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
                        <path d="M7 11h.01M12 11h.01M17 11h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">Stage & Screen</div>
                      <div className="text-2xl font-bold text-[#171a1f]">30+</div>
                      <div className="text-sm text-slate-500 mt-2">Productions that showcase range and craft</div>
                    </div>
                  </div>
                </div>

                {/* Card 3 - Workshops */}
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform transform-gpu hover:-translate-y-1">
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-14 h-14 rounded-lg bg-gradient-to-br from-[#f59e0b] to-[#d17d05] text-white flex items-center justify-center shadow"> 
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                        <path d="M12 3v9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5 21h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7 17h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>

                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">Community</div>
                      <div className="text-2xl font-bold text-[#171a1f]">Workshops</div>
                      <div className="text-sm text-slate-500 mt-2">Mentoring, training and outreach projects for emerging artists</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative w-full flex justify-center md:justify-end">
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
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl md:text-4xl mb-3">Selected Work</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">A selection of stage and screen projects showcasing range and craft.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Jhimke Mama",
                tag: "Stage",
                description: "A powerful village drama that examines identity and memory.",
                image: "/images/jhimkey_mama.jpg"
              },
              {
                title: "Masantaar",
                tag: "Stage",
                description: "Exploring social change and superstition in rural communities.",
                image: "/images/masantaar.jpg"
              },
              {
                title: "Kaalaa Patthar Maathi",
                tag: "Stage",
                description: "An intimate story of family and survival in mountain Nepal.",
                image: "/images/kaalaa_pathar_mathi.jpg"
              },
            ].map((item, idx) => (
              <article key={idx} className="group bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                <div className="aspect-[4/3] bg-slate-200 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" decoding="async" />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <span className="text-xs text-muted-foreground px-2 py-1 rounded bg-muted/10">{item.tag}</span>
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

      {/* Infographic summary section (Actor, Performer, Impact, Mentoring) */}
      <section className="w-full py-14 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="text-center mb-8">
            <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl md:text-4xl mb-2">Buddhi Tamang — Actor, Theatre Practitioner & Mentor</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">As an actor and practitioner, Buddhi combines traditional Nepali theatre forms with contemporary storytelling, works across stage and screen, and mentors emerging artists.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card A - Overview */}
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform transform-gpu hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-none w-12 h-12 rounded-md bg-[#7B1E2C] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2a4 4 0 100 8 4 4 0 000-8zM6 20a6 6 0 0112 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground">Actor & Practitioner</div>
                  <div className="font-semibold text-lg text-[#171a1f] mt-1">Blending tradition with contemporary storytelling</div>
                  <p className="text-sm text-slate-500 mt-2">Collaborates with companies and communities to develop culturally rooted, modern narratives.</p>
                </div>
              </div>
            </div>

            {/* Card B - Versatile Performer */}
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform transform-gpu hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-none w-12 h-12 rounded-md bg-gradient-to-br from-[#cc5500] to-[#a84200] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M3 7h18M3 12h18M3 17h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground">Versatile Performer</div>
                  <div className="font-semibold text-lg text-[#171a1f] mt-1">Theatre, Film & Television</div>
                  <p className="text-sm text-slate-500 mt-2">Over two decades of memorable characters, including roles in popular films and the sitcom <em>Meri Bassai</em>.</p>
                </div>
              </div>
            </div>

            {/* Card C - Cultural Impact */}
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform transform-gpu hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-none w-12 h-12 rounded-md bg-[#f59e0b] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 2l2.9 6.2L21 9l-5 3.8L17 21l-5-3.2L7 21l1-8.2L3 9l6.1-.8L12 2z" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground">Cultural Impact</div>
                  <div className="font-semibold text-lg text-[#171a1f] mt-1">Recognizable Style & Moments</div>
                  <p className="text-sm text-slate-500 mt-2">The signature “Hait” expression and memorable performances that resonate across generations.</p>
                </div>
              </div>
            </div>

            {/* Card D - Mentoring */}
            <div className="bg-slate-50 rounded-xl p-6 shadow-sm hover:shadow-lg transition-transform transform-gpu hover:-translate-y-1">
              <div className="flex items-start gap-4">
                <div className="flex-none w-12 h-12 rounded-md bg-[#7B1E2C] text-white flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M12 4v8M8 12h8M4 20h16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex-1">
                  <div className="text-sm text-muted-foreground">Mentoring & Community</div>
                  <div className="font-semibold text-lg text-[#171a1f] mt-1">Workshops & Creative Development</div>
                  <p className="text-sm text-slate-500 mt-2">Leads community theatre, youth programs and workshops to nurture emerging talent and build creative confidence.</p>
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

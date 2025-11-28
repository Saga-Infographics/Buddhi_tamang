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
      <SEO title="Home" description="Buddhi Tamang — actor and storyteller. Portfolio, biography, media and booking information." path="/" image="/images/pkdai2.jpg" />
      <Header activePage="Home" />

      {/* Hero */}
      <section className="relative w-full md:h-[680px] bg-gradient-to-br from-foreground/2 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
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

              <p className="text-black text-base md:text-lg leading-relaxed mb-6">
                With a career blending traditional Nepali theatre and contemporary film, Buddhi brings authenticity and depth to every role. He works across theatre productions, feature films, and community workshops — shaping stories that matter.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-6">
                <Button asChild className="bg-primary text-primary-foreground px-6 py-3 rounded-md shadow-lg hover:shadow-xl transition-transform hover:-translate-y-0.5">
                  <Link to="/media">Watch Reel</Link>
                </Button>

                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 px-5 py-3 rounded-md">
                  <Link to="/portfolio">Explore Portfolio</Link>
                </Button>

                <Button asChild variant="ghost" className="text-muted-foreground px-4 py-2">
                  <Link to="/contact">Book for Projects</Link>
                </Button>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                <div>
                  <strong className="text-primary">15+</strong> years experience
                </div>
                <div>
                  <strong className="text-primary">30+</strong> productions
                </div>
                <div>
                  <strong className="text-primary">Workshops</strong> & mentoring
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
            <Button asChild className="bg-primary text-primary-foreground px-6 py-3 rounded-md">
              <Link to="/portfolio">See Full Portfolio</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About teaser */}
      <section className="w-full py-20 bg-slate-50">
        <div className="container mx-auto px-6 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="[font-family:'Playfair_Display',Helvetica] font-semibold text-3xl md:text-4xl mb-4">About Buddhi</h2>
              <p className="text-muted-foreground mb-6">Actor, theatre practitioner and mentor. Buddhi works with companies and communities to create performances that combine traditional Nepali forms with contemporary storytelling.</p>
              <div className="flex gap-4">
                <Button asChild className="bg-primary text-primary-foreground px-6 py-3 rounded-md">
                  <Link to="/biography">Read Biography</Link>
                </Button>
                <Button asChild variant="outline" className="border-muted text-muted-foreground px-5 py-3 rounded-md">
                  <Link to="/contact">Contact</Link>
                </Button>
              </div>
            </div>

            <div className="rounded-lg overflow-hidden">
              <img src="/images/pkdai2.jpg" alt="Buddhi Tamang portrait" className="w-full h-72 object-cover rounded-lg" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

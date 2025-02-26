import Navigation from "@/components/Navigation";
import { ChefsSection } from "@/components/ChefsSection";
import FAQSection from "@/components/FAQSection";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import React, { useState, useEffect } from "react";
import { fetchContent } from "@/contentful"; // ✅ Import Contentful helper

const heroImages = [
  {
    url: "/images/webp/hero1.webp",
    alt: "Flagship Venue",
  },
  {
    url: "/images/webp/hero2.webp",
    alt: "Your Custom Venue 2",
  },
  {
    url: "/images/webp/hero3.webp",
    alt: "Your Custom Venue 3",
  },
  {
    url: "/images/webp/hero4.webp",
    alt: "Your Custom Venue 4",
  },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const [brands, setBrands] = useState<{ name: string; logo?: string }[]>([]);

  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });

    const autoPlayInterval = setInterval(() => {
      api.scrollNext();
    }, 2500);

    return () => clearInterval(autoPlayInterval);
  }, [api]);

  // 🔹 Fetch brands from Contentful
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const data = await fetchContent("brands"); // ✅ Fetch brands from Contentful
        const brandsData = data.map((item: any) => ({
          name: item.companieName, // ✅ Ensure field name matches Contentful
          logo: item.logo?.fields?.file?.url || "/images/webp/placeholder-logo.webp", // ✅ Handle missing logos with fallback
        }));

        setBrands(brandsData);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };

    fetchBrands();
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Carousel className="w-full h-screen" opts={{ loop: true }} setApi={setApi}>
          <CarouselContent className="h-screen">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <img
                    src={image.url}
                    alt={image.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/50 backdrop-blur-[0px]" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="container px-4 text-center text-white">
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl mb-6 animate-fade-up leading-snug">
              Where Great Spaces<br />Bring People Together
            </h1>
            <p className="max-w-xl mx-auto text-lg mb-8 animate-fade-up opacity-90" style={{ animationDelay: "200ms" }}>
              Explore curated spaces in Berlin for dining, celebrations, and unforgettable gatherings.
            </p>
            <Button
              size="lg"
              className="animate-fade-up bg-black text-white hover:bg-white hover:text-black border border-black transition-colors"
              style={{ animationDelay: "400ms" }}
              onClick={() => window.open("https://form.typeform.com/to/QSuwJRfE", "_blank")}
            >
              Plan Your Event
            </Button>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section id="services" className="py-32">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-3xl md:text-5xl mb-6">Tailored Experiences for Every Occasion</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              From hands-on workshops to immersive team-building retreats, our spaces are designed to bring people together in inspiring ways.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { img: "cooking_class", title: "Hands-On Experiences", desc: "Try cooking, crafting, and DIY workshops designed for fun and connection." },
                { img: "team_building", title: "Stronger Teams", desc: "Step out of the office, collaborate, and share great food in a fresh setting." },
                { img: "video", title: "Video & Storytelling", desc: "Create high-quality videos, styled content, and compelling brand narratives." }
              ].map((item, index) => (
                <div key={index} className="space-y-4">
                  <div className="aspect-square rounded-lg overflow-hidden">
                    <img
                      src={`/images/webp/${item.img}.webp`}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-heading text-2xl">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

       {/* Locations Section */}
      <section id="locations" className="py-32 bg-white">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="font-heading text-3xl md:text-5xl mb-4">Our Locations</h2>
            <p className="text-muted-foreground text-lg">
              Three unique spaces, endless possibilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { img: "flagship", title: "Cooks Connection Flagship", desc: "Full-Kitchen Experience in Charlottenburg", address: <>Sophie-Charlotten-Straße 50, <br /> 14059 Berlin 10717 Berlin</> },
              { img: "bdh", title: "Berlin Dental Hub", desc: "Sleek, Modern Venue in Schöneberg", address: <>Pfalzburger Str. 43-44,<br />10717 Berlin</> },
              { img: "coming_soon", title: "Studio 90", desc: "Our new venue in Charlottenburg", address: "Coming Soon" }
            ].map((place, index) => (
              <div key={index} className="text-center space-y-6">
                <div className="aspect-[16/10] overflow-hidden rounded-lg">
                  <img
                    src={`/images/webp/${place.img}.webp`}
                    alt={place.title}
                    loading="lazy"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-2xl">{place.title}</h3>
                <p className="text-muted-foreground">{place.desc}</p>
                <p>{place.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands We Work With Section (DYNAMIC) */}
<section className="py-32 relative">
  <div className="container px-4 relative">
    <div className="max-w-2xl mx-auto text-center mb-20">
      <h2 className="font-heading text-3xl md:text-5xl mb-4">Brands We Work With</h2>
      <p className="text-muted-foreground text-lg">
        We've had the privilege of hosting exceptional events for these organizations.
      </p>
    </div>

    <div className="relative px-16">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        {/* Previous Button */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
          <CarouselPrevious className="h-12 w-12 rounded-full bg-black/80 text-white hover:bg-white hover:text-black border-2 border-black transition-colors" />
        </div>

        {/* Next Button */}
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
          <CarouselNext className="h-12 w-12 rounded-full bg-black/80 text-white hover:bg-white hover:text-black border-2 border-black transition-colors" />
        </div>

        <CarouselContent className="-ml-2 md:-ml-4">
          {brands.map((brand, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-full md:basis-1/3 lg:basis-1/4 flex flex-col items-center justify-center text-center"
            >
              <div className="flex flex-col items-center space-y-6">
                {/* Bigger Logo */}
                <div className="w-[500px] h-[200px] flex items-center justify-center">
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="max-w-[300px] max-h-[150px] object-contain"
                  />
                </div>

                {/* Brand Name */}
                <h3 className="font-heading text-2xl text-center">{brand.name}</h3>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  </div>
</section>


      {/* Additional Sections */}
      <ChefsSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;

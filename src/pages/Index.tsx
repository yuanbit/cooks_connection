import Navigation from "@/components/Navigation"; // ✅ Use default import
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

const heroImages = [
  {
    url: "/images/hero1.jpg", // Update with your actual image file
    alt: "Flagship Venue"
  },
  {
    url: "/images/hero2.jpg",
    alt: "Your Custom Venue 2"
  },
  {
    url: "/images/hero3.jpg",
    alt: "Your Custom Venue 3"
  },
  {
    url: "/images/hero4.jpg",
    alt: "Your Custom Venue 4"
  }
];

const Index = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  useEffect(() => {
    if (!api) {
      return;
    }
    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
    const autoPlayInterval = setInterval(() => {
      api.scrollNext();
    }, 2500);
    return () => {
      clearInterval(autoPlayInterval);
    };
  }, [api]);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Carousel
          className="w-full h-screen"
          opts={{ loop: true }}
          setApi={setApi}
        >
          <CarouselContent className="h-screen">
            {heroImages.map((image, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative w-full h-full">
                  <img
                    src={image.url}
                    alt={image.alt}
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
                   <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-2">
            {heroImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                onClick={() => api?.scrollTo(index)}
              />
            ))}
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
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="images/cooking_class.jpg"
                    alt="Versatile Spaces"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-2xl">Hands-On Experiences for Every Passion</h3>
                <p className="text-muted-foreground">Try cooking, crafting, and DIY workshops designed for fun and connection.</p>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="images/team_building.jpg"
                    alt="Stronger Teams, One Experience at a Time"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-2xl">Stronger Teams, One Experience at a Time</h3>
                <p className="text-muted-foreground">Step out of the office, collaborate, and share great food in a fresh setting.</p>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="images/video.jpg"
                    alt="A Space to Tell Your Story"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-2xl">A Space for Video & Storytelling</h3>
                <p className="text-muted-foreground">Create high-quality videos, styled content, and compelling brand narratives in a professional, well-lit space.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Locations */}
      <section id="locations" className="py-32 bg-white">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="font-heading text-3xl md:text-5xl mb-4">Our Locations</h2>
            <p className="text-muted-foreground text-lg">
              Three unique spaces, endless possibilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="aspect-[16/10] overflow-hidden rounded-lg">
                <img
                  src="images/flagship.jpg"
                  alt="Cooks Connection Flagship"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading text-2xl">Cooks Connection Flagship</h3>
              <p className="text-muted-foreground">
                A Premier Full-Kitchen Experience in the Heart of Charlottenburg
              </p>
              <p>Sophie-Charlotten-Straße 50, <br /> 14059 Berlin</p>
            </div>

            <div className="text-center space-y-6">
              <div className="aspect-[16/10] overflow-hidden rounded-lg">
                <img
                  src="images/bdh.jpg"
                  alt="Berlin Dental Hub"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading text-2xl">Berlin Dental Hub</h3>
              <p className="text-muted-foreground">
                Sleek, Modern Venue in Schöneberg—Open Until 4 AM
              </p>
              <p>Pfalzburger Str. 43-44, <br />10717 Berlin</p>
            </div>

            <div className="text-center space-y-6">
              <div className="aspect-[16/10] overflow-hidden rounded-lg">
                <img
                  src="images/coming_soon.jpg"
                  alt="Studio 90"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading text-2xl">Studio 90</h3>
              <p className="text-muted-foreground">
                Our new venue in Charlottenburg
              </p>
              <p>Coming Soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Media Gallery with Carousel */}
      <section className="py-32">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="font-heading text-3xl md:text-5xl mb-4">Captured Moments</h2>
            <p className="text-muted-foreground text-lg">
              A glimpse into memorable events at our venues
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
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
                <CarouselPrevious className="h-12 w-12 rounded-full bg-black/80 text-white hover:bg-white hover:text-black border-2 border-black transition-colors" />
              </div>
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                <CarouselNext className="h-12 w-12 rounded-full bg-black/80 text-white hover:bg-white hover:text-black border-2 border-black transition-colors" />
              </div>
              <CarouselContent className="-ml-2 md:-ml-4">
  {[
    "/images/event1.jpg",
    "/images/event2.jpg",
    "/images/event3.jpg",
    "/images/event4.jpg",
    "/images/event5.jpg",
    "/images/event6.jpg",
    "/images/event7.jpg",
    "/images/event8.jpg"
  ].map((image, index) => (
    <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src={image}
          alt={`Event photo ${index + 1}`}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
        />
      </div>
    </CarouselItem>
  ))}
</CarouselContent>

            </Carousel>
          </div>
        </div>
      </section>

      {/* Company Hosted Section */}
      <section className="py-32 relative">
        <div className="container px-4 relative">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="font-heading text-3xl md:text-5xl mb-4">Brands We Work With</h2>
            <p className="text-muted-foreground text-lg">
              We've had the privilege of hosting exceptional events for these organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="aspect-[3/2] relative">
                <img
                  src="images/amazon.jpg"
                  alt="Amazon"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-2xl">Amazon</h3>
             {/* <p className="text-primary font-medium">Annual Innovation Summit</p>
              <p className="text-muted-foreground">300+ attendees networking event</p>*/}
            </div>

            <div className="text-center space-y-4">
              <div className="aspect-[3/2] relative">
                <img
                  src="images/netflix.png"
                  alt="Netflix"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-2xl">Netflix</h3>
              {/* <p className="text-primary font-medium">Executive Gala Dinner</p>
              <p className="text-muted-foreground">200+ guest charity event</p>*/}
            </div>

            <div className="text-center space-y-4">
              <div className="aspect-[3/2] relative">
                <img
                  src="images/bayer.svg"
                  alt="Bayer"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-2xl">Bayer</h3>
             {/* <p className="text-primary font-medium">Design Awards Ceremony</p>
              <p className="text-muted-foreground">150+ industry professionals</p>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Chefs Section */}
      <ChefsSection />

      {/* FAQ Section */}
<FAQSection />


      {/* Footer with Policy */}
      <Footer />
    </div>
  );
};

export default Index;

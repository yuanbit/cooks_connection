import Navigation from "@/components/Navigation"; // ✅ Use default import
import { ChefsSection } from "@/components/ChefsSection";
import { FAQSection } from "@/components/FAQSection";
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
    }, 2000);
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
            >
              Plan Your Event <ArrowRight className="ml-2 h-4 w-4" />
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
            <h2 className="font-heading text-3xl md:text-5xl mb-6">Where Every Moment Becomes a Memory</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Venue Vista offers distinctive locations designed to provide the perfect backdrop for your special events.
              From intimate gatherings to grand celebrations, our spaces are crafted to inspire and delight.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                    alt="Versatile Spaces"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-2xl">Versatile Spaces</h3>
                <p className="text-muted-foreground">Adaptable venues for any occasion</p>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                    alt="Premium Service"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-2xl">Premium Service</h3>
                <p className="text-muted-foreground">Dedicated event coordination</p>
              </div>
              <div className="space-y-4">
                <div className="aspect-square rounded-lg overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
                    alt="Central Locations"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-heading text-2xl">Central Locations</h3>
                <p className="text-muted-foreground">Easy access from anywhere</p>
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
              Three unique destinations, endless possibilities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-6">
              <div className="aspect-[16/10] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3"
                  alt="Downtown location"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading text-2xl">Downtown Elegance</h3>
              <p className="text-muted-foreground">
                Our downtown location offers sophisticated urban charm with modern amenities and stunning city views.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="aspect-[16/10] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"
                  alt="Garden location"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading text-2xl">Garden Estate</h3>
              <p className="text-muted-foreground">
                Set in lush surroundings, our garden estate provides a serene backdrop for weddings and outdoor events.
              </p>
            </div>

            <div className="text-center space-y-6">
              <div className="aspect-[16/10] overflow-hidden rounded-lg">
                <img
                  src="https://images.unsplash.com/photo-1439337153520-7082a56a81f4"
                  alt="Waterfront location"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="font-heading text-2xl">Waterfront View</h3>
              <p className="text-muted-foreground">
                Our waterfront venue offers breathtaking views and a perfect setting for memorable celebrations.
              </p>
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
              A glimpse into the extraordinary events at our venues
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
                {Array.from({ length: 8 }).map((_, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img
                        src={`https://images.unsplash.com/photo-${index % 2 ? '1519167758481-83f550bb49b3' : '1464366400600-7168b8af9bc3'}?auto=format&fit=crop&q=80`}
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
        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFFFF] via-[#FFE3C4] via-[#FFB0B0] via-[#FFD4D4] to-[#FFFFFF] opacity-40" />
        <div className="container px-4 relative">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="font-heading text-3xl md:text-5xl mb-4">Trusted By Industry Leaders</h2>
            <p className="text-muted-foreground text-lg">
              We've had the privilege of hosting exceptional events for these organizations
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <div className="aspect-[3/2] relative">
                <img
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625"
                  alt="Tech Corp"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-2xl">Tech Corp</h3>
              <p className="text-primary font-medium">Annual Innovation Summit</p>
              <p className="text-muted-foreground">300+ attendees networking event</p>
            </div>

            <div className="text-center space-y-4">
              <div className="aspect-[3/2] relative">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
                  alt="Global Finance"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-2xl">Global Finance</h3>
              <p className="text-primary font-medium">Executive Gala Dinner</p>
              <p className="text-muted-foreground">200+ guest charity event</p>
            </div>

            <div className="text-center space-y-4">
              <div className="aspect-[3/2] relative">
                <img
                  src="https://images.unsplash.com/photo-1496307653780-42ee777d4833"
                  alt="Creative Studios"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="font-heading text-2xl">Creative Studios</h3>
              <p className="text-primary font-medium">Design Awards Ceremony</p>
              <p className="text-muted-foreground">150+ industry professionals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chefs Section */}
      <ChefsSection />

      {/* FAQ Section */}
      <section className="py-32 bg-white">
        <div className="container px-4">
          <div className="max-w-2xl mx-auto text-center mb-20">
            <h2 className="font-heading text-3xl md:text-5xl mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our venues and services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-4">
                <h3 className="font-heading text-2xl">What is Venue Vista?</h3>
                <p className="text-muted-foreground">
                  Venue Vista is a premier event venue provider that offers distinctive locations designed to provide the perfect backdrop for your special events.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-2xl">What types of events do you offer?</h3>
                <p className="text-muted-foreground">
                  We offer a wide range of event types, including weddings, corporate events, and private parties.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-2xl">How do I book an event?</h3>
                <p className="text-muted-foreground">
                  You can book an event by contacting our team directly or by filling out our online booking form.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="font-heading text-2xl">What is your cancellation policy?</h3>
                <p className="text-muted-foreground">
                  Our cancellation policy is based on the terms of your booking agreement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer with Policy */}
      <Footer />
    </div>
  );
};

export default Index;

import React, { useEffect, useState } from "react";
import { fetchContent } from "@/contentful"; // Import Contentful API helper
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Chef {
  name: string;
  role: string;
  photo: { url: string }; // Contentful image URL structure
  description: string;
}

export function ChefsSection() {
  const [chefs, setChefs] = useState<Chef[]>([]);

  useEffect(() => {
    const fetchChefs = async () => {
      try {
        // Fetch data using the correct content type 'chefProfile'
        const data = await fetchContent("chefProfile"); // Corrected to 'chefProfile'
        const chefData = data.map((item: any) => ({
          name: item.name,
          role: item.role,
          photo: item.photo.fields.file, // Correct extraction of image URL from Contentful
          description: item.description,
        }));

        setChefs(chefData);
      } catch (error) {
        console.error("Error fetching chefs:", error);
      }
    };

    fetchChefs();
  }, []);

  return (
    <section className="py-32 bg-white">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="font-heading text-3xl md:text-5xl mb-4">Our Culinary Artists</h2>
          <p className="text-muted-foreground text-lg">
            Meet the talented chefs behind our extraordinary culinary experiences.
          </p>
        </div>

        <div className="relative px-16">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            {/* Previous Button */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 z-10">
              <CarouselPrevious className="h-12 w-12 rounded-full bg-black/80 text-white" />
            </div>

            {/* Next Button */}
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10">
              <CarouselNext className="h-12 w-12 rounded-full bg-black/80 text-white" />
            </div>

            {/* Carousel Content */}
            <CarouselContent className="-ml-2 md:-ml-4">
              {chefs.map((chef, index) => (
                <CarouselItem
                  key={index}
                  className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3 flex justify-center"
                >
                  <div className="text-center space-y-6 p-6">
                    {/* Circular Image */}
                    <div className="w-40 h-40 rounded-full overflow-hidden mx-auto">
                      <img
                        src={chef.photo.url} // ✅ Use Contentful image URL
                        alt={chef.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>

                    {/* Chef Info */}
                    <div>
                      <h3 className="font-heading text-2xl">{chef.name}</h3>
                      <p className="text-primary font-medium mb-2">{chef.role}</p>
                      <p className="text-muted-foreground">{chef.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
}

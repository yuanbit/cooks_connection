
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Chef {
  name: string;
  image: string;
  role: string;
  description: string;
}

const chefs: Chef[] = [
  {
    name: "Alex Johnson",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    role: "Executive Chef",
    description: "Specializing in modern French cuisine with over 15 years of experience in Michelin-starred restaurants."
  },
  {
    name: "Maria Rodriguez",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    role: "Pastry Chef",
    description: "Award-winning pastry chef known for creating stunning wedding cakes and dessert displays."
  },
  {
    name: "James Chen",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
    role: "Culinary Director",
    description: "Brings Asian fusion expertise and international culinary perspective to our events."
  }
];

export function ChefsSection() {
  return (
    <section className="py-32 bg-white">
      <div className="container px-4">
        <div className="max-w-2xl mx-auto text-center mb-20">
          <h2 className="font-heading text-3xl md:text-5xl mb-4">Our Culinary Artists</h2>
          <p className="text-muted-foreground text-lg">
            Meet the talented chefs behind our extraordinary culinary experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          {chefs.map((chef, index) => (
            <div key={index} className="text-center space-y-4">
              <Avatar className="w-40 h-40 mx-auto">
                <AvatarImage src={chef.image} alt={chef.name} />
                <AvatarFallback>{chef.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-heading text-2xl">{chef.name}</h3>
                <p className="text-primary font-medium mb-2">{chef.role}</p>
                <p className="text-muted-foreground">{chef.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

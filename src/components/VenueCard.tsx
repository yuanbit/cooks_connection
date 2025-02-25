
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface VenueCardProps {
  title: string;
  description: string;
  image: string;
  capacity: string;
}

export function VenueCard({ title, description, image, capacity }: VenueCardProps) {
  return (
    <Card className="overflow-hidden group border-0 shadow-lg">
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <CardHeader className="space-y-2">
        <CardTitle className="font-heading text-2xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        <p className="mt-4 text-sm font-medium">Capacity: {capacity}</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-primary/90 hover:bg-primary">Learn More</Button>
      </CardFooter>
    </Card>
  );
}

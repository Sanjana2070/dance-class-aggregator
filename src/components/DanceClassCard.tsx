import { Heart, Star, Clock, MapPin, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useCart } from './CartContext';

interface DanceClassCardProps {
  id: string;
  title: string;
  instructor: string;
  studio: string;
  location: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  duration: string;
  level: string;
  category: string;
  image: string;
  spots: number;
  isPopular?: boolean;
}

export function DanceClassCard({
  id,
  title,
  instructor,
  studio,
  location,
  price,
  originalPrice,
  rating,
  reviewCount,
  duration,
  level,
  category,
  image,
  spots,
  isPopular
}: DanceClassCardProps) {
  const { addToCart } = useCart();

  const handleBookNow = () => {
    addToCart({
      id,
      title,
      instructor,
      studio,
      price,
      date: 'Tomorrow',
      time: '7:00 PM',
      image
    });
  };

  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300 border-0 shadow-sm">
      <div className="relative">
        <ImageWithFallback
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 bg-white/80 hover:bg-white"
        >
          <Heart className="w-4 h-4" />
        </Button>
        {isPopular && (
          <Badge className="absolute top-2 left-2 bg-orange-500">
            Popular
          </Badge>
        )}
        <Badge variant="secondary" className="absolute bottom-2 left-2">
          {category}
        </Badge>
      </div>
      
      <CardContent className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">with {instructor}</p>
          <p className="text-sm text-muted-foreground">{studio}</p>
        </div>

        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span>{rating}</span>
            <span className="ml-1">({reviewCount})</span>
          </div>
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            <span>{duration}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1" />
            <span>{location}</span>
          </div>
          <Badge variant="outline">{level}</Badge>
        </div>

        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-muted-foreground">
            <Users className="w-4 h-4 mr-1" />
            <span>{spots} spots left</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="space-x-2">
            <span className="text-lg">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          <Button size="sm" className="px-6" onClick={handleBookNow}>
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
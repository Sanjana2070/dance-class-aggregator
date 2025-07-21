import { Star, MapPin, Clock, Wifi, Car, Dumbbell } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface StudioCardProps {
  id: string;
  name: string;
  description: string;
  location: string;
  address: string;
  rating: number;
  reviewCount: number;
  classesCount: number;
  priceRange: string;
  image: string;
  amenities: string[];
  hours: string;
  isPartner?: boolean;
}

export function StudioCard({
  name,
  description,
  location,
  address,
  rating,
  reviewCount,
  classesCount,
  priceRange,
  image,
  amenities,
  hours,
  isPartner
}: StudioCardProps) {
  const amenityIcons: { [key: string]: any } = {
    'WiFi': Wifi,
    'Parking': Car,
    'Equipment': Dumbbell,
  };

  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
      <div className="relative">
        <ImageWithFallback
          src={image}
          alt={name}
          className="w-full h-48 object-cover rounded-t-lg"
        />
        {isPartner && (
          <Badge className="absolute top-2 left-2 bg-blue-500">
            Partner Studio
          </Badge>
        )}
      </div>
      
      <CardContent className="p-6 space-y-4">
        <div>
          <h3 className="group-hover:text-primary transition-colors">{name}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        </div>

        <div className="space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{address}</span>
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="w-4 h-4 mr-2" />
            <span>{hours}</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span>{rating}</span>
            <span className="text-muted-foreground ml-1">({reviewCount})</span>
          </div>
          <span className="text-muted-foreground">{classesCount} classes</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {amenities.slice(0, 4).map((amenity) => {
            const Icon = amenityIcons[amenity];
            return (
              <Badge key={amenity} variant="outline" className="text-xs">
                {Icon && <Icon className="w-3 h-3 mr-1" />}
                {amenity}
              </Badge>
            );
          })}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div>
            <span className="text-sm text-muted-foreground">From </span>
            <span>{priceRange}</span>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              View Studio
            </Button>
            <Button size="sm">
              Browse Classes
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
import { Star, MapPin, Calendar, Users } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InstructorCardProps {
  id: string;
  name: string;
  specialties: string[];
  experience: string;
  location: string;
  rating: number;
  reviewCount: number;
  classesCount: number;
  hourlyRate: number;
  image: string;
  bio: string;
  isVerified?: boolean;
}

export function InstructorCard({
  name,
  specialties,
  experience,
  location,
  rating,
  reviewCount,
  classesCount,
  hourlyRate,
  image,
  bio,
  isVerified
}: InstructorCardProps) {
  return (
    <Card className="group cursor-pointer hover:shadow-lg transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex gap-4">
          <div className="relative">
            <ImageWithFallback
              src={image}
              alt={name}
              className="w-20 h-20 rounded-full object-cover"
            />
            {isVerified && (
              <Badge className="absolute -bottom-1 -right-1 bg-green-500 text-white text-xs px-1">
                ✓
              </Badge>
            )}
          </div>
          
          <div className="flex-1 space-y-3">
            <div>
              <h3 className="group-hover:text-primary transition-colors">{name}</h3>
              <p className="text-sm text-muted-foreground">{experience} of experience</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {specialties.slice(0, 3).map((specialty) => (
                <Badge key={specialty} variant="secondary" className="text-xs">
                  {specialty}
                </Badge>
              ))}
              {specialties.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{specialties.length - 3} more
                </Badge>
              )}
            </div>

            <p className="text-sm text-muted-foreground line-clamp-2">{bio}</p>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-4">
                <div className="flex items-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                  <span>{rating}</span>
                  <span className="text-muted-foreground ml-1">({reviewCount})</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{classesCount} classes</span>
                </div>
              </div>
              
              <div className="flex items-center text-muted-foreground">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{location}</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2">
              <div>
                <span className="text-lg">${hourlyRate}</span>
                <span className="text-sm text-muted-foreground">/hour</span>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  View Profile
                </Button>
                <Button size="sm">
                  Book Class
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
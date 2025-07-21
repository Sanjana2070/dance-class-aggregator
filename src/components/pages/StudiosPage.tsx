import { Search, SlidersHorizontal, Grid, List, MapPin } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { StudioCard } from '../StudioCard';

const locations = [
  'All Locations', 'Downtown', 'East Side', 'Uptown', 'West End', 'Midtown', 'North District'
];

const mockStudios = [
  {
    id: '1',
    name: 'Movement Arts Studio',
    description: 'Premier contemporary and modern dance studio with state-of-the-art facilities and world-class instructors.',
    location: 'Downtown',
    address: '123 Arts District Ave, Downtown',
    rating: 4.8,
    reviewCount: 156,
    classesCount: 45,
    priceRange: '$25-$65',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop',
    amenities: ['WiFi', 'Parking', 'Equipment', 'Showers', 'Lockers'],
    hours: 'Mon-Sun 6AM-10PM',
    isPartner: true
  },
  {
    id: '2',
    name: 'Urban Dance Collective',
    description: 'Hip-hop and street dance focused studio with authentic urban culture and community-driven classes.',
    location: 'East Side',
    address: '456 Street Culture Blvd, East Side',
    rating: 4.7,
    reviewCount: 203,
    classesCount: 38,
    priceRange: '$20-$55',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=600&h=300&fit=crop',
    amenities: ['WiFi', 'Sound System', 'Mirrors', 'A/C'],
    hours: 'Mon-Fri 4PM-11PM, Sat-Sun 10AM-8PM',
    isPartner: false
  },
  {
    id: '3',
    name: 'Royal Ballet Academy',
    description: 'Classical ballet training center with European-trained instructors and traditional teaching methods.',
    location: 'Uptown',
    address: '789 Classical Way, Uptown',
    rating: 4.9,
    reviewCount: 89,
    classesCount: 52,
    priceRange: '$35-$85',
    image: 'https://images.unsplash.com/photo-1544807854-7e79bfa3aa7b?w=600&h=300&fit=crop',
    amenities: ['Barres', 'Mirrors', 'Piano', 'Parking', 'Changing Rooms'],
    hours: 'Mon-Fri 9AM-9PM, Sat-Sun 8AM-6PM',
    isPartner: true
  },
  {
    id: '4',
    name: 'Latin Rhythm Studio',
    description: 'Vibrant Latin dance studio specializing in salsa, bachata, merengue, and social dancing.',
    location: 'West End',
    address: '321 Salsa Street, West End',
    rating: 4.6,
    reviewCount: 134,
    classesCount: 29,
    priceRange: '$18-$45',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=600&h=300&fit=crop',
    amenities: ['Dance Floor', 'Sound System', 'Bar Area', 'WiFi'],
    hours: 'Tue-Sun 6PM-12AM',
    isPartner: false
  },
  {
    id: '5',
    name: 'Pulse Dance Studio',
    description: 'Modern studio offering jazz, contemporary, and commercial dance with industry-standard training.',
    location: 'Midtown',
    address: '654 Rhythm Road, Midtown',
    rating: 4.5,
    reviewCount: 78,
    classesCount: 33,
    priceRange: '$22-$60',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=300&fit=crop',
    amenities: ['Mirrors', 'Sound System', 'Equipment', 'WiFi', 'A/C'],
    hours: 'Mon-Fri 5PM-10PM, Sat-Sun 9AM-7PM',
    isPartner: true
  },
  {
    id: '6',
    name: 'Elegant Steps Ballroom',
    description: 'Sophisticated ballroom dance studio perfect for wedding preparation and social dancing.',
    location: 'North District',
    address: '987 Ballroom Boulevard, North District',
    rating: 4.8,
    reviewCount: 167,
    classesCount: 41,
    priceRange: '$30-$75',
    image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=600&h=300&fit=crop',
    amenities: ['Hardwood Floor', 'Mirrors', 'Parking', 'Private Rooms', 'Refreshments'],
    hours: 'Mon-Thu 6PM-10PM, Fri-Sat 2PM-11PM, Sun 12PM-8PM',
    isPartner: true
  }
];

export function StudiosPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <h1>Dance Studios</h1>
          <p className="text-muted-foreground mt-2">
            Explore top-rated dance studios and find the perfect space for your dance journey
          </p>
        </div>
      </div>
      
      {/* Location Filter */}
      <section className="bg-card py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            <span className="text-sm">Browse by Location</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {locations.map((location, index) => (
              <Badge
                key={location}
                variant={index === 0 ? "default" : "secondary"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {location}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-8">
        {/* Search and Filter Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search studios by name, location, or amenities..."
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex gap-4">
            <Select defaultValue="rating">
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="distance">Nearest</SelectItem>
                <SelectItem value="classes">Most Classes</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">
              <SlidersHorizontal className="w-4 h-4 mr-2" />
              Filters
            </Button>
            
            <div className="flex border rounded-md">
              <Button variant="ghost" size="sm" className="rounded-r-none">
                <Grid className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="rounded-l-none border-l">
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Results Header */}
        <div className="mb-6">
          <p className="text-muted-foreground">{mockStudios.length} studios found</p>
        </div>

        {/* Studios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockStudios.map((studio) => (
            <StudioCard key={studio.id} {...studio} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            Load More Studios
          </Button>
        </div>
      </main>
    </div>
  );
}
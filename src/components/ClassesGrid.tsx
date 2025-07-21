import { Grid, List, SlidersHorizontal } from 'lucide-react';
import { Button } from './ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { DanceClassCard } from './DanceClassCard';

const mockClasses = [
  {
    id: '1',
    title: 'Contemporary Dance Foundations',
    instructor: 'Elena Rodriguez',
    studio: 'Movement Arts Studio',
    location: 'Downtown',
    price: 35,
    originalPrice: 45,
    rating: 4.9,
    reviewCount: 127,
    duration: '60 min',
    level: 'Beginner',
    category: 'Contemporary',
    image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop',
    spots: 3,
    isPopular: true
  },
  {
    id: '2',
    title: 'Hip-Hop Choreography Intensive',
    instructor: 'Marcus Johnson',
    studio: 'Urban Dance Collective',
    location: 'East Side',
    price: 42,
    rating: 4.8,
    reviewCount: 89,
    duration: '75 min',
    level: 'Intermediate',
    category: 'Hip-Hop',
    image: 'https://images.unsplash.com/photo-1518834107812-67b0b7c58434?w=400&h=300&fit=crop',
    spots: 7
  },
  {
    id: '3',
    title: 'Classical Ballet Technique',
    instructor: 'Sofia Petrov',
    studio: 'Royal Ballet Academy',
    location: 'Uptown',
    price: 50,
    rating: 4.9,
    reviewCount: 203,
    duration: '90 min',
    level: 'Intermediate',
    category: 'Ballet',
    image: 'https://images.unsplash.com/photo-1544807854-7e79bfa3aa7b?w=400&h=300&fit=crop',
    spots: 2
  },
  {
    id: '4',
    title: 'Salsa & Bachata Social Dancing',
    instructor: 'Carlos & Maria Santos',
    studio: 'Latin Rhythm Studio',
    location: 'West End',
    price: 28,
    rating: 4.7,
    reviewCount: 156,
    duration: '60 min',
    level: 'All Levels',
    category: 'Salsa',
    image: 'https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?w=400&h=300&fit=crop',
    spots: 12
  },
  {
    id: '5',
    title: 'Jazz Funk Fusion',
    instructor: 'Ashley Kim',
    studio: 'Pulse Dance Studio',
    location: 'Midtown',
    price: 38,
    rating: 4.6,
    reviewCount: 74,
    duration: '60 min',
    level: 'Beginner',
    category: 'Jazz',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop',
    spots: 8
  },
  {
    id: '6',
    title: 'Ballroom Essentials: Waltz & Foxtrot',
    instructor: 'David & Catherine Moore',
    studio: 'Elegant Steps Ballroom',
    location: 'North District',
    price: 55,
    originalPrice: 65,
    rating: 4.8,
    reviewCount: 91,
    duration: '75 min',
    level: 'Beginner',
    category: 'Ballroom',
    image: 'https://images.unsplash.com/photo-1574169208507-84376144848b?w=400&h=300&fit=crop',
    spots: 4
  }
];

export function ClassesGrid() {
  return (
    <div className="flex-1">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2>Dance Classes</h2>
          <p className="text-muted-foreground">10,247 classes found</p>
        </div>
        
        <div className="flex items-center space-x-4">
          <Select defaultValue="featured">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
            </SelectContent>
          </Select>
          
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

      {/* Classes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockClasses.map((classItem) => (
          <DanceClassCard key={classItem.id} {...classItem} />
        ))}
      </div>

      {/* Load More */}
      <div className="flex justify-center mt-12">
        <Button variant="outline" size="lg">
          Load More Classes
        </Button>
      </div>
    </div>
  );
}
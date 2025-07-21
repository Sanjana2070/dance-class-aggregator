import { Search, SlidersHorizontal, Grid, List } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';
import { InstructorCard } from '../InstructorCard';

const specialties = [
  'All Instructors', 'Ballet', 'Hip-Hop', 'Contemporary', 'Jazz', 'Salsa', 'Ballroom', 'Tap'
];

const mockInstructors = [
  {
    id: '1',
    name: 'Elena Rodriguez',
    specialties: ['Contemporary', 'Modern', 'Jazz'],
    experience: '8+ years',
    location: 'Downtown',
    rating: 4.9,
    reviewCount: 127,
    classesCount: 45,
    hourlyRate: 75,
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    bio: 'Professional contemporary dancer with international performance experience. Specializes in emotional expression through movement.',
    isVerified: true
  },
  {
    id: '2',
    name: 'Marcus Johnson',
    specialties: ['Hip-Hop', 'Street Dance', 'Breaking'],
    experience: '12+ years',
    location: 'East Side',
    rating: 4.8,
    reviewCount: 203,
    classesCount: 78,
    hourlyRate: 65,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    bio: 'Former backup dancer for major artists. Brings authentic street dance culture and high-energy choreography to every class.',
    isVerified: true
  },
  {
    id: '3',
    name: 'Sofia Petrov',
    specialties: ['Ballet', 'Pointe', 'Classical'],
    experience: '15+ years',
    location: 'Uptown',
    rating: 4.9,
    reviewCount: 156,
    classesCount: 89,
    hourlyRate: 85,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    bio: 'Former principal dancer with the National Ballet. Dedicated to teaching proper technique and artistry in classical ballet.',
    isVerified: true
  },
  {
    id: '4',
    name: 'Carlos Santos',
    specialties: ['Salsa', 'Bachata', 'Latin'],
    experience: '10+ years',
    location: 'West End',
    rating: 4.7,
    reviewCount: 189,
    classesCount: 67,
    hourlyRate: 55,
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    bio: 'Born and raised in Colombia, brings authentic Latin dance techniques and infectious energy to social dancing.',
    isVerified: false
  },
  {
    id: '5',
    name: 'Ashley Kim',
    specialties: ['Jazz Funk', 'Commercial', 'Heels'],
    experience: '6+ years',
    location: 'Midtown',
    rating: 4.6,
    reviewCount: 98,
    classesCount: 34,
    hourlyRate: 60,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face',
    bio: 'Choreographer and performer specializing in jazz funk and commercial dance. Known for empowering and confidence-building classes.',
    isVerified: true
  },
  {
    id: '6',
    name: 'David Moore',
    specialties: ['Ballroom', 'Latin Standard', 'Wedding Dance'],
    experience: '18+ years',
    location: 'North District',
    rating: 4.8,
    reviewCount: 234,
    classesCount: 156,
    hourlyRate: 70,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    bio: 'Competition ballroom dancer and certified instructor. Specializes in wedding choreography and social ballroom dancing.',
    isVerified: true
  }
];

export function InstructorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <h1>Dance Instructors</h1>
          <p className="text-muted-foreground mt-2">
            Learn from the best dance instructors and build your skills with personalized guidance
          </p>
        </div>
      </div>
      
      {/* Specialty Filter */}
      <section className="bg-card py-6 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {specialties.map((specialty, index) => (
              <Badge
                key={specialty}
                variant={index === 0 ? "default" : "secondary"}
                className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {specialty}
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
                placeholder="Search instructors by name, specialty, or location..."
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
                <SelectItem value="experience">Most Experienced</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest</SelectItem>
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
          <p className="text-muted-foreground">{mockInstructors.length} instructors found</p>
        </div>

        {/* Instructors Grid */}
        <div className="grid grid-cols-1 gap-6">
          {mockInstructors.map((instructor) => (
            <InstructorCard key={instructor.id} {...instructor} />
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            Load More Instructors
          </Button>
        </div>
      </main>
    </div>
  );
}
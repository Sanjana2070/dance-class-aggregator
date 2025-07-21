import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-purple-600 to-pink-600 text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl leading-tight">
              Find Your Perfect
              <span className="block text-yellow-300">Dance Class</span>
            </h1>
            <p className="text-xl text-purple-100">
              Discover thousands of dance classes from professional instructors. 
              From ballet to hip-hop, find your rhythm and book instantly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100">
                Explore Classes
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                Book a Trial Class
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl">10K+</div>
                <div className="text-purple-200 text-sm">Classes Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl">500+</div>
                <div className="text-purple-200 text-sm">Expert Instructors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl">50+</div>
                <div className="text-purple-200 text-sm">Dance Styles</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&h=400&fit=crop"
              alt="Dancers in action"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
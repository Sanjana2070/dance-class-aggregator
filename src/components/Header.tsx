import { Search, Heart, User, ShoppingBag } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Badge } from './ui/badge';
import { useRouter } from './Router';
import { useCart } from './CartContext';

export function Header() {
  const { currentPage, navigateTo } = useRouter();
  const { getTotalItems } = useCart();
  const totalItems = getTotalItems();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigateTo('home')}>
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground">D</span>
          </div>
          <span className="text-xl">DanceHub</span>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-2xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search dance classes, instructors, or studios..."
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <button 
            onClick={() => navigateTo('classes')}
            className={`text-sm hover:text-primary transition-colors ${currentPage === 'classes' ? 'text-primary' : ''}`}
          >
            Classes
          </button>
          <button 
            onClick={() => navigateTo('instructors')}
            className={`text-sm hover:text-primary transition-colors ${currentPage === 'instructors' ? 'text-primary' : ''}`}
          >
            Instructors
          </button>
          <button 
            onClick={() => navigateTo('studios')}
            className={`text-sm hover:text-primary transition-colors ${currentPage === 'studios' ? 'text-primary' : ''}`}
          >
            Studios
          </button>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <Heart className="w-4 h-4" />
          </Button>
          <Button variant="ghost" size="icon" className="relative" onClick={() => navigateTo('cart')}>
            <ShoppingBag className="w-4 h-4" />
            {totalItems > 0 && (
              <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 flex items-center justify-center text-xs">
                {totalItems}
              </Badge>
            )}
          </Button>
          <Button variant="ghost" size="icon">
            <User className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
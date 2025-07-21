import { RouterProvider, useRouter } from './components/Router';
import { CartProvider } from './components/CartContext';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CategoryNav } from './components/CategoryNav';
import { FilterSidebar } from './components/FilterSidebar';
import { ClassesGrid } from './components/ClassesGrid';
import { ClassesPage } from './components/pages/ClassesPage';
import { InstructorsPage } from './components/pages/InstructorsPage';
import { StudiosPage } from './components/pages/StudiosPage';
import { CartPage } from './components/pages/CartPage';

function HomePage() {
  return (
    <>
      <HeroSection />
      <CategoryNav />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="hidden lg:block">
            <FilterSidebar />
          </aside>
          <ClassesGrid />
        </div>
      </main>
    </>
  );
}

function AppContent() {
  const { currentPage } = useRouter();

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage />;
      case 'classes':
        return <ClassesPage />;
      case 'instructors':
        return <InstructorsPage />;
      case 'studios':
        return <StudiosPage />;
      case 'cart':
        return <CartPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      {renderPage()}
      
      {/* Footer - only show on home page */}
      {currentPage === 'home' && (
        <footer className="bg-muted/30 py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-primary-foreground">D</span>
                  </div>
                  <span className="text-xl">DanceHub</span>
                </div>
                <p className="text-muted-foreground text-sm">
                  Your premier destination for discovering and booking dance classes worldwide.
                </p>
              </div>
              
              <div>
                <h4 className="mb-4">Explore</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">All Classes</a></li>
                  <li><a href="#" className="hover:text-primary">Instructors</a></li>
                  <li><a href="#" className="hover:text-primary">Studios</a></li>
                  <li><a href="#" className="hover:text-primary">Events</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-4">Support</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">Help Center</a></li>
                  <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                  <li><a href="#" className="hover:text-primary">Cancellation Policy</a></li>
                  <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="mb-4">For Instructors</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><a href="#" className="hover:text-primary">Teach on DanceHub</a></li>
                  <li><a href="#" className="hover:text-primary">Instructor Resources</a></li>
                  <li><a href="#" className="hover:text-primary">Studio Partnerships</a></li>
                  <li><a href="#" className="hover:text-primary">Success Stories</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-muted-foreground">
                © 2025 DanceHub. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">Privacy</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">Terms</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary">Cookies</a>
              </div>
            </div>
          </div>
        </footer>
      )}
    </div>
  );
}

export default function App() {
  return (
    <RouterProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </RouterProvider>
  );
}
import { CategoryNav } from '../CategoryNav';
import { FilterSidebar } from '../FilterSidebar';
import { ClassesGrid } from '../ClassesGrid';

export function ClassesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-muted/30 py-8">
        <div className="container mx-auto px-4">
          <h1>Dance Classes</h1>
          <p className="text-muted-foreground mt-2">
            Discover and book dance classes from top instructors and studios worldwide
          </p>
        </div>
      </div>
      
      <CategoryNav />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex gap-8">
          <aside className="hidden lg:block">
            <FilterSidebar />
          </aside>
          <ClassesGrid />
        </div>
      </main>
    </div>
  );
}
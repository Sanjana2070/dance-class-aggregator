import { Badge } from './ui/badge';

const categories = [
  { name: 'All Classes', count: 10247, active: true },
  { name: 'Ballet', count: 1834 },
  { name: 'Hip-Hop', count: 2156 },
  { name: 'Salsa', count: 876 },
  { name: 'Contemporary', count: 1245 },
  { name: 'Jazz', count: 967 },
  { name: 'Ballroom', count: 654 },
  { name: 'Tap', count: 432 },
  { name: 'Breakdancing', count: 789 },
];

export function CategoryNav() {
  return (
    <section className="bg-muted/30 py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg">Browse by Dance Style</h2>
          <button className="text-sm text-primary hover:underline">View All Categories</button>
        </div>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Badge
              key={category.name}
              variant={category.active ? "default" : "secondary"}
              className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category.name}
              <span className="ml-2 text-xs opacity-70">({category.count})</span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
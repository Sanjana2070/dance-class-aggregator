import { ChevronDown, Filter } from 'lucide-react';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Slider } from './ui/slider';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Separator } from './ui/separator';

export function FilterSidebar() {
  return (
    <div className="w-80 p-6 bg-card rounded-lg border h-fit">
      <div className="flex items-center justify-between mb-6">
        <h3 className="flex items-center">
          <Filter className="w-4 h-4 mr-2" />
          Filters
        </h3>
        <Button variant="ghost" size="sm">Clear All</Button>
      </div>

      <div className="space-y-6">
        {/* Price Range */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
            <span>Price Range</span>
            <ChevronDown className="w-4 h-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4">
            <div className="px-3">
              <Slider defaultValue={[0, 100]} max={200} step={5} className="w-full" />
              <div className="flex justify-between text-sm text-muted-foreground mt-2">
                <span>$0</span>
                <span>$200+</span>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        {/* Level */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
            <span>Skill Level</span>
            <ChevronDown className="w-4 h-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3">
            {['Beginner', 'Intermediate', 'Advanced', 'All Levels'].map((level) => (
              <div key={level} className="flex items-center space-x-2">
                <Checkbox id={level} />
                <label htmlFor={level} className="text-sm cursor-pointer">
                  {level}
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        {/* Duration */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
            <span>Class Duration</span>
            <ChevronDown className="w-4 h-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3">
            {['30 min', '45 min', '60 min', '90 min', '2+ hours'].map((duration) => (
              <div key={duration} className="flex items-center space-x-2">
                <Checkbox id={duration} />
                <label htmlFor={duration} className="text-sm cursor-pointer">
                  {duration}
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        {/* Schedule */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
            <span>Schedule</span>
            <ChevronDown className="w-4 h-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3">
            {['Morning (6AM-12PM)', 'Afternoon (12PM-6PM)', 'Evening (6PM-10PM)', 'Weekend Only'].map((time) => (
              <div key={time} className="flex items-center space-x-2">
                <Checkbox id={time} />
                <label htmlFor={time} className="text-sm cursor-pointer">
                  {time}
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>

        <Separator />

        {/* Rating */}
        <Collapsible defaultOpen>
          <CollapsibleTrigger className="flex items-center justify-between w-full py-2">
            <span>Minimum Rating</span>
            <ChevronDown className="w-4 h-4" />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-3">
            {[4.5, 4.0, 3.5, 3.0].map((rating) => (
              <div key={rating} className="flex items-center space-x-2">
                <Checkbox id={`rating-${rating}`} />
                <label htmlFor={`rating-${rating}`} className="text-sm cursor-pointer">
                  {rating}+ Stars
                </label>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}
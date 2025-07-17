'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Button } from './ui/button';
import { Leaf, Recycle, Globe } from 'lucide-react';

const categories = [
  { value: 'personal-care', label: 'Personal Care' },
  { value: 'home-goods', label: 'Home Goods' },
  { value: 'accessories', label: 'Accessories' },
];

const ecoAttributes = [
  { value: 'sustainably-sourced', label: 'Sustainably Sourced', icon: <Leaf className="mr-2 h-4 w-4" /> },
  { value: 'recycled-content', label: 'Recycled Content', icon: <Recycle className="mr-2 h-4 w-4" /> },
  { value: 'biodegradable', label: 'Biodegradable', icon: <Globe className="mr-2 h-4 w-4" /> },
];

export default function ProductFilters() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleFilterChange = (type: 'category' | 'eco', value: string) => {
    const current = new URLSearchParams(Array.from(searchParams.entries()));
    
    if (current.get(type) === value) {
      current.delete(type);
    } else {
      current.set(type, value);
    }
    
    const search = current.toString();
    const query = search ? `?${search}` : '';
    router.push(`/products${query}`);
  };

  const clearFilters = () => {
    router.push('/products');
  };

  const selectedCategory = searchParams.get('category');
  const selectedEco = searchParams.get('eco');

  return (
    <Card>
      <CardHeader>
        <CardTitle className="font-headline text-xl">Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="mb-4 font-semibold">Category</h3>
          <RadioGroup value={selectedCategory || ''} onValueChange={(value) => handleFilterChange('category', value)}>
            {categories.map((category) => (
              <div key={category.value} className="flex items-center space-x-2">
                <RadioGroupItem value={category.value} id={`cat-${category.value}`} />
                <Label htmlFor={`cat-${category.value}`}>{category.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <div>
            <h3 className="mb-4 font-semibold">Eco-Features</h3>
            <div className="space-y-2">
            {ecoAttributes.map((attr) => (
                <Button 
                    key={attr.value} 
                    variant={selectedEco === attr.value ? "secondary" : "ghost"}
                    className="w-full justify-start"
                    onClick={() => handleFilterChange('eco', attr.value)}
                >
                    {attr.icon}
                    {attr.label}
                </Button>
            ))}
            </div>
        </div>
        <Button variant="outline" className="w-full" onClick={clearFilters}>Clear Filters</Button>
      </CardContent>
    </Card>
  );
}

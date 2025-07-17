'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardTitle } from '@/components/ui/card';
import type { Product } from '@/lib/types';
import { useCart } from '@/context/cart-provider';

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();

  return (
    <Card className="flex h-full flex-col overflow-hidden rounded-lg shadow-md transition-shadow duration-300 hover:shadow-xl">
      <Link href={`/products/${product.id}`} className="group block overflow-hidden">
        <Image
          src={product.images[0]}
          alt={product.name}
          width={400}
          height={400}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
          data-ai-hint={`${product.category} product`}
        />
      </Link>
      <CardContent className="flex flex-1 flex-col p-4">
        <CardTitle className="mb-2 text-lg font-headline">
          <Link href={`/products/${product.id}`} className="hover:text-primary">
            {product.name}
          </Link>
        </CardTitle>
        <p className="flex-grow text-sm text-muted-foreground">{product.description.substring(0, 70)}...</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between p-4 pt-0">
        <p className="text-xl font-bold text-primary">${product.price.toFixed(2)}</p>
        <Button size="sm" variant="secondary" onClick={() => addToCart(product, 1)}>
          <ShoppingCart className="mr-2 h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}

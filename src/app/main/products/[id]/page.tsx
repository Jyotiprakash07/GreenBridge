'use client'

import { products } from '@/lib/data';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-provider';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { notFound } from 'next/navigation';
import { Leaf, Recycle, Globe, Star, Minus, Plus, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';

const ecoIconMap = {
  'sustainably-sourced': <Leaf className="h-5 w-5 text-primary" />,
  'recycled-content': <Recycle className="h-5 w-5 text-primary" />,
  'biodegradable': <Globe className="h-5 w-5 text-primary" />,
};

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    notFound();
  }
  
  const [activeImage, setActiveImage] = useState(product.images[0]);

  return (
    <div className="container max-w-7xl py-8 sm:py-12 px-4">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {/* Image Gallery */}
        <div>
          <div className="aspect-square overflow-hidden rounded-lg border">
            <Image
              src={activeImage}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover transition-opacity duration-300"
              data-ai-hint={`${product.category} product`}
            />
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2 sm:gap-4">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(image)}
                className={`overflow-hidden rounded-md border-2 ${
                  activeImage === image ? 'border-primary' : 'border-transparent'
                }`}
              >
                <Image
                  src={image}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  width={150}
                  height={150}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="font-headline text-3xl font-bold sm:text-4xl">{product.name}</h1>
          <p className="mt-2 text-3xl font-bold text-primary sm:mt-4">${product.price.toFixed(2)}</p>
          <div className="mt-6">
            <h3 className="font-headline text-lg font-semibold">Description</h3>
            <p className="mt-2 text-muted-foreground">{product.description}</p>
          </div>

          <div className="mt-6">
             <h3 className="font-headline text-lg font-semibold mb-2">Eco-Friendly Features</h3>
             <div className="flex flex-wrap gap-2 sm:gap-4">
                {product.ecoAttributes.map(attr => (
                    <div key={attr} className="flex items-center gap-2 rounded-full border bg-card px-3 py-1 text-sm">
                        {ecoIconMap[attr]}
                        <span className="capitalize">{attr.replace(/-/g, ' ')}</span>
                    </div>
                ))}
             </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center rounded-md border w-full sm:w-auto">
              <Button variant="ghost" size="icon" className="w-1/3" onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus className="h-4 w-4" /></Button>
              <Input type="number" value={quantity} readOnly className="h-10 w-1/3 border-none text-center focus-visible:ring-0" />
              <Button variant="ghost" size="icon" className="w-1/3" onClick={() => setQuantity(quantity + 1)}><Plus className="h-4 w-4" /></Button>
            </div>
            <Button size="lg" className="w-full sm:flex-1" onClick={() => addToCart(product, quantity)}>
                <ShoppingCart className="mr-2 h-5 w-5"/>
                Add to Cart
            </Button>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="mt-12 md:mt-16">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Customer Reviews</CardTitle>
          </CardHeader>
          <CardContent>
            {product.reviews.length > 0 ? (
                <div className="space-y-6">
                    {product.reviews.map((review, index) => (
                        <div key={review.id}>
                            <div className="flex items-start gap-4">
                                <Avatar>
                                    <AvatarImage src={`https://placehold.co/40x40.png?text=${review.author.charAt(0)}`} />
                                    <AvatarFallback>{review.author.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
                                        <p className="font-semibold">{review.author}</p>
                                        <div className="flex items-center mt-1 sm:mt-0">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className={`h-5 w-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground'}`}/>
                                            ))}
                                        </div>
                                    </div>
                                    <p className="mt-2 text-sm text-muted-foreground">{review.comment}</p>
                                    <p className="mt-1 text-xs text-muted-foreground">{review.date}</p>
                                </div>
                            </div>
                            {index < product.reviews.length - 1 && <Separator className="mt-6" />}
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-muted-foreground">No reviews yet. Be the first to write one!</p>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

'use client';

import { useCart } from '@/context/cart-provider';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Minus, Plus, Trash2, ShoppingCart } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, totalPrice, cartCount } = useCart();

  return (
    <div className="container max-w-7xl py-8 sm:py-12 px-4">
      <h1 className="mb-8 font-headline text-3xl font-bold sm:text-4xl">Your Cart</h1>
      {cartItems.length === 0 ? (
        <Card className="flex flex-col items-center justify-center py-24 text-center">
            <ShoppingCart className="h-24 w-24 text-muted-foreground/50 mb-4" />
          <h2 className="text-2xl font-semibold">Your cart is empty</h2>
          <p className="mt-2 text-muted-foreground">Looks like you haven't added anything to your cart yet.</p>
          <Button asChild className="mt-6">
            <Link href="/products">Start Shopping</Link>
          </Button>
        </Card>
      ) : (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <Card>
                <CardContent className="p-0">
                    <ul className="divide-y divide-border">
                    {cartItems.map(({ product, quantity }) => (
                        <li key={product.id} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-4 sm:p-6">
                          <div className="flex w-full items-center gap-4">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                                <Image
                                src={product.images[0]}
                                alt={product.name}
                                width={100}
                                height={100}
                                className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <Link href={`/products/${product.id}`} className="font-semibold hover:text-primary">{product.name}</Link>
                                <p className="text-sm text-muted-foreground">${product.price.toFixed(2)}</p>
                            </div>
                          </div>
                          <div className="flex w-full sm:w-auto items-center justify-between">
                            <div className="flex items-center rounded-md border w-32">
                                <Button variant="ghost" size="icon" className="w-1/3" onClick={() => updateQuantity(product.id, quantity - 1)}><Minus className="h-4 w-4" /></Button>
                                <Input type="number" value={quantity} readOnly className="h-9 w-1/3 border-none text-center focus-visible:ring-0" />
                                <Button variant="ghost" size="icon" className="w-1/3" onClick={() => updateQuantity(product.id, quantity + 1)}><Plus className="h-4 w-4" /></Button>
                            </div>
                            <div className="text-right sm:ml-4">
                                <p className="font-semibold">${(product.price * quantity).toFixed(2)}</p>
                            </div>
                             <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive sm:ml-4" onClick={() => removeFromCart(product.id)}>
                                <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </li>
                    ))}
                    </ul>
                </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal ({cartCount} items)</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild size="lg" className="w-full">
                  <Link href="/checkout">Proceed to Checkout</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
}

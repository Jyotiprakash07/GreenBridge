import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/product-card';
import { products } from '@/lib/data';
import { Leaf, Recycle, Globe } from 'lucide-react';

export default function HomePage() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }} data-ai-hint="nature lifestyle">
        <div className="absolute inset-0 bg-black/30" />
        <div className="container relative z-10 flex h-full max-w-7xl flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl font-bold sm:text-5xl md:text-7xl">Live Sustainably, Beautifully</h1>
          <p className="mt-4 max-w-2xl text-lg sm:text-xl">
            Discover curated eco-friendly products that are good for you and the planet.
          </p>
          <Button asChild size="lg" className="mt-8 bg-white text-primary hover:bg-white/90">
            <Link href="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 sm:py-16 md:py-24">
        <div className="container max-w-7xl px-4">
          <h2 className="text-center font-headline text-3xl font-bold sm:text-4xl">Featured Products</h2>
          <p className="mt-2 text-center text-muted-foreground sm:mt-4">Handpicked for a greener lifestyle</p>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 sm:mt-12">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Mission Section */}
      <section className="bg-card py-12 sm:py-16 md:py-24">
        <div className="container grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 px-4">
          <div>
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">Our Commitment to the Earth</h2>
            <p className="mt-4 text-muted-foreground">
              At Green Bridge, we believe that style and sustainability can go hand-in-hand. We are dedicated to sourcing high-quality, ethically-made, and environmentally-friendly products that help you reduce your impact without compromising on beauty and function.
            </p>
            <div className="mt-6 space-y-6 sm:mt-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-full bg-primary/10 p-3 text-primary"><Leaf /></div>
                <div>
                  <h3 className="font-headline text-lg font-semibold">Sustainably Sourced</h3>
                  <p className="text-muted-foreground">We prioritize materials that are renewable, biodegradable, and harvested with respect for our planet's resources.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-full bg-primary/10 p-3 text-primary"><Recycle /></div>
                <div>
                  <h3 className="font-headline text-lg font-semibold">Reduced Waste</h3>
                  <p className="text-muted-foreground">Our products help you minimize waste, from reusable food wraps to zero-waste personal care items.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 rounded-full bg-primary/10 p-3 text-primary"><Globe /></div>
                <div>
                  <h3 className="font-headline text-lg font-semibold">Ethical Partnerships</h3>
                  <p className="text-muted-foreground">We partner with brands that share our values of fair labor practices and environmental stewardship.</p>
                </div>
              </div>
            </div>
             <Button asChild size="lg" variant="secondary" className="mt-8">
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div className="h-full min-h-[400px] overflow-hidden rounded-lg md:min-h-[500px]">
            <Image 
              src="https://placehold.co/600x700.png" 
              alt="Woman holding a plant" 
              width={600} 
              height={700}
              className="h-full w-full object-cover object-center"
              data-ai-hint="woman holding plant"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

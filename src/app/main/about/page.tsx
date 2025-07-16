import Image from 'next/image';
import { Leaf, Handshake, Sprout } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about the story and mission of Green Bridge. We are dedicated to making sustainable living accessible, beautiful, and inspiring for everyone.',
};


export default function AboutPage() {
  return (
    <div>
      <section className="relative h-[50vh] bg-cover bg-center" style={{ backgroundImage: "url('https://placehold.co/1920x1080.png')" }} data-ai-hint="forest canopy">
        <div className="absolute inset-0 bg-primary/60" />
        <div className="container relative z-10 flex h-full max-w-7xl flex-col items-center justify-center text-center text-white px-4">
          <h1 className="font-headline text-4xl font-bold sm:text-5xl md:text-7xl">Our Story</h1>
          <p className="mt-4 max-w-3xl text-lg sm:text-xl">
            We started Green Bridge with a simple idea: to make sustainable living accessible, beautiful, and inspiring for everyone.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-24">
        <div className="container grid max-w-7xl grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 px-4">
           <div className="order-2 md:order-1">
            <h2 className="font-headline text-3xl font-bold sm:text-4xl">More Than a Store, A Movement</h2>
            <p className="mt-4 text-muted-foreground">
              We're passionate about protecting our planet for future generations. That's why every product in our collection is carefully vetted to meet the highest standards of sustainability and ethical production. We believe that small, conscious choices can collectively create a massive positive impact.
            </p>
            <p className="mt-4 text-muted-foreground">
              Our mission is to empower you to live a more eco-conscious lifestyle without sacrificing quality or style. From the materials we choose to the partners we work with, every decision is guided by our commitment to the Earth and its people.
            </p>
          </div>
          <div className="order-1 h-full min-h-[400px] overflow-hidden rounded-lg md:order-2 md:min-h-[500px]">
            <Image 
              src="https://placehold.co/600x700.png" 
              alt="Team working with plants" 
              width={600} 
              height={700}
              className="h-full w-full object-cover object-center"
              data-ai-hint="people community garden"
            />
          </div>
        </div>
      </section>

      <section className="bg-card py-12 sm:py-16 md:py-24">
        <div className="container max-w-7xl px-4">
            <div className="text-center">
                <h2 className="font-headline text-3xl font-bold sm:text-4xl">Our Core Values</h2>
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">These principles are the heart of everything we do.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="text-center p-6 sm:p-8 rounded-lg">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Leaf className="h-8 w-8"/>
                    </div>
                    <h3 className="mt-6 font-headline text-xl font-semibold">Planet First</h3>
                    <p className="mt-2 text-muted-foreground">We prioritize the health of our planet in every decision, from product sourcing to packaging.</p>
                </div>
                <div className="text-center p-6 sm:p-8 rounded-lg">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Handshake className="h-8 w-8"/>
                    </div>
                    <h3 className="mt-6 font-headline text-xl font-semibold">Ethical Partnerships</h3>
                    <p className="mt-2 text-muted-foreground">We collaborate with makers and brands who uphold fair labor standards and environmental responsibility.</p>
                </div>
                <div className="text-center p-6 sm:p-8 rounded-lg sm:col-span-2 lg:col-span-1">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Sprout className="h-8 w-8"/>
                    </div>
                    <h3 className="mt-6 font-headline text-xl font-semibold">Conscious Consumption</h3>
                    <p className="mt-2 text-muted-foreground">We encourage mindful purchasing by offering durable, high-quality products that last.</p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
}

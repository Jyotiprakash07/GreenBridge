import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Leaf } from 'lucide-react';

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 1.4 3.1 3.5 3.1 5.9 0 4.1-3.2 7.7-7.3 7.7-2.1 0-4-.8-5.5-2.1C6.1 18.2 4 17.1 4 14.5c0-1.1.3-2.1.8-3.1C2.5 10.3 2 8.5 2 6.5c0-1.2.3-2.4.9-3.5C5.1 6.1 8 8.2 11.5 8.2c-.1-1.3.3-2.6 1.1-3.6 1.2-1.4 3-2.1 4.7-2.1 1.1 0 2.1.3 3 .8z" />
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
);

export default function Footer() {
  return (
    <footer className="bg-card text-card-foreground border-t">
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="font-headline text-2xl font-bold text-primary">
                Green Bridge
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Sustainable and stylish eco-friendly products for a better planet.
            </p>
            <div className="mt-6 flex gap-4">
                <Link href="#" aria-label="Twitter"><TwitterIcon className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
                <Link href="#" aria-label="Instagram"><InstagramIcon className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
                <Link href="#" aria-label="Facebook"><FacebookIcon className="h-6 w-6 text-muted-foreground hover:text-primary" /></Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 lg:col-span-2 lg:grid-cols-3">
            <div>
              <p className="font-semibold text-foreground">Shop</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/products" className="text-muted-foreground hover:text-foreground">All Products</Link></li>
                <li><Link href="/products?category=personal-care" className="text-muted-foreground hover:text-foreground">Personal Care</Link></li>
                <li><Link href="/products?category=home-goods" className="text-muted-foreground hover:text-foreground">Home Goods</Link></li>
                <li><Link href="/products?category=accessories" className="text-muted-foreground hover:text-foreground">Accessories</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">About</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li><Link href="/about" className="text-muted-foreground hover:text-foreground">Our Mission</Link></li>
                <li><Link href="#" className="text-muted-foreground hover:text-foreground">Sustainability</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-foreground">Contact Us</Link></li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-foreground">Stay Updated</p>
              <p className="mt-4 text-sm text-muted-foreground">Subscribe to our newsletter for the latest products and promotions.</p>
              <form className="mt-4 flex gap-2">
                <Input type="email" placeholder="Enter your email" className="flex-1" />
                <Button type="submit" variant="secondary">Subscribe</Button>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Green Bridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

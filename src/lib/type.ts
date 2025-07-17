import type { Product } from './types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Bamboo Toothbrush Set',
    price: 12.99,
    description: 'A set of four biodegradable bamboo toothbrushes. A perfect plastic-free alternative to your oral hygiene routine. The bristles are infused with charcoal for extra whitening.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    reviews: [
      { id: 1, author: 'Jane D.', rating: 5, comment: 'Love these! They feel great and I love that they are biodegradable.', date: '2023-04-22' },
      { id: 2, author: 'John S.', rating: 4, comment: 'Good quality, but the bristles are a bit soft for my liking.', date: '2023-04-15' },
    ],
    ecoAttributes: ['biodegradable', 'sustainably-sourced'],
    category: 'personal-care'
  },
  {
    id: '2',
    name: 'Recycled Glass Tumblers',
    price: 29.99,
    description: 'Set of four beautiful drinking glasses made from 100% recycled glass. Each piece is unique and features a subtle green tint. Perfect for everyday use or special occasions.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    reviews: [
      { id: 1, author: 'Emily R.', rating: 5, comment: 'These are stunning and so sturdy. I get compliments on them all the time.', date: '2023-05-01' },
    ],
    ecoAttributes: ['recycled-content'],
    category: 'home-goods'
  },
  {
    id: '3',
    name: 'Organic Cotton Tote Bag',
    price: 19.99,
    description: 'A durable and stylish tote bag made from 100% organic cotton. Features a beautiful leaf print. Ideal for grocery shopping, beach trips, or as an everyday carry-all.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    reviews: [],
    ecoAttributes: ['sustainably-sourced', 'biodegradable'],
    category: 'accessories'
  },
  {
    id: '4',
    name: 'Beeswax Food Wraps',
    price: 15.50,
    description: 'A natural alternative to plastic wrap. This set of three wraps in various sizes is perfect for covering bowls, wrapping sandwiches, or storing snacks. Reusable and compostable.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    reviews: [
      { id: 1, author: 'Mike T.', rating: 5, comment: 'Game changer in my kitchen! Works perfectly.', date: '2023-03-10' },
      { id: 2, author: 'Sarah L.', rating: 5, comment: 'So easy to use and clean. And they smell lovely!', date: '2023-03-12' },
    ],
    ecoAttributes: ['sustainably-sourced', 'biodegradable'],
    category: 'home-goods'
  },
  {
    id: '5',
    name: 'Shampoo & Conditioner Bar Set',
    price: 25.00,
    description: 'Ditch the plastic bottles with this nourishing shampoo and conditioner bar set. Scented with essential oils and made with natural ingredients. Lasts for up to 80 washes.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    reviews: [
        { id: 1, author: 'Jessica P.', rating: 5, comment: 'My hair has never felt better! And no plastic waste!', date: '2023-05-20' }
    ],
    ecoAttributes: ['sustainably-sourced', 'biodegradable'],
    category: 'personal-care'
  },
  {
    id: '6',
    name: 'Solar-Powered Phone Charger',
    price: 45.99,
    description: 'Charge your devices on the go with this compact and efficient solar-powered charger. A must-have for hiking, camping, or any outdoor adventure. Harness the power of the sun!',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    reviews: [],
    ecoAttributes: ['sustainably-sourced'],
    category: 'accessories'
  },
  {
    id: '7',
    name: 'Reusable Stainless Steel Straws',
    price: 9.99,
    description: 'Set of 4 stainless steel straws with a cleaning brush and travel pouch. Say no to single-use plastic straws and sip sustainably wherever you go.',
    images: ['https://placehold.co/600x600.png'],
    reviews: [
        { id: 1, author: 'David C.', rating: 5, comment: 'Excellent quality and the pouch is very handy.', date: '2023-04-30' }
    ],
    ecoAttributes: ['recycled-content'],
    category: 'accessories'
  },
  {
    id: '8',
    name: 'Natural All-Purpose Cleaner',
    price: 11.99,
    description: 'Plant-derived, non-toxic all-purpose cleaner that is tough on grime but gentle on the planet. Comes in a refillable glass bottle. Scented with lemon and eucalyptus.',
    images: ['https://placehold.co/600x600.png', 'https://placehold.co/600x600.png'],
    reviews: [
      { id: 1, author: 'Olivia W.', rating: 5, comment: 'Smells amazing and cleans like a dream. Love the refill option!', date: '2023-05-18' },
    ],
    ecoAttributes: ['biodegradable', 'sustainably-sourced'],
    category: 'home-goods'
  },
];

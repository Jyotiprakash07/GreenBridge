import type { Metadata } from 'next';
import ContactForm from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with the Green Bridge team. We are here to answer your questions about our products, sustainability, or any other inquiries.',
};

export default function ContactPage() {
  return <ContactForm />;
}

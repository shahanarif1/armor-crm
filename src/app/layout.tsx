import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ARMOR CRM | Customer relationships, secured',
  description: 'A clear, focused workspace for managing customer relationships and growing your business.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

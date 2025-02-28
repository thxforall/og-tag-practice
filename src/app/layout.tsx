import './globals.css';

export const metadata = {
  title: 'My NextJS App - Minimal Design',
  description: 'A minimal and clean NextJS application with SEO optimization',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main className="min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}

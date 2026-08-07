import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

const siteUrl = 'https://carlosmadrigal.dev';
const siteTitle = 'Carlos I. Madrigal — Software Developer & DevOps Engineer';
const siteDescription =
  'Software Developer con 5+ años de experiencia en Node.js y arquitecturas serverless en AWS. Especializado en CI/CD, Docker y automatización. Jujuy, Argentina.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: '%s | Carlos I. Madrigal',
  },
  description: siteDescription,
  keywords: [
    'Carlos Madrigal',
    'Software Developer',
    'DevOps Engineer',
    'Full Stack Developer',
    'Node.js',
    'NestJS',
    'Next.js',
    'React',
    'AWS Lambda',
    'Serverless',
    'Docker',
    'CI/CD',
    'TypeScript',
    'Argentina',
    'Jujuy',
  ],
  authors: [{ name: 'Carlos I. Madrigal', url: siteUrl }],
  creator: 'Carlos I. Madrigal',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    title: siteTitle,
    description: siteDescription,
    siteName: 'Carlos I. Madrigal Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    creator: '@carlosmadrigal',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  themeColor: '#050816',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Carlos I. Madrigal',
    jobTitle: 'Software Developer & DevOps Engineer',
    url: siteUrl,
    sameAs: [
      'https://github.com/carlosmadrigal',
      'https://www.linkedin.com/in/carlosmadrigal',
    ],
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Jujuy',
      addressCountry: 'AR',
    },
    email: 'ignafree97@gmail.com',
    telephone: '+54-388-329-4016',
    knowsAbout: [
      'Node.js',
      'NestJS',
      'Next.js',
      'React',
      'TypeScript',
      'JavaScript',
      'AWS',
      'AWS Lambda',
      'AWS CDK',
      'DynamoDB',
      'S3',
      'Docker',
      'CI/CD',
      'DevOps',
      'Serverless',
      'MongoDB',
      'MySQL',
    ],
  };

  return (
    <html lang="es" className={`${inter.variable} ${jetbrains.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none fixed inset-0 -z-10">
            <div className="absolute top-0 left-1/4 h-[500px] w-[500px] rounded-full bg-primary-500/10 blur-[120px] animate-blob" />
            <div className="absolute top-1/3 right-1/4 h-[400px] w-[400px] rounded-full bg-accent-purple/10 blur-[120px] animate-blob delay-1000" />
            <div className="absolute bottom-0 left-1/2 h-[400px] w-[400px] rounded-full bg-accent-pink/10 blur-[120px] animate-blob delay-700" />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
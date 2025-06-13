import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import RunningText from '../components/RunningText';
import Features from '../components/Features';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>GoodFella - Your AI Life Partner That Actually Gets You</title>
        <meta 
          name="description" 
          content="Join the beta! Meet GoodFella, your personal AI life partner who learns your personality, plans your perfect day, and checks in when you're not okay. Sign up for early access." 
        />
        <meta 
          name="keywords" 
          content="AI assistant, personal AI, life partner, emotional AI, contextual intelligence, mental health, life organization, GoodFella, beta testing" 
        />
        <meta name="author" content="GoodFella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goodfella.ai" />
        <meta property="og:title" content="GoodFella - Your AI Life Partner That Actually Gets You" />
        <meta 
          property="og:description" 
          content="Join the beta! Meet GoodFella, your personal AI life partner who learns your personality, plans your perfect day, and checks in when you're not okay." 
        />
        <meta property="og:image" content="https://goodfella.ai/app-icon.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://goodfella.ai" />
        <meta property="twitter:title" content="GoodFella - Your AI Life Partner That Actually Gets You" />
        <meta 
          property="twitter:description" 
          content="Join the beta! Meet GoodFella, your personal AI life partner who learns your personality, plans your perfect day, and checks in when you're not okay." 
        />
        <meta property="twitter:image" content="https://goodfella.ai/app-icon.png" />

        {/* Favicon */}
        <link rel="icon" href="/app-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/app-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/app-icon.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/app-icon.png" />

        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "GoodFella",
              "description": "Your personal AI life partner who learns your personality, plans your perfect day, and checks in when you're not okay.",
              "url": "https://goodfella.ai",
              "operatingSystem": "Web, iOS, Android",
              "offers": {
                "@type": "Offer",
                "price": "0",
                "priceCurrency": "USD",
                "availability": "https://schema.org/PreOrder"
              }
            })
          }}
        />
      </Head>

      <main className="min-h-screen bg-black">
        <Navigation />
        <Hero />
        <Features />
        <RunningText />
        <FinalCTA />
        <Footer />
      </main>
    </>
  );
} 
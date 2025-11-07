import React from 'react';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import RunningText from '../components/RunningText';
import Features from '../components/Features';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>GoodFella</title>
        <meta 
          name="description" 
          content="Join the beta! Meet GoodFella, your social wellbeing companion who understands your emotional needs, facilitates meaningful connections, and supports your mental health through intelligent social awareness." 
        />
        <meta 
          name="keywords" 
          content="social wellbeing, intelligent companion, mental health support, social connection, emotional intelligence, loneliness prevention, social technology, wellbeing technology, GoodFella, beta testing" 
        />
        <meta name="author" content="GoodFella" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goodfella.ai" />
        <meta property="og:title" content="GoodFella - Your Social Wellbeing Companion" />
        <meta 
          property="og:description" 
          content="Join the beta! Meet GoodFella, your social wellbeing companion who understands your emotional needs, facilitates meaningful connections, and supports your mental health." 
        />
        <meta property="og:image" content="https://goodfella.ai/app-icon.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://goodfella.ai" />
        <meta property="twitter:title" content="GoodFella - Your Social Wellbeing Companion" />
        <meta 
          property="twitter:description" 
          content="Join the beta! Meet GoodFella, your social wellbeing companion who understands your emotional needs, facilitates meaningful connections, and supports your mental health." 
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

        {/* Preload demo images for faster loading */}
        <link rel="preload" href="/demo/Untitled%20design.gif" as="image" />
        <link rel="preload" href="/demo/1102.gif" as="image" />
        <link rel="preload" href="/demo/Untitled.gif" as="image" />
        <link rel="preload" href="/demo/stepback.gif" as="image" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "GoodFella",
              "description": "Your social wellbeing companion who understands your emotional needs, facilitates meaningful connections, and supports your mental health through intelligent social awareness.",
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
        <FAQ />
        <Footer />
      </main>
    </>
  );
} 
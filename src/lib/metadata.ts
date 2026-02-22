import type { Metadata } from "next";

export const siteConfig = {
  name: "Koovis AI",
  title: "Koovis AI — From Model to Market",
  description:
    "We engineer production-grade AI systems for companies that demand more than demos. From architecture through production.",
  url: "https://www.koovis.ai",
  ogImage: "https://www.koovis.ai/og-image.png",
  author: "Rajesh Kolachana",
  twitterHandle: "@koovisai",
};

export const sharedMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "AI product development",
    "machine learning consulting",
    "ML engineering",
    "AI for startups",
    "custom AI solutions",
    "production ML systems",
    "Koovis AI",
    "Rajesh Kolachana",
  ],
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    site: siteConfig.twitterHandle,
    creator: siteConfig.twitterHandle,
    images: [siteConfig.ogImage],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const jsonLd = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Koovis AI LLC",
    url: siteConfig.url,
    logo: `${siteConfig.url}/og-image.png`,
    description: siteConfig.description,
    founder: {
      "@type": "Person",
      name: "Rajesh Kolachana",
      jobTitle: "Founder & CEO",
      url: siteConfig.url + "/about",
    },
    address: {
      "@type": "PostalAddress",
      addressRegion: "DE",
      addressCountry: "US",
    },
    sameAs: [
      "https://linkedin.com/in/rajeshkolachana",
      "https://github.com/rajsapien",
      "https://x.com/koovisai",
    ],
  },
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Rajesh Kolachana",
    jobTitle: "Founder & CEO, Koovis AI",
    url: siteConfig.url + "/about",
    worksFor: {
      "@type": "Organization",
      name: "Koovis AI LLC",
    },
    alumniOf: [
      {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Technology Roorkee",
      },
      {
        "@type": "CollegeOrUniversity",
        name: "Indian Institute of Science",
      },
    ],
    knowsAbout: [
      "Machine Learning",
      "Artificial Intelligence",
      "Data Science",
      "NLP",
      "Deep Learning",
      "ML Infrastructure",
    ],
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    publisher: {
      "@type": "Organization",
      name: "Koovis AI LLC",
    },
  },
};

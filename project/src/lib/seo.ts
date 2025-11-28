export const SITE = {
  title: 'Buddhi Tamang',
  description:
    'Actor and theatre practitioner Buddhi Tamang — portfolio, biography, showreels, news, and contact for bookings, collaborations, and press enquiries.',
  siteUrl: 'https://buddhitamang.com', // production URL placeholder
  defaultImage: '/og-image.png',
  author: 'Buddhi Tamang',
  twitter: '@buddhitamang',
  language: 'en-US',
};

export const structuredDataPerson = (overrides: Record<string, any> = {}) => ({
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: SITE.title,
  url: SITE.siteUrl,
  description: SITE.description,
  jobTitle: 'Actor',
  image: SITE.siteUrl.replace(/\/$/, '') + SITE.defaultImage,
  birthDate: '1982',
  birthPlace: {
    '@type': 'Place',
    name: 'Kavrepalanchok, Nepal',
  },
  sameAs: [],
  ...overrides,
});

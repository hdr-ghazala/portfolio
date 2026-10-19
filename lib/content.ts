export type Cover = {
  src: string
  alt: string
  /** Set to false once a real work sample replaces the conceptual illustration. */
  conceptual: boolean
}

export type FeaturedProject = {
  number: string
  org: string
  area: string
  summary: string
  contributions: string[]
  cover: Cover
}

export const featuredProjects: FeaturedProject[] = [
  {
    number: '01',
    org: 'UWC',
    area: 'Communications & Social Media',
    summary:
      'Helping scholarship audiences access clear, accurate information across languages and digital channels.',
    contributions: [
      'Created social media content and supported scholarship outreach.',
      'Translated information between Arabic and English.',
      'Communicated accurate information and expectations to hundreds of applicants.',
      'Reached thousands of people through social media.',
    ],
    cover: {
      src: '/images/cover-uwc.png',
      alt: 'Conceptual illustration of bilingual scholarship outreach across digital channels',
      conceptual: true,
    },
  },
  {
    number: '02',
    org: 'Women & Agriculture',
    area: 'Bilingual Writing, Translation & Publication Design',
    summary:
      'Bringing agricultural stories and information to Arabic- and English-speaking readers.',
    contributions: [
      'Contributed Arabic–English translation and writing.',
      'Designed newsletter layouts.',
      'Contributed to the Women & Agriculture publication associated with UN Women, Mercy Hands, and support from the Government of Japan.',
    ],
    cover: {
      src: '/images/cover-agriculture.png',
      alt: 'Conceptual illustration of a bilingual agricultural publication',
      conceptual: true,
    },
  },
  {
    number: '03',
    org: 'Seventh Sense Art & Media Productions',
    area: 'Journalism & Production',
    summary: 'Supporting media productions that explore community and social issues.',
    contributions: [
      'Contributed to interviews, roundtables, conferences, and video productions.',
      'Applied journalism and visual storytelling skills to communicate information to audiences.',
    ],
    cover: {
      src: '/images/cover-media.png',
      alt: 'Conceptual illustration of a media production and interview setting',
      conceptual: true,
    },
  },
]

export const supportingProjects = [
  {
    name: 'charity: water',
    label: 'ASU Global Career Accelerator training project',
    description:
      'Audience research and brand awareness work completed through the ASU Global Career Accelerator, with a certificate earned.',
  },
  {
    name: 'DC Art & Photography Business',
    label: 'SEO & Digital Presence',
    description:
      'Improved search visibility and connections between social media, the website, and landing pages, helping increase awareness and sales.',
  },
  {
    name: 'World Medicine',
    label: 'Graphic Design',
    description: 'Created designs for medicine packaging, labels, and promotional materials.',
  },
  {
    name: 'Handshake AI',
    label: 'Freelance AI Training · October 2026–Present',
    description:
      'Developing practical AI and creative skills through a freelance AI training engagement. Project details are confidential.',
  },
]

export const skills = [
  'Communications strategy',
  'Arabic–English writing & translation',
  'Social media',
  'SEO',
  'Email marketing',
  'Graphic design',
  'Video production',
  'Audience research',
  'AI tools',
]

export const tools = [
  'Photoshop',
  'Illustrator',
  'InDesign',
  'Premiere',
  'Canva',
  'WordPress',
  'Wix',
  'Shopify',
]

export const degrees = [
  {
    school: 'Arizona State University',
    degree: 'B.A. in Business (Communication)',
    detail: 'Graduated August 2026 · GPA: 3.61/4.00',
  },
  {
    school: 'University of Baghdad',
    degree: 'B.A. in Journalism & Media',
    detail: 'Graduated June 2016 · Overall average: 72%',
  },
]

export const recognition = [
  {
    title: 'ASU Global Career Accelerator',
    detail: 'E-Commerce Specialist, Digital Ads Specialist, and Intercultural Skills',
  },
  {
    title: 'National Society of Leadership and Success',
    detail: 'Inducted January 2026',
  },
]

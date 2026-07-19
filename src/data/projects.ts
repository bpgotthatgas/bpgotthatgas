export interface FeaturedProject {
  id: string;
  artist: string;
  title: string;
  role: string;
  year: string;
  image: string;
  imageAlt: string;
}

export const featuredProjects: FeaturedProject[] = [
  {
    id: 'd-lylez-hidden-gems',
    artist: 'D. Lylez',
    title: 'Hidden Gems',
    role: 'Mixing & Mastering Engineer',
    year: '2026',
    image: '/images/d-lylez-hidden-gems.png',
    imageAlt:
      'Close-up portrait of D. Lylez wearing a pearl-embellished beanie, hand raised to his face.',
  },
  {
    id: 'brittney-carter-black-sheep-ep',
    artist: 'Brittney Carter',
    title: 'Black Sheep EP',
    role: 'Recording & Mixing Engineer',
    year: '2026',
    image: '/images/brittney-carter-black-sheep-ep.png',
    imageAlt:
      'Black and white photo of two artists standing on a beach facing the camera, ocean waves behind them.',
  },
  {
    id: 'femdot-king-dilla-2',
    artist: 'femdot.',
    title: 'King Dilla 2',
    role: 'Assistant Engineer',
    year: '2025',
    image: '/images/femdot-king-dilla-2.png',
    imageAlt:
      'Black and white portrait of femdot. shouting upward, smoke rising from a crown on his head.',
  },
];

import { CodeXml, CopyCheck, Layers, LayoutTemplate, Smartphone, SwatchBook } from "lucide-react";
import type { TeamMember } from '../types/types';
import type { BlogItem } from '../types/types';

// Features

const FEATURES = [
  {
    icon: Layers,
    title: 'Integrated',
    description: 'Seamlessly blend documentation with an interactive playground for a unified learning experience.',
  },
  {
    icon: CopyCheck,
    title: 'Copy & Save Code',
    description: 'Instantly copy production-ready animation code snippets to use in your own projects.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Design',
    description: 'Learn to build animations that look great on any device, from mobile phones to desktops.',
  },
   {
    icon: LayoutTemplate,
    title: 'Card Card Design',
    description: 'Master the art of animating UI components like cards to create engaging user interfaces.',
  },
  {
    icon: SwatchBook,
    title: 'Customizable Themes',
    description: 'Switch between light and dark modes to match your preferred coding environment.',
  },
  {
    icon: CodeXml,
    title: 'Live Editor',
    description: 'Experiment with code in a live editor and see your changes reflected in real-time.',
  },
];


// Blog Items
const BlogItems: BlogItem [] = [
  { id: 1, title: 'GSAP ScrollTrigger Magic', date: 'October 26, 2023', imageUrl: './images/card-5.png' },
  { id: 2, title: 'GSAP ScrollTrigger Magic', date: 'October 26, 2023', imageUrl: './images/card-2.png' },
  { id: 3, title: 'GSAP ScrollTrigger', date: 'October 26, 2023', imageUrl: './images/card-6.png' },
  { id: 4, title: 'SSAP Lmeat Mostion', date: 'October 26, 2023', imageUrl: './images/card-4.png' },
  { id: 5, title: 'GSAP ScrollTrigger Magic', date: 'October 26, 2023', imageUrl: './images/card-2.png', isNew: true },
  { id: 6, title: 'Advanced Animation Hooks', date: 'October 25, 2023', imageUrl: './images/card-2.png' },
];

// aAbout items

const TeamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Card Inso',
    role: 'Creator Manlin',
    imageUrl: 'https://picsum.photos/seed/man1/200/200',
  },
  {
    id: 2,
    name: 'Can Mger',
    role: 'Velira Niker',
    imageUrl: 'https://picsum.photos/seed/man2/200/200',
  },
  {
    id: 3,
    name: 'DaoS Caled',
    role: 'Franer Muslen',
    imageUrl: 'https://picsum.photos/seed/man3/200/200',
  },
];



export {
  BlogItems,
  FEATURES,
  TeamMembers
}
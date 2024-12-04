import UuidPage from '@/tools/uuid';
import { INavCategory, INavItem } from '@/common/interfaces';
import { appConfig } from './app.constant';

export const navCategories: Record<string, INavCategory> = {
  generators: {
    id: 'generators',
    name: 'Generators',
    route: '/generators',
    visibleOnSidebar: true,
    description: 'Generate data for your development needs.',
  },
  links: {
    id: 'links',
    name: 'Links',
    route: '/links',
    visibleOnSidebar: false,
    description: 'Other Links',
  },
};

export const navItems: INavItem[] = [
  // generators
  {
    id: 'uuid',
    category: navCategories.generators.id,
    icon: 'fa-hashtag',
    name: 'UUIDs',
    pageTitle: 'UUID Generator',
    description: 'Generate UUIDs of different versions and configurations.',
    route: `${navCategories.generators.route}/uuid`,
    visibleOnSidebar: true,
    page: UuidPage,
  },

  // links
  {
    id: 'about',
    category: navCategories.links.id,
    icon: 'fa-info-circle',
    name: 'About',
    pageTitle: `About | ${appConfig.name}`,
    description: `About ${appConfig.name}`,
    route: '/about',
    visibleOnSidebar: false,
  },
  {
    id: 'github',
    category: navCategories.links.id,
    icon: 'fab fa-github',
    name: 'GitHub',
    pageTitle: 'GitHub',
    description: 'GitHub Repository',
    externalLink: 'https://github.com/mgoyal98',
    visibleOnSidebar: false,
  },
  {
    id: 'linkedin',
    category: navCategories.links.id,
    icon: 'fab fa-linkedin',
    name: 'LinkedIn',
    pageTitle: 'LinkedIn',
    description: 'LinkedIn Profile',
    externalLink: 'https://www.linkedin.com/in/madhur-goyal/',
    visibleOnSidebar: false,
  },
  {
    id: 'developer',
    category: navCategories.links.id,
    icon: 'fa-user',
    name: 'Developer',
    pageTitle: 'Developer',
    description: 'Developer Profile',
    externalLink: 'https://mgoyal.com',
    visibleOnSidebar: false,
  },
  {
    id: 'buy-me-coffee',
    category: navCategories.links.id,
    icon: 'fad fa-mug-hot',
    name: 'Buy Me a Coffee',
    pageTitle: 'Buy Me a Coffee',
    description: 'Support the development of this site',
    externalLink: 'https://razorpay.me/@mgoyal',
    visibleOnSidebar: false,
  },
];

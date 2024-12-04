import UuidPage from '@/app/tools/uuid';
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
    pageTitle: 'About',
    description: 'About the website',
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
];

import UuidPage from '@/app/tools/uuid';
import { INavCategory, INavItem } from '@/common/interfaces';

export const navCategories: Record<string, INavCategory> = {
  generators: {
    id: 'generators',
    name: 'Generators',
    route: '/generators',
    visibleOnSidebar: true,
    description: 'Generate data for your development needs.',
  },
};

export const navItems: INavItem[] = [
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
];

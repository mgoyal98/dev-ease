import UuidPage from '@/app/tools/uuid';

export interface INavCategory {
  id: string;
  name: string;
  route: string;
  visibleOnSidebar: boolean;
}

export interface INavItem {
  id: string;
  category: string;
  icon: string;
  name: string;
  route: string;
  visibleOnSidebar: boolean;
  page: () => React.JSX.Element;
}

export const navCategories: Record<string, INavCategory> = {
  generators: {
    id: 'generators',
    name: 'Generators',
    route: '/generators',
    visibleOnSidebar: true,
  },
};

export const pageNav: INavItem[] = [
  {
    id: 'uuid',
    category: navCategories.generators.id,
    icon: 'fa-hashtag',
    name: 'UUIDs',
    route: `${navCategories.generators.route}/uuid`,
    visibleOnSidebar: true,
    page: UuidPage,
  },
];

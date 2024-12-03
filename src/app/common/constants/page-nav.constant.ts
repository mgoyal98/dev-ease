import { appRoutes } from './routes.constant';

export const pageNav = [
  {
    id: 'generators',
    name: 'Generators',
    route: appRoutes.generators,
    visibleOnSidebar: true,
    subLinks: [
      {
        id: 'uuid',
        icon: 'fa-hashtag',
        name: 'UUID',
        route: appRoutes.uuid,
        visibleOnSidebar: true,
      },
    ],
  },
];

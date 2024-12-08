import UuidPage from '@/tools/uuid';
import { INavCategory, INavItem } from '@/common/interfaces';
import { appConfig } from './app.constant';
import JsonFormatterTool from '@/tools/json-formatter';

export const navCategories: Record<string, INavCategory> = {
  generators: {
    id: 'generators',
    name: 'Generators',
    route: '/generators',
    visibleOnSidebar: true,
    description:
      'Effortlessly create essential data for your development projects.',
  },
  formatters: {
    id: 'formatters',
    name: 'Formatters',
    route: '/formatters',
    visibleOnSidebar: true,
    description:
      'Simplify your development workflow with tools to format and structure your data effortlessly.',
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
    icon: 'far fa-fw fa-hashtag',
    name: 'UUID',
    pageTitle: 'UUID Generator',
    description:
      'Quickly generate universally unique identifiers (UUIDs) in various versions and configurations to meet your specific requirements.',
    route: `${navCategories.generators.route}/uuid`,
    visibleOnSidebar: true,
    page: UuidPage,
    keywords: [
      'uuid',
      'uuid generator',
      'uuid v4',
      'uuid v5',
      'uuid v6',
      'uuid v7',
      'uuid v8',
      'UUID generator',
      'online UUID generator',
      'generate UUID',
      'UUID generator tool',
      'UUID version 4 generator',
      'free UUID generator',
      'UUID creation',
      'unique identifier generator',
      'v4 UUID generator',
      'random UUID generator',
      'UUID generator for developers',
      'UUID tool online',
    ],
  },

  // formatters
  {
    id: 'json',
    category: navCategories.formatters.id,
    icon: 'far fa-fw fa-brackets-curly',
    name: 'JSON Formatter',
    pageTitle: 'JSON Formatter',
    description:
      'Easily format, minify, and beautify JSON data for improved readability and optimized usage.',
    route: `${navCategories.formatters.route}/json`,
    visibleOnSidebar: true,
    page: JsonFormatterTool,
    keywords: [
      'json',
      'json formatter',
      'json beautifier',
      'json minifier',
      'JSON formatter',
      'online JSON formatter',
      'format JSON',
      'JSON beautifier',
      'JSON minifier',
      'JSON viewer',
      'JSON prettifier',
      'free JSON formatter',
      'JSON formatting tool',
      'JSON parser',
      'beautify JSON online',
      'minify JSON online',
      'JSON formatter for developers',
      'JSON tool online',
    ],
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
    keywords: [
      'about',
      'about devease',
      'about tool',
      'about tools',
      'about dev tools',
      'devease',
      'devease tools',
      'devease website',
    ],
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

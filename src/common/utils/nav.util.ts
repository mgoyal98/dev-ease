import { navCategories, pageNav } from '../constants';

export function getCategoryById(id: string) {
  return navCategories[id as keyof typeof navCategories];
}

export function getNavItemsByCategory(category: string) {
  return pageNav.filter((item) => item.category === category);
}

export function getNavItemById(id: string) {
  return pageNav.find((item) => item.id === id);
}

export function getNavItemByCategoryAndTool(category: string, tool: string) {
  return pageNav.find((item) => item.category === category && item.id === tool);
}

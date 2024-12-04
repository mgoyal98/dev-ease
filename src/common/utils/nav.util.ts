import { navCategories, navItems } from '../constants';

export function getCategoryById(id: string) {
  return navCategories[id as keyof typeof navCategories];
}

export function getAllCategories(all = false) {
  return Object.values(navCategories).filter((category) =>
    all ? true : category.visibleOnSidebar
  );
}

export function getNavItemsByCategory(category: string, all = false) {
  return navItems.filter(
    (item) => item.category === category && (all || item.visibleOnSidebar)
  );
}

export function getNavItemById(id: string) {
  return navItems.find((item) => item.id === id);
}

export function getNavItemByCategoryAndTool(category: string, tool: string) {
  return navItems.find(
    (item) => item.category === category && item.id === tool
  );
}

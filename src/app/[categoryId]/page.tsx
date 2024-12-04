import { appConfig, navCategories } from '@/common/constants';
import { getCategoryById, getNavItemsByCategory } from '@/common/utils';
import Content from '@/components/content';
import PageTitle from '@/components/page-title';
import ToolCard from '@/components/tool-card';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{ categoryId: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { categoryId } = await params;
  const data = getCategoryById(categoryId);
  if (!data) {
    notFound();
  }
  return (
    <Content>
      <PageTitle title={data.name} description={data.description} />
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {getNavItemsByCategory(categoryId).map((tool) => (
          <ToolCard key={tool.id} {...tool} />
        ))}
      </div>
    </Content>
  );
}

export const dynamicParams = true; // Allows dynamic route handling

export async function generateMetadata({ params }: CategoryPageProps) {
  const { categoryId } = await params;

  const categoryData = getCategoryById(categoryId);

  // Check if the category is valid
  if (!categoryData) {
    return {
      title: 'Category Not Found',
      description: 'The requested category does not exist.',
    };
  }

  // Metadata based on the category
  return {
    title: `${categoryData.name} | ${appConfig.name}`,
    description: categoryData.description,
  };
}

export async function generateStaticParams() {
  const categories = Object.keys(navCategories);

  return categories.map((category) => ({ categoryId: category }));
}

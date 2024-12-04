import { appConfig, navItems } from '@/common/constants';
import { getNavItemByCategoryAndTool, getNavItemById } from '@/common/utils';
import Content from '@/components/content';
import PageTitle from '@/components/page-title';
import { notFound } from 'next/navigation';

interface ToolPageProps {
  params: Promise<{ categoryId: string; toolId: string }>;
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { categoryId, toolId } = await params;
  const data = getNavItemByCategoryAndTool(categoryId, toolId);
  if (!data) {
    notFound();
  }
  return (
    <Content>
      <PageTitle title={data.name} description={data.description} />

      {data.page && <data.page />}
    </Content>
  );
}

export async function generateMetadata({ params }: ToolPageProps) {
  const { toolId } = await params;

  const tool = getNavItemById(toolId);

  // Check if the category is valid
  if (!tool) {
    return {
      title: 'Tool Not Found',
      description: 'The requested category does not exist.',
    };
  }

  // Metadata based on the category
  return {
    title: `${tool.pageTitle} | ${appConfig.name}`,
    description: tool.description,
  };
}

export async function generateStaticParams() {
  const tools = navItems.filter((tool) => tool.page).map((tool) => ({
    categoryId: tool.category,
    toolId: tool.id,
  }));

  return tools;
}

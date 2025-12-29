import { appConfig, navItems } from '@/common/constants';
import { getNavItemByCategoryAndTool, getNavItemById } from '@/common/utils';
import Content from '@/components/content';
import ToolPageTitle from '@/components/tool-page-title';
import { notFound } from 'next/navigation';
import ogImage from '@/app/cover.png';

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
      <ToolPageTitle
        toolId={data.id}
        title={data.pageTitle}
        description={data.description}
      />

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
      description: 'The specified tool could not be located.',
    };
  }

  const canonicalUrl = `${appConfig.url}/${tool.category}/${tool.id}`;

  // Metadata based on the category
  return {
    title: `${tool.pageTitle} | ${appConfig.name}`,
    description: tool.description,
    applicationName: appConfig.name,
    keywords: tool.keywords,
    creator: appConfig.creator,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      images: [{ url: ogImage.src, width: 1200, height: 640 }],
      type: 'website',
      siteName: appConfig.name,
      title: `${tool.pageTitle} | ${appConfig.name}`,
      description: tool.description,
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      site: 'devease.app',
      creator: '@mgoyal98',
      images: [{ url: ogImage.src, width: 1200, height: 640 }],
      title: `${tool.pageTitle} | ${appConfig.name}`,
      description: tool.description,
    },
  };
}

export async function generateStaticParams() {
  const tools = navItems
    .filter((tool) => tool.page)
    .map((tool) => ({
      categoryId: tool.category,
      toolId: tool.id,
    }));

  return tools;
}

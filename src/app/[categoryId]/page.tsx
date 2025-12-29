import { appConfig, navCategories } from '@/common/constants';
import { getCategoryById, getNavItemsByCategory } from '@/common/utils';
import Content from '@/components/content';
import PageTitle from '@/components/page-title';
import ToolCard from '@/components/tool-card';
import { notFound } from 'next/navigation';
import ogImage from '@/app/cover.png';

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
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {getNavItemsByCategory(categoryId).map((tool) => (
          <ToolCard key={tool.id} {...tool} />
        ))}
      </div>
    </Content>
  );
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const { categoryId } = await params;

  const categoryData = getCategoryById(categoryId);

  // Check if the category is valid
  if (!categoryData) {
    return {
      title: 'Category Not Found',
      description: 'The specified category could not be located.',
      applicationName: appConfig.name,
    };
  }

  const canonicalUrl = `${appConfig.url}/${categoryId}`;

  // Metadata based on the category
  return {
    title: `${categoryData.name} | ${appConfig.name}`,
    description: categoryData.description,
    applicationName: appConfig.name,
    keywords: [
      ...getNavItemsByCategory(categoryId).map(
        (tool) => `${tool.id} ${categoryId}`
      ),
    ],
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
      title: `${categoryData.name} | ${appConfig.name}`,
      description: categoryData.description,
      url: canonicalUrl,
    },
    twitter: {
      card: 'summary_large_image',
      site: 'devease.app',
      creator: '@mgoyal98',
      images: [{ url: ogImage.src, width: 1200, height: 640 }],
      title: `${categoryData.name} | ${appConfig.name}`,
      description: categoryData.description,
    },
  };
}

export async function generateStaticParams() {
  const categories = Object.keys(navCategories);

  return categories.map((category) => ({ categoryId: category }));
}

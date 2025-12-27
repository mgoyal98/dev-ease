'use client';

import { getAllCategories, getNavItemsByCategory } from '@/common/utils';
import Content from '@/components/content';
import PageTitle from '@/components/page-title';
import ToolCard from '@/components/tool-card';
import { useStarredTools } from '@/common/context';

export default function Home() {
  const { getStarredTools } = useStarredTools();
  const starredTools = getStarredTools();

  return (
    <Content>
      {starredTools.length > 0 && (
        <div className='mb-10'>
          <PageTitle
            title='Favorites'
            description='Your favorite tools pinned for quick access.'
            icon='fas fa-star text-amber-500'
          />
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {starredTools.map((tool) => (
              <ToolCard key={`starred-${tool.id}`} {...tool} />
            ))}
          </div>
        </div>
      )}
      {getAllCategories().map((category) => (
        <div key={category.id} className='mb-10'>
          <PageTitle title={category.name} description={category.description} />
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
            {getNavItemsByCategory(category.id).map((tool) => (
              <ToolCard key={tool.id} {...tool} />
            ))}
          </div>
        </div>
      ))}
    </Content>
  );
}

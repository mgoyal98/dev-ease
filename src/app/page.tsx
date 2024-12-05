import { getAllCategories, getNavItemsByCategory } from '@/common/utils';
import Content from '@/components/content';
import PageTitle from '@/components/page-title';
import ToolCard from '@/components/tool-card';

export default function Home() {
  return (
    <Content>
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

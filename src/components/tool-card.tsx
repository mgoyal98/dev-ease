import { INavItem } from '@/common/interfaces';
import { Card, CardContent } from './card';
import Link from 'next/link';

export default function ToolCard(tool: INavItem) {
  return (
    <Card className='hover:bg-slate-50 transition-colors duration-200 dark:hover:bg-zinc-700'>
      <Link
        href={tool.route || tool.externalLink || '#'}
        target={tool.externalLink ? '_blank' : '_self'}
      >
        <CardContent>
          <div className='flex flex-row gap-6'>
            <div className='flex flex-row items-center justify-center'>
              <i className={`text-3xl ${tool.icon}`} />
            </div>
            <div className='flex flex-col gap-1.5'>
              <h3 className='text-lg font-bold'>{tool.name}</h3>
              <p className='text-sm text-slate-700 dark:text-slate-300'>
                {tool.description}
              </p>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}

import { appConfig } from '@/common/constants';
import { getNavItemById } from '@/common/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/card';
import Content from '@/components/content';
import ExternalLink from '@/components/external-link';
import PageTitle from '@/components/page-title';

const aboutPage = getNavItemById('about');

export const metadata = {
  title: aboutPage?.pageTitle ?? 'About',
  description: aboutPage?.description ?? 'About the website',
};

export default function AboutPage() {
  return (
    <Content>
      <PageTitle title='About' />

      <Card className='mb-4'>
        <CardHeader>
          <CardTitle>About {appConfig.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>
            <strong>{appConfig.name}</strong> is a collection of powerful tools
            crafted with ❤️ by{' '}
            <ExternalLink
              href={getNavItemById('developer')?.externalLink ?? '/'}
            >
              {appConfig.creator}
            </ExternalLink>
            , designed to make life easier for developers and IT professionals.
            If you find these tools helpful, don&apos;t forget to bookmark them
            and share them with others who might benefit.
          </p>
          <p>
            <strong>Open-source and free under the MIT license</strong>,{' '}
            {appConfig.name} is here to stay— but hosting and domain costs do
            add up. If you&apos;d like to support this project and help expand
            its range of tools, consider sponsoring{' '}
            <ExternalLink
              href={getNavItemById('buy-me-coffee')?.externalLink ?? '/'}
            >
              here
            </ExternalLink>
            .
          </p>
        </CardContent>
      </Card>

      <Card className='mb-4'>
        <CardHeader>
          <CardTitle>Tech Stack</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className='list-disc marker:text-emerald-500 pl-5 space-y-2'>
            <li>Built with Next.js, Tailwind CSS and Headless UI.</li>
            <li>Used Vercel for hosting and continuous deployment.</li>
            <li>Used GitHub Actions for CI/CD.</li>
            <li>
              Powered by various third-party open-source libraries (see the full
              list in the repository&apos;s{' '}
              <ExternalLink
                href={`${
                  getNavItemById('github')?.externalLink ?? '/'
                }/blob/main/package.json`}
              >
                package.json
              </ExternalLink>
              ).
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card className='mb-4'>
        <CardHeader>
          <CardTitle>Got Feedback?</CardTitle>
        </CardHeader>
        <CardContent>
          <p className='mb-4'>Missing a tool or found a bug?</p>
          <ul className='list-disc marker:text-emerald-500 pl-5 space-y-2'>
            <li>
              <strong>Request a Feature:</strong> Suggest new tools you think
              would be helpful.
            </li>
            <li>
              <strong>Report an Issue:</strong> Let us know if something&apos;s
              broken or not working as expected.
            </li>
          </ul>
          <p className='mt-4'>
            Head to the GitHub repository and share your ideas or bug reports in
            the{' '}
            <ExternalLink
              href={`${getNavItemById('github')?.externalLink ?? '/'}/issues`}
            >
              Issues
            </ExternalLink>{' '}
            section.
          </p>
        </CardContent>
      </Card>

      <p className='mb-4 mt-5 text-center'>
        🚀 <strong>{appConfig.name}</strong>: Your go-to toolkit for smoother
        development.
      </p>
    </Content>
  );
}

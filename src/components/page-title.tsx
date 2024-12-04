export default function PageTitle({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <>
      <h1 className={`text-2xl font-bold ${description ? 'mb-2' : 'mb-5'}`}>
        {title}
      </h1>
      {description && (
        <p className='text-sm text-slate-700 mb-5 dark:text-slate-300'>
          {description}
        </p>
      )}
    </>
  );
}

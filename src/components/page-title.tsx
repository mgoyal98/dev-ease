export default function PageTitle({
  title,
  description,
  icon,
}: {
  title: string;
  description?: string;
  icon?: string;
}) {
  return (
    <>
      <h1 className={`text-2xl font-bold ${description ? 'mb-2' : 'mb-5'} flex items-center gap-3`}>
        {icon && <i className={icon} />}
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

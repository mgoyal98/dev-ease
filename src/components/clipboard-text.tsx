import { handleCopy } from '@/common/utils';
import { Tooltip } from 'react-tooltip';

export default function ClipboardText({
  text,
  id,
}: {
  text: string;
  id: string;
}) {
  return (
    <button
      className='inline-flex bg-slate-100 font-semibold px-2 ml-1 py-2 rounded items-center gap-2'
      data-tooltip-id={`${id}-tooltip`}
      data-tooltip-content='Copy'
      onClick={() => handleCopy(text)}
    >
      {text} <span className='text-slate-200'>|</span>{' '}
      <i className='far fa-copy' />
      <Tooltip id={`${id}-tooltip`} />
    </button>
  );
}

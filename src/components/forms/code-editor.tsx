'use client';

import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/mode-sql';

import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";

export default function CodeEditor({
  value,
  mode = 'json',
  id,
  onChange,
  readOnly = false,
  minLines = 31,
  maxLines = 40,
}: {
  value: string;
  mode?: string;
  id?: string;
  readOnly?: boolean;
  minLines?: number;
  maxLines?: number;
  onChange?: (value: string) => void;
}) {
  return (
    <AceEditor
      value={value}
      mode={mode}
      width='100%'
      setOptions={{
        useWorker: false,
        fontSize: '1rem',
        showPrintMargin: false,
        readOnly,
        minLines,
        maxLines,
        wrap: true,
      }}
      className='ace-devease-theme'
      onChange={onChange}
      name={id}
      editorProps={{ $blockScrolling: true }}
    />
  );
}

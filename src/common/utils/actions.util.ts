export const handleCopy = (text: string) => {
  navigator.clipboard.writeText(text);
};

export const handlePaste = (callback: (text: string) => void) => {
  navigator.clipboard.readText().then(callback);
};

export const handleDownload = (text: string, filename: string) => {
  const blob = new Blob([text], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
};

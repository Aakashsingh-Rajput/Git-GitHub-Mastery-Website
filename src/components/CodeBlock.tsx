
import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = 'bash', filename }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
      {filename && (
        <div className="bg-gray-800 px-4 py-2 border-b border-gray-700">
          <span className="text-gray-300 text-sm font-mono">{filename}</span>
        </div>
      )}
      <div className="relative">
        <pre className="p-4 overflow-x-auto">
          <code className={`text-sm ${language === 'bash' ? 'text-green-400' : 'text-blue-400'}`}>
            {code}
          </code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute top-2 right-2 p-2 bg-gray-800 hover:bg-gray-700 rounded border border-gray-600 transition-colors"
          title="Copy to clipboard"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-40" />
          ) : (
            <Copy className="h-4 w-4 text-gray-400" />
          )}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;

import { useMemo, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { MdDone, MdCopyAll } from "react-icons/md";

const Pre = (props: any) => {
  const [copied, setCopied] = useState(false);

  const language = useMemo(() => {
    const match = /language-(\w+)/.exec(
      props.children?.props.className || ""
    ) as string[];
    return match?.length > 1 ? match[1] : "";
  }, [props]);

  const copyCode = () => {
    if (copied) {
      return;
    }
    setCopied(true);
    window.navigator.clipboard.writeText(props.children.props.children);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className="my-8 rounded-lg overflow-hidden border border-gray-100 dark:border-gray-800 bg-gray-100 dark:bg-gray-900">
      <div className="px-2 h-12 flex gap-2">
        <div className="flex-1 flex overflow-hidden gap-2 pt-2">
          {props.filename && (
            <div className="px-4 h-full rounded-t-md bg-white dark:bg-gray-800 flex items-center overflow-hidden">
              <p className="truncate">{props.filename}</p>
            </div>
          )}
        </div>
        <div className="flex items-center">
          <p className="uppercase">{language}</p>
        </div>
        <button
          className={`flex items-center justify-center h-full aspect-square ${
            copied
              ? "text-green-500"
              : "text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
          }`}
          onClick={copyCode}
        >
          {copied ? (
            <MdDone className="w-6 h-6" />
          ) : (
            <MdCopyAll className="w-6 h-6" />
          )}
        </button>
      </div>
      <pre
        {...props}
        className="bg-white dark:bg-gray-800 p-8 overflow-x-auto m-0 rounded-none"
      >
        <SyntaxHighlighter
          language={language}
          PreTag="div"
          useInlineStyles={false}
        >
          {props.children.props.children.trim()}
        </SyntaxHighlighter>
      </pre>
    </div>
  );
};

export default Pre;

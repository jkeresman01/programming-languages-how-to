import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
// import 'prismjs/themes/prism-tomorrow.css';
import 'prism-themes/themes/prism-nord.css';
// import 'prismjs/themes/prism-tomorrow.css';

// Existing Prism languages. Import order matters: base languages first.
import 'prismjs/components/prism-clike';      // base for C-family languages
import 'prismjs/components/prism-javascript'; // needs clike
import 'prismjs/components/prism-lisp';       // just some lisp 
import 'prismjs/components/prism-bash';       // just some bash 
import 'prismjs/components/prism-python';       // just some bash 

// Prism has no AWK grammar, so fall back to the generic C-like one
if (!Prism.languages['awk']) {
  Prism.languages['awk'] = Prism.languages['clike'];
}

interface Props {
  code: string;
  language?: string;
}

export default function CodeBlock({ code, language = 'plaintext' }: Props) {
  const ref = useRef<HTMLElement>(null);

  // Unknown languages (and "plaintext") are rendered without highlighting
  const lang = Prism.languages[language] ? language : 'plaintext';

  useEffect(() => {
    if (ref.current) {
      Prism.highlightElement(ref.current);
    }
  }, [code, lang]);

  return (
    <div className="code-block">
      <pre>
        <code ref={ref} className={`language-${lang}`}>
          {code.trim()}
        </code>
      </pre>
    </div>
  );
}

import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import 'prism-themes/themes/prism-nord.css';

// Existing Prism languages. Import order matters: base languages first.
import 'prismjs/components/prism-clike'; // base for C-family languages
import 'prismjs/components/prism-javascript'; // needs clike
import 'prismjs/components/prism-lisp'; // just some lisp
import 'prismjs/components/prism-bash'; // just some bash
import 'prismjs/components/prism-python'; // just some python
import 'prismjs/components/prism-csharp'; // just some python

// Prism has no AWK grammar, so fall back to the generic C-like one
if (!Prism.languages['awk']) {
  Prism.languages['awk'] = Prism.languages['clike'];
}

// Register a custom jlang grammar based on C-like syntax
Prism.languages['jlang'] = {
  comment: [
    { pattern: /\/\/.*/, greedy: true },
    { pattern: /\/\*[\s\S]*?\*\//, greedy: true },
  ],
  preprocessor: {
    pattern: /^#\s*(?:include|define|ifdef|ifndef|else|endif|undef)\b.*/m,
    greedy: true,
    alias: 'property',
  },
  string: [
    { pattern: /"(?:\\.|[^"\\])*"/, greedy: true },
    { pattern: /'(?:\\.|[^'\\])'/, greedy: true },
  ],
  keyword:
    /\b(?:fn|var|val|return|if|else|while|for|in|struct|interface|switch|case|default|break|continue|match|alloc|free|null|true|false|and|or|Ok|Err|Result)\b/,
  builtin: /\b(?:printf|sizeof)\b/,
  'class-name': [
    /\b(?:i8|i16|i32|i64|u8|u16|u32|u64|f32|f64|bool|char|void)\b/,
    /\bstd::Vector\b/,
    /\b[A-Z][a-zA-Z0-9]*\b/,
  ],
  number: /\b\d+(?:\.\d+)?\b/,
  operator: /=>|->|:=|\?\:|\+\+|--|&&|\|\||[+\-*/%=<>!&|^~]=?|<<=?|>>=?|::/,
  punctuation: /[{}[\]();,.:]/,
};

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

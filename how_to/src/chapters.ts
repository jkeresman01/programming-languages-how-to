export const chapters = [
  {
    title: 'General introduction',
    items: [
      { label: 'Preface', path: '/' },
      { label: 'Introduction', path: '/introduction/introduction' },
      {
        label: 'Interpreters vs Compilers',
        path: '/introduction/interpreters-vs-compilers',
      },
      { label: 'Phases of Compiler', path: '/introduction/phases-of-compiler' },
      { label: 'Our options', path: '/introduction/shortcuts' },
    ],
  },
  {
    title: 'Programming languages lingo',
    items: [{ label: 'Introduction', path: '/options/introduction' }],
  },
  {
    title: 'Sealox && Jlox',
    items: [{ label: 'Introduction', path: '/lox/introduction' }],
  },

  {
    title: 'Luapp',
    items: [{ label: 'Introduction', path: '/luapp/introduction' }],
  },
  {
    title: 'Jlang',
    items: [{ label: 'Introduction', path: '/jlang/introduction' }],
  },
];

export const allPages = chapters.flatMap((ch) => ch.items);

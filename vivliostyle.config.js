module.exports = {
  title: 'デザイナーが知るべきWeb標準のこと', // populated into `manifest.json`, default to `title` of the first entry or `name` in `package.json`.
  author: 'takanorip <takanori0170@gmail.com>', // default to `author` in `package.json` or undefined.
  language: 'ja', // default to `en`.
  size: 'A5', // paper size.
  theme: '@vivliostyle/theme-techbook', // .css or local dir or npm package. default to undefined.
  // entryContext: './manuscripts', // default to '.' (relative to `vivliostyle.config.js`).
  entry: [
    'entries/index.md',
    'entries/preface.md',
    'entries/intro.md',
    'entries/tips.md',
    'entries/afterword.md',
    'entries/colophon.md'
    // 'glossary.html', // html can be passed.
  ], // `entry` can be `string` or `object` if there's only single markdown file.
  // toc: true, // whether generate and include toc.html or not (does not affect manifest.json), default to `true`. if `string` given, use it as a custom toc.html.
  cover: './cover.png', // cover image. default to undefined.
  // workDir: './dist', // default to `.vivliostyle`.
}

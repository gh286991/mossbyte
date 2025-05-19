// eslint-disable-next-line @typescript-eslint/no-require-imports
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
});
module.exports = withMDX({
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
}); 
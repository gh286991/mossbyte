// eslint-disable-next-line @typescript-eslint/no-require-imports
const withMDX = require('@next/mdx')();
module.exports = withMDX({
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
}); 
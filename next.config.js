// 判斷是否為生產環境
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'mossbyte'; // 修改為你的 GitHub 儲存庫名稱

module.exports = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  // 生產環境才啟用 basePath，開發環境保持空值
  assetPrefix: isProd ? `/${repoName}` : '',
  basePath: isProd ? `/${repoName}` : '',
};
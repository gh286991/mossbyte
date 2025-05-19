// 判斷是否為生產環境
const isProd = process.env.NODE_ENV === 'production';
const repoName = 'mossbyte'; // 修改為你的 GitHub 儲存庫名稱

module.exports = {
  output: 'export',
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    unoptimized: true,
  },
  // 生產環境才啟用 basePath，開發環境保持空值
  basePath: isProd ? `/${repoName}` : '',
  // 資源前綴，確保靜態資源能正確載入
  assetPrefix: isProd ? `/${repoName}/` : '/',
};
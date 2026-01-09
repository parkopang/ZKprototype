/**
 * 构建脚本：将 pages/ 目录下的 HTML 文件转换为 JavaScript 对象
 * 使用方法：node build-pages.js
 */

const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'pages');
const outputFile = path.join(__dirname, 'js', 'pages-loader.js');

// 读取 pages 目录下的所有 HTML 文件
const files = fs.readdirSync(pagesDir).filter(file => file.endsWith('.html'));

let content = `/**
 * 页面内容加载器（自动生成）
 * 生成时间：${new Date().toLocaleString('zh-CN')}
 * 
 * 此文件由 build-pages.js 自动生成
 * 如需更新，请运行：node build-pages.js
 */

// 页面内容映射
if (typeof App !== 'undefined') {
    App.pageContents = App.pageContents || {};
    
    // 自动加载的页面内容
    Object.assign(App.pageContents, {
`;

files.forEach(file => {
    const filePath = path.join(pagesDir, file);
    const pageName = path.basename(file, '.html');
    const htmlContent = fs.readFileSync(filePath, 'utf-8');
    
    // 转义特殊字符
    const escapedContent = htmlContent
        .replace(/\\/g, '\\\\')
        .replace(/`/g, '\\`')
        .replace(/\${/g, '\\${');
    
    content += `        '${pageName}': \`${escapedContent}\`,\n`;
});

content += `    });
}
`;

// 写入文件
fs.writeFileSync(outputFile, content, 'utf-8');
console.log(`✅ 已生成 ${files.length} 个页面的内容映射到 ${outputFile}`);

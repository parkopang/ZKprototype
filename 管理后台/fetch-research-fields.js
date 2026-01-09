/**
 * 从沁言学术网站获取研究领域数据的脚本
 * 通过API调用获取所有一级、二级、三级研究领域数据
 */

const https = require('https');
const http = require('http');

// 基础API URL
const BASE_URL = 'app.qinyanai.com';
const API_PATH = '/api/knowledge/dict/dict_query/';

/**
 * 发送HTTP请求
 */
function makeRequest(url, options = {}) {
    return new Promise((resolve, reject) => {
        const urlObj = new URL(url);
        const protocol = urlObj.protocol === 'https:' ? https : http;
        
        const requestOptions = {
            hostname: urlObj.hostname,
            path: urlObj.pathname + urlObj.search,
            method: options.method || 'GET',
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36',
                ...options.headers
            }
        };

        const req = protocol.request(requestOptions, (res) => {
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                try {
                    const jsonData = JSON.parse(data);
                    resolve(jsonData);
                } catch (e) {
                    resolve({ error: 'Invalid JSON', raw: data });
                }
            });
        });

        req.on('error', (error) => {
            reject(error);
        });

        req.end();
    });
}

/**
 * 尝试获取研究领域数据
 */
async function fetchResearchFields() {
    console.log('开始获取研究领域数据...\n');

    const results = {
        level1: [],
        level2: {},
        level3: {}
    };

    // 方法1: 尝试通过group_id获取一级研究领域
    console.log('方法1: 尝试通过group_id获取一级研究领域...');
    const groupIds = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000];
    
    for (const groupId of groupIds) {
        try {
            const url = `https://${BASE_URL}${API_PATH}?group_id=${groupId}`;
            const data = await makeRequest(url);
            
            if (data.status === 1 && data.data && Array.isArray(data.data)) {
                // 检查是否包含研究领域相关的数据
                const hasResearchField = data.data.some(item => 
                    item.name && (
                        item.name.includes('医学') || 
                        item.name.includes('工学') || 
                        item.name.includes('理学') ||
                        item.name === '医学' ||
                        item.name === '工学' ||
                        item.name === '理学'
                    )
                );
                
                if (hasResearchField) {
                    console.log(`找到研究领域数据 (group_id=${groupId}):`, data.data.map(d => d.name).join(', '));
                    results.level1 = data.data.map(d => d.name);
                    break;
                }
            }
        } catch (error) {
            // 忽略错误，继续尝试
        }
    }

    // 方法2: 尝试通过parent_id获取
    console.log('\n方法2: 尝试通过parent_id获取...');
    for (let parentId = 0; parentId < 10; parentId++) {
        try {
            const url = `https://${BASE_URL}${API_PATH}?parent_id=${parentId}`;
            const data = await makeRequest(url);
            
            if (data.status === 1 && data.data && Array.isArray(data.data) && data.data.length > 0) {
                console.log(`parent_id=${parentId}:`, data.data.map(d => d.name).join(', '));
            }
        } catch (error) {
            // 忽略错误
        }
    }

    // 方法3: 尝试通过dict_id获取子级数据
    console.log('\n方法3: 尝试通过dict_id获取子级数据...');
    // 假设"医学"的dict_id可能是某个值，尝试查找
    for (let dictId = 1; dictId < 50; dictId++) {
        try {
            const url = `https://${BASE_URL}${API_PATH}?dict_id=${dictId}`;
            const data = await makeRequest(url);
            
            if (data.status === 1 && data.data && Array.isArray(data.data) && data.data.length > 0) {
                console.log(`dict_id=${dictId}:`, data.data.map(d => d.name).join(', '));
            }
        } catch (error) {
            // 忽略错误
        }
    }

    // 方法4: 尝试获取所有字典数据
    console.log('\n方法4: 尝试获取所有字典数据...');
    try {
        const url = `https://${BASE_URL}${API_PATH}`;
        const data = await makeRequest(url);
        console.log('所有字典数据:', JSON.stringify(data, null, 2));
    } catch (error) {
        console.log('获取所有字典数据失败:', error.message);
    }

    return results;
}

/**
 * 主函数
 */
async function main() {
    try {
        const results = await fetchResearchFields();
        console.log('\n=== 获取结果 ===');
        console.log(JSON.stringify(results, null, 2));
    } catch (error) {
        console.error('错误:', error);
    }
}

// 运行脚本
if (require.main === module) {
    main();
}

module.exports = { fetchResearchFields, makeRequest };

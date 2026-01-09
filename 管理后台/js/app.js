/**
 * iMDT 管理平台 - 主应用逻辑
 * 负责页面路由、动态加载、Tab管理等功能
 */

// 页面路由和Tab管理
const App = {
    // 页面映射表（页面ID -> 显示标题）
    pageTitles: {
        'home': '首页',
        'contract-verification': '合同审核列表',
        'contract-template': '合同模板',
        'organization': '机构信息',
        'project': '项目信息',
        'sys-account': '账号管理',
        'sys-role': '角色管理',
        'sys-menu': '菜单管理',
        'sys-permission-group': '权限组管理',
        'sys-disease': '病种管理',
        'master-region': '区域管理',
        'master-hospital': '医院管理',
        'master-department': '科室管理',
        'master-title': '职称管理',
        'master-tag': '系统标签管理',
        'doctor-library': '医生信息库',
        'bi-config': 'BI配置',
        'wechat-website': '公众号网站管理',
        'application-consultation': '会诊申请',
        'application-cooperation': '合作申请',
        'application-settlement': '入驻申请',
        'application-register': '注册申请',
        'form-library': '表单库',
        'image-recognition': '图像识别管理',
        'followup': '随访管理',
        'activity': '活动管理',
        'activity-user': '活动用户管理',
        'activity-topic': '活动专题管理',
        'activity-data': '活动数据列表',
        'activity-analysis': '活动运营分析',
        'quality-control': '质控评分管理',
        'research-ai-selection': 'AI 选题',
        'research-literature-search': '文献检索',
        'research-literature-reading': '文献阅读',
        'research-academic-qa': '学术问答',
        'research-assistant-writing': '辅助写作',
        'research-ai-cloud': 'AI 云盘',
        'research-text-polish': '文本润色'
    },

    /**
     * 显示指定页面
     * @param {string} pageName - 页面ID
     * @param {string} title - 页面标题（可选，默认使用映射表）
     */
    showPage(pageName, title) {
        const displayTitle = title || this.pageTitles[pageName] || pageName;
        
        // 检查页面是否已存在
        let pageElement = document.getElementById(`page-${pageName}`);
        
        if (!pageElement) {
            // 创建新的页面容器
            pageElement = document.createElement('div');
            pageElement.id = `page-${pageName}`;
            pageElement.className = 'page-content';
            pageElement.innerHTML = '<div class="loading-spinner">加载中...</div>';
            
            document.querySelector('.content-panel').appendChild(pageElement);
            
            // 动态加载页面内容
            this.loadPageContent(pageName, pageElement);
        }
        
        // 切换到该页面
        document.querySelectorAll('.page-content').forEach(page => {
            page.classList.remove('active');
        });
        pageElement.classList.add('active');
        
        // 更新Tab
        this.updateTab(pageName, displayTitle);
        
        // 更新菜单激活状态
        this.updateMenuActive(pageName);
    },

    /**
     * 页面内容映射（避免fetch CORS问题）
     * 页面内容可以从 pages/ 目录下的文件加载，或直接在这里定义
     */
    pageContents: {
        // 首页内容已内联到 HTML 中，不需要在这里定义
        // 其他页面内容可以在这里预定义，或通过文件加载
    },

    /**
     * 动态加载页面内容
     * @param {string} pageName - 页面ID
     * @param {HTMLElement} container - 页面容器元素
     */
    loadPageContent(pageName, container) {
        const isFileProtocol = window.location.protocol === 'file:';

        // 本地直接 file:// 打开时，统一用 iframe 嵌入对应的静态原型页面，避免 CORS 和 XHR 限制
        if (isFileProtocol) {
            container.innerHTML = `
                <iframe 
                    src="pages/${pageName}.html" 
                    class="embedded-page-frame" 
                    frameborder="0"
                ></iframe>
            `;
            return;
        }

        // 非 file:// 场景（如挂到本地/线上静态服务器），使用 XMLHttpRequest 同步加载
        try {
            const xhr = new XMLHttpRequest();
            xhr.open('GET', `pages/${pageName}.html`, false); // 同步请求
            xhr.send(null);
            
            if (xhr.status === 200) {
                const html = xhr.responseText;
                container.innerHTML = html;
                
                // 执行页面内容中的script标签（innerHTML不会自动执行script）
                const scripts = container.querySelectorAll('script');
                scripts.forEach(script => {
                    const newScript = document.createElement('script');
                    if (script.src) {
                        newScript.src = script.src;
                    } else {
                        newScript.textContent = script.textContent;
                    }
                    document.body.appendChild(newScript);
                    document.body.removeChild(newScript);
                });
            } else {
                this.showPageNotFound(container, pageName);
            }
        } catch (error) {
            console.warn(`无法加载页面 ${pageName}:`, error);
            this.showPageNotFound(container, pageName, error);
        }
    },

    /**
     * 显示页面未找到提示
     */
    showPageNotFound(container, pageName, error = null) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-icon">📄</div>
                <div class="empty-text">页面开发中</div>
                <div class="empty-desc">
                    <p>页面 "${this.pageTitles[pageName] || pageName}" 正在开发中...</p>
                    <p style="margin-top: 12px; font-size: 12px; color: #999;">
                        提示：页面文件 pages/${pageName}.html 不存在或无法加载。<br>
                        如需从文件加载页面，请使用本地服务器运行（如：python -m http.server 8000）
                    </p>
                </div>
            </div>
        `;
    },

    /**
     * 更新Tab标签
     * @param {string} pageName - 页面ID
     * @param {string} title - 页面标题
     */
    updateTab(pageName, title) {
        const tabBar = document.getElementById('tabBar');
        // 使用 data-tab 属性查找，而不是 id
        let tabElement = Array.from(document.querySelectorAll('.tab-item')).find(
            tab => tab.dataset.tab === pageName
        );
        
        if (!tabElement) {
            // 创建新Tab
            tabElement = document.createElement('div');
            tabElement.className = 'tab-item';
            tabElement.dataset.tab = pageName;
            tabElement.innerHTML = `
                <span>${title}</span>
                <span class="tab-close">×</span>
            `;
            
            // 绑定关闭事件（首页不允许关闭）
            if (pageName !== 'home') {
                tabElement.querySelector('.tab-close').addEventListener('click', (e) => {
                    e.stopPropagation();
                    this.closeTab(pageName);
                });
            } else {
                // 首页隐藏关闭按钮
                tabElement.querySelector('.tab-close').style.display = 'none';
            }
            
            // Tab 点击切换页面
            tabElement.addEventListener('click', () => {
                this.showPage(pageName);
            });
            
            tabBar.appendChild(tabElement);
        }
        
        // 激活该Tab
        document.querySelectorAll('.tab-item').forEach(tab => {
            tab.classList.remove('active');
        });
        tabElement.classList.add('active');
    },

    /**
     * 关闭Tab
     * @param {string} pageName - 页面ID
     */
    closeTab(pageName) {
        const tabElement = document.querySelector(`[data-tab="${pageName}"]`);
        const pageElement = document.getElementById(`page-${pageName}`);
        
        if (tabElement && pageElement) {
            // 如果关闭的是当前激活的Tab，切换到其他Tab
            if (tabElement.classList.contains('active')) {
                const tabs = Array.from(document.querySelectorAll('.tab-item')).filter(
                    tab => tab !== tabElement
                );
                if (tabs.length > 0) {
                    const nextTab = tabs[tabs.length - 1];
                    const nextPageName = nextTab.dataset.tab;
                    this.showPage(nextPageName);
                } else {
                    // 如果没有其他Tab了，显示首页
                    this.showPage('home');
                }
            }
            
            // 移除Tab和页面
            tabElement.remove();
            pageElement.remove();
        }
    },

    /**
     * 更新菜单激活状态
     * @param {string} pageName - 页面ID
     */
    updateMenuActive(pageName) {
        document.querySelectorAll('.menu-item').forEach(item => {
            item.classList.remove('active');
            if (item.dataset.page === pageName) {
                item.classList.add('active');
            }
        });
    }
};

// 菜单相关功能
function toggleSubmenu(element) {
    const submenu = element.nextElementSibling;
    if (submenu && submenu.classList.contains('submenu')) {
        const isExpanded = submenu.style.display !== 'none';
        submenu.style.display = isExpanded ? 'none' : 'block';
        const arrow = element.querySelector('.submenu-arrow');
        if (arrow) {
            arrow.textContent = isExpanded ? '▼' : '▲';
        }
    }
}

// 全局函数：显示页面（兼容旧代码）
function showPage(pageName, title) {
    App.showPage(pageName, title);
}

// 用户下拉菜单
document.addEventListener('DOMContentLoaded', function() {
    const userDropdown = document.getElementById('userInfoDropdown');
    const dropdownMenu = document.getElementById('userDropdownMenu');
    
    if (userDropdown) {
        userDropdown.addEventListener('click', function(e) {
            e.stopPropagation();
            if (dropdownMenu) {
                dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none';
            }
        });
    }
    
    // 点击外部关闭下拉菜单
    document.addEventListener('click', function() {
        if (dropdownMenu) {
            dropdownMenu.style.display = 'none';
        }
    });
    
    // 菜单项点击事件
    document.querySelectorAll('.menu-item[data-page]').forEach(item => {
        item.addEventListener('click', function(e) {
            if (!this.classList.contains('has-submenu')) {
                const pageName = this.dataset.page;
                if (pageName) {
                    showPage(pageName);
                }
            }
        });
    });
    
    // 外部链接处理（包括子菜单项）
    document.querySelectorAll('.menu-item.external-link').forEach(item => {
        item.addEventListener('click', function(e) {
            e.stopPropagation(); // 阻止事件冒泡
            const url = this.dataset.url;
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
    
    // 初始化显示首页
    App.showPage('home');
});

// 工具函数
function showNotifications() {
    alert('通知功能开发中...');
}

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    } else {
        document.exitFullscreen();
    }
}

function showPersonalCenter() {
    alert('个人中心功能开发中...');
}

function logout() {
    if (confirm('确定要退出登录吗？')) {
        alert('已退出登录');
        // 实际应用中应该跳转到登录页
    }
}

// ===== 通用工具函数 =====

/**
 * 显示详情页面（用于模态框或抽屉）
 */
function showDetailPage(pageId, title, content) {
    // 检查页面是否已存在
    let page = document.getElementById(pageId);
    if (!page) {
        // 创建新页面
        page = document.createElement('div');
        page.id = pageId;
        page.className = 'page-content';
        page.innerHTML = `
            <div class="breadcrumb">
                <a href="#" onclick="showPage('home'); return false;">首页</a> / ${title}
            </div>
            ${content}
        `;
        document.querySelector('.content-panel').appendChild(page);
    }
    
    // 显示页面
    document.querySelectorAll('.page-content').forEach(p => p.classList.remove('active'));
    page.classList.add('active');
    
    // 更新Tab
    const shortTitle = title.length > 10 ? title.substring(0, 10) + '...' : title;
    if (typeof App !== 'undefined' && App.showPage) {
        App.showPage(pageId, shortTitle);
    }
}

/**
 * 关闭表头设置
 */
function closeTableSettings(tableName) {
    const tooltip = document.getElementById(`${tableName}TableSettings`);
    if (tooltip) {
        tooltip.style.display = 'none';
    }
}

/**
 * 切换表头字段显示/隐藏
 */
function toggleTableField(tableName, fieldName, checked) {
    // 实际应用中应该保存用户偏好设置
    console.log(`表 ${tableName} 的字段 ${fieldName} ${checked ? '显示' : '隐藏'}`);
}

/**
 * 筛选表头字段
 */
function filterTableFields(tableName, searchText) {
    const fieldList = document.getElementById(`${tableName}FieldList`);
    if (!fieldList) return;
    
    const items = fieldList.querySelectorAll('.field-item');
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(searchText.toLowerCase())) {
            item.style.display = '';
        } else {
            item.style.display = 'none';
        }
    });
}

/**
 * 切换表头设置显示
 */
function toggleTableSettings(tableName, button) {
    const tooltip = document.getElementById(`${tableName}TableSettings`);
    if (tooltip) {
        const isVisible = tooltip.style.display !== 'none';
        tooltip.style.display = isVisible ? 'none' : 'block';
        
        // 定位到按钮下方
        if (!isVisible) {
            const rect = button.getBoundingClientRect();
            tooltip.style.top = (rect.bottom + 8) + 'px';
            tooltip.style.right = (window.innerWidth - rect.right) + 'px';
        }
    }
}

// ===== 合同审核列表相关函数 =====

function toggleContractVerificationFilter() {
    const panel = document.getElementById('contract-verification-filter-panel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' || panel.style.display === '' ? 'block' : 'none';
    }
}

function resetContractVerificationFilter() {
    const panel = document.getElementById('contract-verification-filter-panel');
    if (!panel) return;
    panel.querySelectorAll('input').forEach(i => i.value = '');
    panel.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
}

function applyContractVerificationFilter() {
    alert('已按当前条件筛选（原型示意）');
}

function exportContractVerification() {
    alert('正在导出审核列表（原型示意）');
}

function previewContractVerification(id) {
    showDetailPage('page-contract-preview-' + id, '合同预览', `
        <div class="form-container">
            <div class="form-section">
                <div class="form-title">合同信息</div>
                <div class="form-grid">
                    <div class="form-group"><label class="form-label">模板名称</label><div>青蓝之约劳务协议-20251218</div></div>
                    <div class="form-group"><label class="form-label">专家名字</label><div>测试</div></div>
                    <div class="form-group"><label class="form-label">状态</label><div><span class="status-tag">未审核</span></div></div>
                </div>
            </div>
            <div class="form-actions">
                <button class="btn btn-default" onclick="showPage('contract-verification')">返回</button>
                <button class="btn btn-primary" onclick="auditContractVerification(${id})">审核</button>
            </div>
        </div>
    `);
}

function auditContractVerification(id) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content" style="width: 500px;">
            <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
            <div class="form-title">审核合同</div>
            <div class="form-group">
                <label class="form-label">审核结果</label>
                <select class="form-input">
                    <option>审核通过</option>
                    <option>审核拒绝</option>
                </select>
            </div>
            <div class="form-group">
                <label class="form-label">审核意见</label>
                <textarea class="form-input" rows="4" placeholder="请输入审核意见"></textarea>
            </div>
            <div class="form-actions">
                <button class="btn btn-default" onclick="this.closest('.modal-overlay').remove()">取消</button>
                <button class="btn btn-primary" onclick="alert('审核完成（原型示意）'); this.closest('.modal-overlay').remove(); showPage('contract-verification');">确定</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) { if (e.target === modal) modal.remove(); });
}

function bindDoctorContractVerification(id) {
    const modal = document.createElement('div');
    modal.className = 'modal-overlay';
    modal.innerHTML = `
        <div class="modal-content" style="width: 500px;">
            <button class="modal-close" onclick="this.closest('.modal-overlay').remove()">×</button>
            <div class="form-title">绑定医生</div>
            <div class="form-group">
                <label class="form-label">选择医生</label>
                <select class="form-input">
                    <option>请选择医生</option>
                    <option>张医生 - 江苏省人民医院</option>
                    <option>李医生 - 南京医科大学第一附属医院</option>
                </select>
            </div>
            <div class="form-actions">
                <button class="btn btn-default" onclick="this.closest('.modal-overlay').remove()">取消</button>
                <button class="btn btn-primary" onclick="alert('绑定成功（原型示意）'); this.closest('.modal-overlay').remove();">确定</button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);
    modal.addEventListener('click', function(e) { if (e.target === modal) modal.remove(); });
}

function viewContractVerification(id) {
    previewContractVerification(id);
}

// ===== 合同模板相关函数 =====

function toggleContractTemplateFilter() {
    const panel = document.getElementById('contract-template-filter-panel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' || panel.style.display === '' ? 'block' : 'none';
    }
}

function showCreateContractTemplateForm() {
    showDetailPage('page-create-contract-template', '创建合同模板', `
        <div class="form-container">
            <div class="form-section">
                <div class="form-title">基本信息</div>
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">模板名称</label>
                        <input type="text" class="form-input" placeholder="请输入模板名称">
                    </div>
                    <div class="form-group">
                        <label class="form-label">模板类型</label>
                        <select class="form-input">
                            <option>劳务协议</option>
                            <option>交流协议</option>
                            <option>合作协议</option>
                        </select>
                    </div>
                </div>
                <div class="form-group">
                    <label class="form-label">模板内容</label>
                    <textarea class="form-input" rows="10" placeholder="请输入合同模板内容"></textarea>
                </div>
            </div>
            <div class="form-actions">
                <button class="btn btn-default" onclick="showPage('contract-template')">取消</button>
                <button class="btn btn-primary" onclick="alert('模板已保存（原型示意）'); showPage('contract-template');">保存</button>
            </div>
        </div>
    `);
}

function viewContractTemplate(id) {
    showDetailPage('page-view-contract-template-' + id, '合同模板详情', `
        <div class="form-container">
            <div class="form-section">
                <div class="form-title">模板信息</div>
                <div class="form-grid">
                    <div class="form-group"><label class="form-label">模板名称</label><div>青蓝之约劳务协议</div></div>
                    <div class="form-group"><label class="form-label">模板类型</label><div>劳务协议</div></div>
                    <div class="form-group"><label class="form-label">创建时间</label><div>2025-12-18 10:30</div></div>
                </div>
                <div class="form-group">
                    <label class="form-label">模板内容</label>
                    <div style="background:#fafafa;padding:16px;border-radius:8px;font-size:14px;color:#666;line-height:1.6;">
                        合同模板内容预览...
                    </div>
                </div>
            </div>
            <div class="form-actions">
                <button class="btn btn-default" onclick="showPage('contract-template')">返回</button>
                <button class="btn btn-primary" onclick="editContractTemplate(${id})">编辑</button>
            </div>
        </div>
    `);
}

function editContractTemplate(id) {
    showCreateContractTemplateForm();
}

function deleteContractTemplate(id) {
    if (confirm('确定要删除该合同模板吗？')) {
        alert('模板已删除（原型示意）');
    }
}

// ===== 机构管理相关函数 =====

function toggleOrganizationFilter() {
    const panel = document.getElementById('organization-filter-panel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' || panel.style.display === '' ? 'block' : 'none';
    }
}

function resetOrganizationFilter() {
    const panel = document.getElementById('organization-filter-panel');
    if (!panel) return;
    panel.querySelectorAll('input').forEach(i => i.value = '');
    panel.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
}

function applyOrganizationFilter() {
    alert('已按当前条件筛选（原型示意）');
}

function showCreateOrganizationForm() {
    showDetailPage('page-create-organization', '创建机构', `
        <div class="form-container">
            <div class="form-section">
                <div class="form-title">基本信息</div>
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">机构名称</label>
                        <input type="text" class="form-input" placeholder="请输入机构名称">
                    </div>
                    <div class="form-group">
                        <label class="form-label">机构负责人</label>
                        <input type="text" class="form-input" placeholder="请输入负责人姓名">
                    </div>
                    <div class="form-group">
                        <label class="form-label">联系电话</label>
                        <input type="text" class="form-input" placeholder="请输入联系电话">
                    </div>
                    <div class="form-group">
                        <label class="form-label">机构地址</label>
                        <input type="text" class="form-input" placeholder="请输入机构地址">
                    </div>
                </div>
            </div>
            <div class="form-actions">
                <button class="btn btn-default" onclick="showPage('organization')">取消</button>
                <button class="btn btn-primary" onclick="alert('机构已创建（原型示意）'); showPage('organization');">保存</button>
            </div>
        </div>
    `);
}

function viewOrganizationDetail(id) {
    showDetailPage('page-view-organization-' + id, '机构详情', `
        <div class="form-container">
            <div class="form-section">
                <div class="form-title">基本信息</div>
                <div class="form-grid">
                    <div class="form-group"><label class="form-label">机构名称</label><div>ah测试机构</div></div>
                    <div class="form-group"><label class="form-label">机构负责人</label><div>安徽测试负责人</div></div>
                    <div class="form-group"><label class="form-label">联系电话</label><div>13800138000</div></div>
                    <div class="form-group"><label class="form-label">机构地址</label><div>安徽省合肥市</div></div>
                    <div class="form-group"><label class="form-label">创建时间</label><div>2025-10-11 14:43:45</div></div>
                </div>
            </div>
            <div class="form-actions">
                <button class="btn btn-default" onclick="showPage('organization')">返回</button>
                <button class="btn btn-primary" onclick="editOrganization(${id})">编辑</button>
            </div>
        </div>
    `);
}

function editOrganization(id) {
    showCreateOrganizationForm();
}

function deleteOrganization(id) {
    if (confirm('确定要删除该机构吗？')) {
        alert('机构已删除（原型示意）');
    }
}

// ===== 项目信息相关函数 =====

function toggleProjectFilter() {
    const panel = document.getElementById('project-filter-panel');
    if (panel) {
        panel.style.display = panel.style.display === 'none' || panel.style.display === '' ? 'block' : 'none';
    }
}

function showCreateProjectForm() {
    showDetailPage('page-create-project', '创建项目', `
        <div class="form-container">
            <div class="form-section">
                <div class="form-title">基本信息</div>
                <div class="form-grid">
                    <div class="form-group">
                        <label class="form-label">项目名称</label>
                        <input type="text" class="form-input" placeholder="请输入项目名称">
                    </div>
                    <div class="form-group">
                        <label class="form-label">所属机构</label>
                        <select class="form-input">
                            <option>请选择机构</option>
                            <option>江苏省人民医院</option>
                            <option>南京医科大学第一附属医院</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label class="form-label">项目类型</label>
                        <select class="form-input">
                            <option>MDT项目</option>
                            <option>联合病房</option>
                            <option>推广项目</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-actions">
                <button class="btn btn-default" onclick="showPage('project')">取消</button>
                <button class="btn btn-primary" onclick="alert('项目已创建（原型示意）'); showPage('project');">保存</button>
            </div>
        </div>
    `);
}

function viewProjectDetail(id) {
    showDetailPage('page-view-project-' + id, '项目详情', `
        <div class="form-container">
            <div class="form-section">
                <div class="form-title">项目信息</div>
                <div class="form-grid">
                    <div class="form-group"><label class="form-label">项目名称</label><div>乳腺癌MDT项目</div></div>
                    <div class="form-group"><label class="form-label">所属机构</label><div>江苏省人民医院</div></div>
                    <div class="form-group"><label class="form-label">项目类型</label><div>MDT项目</div></div>
                </div>
            </div>
            <div class="form-actions">
                <button class="btn btn-default" onclick="showPage('project')">返回</button>
                <button class="btn btn-primary" onclick="editProject(${id})">编辑</button>
            </div>
        </div>
    `);
}

function editProject(id) {
    showCreateProjectForm();
}

function deleteProject(id) {
    if (confirm('确定要删除该项目吗？')) {
        alert('项目已删除（原型示意）');
    }
}

// ===== 系统管理相关函数 =====

// 账号管理
function toggleSysAccountFilter() {
    const panel = document.getElementById('sys-account-filter-panel');
    if (panel) panel.style.display = panel.style.display === 'none' || panel.style.display === '' ? 'block' : 'none';
}

function resetSysAccountFilter() {
    const panel = document.getElementById('sys-account-filter-panel');
    if (!panel) return;
    panel.querySelectorAll('input').forEach(i => i.value = '');
    panel.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
}

function applySysAccountFilter() {
    alert('已按当前条件筛选（原型示意）');
}

function showCreateSysAccountForm() {
    showDetailPage('page-create-sys-account', '创建账号', `
        <div class="form-container">
            <div class="form-section">
                <div class="form-title">账号信息</div>
                <div class="form-grid">
                    <div class="form-group"><label class="form-label">账号</label><input class="form-input" placeholder="请输入账号"></div>
                    <div class="form-group"><label class="form-label">真实姓名</label><input class="form-input" placeholder="请输入姓名"></div>
                    <div class="form-group"><label class="form-label">角色</label><input class="form-input" placeholder="请输入角色"></div>
                    <div class="form-group"><label class="form-label">手机号</label><input class="form-input" placeholder="请输入手机号"></div>
                </div>
            </div>
            <div class="form-actions">
                <button class="btn btn-default" onclick="showPage('sys-account')">取消</button>
                <button class="btn btn-primary" onclick="alert('账号已创建（原型示意）'); showPage('sys-account');">保存</button>
            </div>
        </div>
    `);
}

function disableSysAccount(id) {
    alert('账号已禁用（原型示意）');
}

function editSysAccount(id) {
    showCreateSysAccountForm();
}

function removeSysAccount(id) {
    if (confirm('确定要移除该账号吗？')) {
        alert('账号已移除（原型示意）');
    }
}

// 角色管理
function toggleSysRoleFilter() {
    const panel = document.getElementById('sys-role-filter-panel');
    if (panel) panel.style.display = panel.style.display === 'none' || panel.style.display === '' ? 'block' : 'none';
}

function resetSysRoleFilter() {
    const panel = document.getElementById('sys-role-filter-panel');
    if (!panel) return;
    panel.querySelectorAll('input').forEach(i => i.value = '');
}

function applySysRoleFilter() {
    alert('已按当前条件筛选（原型示意）');
}

function showCreateSysRoleForm() {
    showDetailPage('page-create-sys-role', '创建角色', `
        <div class="form-container">
            <div class="form-section">
                <div class="form-title">角色信息</div>
                <div class="form-grid">
                    <div class="form-group"><label class="form-label">角色名称</label><input class="form-input" placeholder="请输入角色名称"></div>
                    <div class="form-group"><label class="form-label">角色编码</label><input class="form-input" placeholder="请输入角色编码"></div>
                </div>
                <div class="form-group">
                    <label class="form-label">角色描述</label>
                    <textarea class="form-input" rows="4" placeholder="请输入角色描述"></textarea>
                </div>
            </div>
            <div class="form-actions">
                <button class="btn btn-default" onclick="showPage('sys-role')">取消</button>
                <button class="btn btn-primary" onclick="alert('角色已创建（原型示意）'); showPage('sys-role');">保存</button>
            </div>
        </div>
    `);
}

function bindSysRole(id) {
    alert('绑定功能（原型示意）');
}

function viewSysRole(id) {
    alert('查看角色详情（原型示意）');
}

function editSysRole(id) {
    showCreateSysRoleForm();
}

function deleteSysRole(id) {
    if (confirm('确定删除该角色吗？')) {
        alert('角色已删除（原型示意）');
    }
}

// 菜单管理
function toggleSysMenuFilter() {
    const panel = document.getElementById('sys-menu-filter-panel');
    if (panel) panel.style.display = panel.style.display === 'none' || panel.style.display === '' ? 'block' : 'none';
}

function resetSysMenuFilter() {
    const panel = document.getElementById('sys-menu-filter-panel');
    if (!panel) return;
    panel.querySelectorAll('input').forEach(i => i.value = '');
    panel.querySelectorAll('select').forEach(s => s.selectedIndex = 0);
}

function applySysMenuFilter() {
    alert('已按当前条件筛选（原型示意）');
}

function showCreateSysMenuForm() {
    showDetailPage('page-create-sys-menu', '创建菜单', `
        <div class="form-container">
            <div class="form-section">
                <div class="form-title">菜单信息</div>
                <div class="form-grid">
                    <div class="form-group"><label class="form-label">菜单名称</label><input class="form-input" placeholder="请输入菜单名称"></div>
                    <div class="form-group"><label class="form-label">菜单编码</label><input class="form-input" placeholder="请输入菜单编码"></div>
                    <div class="form-group"><label class="form-label">菜单级别</label><select class="form-input"><option>一级</option><option>二级</option><option>三级</option></select></div>
                    <div class="form-group"><label class="form-label">接口url</label><input class="form-input" placeholder="请输入接口url"></div>
                </div>
            </div>
            <div class="form-actions">
                <button class="btn btn-default" onclick="showPage('sys-menu')">取消</button>
                <button class="btn btn-primary" onclick="alert('菜单已创建（原型示意）'); showPage('sys-menu');">保存</button>
            </div>
        </div>
    `);
}

function viewSysMenu(id) {
    alert('查看菜单详情（原型示意）');
}

function editSysMenu(id) {
    showCreateSysMenuForm();
}

function deleteSysMenu(id) {
    if (confirm('确定删除该菜单吗？')) {
        alert('菜单已删除（原型示意）');
    }
}

// 权限组管理
function toggleSysPermissionGroupFilter() {
    const panel = document.getElementById('sys-permission-group-filter-panel');
    if (panel) panel.style.display = panel.style.display === 'none' || panel.style.display === '' ? 'block' : 'none';
}

function resetSysPermissionGroupFilter() {
    const panel = document.getElementById('sys-permission-group-filter-panel');
    if (!panel) return;
    panel.querySelectorAll('input').forEach(i => i.value = '');
}

function applySysPermissionGroupFilter() {
    alert('已按当前条件筛选（原型示意）');
}

function showCreateSysPermissionGroupForm() {
    showDetailPage('page-create-sys-permission-group', '新增权限组', `
        <div class="form-container">
            <div class="form-section">
                <div class="form-title">权限组信息</div>
                <div class="form-grid">
                    <div class="form-group"><label class="form-label">权限组名称</label><input class="form-input" placeholder="请输入权限组名称"></div>
                    <div class="form-group"><label class="form-label">描述</label><input class="form-input" placeholder="请输入描述"></div>
                </div>
            </div>
            <div class="form-actions">
                <button class="btn btn-default" onclick="showPage('sys-permission-group')">取消</button>
                <button class="btn btn-primary" onclick="alert('权限组已创建（原型示意）'); showPage('sys-permission-group');">保存</button>
            </div>
        </div>
    `);
}

function editSysPermissionGroup(id) {
    showCreateSysPermissionGroupForm();
}

function deleteSysPermissionGroup(id) {
    if (confirm('确定删除该权限组吗？')) {
        alert('权限组已删除（原型示意）');
    }
}

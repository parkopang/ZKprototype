/**
 * 页面内容加载器（自动生成）
 * 生成时间：2026/1/9 10:44:42
 * 
 * 此文件由 build-pages.js 自动生成
 * 如需更新，请运行：node build-pages.js
 */

// 页面内容映射
if (typeof App !== 'undefined') {
    App.pageContents = App.pageContents || {};
    
    // 自动加载的页面内容
    Object.assign(App.pageContents, {
        'contract-template': `<!-- 合同模板页面 -->
<div class="breadcrumb">
    <a href="#" onclick="showPage('home'); return false;">首页</a> / 合同模板
</div>
<div class="page-header">
    <div class="page-toolbar">
        <div class="search-box">
            <span>🔍</span>
            <input type="text" placeholder="请输入模板名称" id="contractTemplateSearch">
        </div>
        <button class="toolbar-icon" title="筛选" onclick="toggleContractTemplateFilter()">🔽</button>
        <button class="toolbar-icon" title="设置" onclick="toggleTableSettings('contractTemplate', this)" style="position: relative;">⚙️</button>
        <div id="contractTemplateTableSettings" class="table-settings-tooltip" style="display: none;">
            <div class="table-settings-header">
                <div style="font-weight: 500; font-size: 14px;">表头设置</div>
                <button class="modal-close" onclick="closeTableSettings('contractTemplate')" style="position: static; width: 20px; height: 20px; font-size: 14px;">×</button>
            </div>
            <div style="margin-bottom: 12px;">
                <div class="search-box" style="max-width: 100%;">
                    <span>🔍</span>
                    <input type="text" placeholder="搜索字段" id="contractTemplateFieldSearch" onkeyup="filterTableFields('contractTemplate', this.value)" style="width: 100%;">
                </div>
            </div>
            <div style="max-height: 300px; overflow-y: auto;">
                <div style="font-weight: 500; margin-bottom: 12px; color: #666; font-size: 12px;">显示字段</div>
                <div id="contractTemplateFieldList" style="display: grid; gap: 8px;">
                    <label class="field-item" data-field="序号"><span>序号</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractTemplate', '序号', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="模板名称"><span>模板名称</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractTemplate', '模板名称', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="模板文件"><span>模板文件</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractTemplate', '模板文件', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="表单名称"><span>表单名称</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractTemplate', '表单名称', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="创建时间"><span>创建时间</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractTemplate', '创建时间', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="操作"><span>操作</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractTemplate', '操作', this.checked)"><span class="switch-slider"></span></label></label>
                </div>
            </div>
        </div>
        <button class="create-btn" onclick="showCreateContractTemplateForm()">
            <span>➕</span>
            <span>新增模板</span>
        </button>
    </div>
</div>
<div class="table-container">
    <table class="data-table">
        <thead>
            <tr>
                <th>序号</th>
                <th>模板名称</th>
                <th>模板文件</th>
                <th>表单名称</th>
                <th>创建时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>东方胃肠劳务协议-20251230</td>
                <td>东方胃肠劳务协议-20251230.docx</td>
                <td>东方胃肠劳务协议字段-20251230</td>
                <td>2025-12-31 10:44:02</td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="previewContractTemplate(1)">预览</a>
                        <a class="action-link" onclick="downloadContractTemplate(1)">下载</a>
                        <a class="action-link" onclick="editContractTemplate(1)">修改</a>
                        <a class="action-link" onclick="getContractTemplateLink(1)">获取链接</a>
                        <a class="action-link danger" onclick="deleteContractTemplate(1)">删除</a>
                    </div>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>青蓝之约劳务协议-20251218</td>
                <td>青蓝之约劳务协议-20251218.docx</td>
                <td>青蓝之约劳务协议字段-20251218</td>
                <td>2025-12-18 16:28:39</td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="previewContractTemplate(2)">预览</a>
                        <a class="action-link" onclick="downloadContractTemplate(2)">下载</a>
                        <a class="action-link" onclick="editContractTemplate(2)">修改</a>
                        <a class="action-link" onclick="getContractTemplateLink(2)">获取链接</a>
                        <a class="action-link danger" onclick="deleteContractTemplate(2)">删除</a>
                    </div>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td>2025艰难梭菌治疗交流协议-20251215</td>
                <td>2025艰难梭菌治疗交流协议-20251215.docx</td>
                <td>2025艰难梭菌治疗交流协议字段-20251215</td>
                <td>2025-12-15 17:24:01</td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="previewContractTemplate(3)">预览</a>
                        <a class="action-link" onclick="downloadContractTemplate(3)">下载</a>
                        <a class="action-link" onclick="editContractTemplate(3)">修改</a>
                        <a class="action-link" onclick="getContractTemplateLink(3)">获取链接</a>
                        <a class="action-link danger" onclick="deleteContractTemplate(3)">删除</a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div class="pagination">
    <div class="pagination-info">共 19 条数据</div>
    <div class="pagination-controls">
        <button class="pagination-btn" disabled>◀</button>
        <span class="pagination-page active">1</span>
        <span class="pagination-page">2</span>
        <button class="pagination-btn">▶</button>
        <div class="pagination-size">
            <select>
                <option>15 条/页</option>
                <option>30 条/页</option>
            </select>
        </div>
        <div class="pagination-jump">
            <span>跳至</span>
            <input type="text" placeholder="页" style="width: 50px; margin: 0 4px;">
            <span>页</span>
        </div>
    </div>
</div>
`,
        'contract-verification': `<!-- 合同审核列表页面 -->
<div class="breadcrumb">
    <a href="#" onclick="showPage('home'); return false;">首页</a> / 审核列表
</div>
<div class="page-header">
    <div class="page-toolbar">
        <div class="search-box">
            <span>🔍</span>
            <input type="text" placeholder="请输入专家名称" id="contractVerificationSearch">
        </div>
        <button class="toolbar-icon" title="筛选" onclick="toggleContractVerificationFilter()">🔽</button>
        <button class="toolbar-icon" title="设置" onclick="toggleTableSettings('contractVerification', this)" style="position: relative;">⚙️</button>
        <div id="contractVerificationTableSettings" class="table-settings-tooltip" style="display: none;">
            <div class="table-settings-header">
                <div style="font-weight: 500; font-size: 14px;">表头设置</div>
                <button class="modal-close" onclick="closeTableSettings('contractVerification')" style="position: static; width: 20px; height: 20px; font-size: 14px;">×</button>
            </div>
            <div style="margin-bottom: 12px;">
                <div class="search-box" style="max-width: 100%;">
                    <span>🔍</span>
                    <input type="text" placeholder="搜索字段" id="contractVerificationFieldSearch" onkeyup="filterTableFields('contractVerification', this.value)" style="width: 100%;">
                </div>
            </div>
            <div style="max-height: 300px; overflow-y: auto;">
                <div style="font-weight: 500; margin-bottom: 12px; color: #666; font-size: 12px;">显示字段</div>
                <div id="contractVerificationFieldList" style="display: grid; gap: 8px;">
                    <label class="field-item" data-field="序号"><span>序号</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractVerification', '序号', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="模板名称"><span>模板名称</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractVerification', '模板名称', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="专家名字"><span>专家名字</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractVerification', '专家名字', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="状态"><span>状态</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractVerification', '状态', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="是否已绑定医生"><span>是否已绑定医生</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractVerification', '是否已绑定医生', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="职称"><span>职称</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractVerification', '职称', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="单位"><span>单位</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractVerification', '单位', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="手机号码"><span>手机号码</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractVerification', '手机号码', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="身份证号"><span>身份证号</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractVerification', '身份证号', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="银行卡号"><span>银行卡号</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractVerification', '银行卡号', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="开户行信息"><span>开户行信息</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractVerification', '开户行信息', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="提交时间"><span>提交时间</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractVerification', '提交时间', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="操作"><span>操作</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('contractVerification', '操作', this.checked)"><span class="switch-slider"></span></label></label>
                </div>
            </div>
        </div>
        <button class="toolbar-icon" title="下载" onclick="exportContractVerification()">📥</button>
    </div>
</div>
<!-- 筛选面板 -->
<div id="contract-verification-filter-panel" class="filter-panel" style="display: none; background: #fff; padding: 16px; border-radius: 8px; margin-bottom: 16px; border: 1px solid #e8e8e8;">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 16px;">
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">专家名称</label>
            <input type="text" class="form-input" placeholder="请输入专家名称">
        </div>
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">状态</label>
            <select class="form-input">
                <option>全部</option>
                <option>未审核</option>
                <option>审核通过</option>
                <option>审核拒绝</option>
            </select>
        </div>
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">是否已绑定医生</label>
            <select class="form-input">
                <option>全部</option>
                <option>已绑定</option>
                <option>未绑定</option>
            </select>
        </div>
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">提交时间范围</label>
            <div style="display: flex; gap: 8px; align-items: center;">
                <input type="date" class="form-input" style="flex: 1;">
                <span>至</span>
                <input type="date" class="form-input" style="flex: 1;">
            </div>
        </div>
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 12px;">
        <button class="btn btn-default" onclick="resetContractVerificationFilter()">重置</button>
        <button class="btn btn-primary" onclick="applyContractVerificationFilter()">查询</button>
    </div>
</div>
<div class="table-container">
    <table class="data-table">
        <thead>
            <tr>
                <th>序号</th>
                <th>模板名称</th>
                <th>专家名字</th>
                <th>状态</th>
                <th>是否已绑定医生</th>
                <th>职称</th>
                <th>单位</th>
                <th>手机号码</th>
                <th>身份证号</th>
                <th>银行卡号</th>
                <th>开户行信息</th>
                <th>提交时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>青蓝之约劳务协议-20251218</td>
                <td>测试</td>
                <td><span class="status-tag">未审核</span></td>
                <td>未绑定</td>
                <td>测试</td>
                <td>测试</td>
                <td>13570257584</td>
                <td>123456789101112</td>
                <td>22222222</td>
                <td>天河</td>
                <td>2025-12-19 20:06:51</td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="previewContractVerification(1)">预览</a>
                        <a class="action-link" onclick="auditContractVerification(1)">审核</a>
                        <a class="action-link" onclick="bindDoctorContractVerification(1)">绑定</a>
                    </div>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td>2025艰难梭菌治疗交流协议-20251215</td>
                <td>钟楚红</td>
                <td><span class="status-tag">未审核</span></td>
                <td>未绑定</td>
                <td>演员</td>
                <td>香港</td>
                <td>13535239647</td>
                <td>440823199605047845</td>
                <td>6212006425458754</td>
                <td>天河支行</td>
                <td>2025-12-16 15:39:30</td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="previewContractVerification(2)">预览</a>
                        <a class="action-link" onclick="auditContractVerification(2)">审核</a>
                        <a class="action-link" onclick="bindDoctorContractVerification(2)">绑定</a>
                    </div>
                </td>
            </tr>
            <tr>
                <td>11</td>
                <td>和黄医路肠优劳务协议-20250729</td>
                <td>邹测试</td>
                <td><span class="status-tag complete">审核通过</span></td>
                <td>未绑定</td>
                <td>测试</td>
                <td>测试</td>
                <td>13640129681</td>
                <td>440221199403123512</td>
                <td>1</td>
                <td>测试测试</td>
                <td>2025-07-29 20:30:36</td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="previewContractVerification(11)">预览</a>
                        <a class="action-link" onclick="viewContractVerification(11)">查看</a>
                        <a class="action-link" onclick="bindDoctorContractVerification(11)">绑定</a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div class="pagination">
    <div class="pagination-info">共 110 条</div>
    <div class="pagination-controls">
        <button class="pagination-btn" disabled>◀</button>
        <span class="pagination-page active">1</span>
        <span class="pagination-page">2</span>
        <span class="pagination-page">3</span>
        <span class="pagination-page">4</span>
        <span class="pagination-page">5</span>
        <span class="pagination-page">•••</span>
        <span class="pagination-page">8</span>
        <button class="pagination-btn">▶</button>
        <div class="pagination-size">
            <select>
                <option>15 条/页</option>
                <option>30 条/页</option>
                <option>50 条/页</option>
            </select>
        </div>
        <div style="margin-left: 12px; display: flex; align-items: center; gap: 8px;">
            <span>跳至</span>
            <input type="number" style="width: 60px; padding: 4px; border: 1px solid #d9d9d9; border-radius: 4px;">
            <span>页</span>
        </div>
    </div>
</div>
`,
        'home': `<!-- 首页内容 -->
<div class="home-content">
    <h1 class="home-title">Hi，我是iMDT病历智能体</h1>
    <p class="home-desc">我能帮您，快速创建患者档案，并能智能识别、整理病历报告，快速完成资料录入</p>
    <div class="home-actions">
        <button class="action-btn" onclick="alert('新建患者档案功能开发中...')">
            <span>📄</span>
            <span>新建患者档案</span>
        </button>
        <button class="action-btn" onclick="App.showPage('patient')">
            <span>🔍</span>
            <span>检索患者档案</span>
        </button>
    </div>
</div>
`,
        'organization': `<!-- 机构信息页面 -->
<div class="breadcrumb">
    <a href="#" onclick="showPage('home'); return false;">首页</a> / 机构信息
</div>
<div class="page-header">
    <div class="page-toolbar">
        <div class="search-box">
            <span>🔍</span>
            <input type="text" placeholder="请输入机构名称" id="organizationSearch">
        </div>
        <button class="toolbar-icon" title="筛选" onclick="toggleOrganizationFilter()">🔽</button>
        <button class="toolbar-icon" title="设置" onclick="toggleTableSettings('organization', this)" style="position: relative;">⚙️</button>
        <div id="organizationTableSettings" class="table-settings-tooltip" style="display: none;">
            <div class="table-settings-header">
                <div style="font-weight: 500; font-size: 14px;">表头设置</div>
                <button class="modal-close" onclick="closeTableSettings('organization')" style="position: static; width: 20px; height: 20px; font-size: 14px;">×</button>
            </div>
            <div style="margin-bottom: 12px;">
                <div class="search-box" style="max-width: 100%;">
                    <span>🔍</span>
                    <input type="text" placeholder="搜索字段" id="organizationFieldSearch" onkeyup="filterTableFields('organization', this.value)" style="width: 100%;">
                </div>
            </div>
            <div style="max-height: 300px; overflow-y: auto;">
                <div style="font-weight: 500; margin-bottom: 12px; color: #666; font-size: 12px;">显示字段</div>
                <div id="organizationFieldList" style="display: grid; gap: 8px;">
                    <label class="field-item" data-field="序号"><span>序号</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('organization', '序号', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="机构名称"><span>机构名称</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('organization', '机构名称', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="机构负责人"><span>机构负责人</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('organization', '机构负责人', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="创建时间"><span>创建时间</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('organization', '创建时间', this.checked)"><span class="switch-slider"></span></label></label>
                    <label class="field-item" data-field="操作"><span>操作</span><label class="switch"><input type="checkbox" class="field-toggle" checked onchange="toggleTableField('organization', '操作', this.checked)"><span class="switch-slider"></span></label></label>
                </div>
            </div>
        </div>
        <button class="create-btn" onclick="showCreateOrganizationForm()">
            <span>➕</span>
            <span>创建机构</span>
        </button>
    </div>
</div>
<!-- 筛选面板 -->
<div id="organization-filter-panel" class="filter-panel" style="display: none; background: #fff; padding: 16px; border-radius: 8px; margin-bottom: 16px; border: 1px solid #e8e8e8;">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 16px;">
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">机构名称</label>
            <input type="text" class="form-input" placeholder="请输入机构名称">
        </div>
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">机构负责人</label>
            <input type="text" class="form-input" placeholder="请输入负责人姓名">
        </div>
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">创建时间范围</label>
            <div style="display: flex; gap: 8px; align-items: center;">
                <input type="date" class="form-input" style="flex: 1;">
                <span>至</span>
                <input type="date" class="form-input" style="flex: 1;">
            </div>
        </div>
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 12px;">
        <button class="btn btn-default" onclick="resetOrganizationFilter()">重置</button>
        <button class="btn btn-primary" onclick="applyOrganizationFilter()">查询</button>
    </div>
</div>
<div class="table-container">
    <table class="data-table">
        <thead>
            <tr>
                <th>序号</th>
                <th>机构名称</th>
                <th>机构负责人</th>
                <th>创建时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td><a class="action-link" onclick="viewOrganizationDetail(1)" style="text-decoration: none;">ah测试机构</a></td>
                <td>安徽测试负责人</td>
                <td>2025-10-11 14:43:45</td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="viewOrganizationDetail(1)">查看</a>
                        <a class="action-link" onclick="editOrganization(1)">编辑</a>
                        <a class="action-link danger" onclick="deleteOrganization(1)">删除</a>
                    </div>
                </td>
            </tr>
            <tr>
                <td>2</td>
                <td><a class="action-link" onclick="viewOrganizationDetail(2)" style="text-decoration: none;">机构测试2501</a></td>
                <td>机构负责人2501</td>
                <td>2025-08-21 16:21:17</td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="viewOrganizationDetail(2)">查看</a>
                        <a class="action-link" onclick="editOrganization(2)">编辑</a>
                        <a class="action-link danger" onclick="deleteOrganization(2)">删除</a>
                    </div>
                </td>
            </tr>
            <tr>
                <td>3</td>
                <td><a class="action-link" onclick="viewOrganizationDetail(3)" style="text-decoration: none;">结直肠癌机构</a></td>
                <td>金城</td>
                <td>2025-05-29 20:56:55</td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="viewOrganizationDetail(3)">查看</a>
                        <a class="action-link" onclick="editOrganization(3)">编辑</a>
                        <a class="action-link danger" onclick="deleteOrganization(3)">删除</a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div class="pagination">
    <div class="pagination-info">共 58 条</div>
    <div class="pagination-controls">
        <button class="pagination-btn" disabled>◀</button>
        <span class="pagination-page active">1</span>
        <span class="pagination-page">2</span>
        <span class="pagination-page">3</span>
        <span class="pagination-page">4</span>
        <button class="pagination-btn">▶</button>
        <div class="pagination-size">
            <select>
                <option>15 条/页</option>
                <option>30 条/页</option>
                <option>50 条/页</option>
            </select>
        </div>
        <div style="margin-left: 12px; display: flex; align-items: center; gap: 8px;">
            <span>跳至</span>
            <input type="number" style="width: 60px; padding: 4px; border: 1px solid #d9d9d9; border-radius: 4px;">
            <span>页</span>
        </div>
    </div>
</div>
`,
        'project': `<!-- 项目信息页面 -->
<div class="breadcrumb">
    <a href="#" onclick="showPage('home'); return false;">首页</a> / 项目信息
</div>
<div class="page-header">
    <div class="page-toolbar">
        <div class="search-box">
            <span>🔍</span>
            <input type="text" placeholder="请输入项目名称" id="projectSearch">
        </div>
        <button class="toolbar-icon" title="筛选" onclick="toggleProjectFilter()">🔽</button>
        <button class="toolbar-icon" title="设置" onclick="toggleTableSettings('project', this)" style="position: relative;">⚙️</button>
        <button class="create-btn" onclick="showCreateProjectForm()">
            <span>➕</span>
            <span>创建项目</span>
        </button>
    </div>
</div>
<div class="table-container">
    <table class="data-table">
        <thead>
            <tr>
                <th>序号</th>
                <th>项目名称</th>
                <th>所属机构</th>
                <th>项目类型</th>
                <th>创建时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td><a class="action-link" onclick="viewProjectDetail(1)" style="text-decoration: none;">乳腺癌MDT项目</a></td>
                <td>江苏省人民医院</td>
                <td>MDT项目</td>
                <td>2025-01-05 10:30</td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="viewProjectDetail(1)">查看</a>
                        <a class="action-link" onclick="editProject(1)">编辑</a>
                        <a class="action-link danger" onclick="deleteProject(1)">删除</a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div class="pagination">
    <div class="pagination-info">共 15 条</div>
    <div class="pagination-controls">
        <button class="pagination-btn" disabled>◀</button>
        <span class="pagination-page active">1</span>
        <button class="pagination-btn">▶</button>
        <div class="pagination-size">
            <select>
                <option>15 条/页</option>
                <option>30 条/页</option>
            </select>
        </div>
    </div>
</div>
`,
        'research-academic-qa': `<!-- 科研超级智能体：学术问答页面 -->
<div class="academic-qa-page">
    <div class="academic-qa-header">
        <div class="academic-qa-title-section">
            <div class="academic-qa-icon">🎓</div>
            <h1 class="academic-qa-title">学术问答</h1>
        </div>
        <p class="academic-qa-subtitle">学术问答，严谨作答</p>
    </div>
    
    <!-- 问答模式选择器 -->
    <div class="qa-mode-selector">
        <button class="mode-btn" id="modeFullWeb" onclick="switchQAMode('fullweb')">全网</button>
        <button class="mode-btn active" id="modeAcademic" onclick="switchQAMode('academic')">学术</button>
    </div>
    
    <!-- 问题输入区域 -->
    <div class="qa-input-section">
        <div class="qa-input-container">
            <textarea 
                class="qa-input" 
                id="qaQuestionInput"
                placeholder="询问任何问题，提出任何需求"
                rows="4"
            ></textarea>
            <div class="qa-input-actions">
                <button class="qa-action-btn" id="qaVoiceBtn" onclick="startVoiceInput()" title="语音输入">
                    <span>🎤</span>
                </button>
                <button class="qa-action-btn qa-submit-btn" id="qaSubmitBtn" onclick="submitQuestion()" title="提交">
                    <span>→</span>
                </button>
            </div>
        </div>
        
        <!-- 研究模式和模型选择 -->
        <div class="qa-options-bar">
            <button class="qa-option-btn" id="deepResearchBtn" onclick="toggleDeepResearch()">
                <span>深度研究</span>
            </button>
            <div class="qa-model-selector">
                <button class="qa-option-btn" id="modelSelectBtn" onclick="toggleModelDropdown()">
                    <span>标准模型</span>
                    <span class="dropdown-arrow">▼</span>
                </button>
                <div class="model-dropdown" id="modelDropdown" style="display: none;">
                    <div class="model-option" onclick="selectModel('standard')">标准模型</div>
                    <div class="model-option" onclick="selectModel('advanced')">高级模型</div>
                    <div class="model-option" onclick="selectModel('expert')">专家模型</div>
                </div>
            </div>
        </div>
        
        <!-- 学术资源Logo -->
        <div class="academic-resources">
            <div class="resources-label">支持的学术资源：</div>
            <div class="resources-logos">
                <div class="resource-logo" title="PubMed - 生物医学文献数据库">
                    <div class="logo-text">PubMed</div>
                    <div class="logo-url">pubmed.ncbi.nlm.nih.gov</div>
                </div>
                <div class="resource-logo" title="IEEE Xplore - 电子电气工程数据库">
                    <div class="logo-text">IEEE</div>
                    <div class="logo-url">ieeexplore.ieee.org</div>
                </div>
                <div class="resource-logo" title="ACM Digital Library - 计算机科学数据库">
                    <div class="logo-text">ACM</div>
                    <div class="logo-url">dl.acm.org</div>
                </div>
                <div class="resource-logo" title="Science - 科学期刊">
                    <div class="logo-text">Science</div>
                    <div class="logo-url">science.org</div>
                </div>
                <div class="resource-logo" title="Wiley Online Library - 多学科期刊数据库">
                    <div class="logo-text">WILEY</div>
                    <div class="logo-url">onlinelibrary.wiley.com</div>
                </div>
                <div class="resource-logo" title="Springer Nature - 科学出版商">
                    <div class="logo-text">SPRINGER NATURE</div>
                    <div class="logo-url">springernature.com</div>
                </div>
                <div class="resource-logo" title="arXiv - 预印本服务器">
                    <div class="logo-text">arXiv</div>
                    <div class="logo-url">arxiv.org</div>
                </div>
            </div>
            <!-- 研发说明区域 -->
            <div class="dev-notes">
                <div class="dev-notes-title">📌 研发说明：数据来源网站</div>
                <div class="dev-notes-content">
                    <div class="dev-note-item">
                        <strong>PubMed</strong>：https://pubmed.ncbi.nlm.nih.gov/ - 美国国立医学图书馆（NLM）生物医学文献数据库
                    </div>
                    <div class="dev-note-item">
                        <strong>IEEE Xplore</strong>：https://ieeexplore.ieee.org/ - 电气和电子工程师协会全文数据库（电子、电气、计算机、信息技术）
                    </div>
                    <div class="dev-note-item">
                        <strong>ACM Digital Library</strong>：https://dl.acm.org/ - 美国计算机协会数字图书馆（计算机科学期刊、会议论文）
                    </div>
                    <div class="dev-note-item">
                        <strong>Science</strong>：https://www.science.org/ - 美国科学促进会（AAAS）科学期刊
                    </div>
                    <div class="dev-note-item">
                        <strong>Wiley Online Library</strong>：https://onlinelibrary.wiley.com/ - Wiley出版集团在线图书馆（多学科期刊和电子书）
                    </div>
                    <div class="dev-note-item">
                        <strong>Springer Nature</strong>：https://www.springernature.com/ - Springer和Nature合并的全球科学出版商
                    </div>
                    <div class="dev-note-item">
                        <strong>arXiv</strong>：https://arxiv.org/ - 康奈尔大学开放获取预印本服务器（物理、数学、计算机科学）
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 问答历史/结果区域 -->
    <div class="qa-results-section" id="qaResultsSection" style="display: none;">
        <div class="qa-conversation" id="qaConversation">
            <!-- 对话内容将通过JavaScript动态生成 -->
        </div>
    </div>
</div>

<style>
/* 学术问答页面样式 */
.academic-qa-page {
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
}

.academic-qa-header {
    text-align: center;
    margin-bottom: 32px;
}

.academic-qa-title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 8px;
}

.academic-qa-icon {
    font-size: 48px;
}

.academic-qa-title {
    font-size: 36px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
}


.academic-qa-subtitle {
    font-size: 16px;
    color: #666;
    margin: 0;
}

/* 问答模式选择器 */
.qa-mode-selector {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 24px;
}

.mode-btn {
    padding: 8px 24px;
    border: 1px solid #d9d9d9;
    border-radius: 20px;
    background: #fff;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
}

.mode-btn:hover {
    border-color: #1890ff;
    color: #1890ff;
}

.mode-btn.active {
    background: #1890ff;
    border-color: #1890ff;
    color: #fff;
}

/* 问题输入区域 */
.qa-input-section {
    margin-bottom: 32px;
}

.qa-input-container {
    position: relative;
    margin-bottom: 16px;
}

.qa-input {
    width: 100%;
    padding: 16px 80px 16px 16px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    font-size: 16px;
    resize: vertical;
    min-height: 120px;
    font-family: inherit;
    transition: border-color 0.3s;
}

.qa-input:focus {
    outline: none;
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
}

.qa-input-actions {
    position: absolute;
    right: 12px;
    bottom: 12px;
    display: flex;
    gap: 8px;
}

.qa-action-btn {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: #f0f0f0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.3s;
}

.qa-action-btn:hover {
    background: #e0e0e0;
}

.qa-submit-btn {
    background: #1890ff;
    color: #fff;
}

.qa-submit-btn:hover {
    background: #40a9ff;
}

/* 选项栏 */
.qa-options-bar {
    display: flex;
    gap: 12px;
    justify-content: center;
    margin-bottom: 24px;
}

.qa-option-btn {
    padding: 8px 16px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    background: #fff;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s;
}

.qa-option-btn:hover {
    border-color: #1890ff;
    color: #1890ff;
}

.qa-model-selector {
    position: relative;
}

.dropdown-arrow {
    font-size: 10px;
    margin-left: 4px;
}

.model-dropdown {
    position: absolute;
    top: 100%;
    left: 0;
    margin-top: 4px;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    z-index: 100;
    min-width: 120px;
}

.model-option {
    padding: 10px 16px;
    cursor: pointer;
    transition: background 0.2s;
}

.model-option:hover {
    background: #f0f0f0;
}

.model-option:first-child {
    border-radius: 6px 6px 0 0;
}

.model-option:last-child {
    border-radius: 0 0 6px 6px;
}

/* 学术资源Logo */
.academic-resources {
    text-align: center;
}

.resources-label {
    font-size: 14px;
    color: #999;
    margin-bottom: 12px;
}

.resources-logos {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    flex-wrap: wrap;
}

.resource-logo {
    padding: 10px 16px;
    background: #f5f5f5;
    border-radius: 6px;
    font-size: 12px;
    font-weight: 500;
    color: #666;
    transition: all 0.3s;
    text-align: center;
    min-width: 120px;
}

.resource-logo:hover {
    background: #e6f7ff;
    color: #1890ff;
}

.logo-text {
    white-space: nowrap;
    font-weight: 600;
    margin-bottom: 4px;
}

.logo-url {
    font-size: 10px;
    color: #999;
    white-space: nowrap;
}

/* 研发说明区域 */
.dev-notes {
    margin-top: 24px;
    padding: 16px;
    background: #f9f9f9;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    border-left: 4px solid #1890ff;
}

.dev-notes-title {
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 12px;
}

.dev-notes-content {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.dev-note-item {
    font-size: 13px;
    color: #666;
    line-height: 1.6;
    padding: 8px;
    background: #fff;
    border-radius: 4px;
}

.dev-note-item strong {
    color: #1890ff;
    font-weight: 600;
}

/* 问答结果区域 */
.qa-results-section {
    margin-top: 32px;
}

.qa-conversation {
    max-width: 900px;
    margin: 0 auto;
}

.qa-message {
    margin-bottom: 24px;
    padding: 16px;
    border-radius: 8px;
}

.qa-message.user {
    background: #e6f7ff;
    margin-left: 20%;
}

.qa-message.assistant {
    background: #f5f5f5;
    margin-right: 20%;
}

.qa-message-header {
    font-weight: 600;
    margin-bottom: 8px;
    color: #1a1a1a;
}

.qa-message-content {
    color: #333;
    line-height: 1.6;
    white-space: pre-wrap;
}

.qa-loading {
    text-align: center;
    padding: 24px;
    color: #999;
}
</style>

<script>
// 当前问答模式
let currentQAMode = 'academic';
let currentModel = 'standard';
let isDeepResearch = false;

// 切换问答模式
function switchQAMode(mode) {
    currentQAMode = mode;
    document.getElementById('modeFullWeb').classList.toggle('active', mode === 'fullweb');
    document.getElementById('modeAcademic').classList.toggle('active', mode === 'academic');
}

// 切换深度研究
function toggleDeepResearch() {
    isDeepResearch = !isDeepResearch;
    const btn = document.getElementById('deepResearchBtn');
    if (isDeepResearch) {
        btn.style.background = '#1890ff';
        btn.style.color = '#fff';
        btn.style.borderColor = '#1890ff';
    } else {
        btn.style.background = '#fff';
        btn.style.color = '#666';
        btn.style.borderColor = '#d9d9d9';
    }
}

// 切换模型下拉菜单
function toggleModelDropdown() {
    const dropdown = document.getElementById('modelDropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

// 选择模型
function selectModel(model) {
    currentModel = model;
    const btn = document.getElementById('modelSelectBtn');
    const modelNames = {
        'standard': '标准模型',
        'advanced': '高级模型',
        'expert': '专家模型'
    };
    btn.querySelector('span:first-child').textContent = modelNames[model];
    document.getElementById('modelDropdown').style.display = 'none';
}

// 开始语音输入
function startVoiceInput() {
    alert('语音输入功能（模拟）\\n\\n实际应用中应调用语音识别API');
}

// 提交问题
function submitQuestion() {
    const input = document.getElementById('qaQuestionInput');
    const question = input.value.trim();
    
    if (!question) {
        alert('请输入您的问题');
        return;
    }
    
    // 显示结果区域
    const resultsSection = document.getElementById('qaResultsSection');
    resultsSection.style.display = 'block';
    
    // 添加用户问题
    addMessage('user', question);
    
    // 清空输入框
    input.value = '';
    
    // 显示加载状态
    const loadingId = addMessage('assistant', '正在思考中...', true);
    
    // 模拟AI回答
    setTimeout(() => {
        const mockAnswer = generateMockAnswer(question);
        updateMessage(loadingId, 'assistant', mockAnswer);
    }, 2000);
}

// 添加消息
function addMessage(role, content, isLoading = false) {
    const conversation = document.getElementById('qaConversation');
    const messageId = 'msg-' + Date.now();
    const messageClass = isLoading ? 'qa-loading' : 'qa-message ' + role;
    
    const messageHTML = \`
        <div class="\${messageClass}" id="\${messageId}">
            <div class="qa-message-header">\${role === 'user' ? '您的问题' : 'AI回答'}</div>
            <div class="qa-message-content">\${content}</div>
        </div>
    \`;
    
    conversation.insertAdjacentHTML('beforeend', messageHTML);
    
    // 滚动到底部
    conversation.scrollTop = conversation.scrollHeight;
    
    return messageId;
}

// 更新消息
function updateMessage(messageId, role, content) {
    const messageEl = document.getElementById(messageId);
    if (messageEl) {
        messageEl.className = 'qa-message ' + role;
        messageEl.querySelector('.qa-message-content').textContent = content;
    }
}

// 生成模拟回答
function generateMockAnswer(question) {
    const answers = [
        \`根据您的问题"\${question}"，我为您整理了以下学术观点：\\n\\n1. 相关研究显示，该领域在近年来取得了显著进展。\\n2. 多项研究表明，该问题涉及多个维度的考量。\\n3. 建议进一步查阅相关文献以获得更深入的理解。\\n\\n参考文献：\\n- Author A, et al. (2023). Title of Study. Journal Name.\\n- Author B, et al. (2022). Another Study. Journal Name.\`,
        \`关于"\${question}"这个问题，学术界有以下主要观点：\\n\\n• 主流观点认为...\\n• 部分学者提出...\\n• 最新研究显示...\\n\\n需要注意的是，该领域仍存在一些争议，建议结合具体研究场景进行判断。\`,
        \`针对您的问题，我基于学术数据库检索到以下信息：\\n\\n根据PubMed、IEEE等数据库的相关文献，该问题可以从以下几个角度分析：\\n\\n1. 理论基础\\n2. 实证研究\\n3. 应用实践\\n\\n以上内容基于当前学术资源整理，仅供参考。\`
    ];
    
    return answers[Math.floor(Math.random() * answers.length)];
}

// 点击外部关闭下拉菜单
document.addEventListener('click', function(e) {
    const dropdown = document.getElementById('modelDropdown');
    const btn = document.getElementById('modelSelectBtn');
    if (!btn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.style.display = 'none';
    }
});

// 支持Enter键提交（Ctrl+Enter）
document.getElementById('qaQuestionInput').addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.ctrlKey) {
        submitQuestion();
    }
});

// 初始化页面
function initPage_research_academic_qa() {
    console.log('学术问答页面已加载');
}
</script>
`,
        'research-ai-cloud': `<!-- 科研超级智能体：AI 云盘页面 -->
<div class="ai-cloud-page">
    <div class="cloud-header">
        <div class="cloud-title-section">
            <div class="cloud-icon">☁️</div>
            <h1 class="cloud-title">AI 云盘</h1>
        </div>
        <p class="cloud-subtitle">智能存储·文件管理·知识沉淀</p>
    </div>
    
    <!-- 搜索栏 -->
    <div class="cloud-search-bar">
        <input type="text" class="cloud-search-input" placeholder="搜索文件或资源（标题和正文）" id="cloudSearchInput">
        <button class="cloud-search-btn" onclick="performCloudSearch()">🔍</button>
    </div>
    
    <!-- 标签页导航 -->
    <div class="cloud-tabs">
        <button class="cloud-tab active" onclick="switchCloudTab('drive')" id="tabDrive">
            AI 云盘
        </button>
        <button class="cloud-tab" onclick="switchCloudTab('smart')" id="tabSmart">
            智能列表
        </button>
        <button class="cloud-tab" onclick="switchCloudTab('excerpts')" id="tabExcerpts">
            摘录笔记
        </button>
        <button class="cloud-tab" onclick="switchCloudTab('tags')" id="tabTags">
            我的标签
        </button>
        <button class="cloud-tab" onclick="switchCloudTab('citations')" id="tabCitations">
            引用管理
        </button>
    </div>
    
    <!-- 工具栏 -->
    <div class="cloud-toolbar">
        <div class="toolbar-left">
            <button class="toolbar-icon-btn" onclick="showFilterOptions()" title="筛选">
                <span>🔽</span>
            </button>
            <button class="toolbar-icon-btn" onclick="toggleViewMode()" title="视图切换">
                <span>📋</span>
            </button>
            <button class="toolbar-icon-btn" onclick="showViewOptions()" title="查看">
                <span>👁️</span>
            </button>
            <button class="toolbar-icon-btn" onclick="showShareOptions()" title="分享">
                <span>🔗</span>
            </button>
            <button class="toolbar-icon-btn" onclick="showDeleteOptions()" title="删除">
                <span>🗑️</span>
            </button>
        </div>
        <div class="toolbar-right">
            <div class="new-item-dropdown">
                <button class="toolbar-btn secondary" onclick="toggleNewItemMenu()" id="newItemBtn">
                    <span>+</span>
                    <span>新建</span>
                </button>
                <div class="new-item-menu" id="newItemMenu" style="display: none;">
                    <div class="menu-item" onclick="createFolder()">
                        <div class="menu-item-icon">📁</div>
                        <div class="menu-item-content">
                            <div class="menu-item-title">文件夹</div>
                        </div>
                    </div>
                    <div class="menu-divider"></div>
                    <div class="menu-item" onclick="createOnlineNote()">
                        <div class="menu-item-icon">📝</div>
                        <div class="menu-item-content">
                            <div class="menu-item-title">新建在线笔记</div>
                        </div>
                    </div>
                    <div class="menu-item" onclick="createMindMap()">
                        <div class="menu-item-icon">🗺️</div>
                        <div class="menu-item-content">
                            <div class="menu-item-title">新建思维导图</div>
                        </div>
                    </div>
                    <div class="menu-item" onclick="createWhiteboard()">
                        <div class="menu-item-icon">🖼️</div>
                        <div class="menu-item-content">
                            <div class="menu-item-title">新建在线白板</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="upload-dropdown">
                <button class="toolbar-btn primary" onclick="toggleUploadMenu()" id="uploadBtn">
                    <span>上传</span>
                </button>
                <div class="upload-menu" id="uploadMenu" style="display: none;">
                    <div class="menu-item" onclick="showUploadDialog('file')">
                        <div class="menu-item-icon">📄</div>
                        <div class="menu-item-content">
                            <div class="menu-item-title">
                                上传资料
                                <span class="menu-item-hint" title="支持PDF等多种格式文件资料">ℹ️</span>
                            </div>
                            <div class="menu-item-desc">支持PDF等多种格式文件资料</div>
                        </div>
                    </div>
                    <div class="menu-item" onclick="showUploadDialog('folder')">
                        <div class="menu-item-icon">📁</div>
                        <div class="menu-item-content">
                            <div class="menu-item-title">上传文件夹</div>
                            <div class="menu-item-desc">文件夹小于500M, 且不超过50个文件</div>
                        </div>
                    </div>
                    <div class="menu-divider"></div>
                    <div class="menu-item" onclick="importBibtex()">
                        <div class="menu-item-icon">📚</div>
                        <div class="menu-item-content">
                            <div class="menu-item-title">Bibtex 解析导入</div>
                            <div class="menu-item-desc">解析Bibtex题录，创建文献元数据</div>
                        </div>
                    </div>
                    <div class="menu-item" onclick="importDOI()">
                        <div class="menu-item-icon">🔍</div>
                        <div class="menu-item-content">
                            <div class="menu-item-title">DOI 查询导入</div>
                            <div class="menu-item-desc">查询外文文献DOI，创建文献元数据</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- AI 云盘内容区域 -->
    <div class="cloud-content">
        <!-- AI 云盘标签页 -->
        <div class="cloud-tab-content active" id="contentDrive">
            <div class="cloud-file-list" id="cloudFileList">
                <!-- 文件列表将通过JavaScript动态生成 -->
            </div>
            <div class="cloud-empty-state" id="cloudEmptyState">
                <div class="empty-icon">☁️📄</div>
                <div class="empty-text">点击【上传】添加资料</div>
                <div class="empty-hint">支持 PDF、DOC、DOCX、TXT 等格式</div>
            </div>
        </div>
        
        <!-- 智能列表标签页 -->
        <div class="cloud-tab-content" id="contentSmart" style="display: none;">
            <div class="smart-list" id="smartList">
                <div class="empty-state-small">暂无智能列表</div>
            </div>
        </div>
        
        <!-- 摘录笔记标签页 -->
        <div class="cloud-tab-content" id="contentExcerpts" style="display: none;">
            <div class="excerpts-list" id="excerptsList">
                <div class="empty-state-small">暂无摘录笔记</div>
            </div>
        </div>
        
        <!-- 我的标签标签页 -->
        <div class="cloud-tab-content" id="contentTags" style="display: none;">
            <div class="tags-manager" id="tagsManager">
                <div class="empty-state-small">暂无标签</div>
            </div>
        </div>
        
        <!-- 引用管理标签页 -->
        <div class="cloud-tab-content" id="contentCitations" style="display: none;">
            <div class="citations-list" id="citationsList">
                <div class="empty-state-small">暂无引用记录</div>
            </div>
        </div>
    </div>
    
    <!-- 底部状态栏 -->
    <div class="cloud-footer">
        <div class="cloud-status" id="cloudStatus">已全部加载，共 0 个</div>
    </div>
    
    <!-- 上传对话框 -->
    <div class="upload-dialog" id="uploadDialog" style="display: none;">
        <div class="upload-dialog-overlay" onclick="closeUploadDialog()"></div>
        <div class="upload-dialog-content">
            <div class="upload-dialog-header">
                <h3>上传文件</h3>
                <button class="upload-dialog-close" onclick="closeUploadDialog()">×</button>
            </div>
            <div class="upload-dialog-body">
                <div class="upload-area-large" id="uploadAreaLarge" onclick="triggerFileUpload()">
                    <div class="upload-icon-large">📄</div>
                    <div class="upload-text-large">点击或拖拽文件到此处上传</div>
                    <div class="upload-hint-large">支持 PDF、DOC、DOCX、TXT、PPT、PPTX 等格式</div>
                    <input type="file" id="fileUploadInput" style="display: none;" multiple accept=".pdf,.doc,.docx,.txt,.ppt,.pptx" onchange="handleFileUpload(event)">
                </div>
                <div class="upload-file-list" id="uploadFileList">
                    <!-- 待上传文件列表 -->
                </div>
            </div>
            <div class="upload-dialog-footer">
                <button class="btn btn-default" onclick="closeUploadDialog()">取消</button>
                <button class="btn btn-primary" onclick="confirmUpload()">开始上传</button>
            </div>
        </div>
    </div>
</div>

<style>
/* AI 云盘页面样式 */
.ai-cloud-page {
    padding: 24px;
    max-width: 1600px;
    margin: 0 auto;
}

.cloud-header {
    text-align: center;
    margin-bottom: 24px;
}

.cloud-title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 8px;
}

.cloud-icon {
    font-size: 48px;
}

.cloud-title {
    font-size: 36px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
}

.cloud-subtitle {
    font-size: 16px;
    color: #666;
    margin: 0;
}

/* 搜索栏 */
.cloud-search-bar {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
}

.cloud-search-input {
    flex: 1;
    padding: 12px 16px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    font-size: 14px;
    transition: border-color 0.3s;
}

.cloud-search-input:focus {
    outline: none;
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
}

.cloud-search-btn {
    padding: 12px 24px;
    background: #1890ff;
    color: #fff;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.3s;
}

.cloud-search-btn:hover {
    background: #40a9ff;
}

/* 标签页 */
.cloud-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
}

.cloud-tab {
    padding: 12px 24px;
    border: none;
    background: transparent;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.3s;
}

.cloud-tab:hover {
    color: #1890ff;
}

.cloud-tab.active {
    color: #1890ff;
    border-bottom-color: #1890ff;
    font-weight: 600;
}

/* 工具栏 */
.cloud-toolbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;
    margin-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
}

.toolbar-left {
    display: flex;
    gap: 8px;
}

.toolbar-right {
    display: flex;
    gap: 12px;
}

.toolbar-btn {
    padding: 8px 16px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    background: #fff;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s;
}

.toolbar-btn:hover {
    border-color: #1890ff;
    color: #1890ff;
}

.toolbar-btn.secondary {
    background: #f5f5f5;
}

.toolbar-btn.primary {
    background: #722ed1;
    color: #fff;
    border-color: #722ed1;
}

.toolbar-btn.primary:hover {
    background: #9254de;
    border-color: #9254de;
}

.toolbar-icon-btn {
    width: 32px;
    height: 32px;
    padding: 0;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    background: #fff;
    color: #666;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.toolbar-icon-btn:hover {
    border-color: #1890ff;
    color: #1890ff;
}

/* 新建下拉菜单 */
.new-item-dropdown,
.upload-dropdown {
    position: relative;
}

.upload-menu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 8px;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 100;
    min-width: 280px;
    padding: 8px 0;
}

.new-item-menu {
    position: absolute;
    top: 100%;
    right: 0;
    margin-top: 8px;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    z-index: 100;
    min-width: 280px;
    padding: 8px 0;
}

.menu-item {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 12px 16px;
    cursor: pointer;
    transition: background 0.2s;
}

.menu-item:hover {
    background: #f5f5f5;
}

.menu-item-icon {
    font-size: 20px;
    flex-shrink: 0;
    margin-top: 2px;
}

.menu-item-content {
    flex: 1;
}

.menu-item-title {
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
}

.menu-item-hint {
    font-size: 12px;
    color: #999;
    cursor: help;
}

.menu-item-desc {
    font-size: 12px;
    color: #999;
    line-height: 1.4;
}

.menu-divider {
    height: 1px;
    background: #e8e8e8;
    margin: 8px 0;
}

/* 内容区域 */
.cloud-content {
    min-height: 400px;
    background: #fff;
    border-radius: 8px;
    padding: 24px;
}

.cloud-tab-content {
    min-height: 400px;
}

/* 文件列表 */
.cloud-file-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
}

.cloud-file-item {
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    padding: 16px;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
}

.cloud-file-item:hover {
    border-color: #1890ff;
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.1);
}

.file-icon {
    font-size: 48px;
    text-align: center;
    margin-bottom: 12px;
}

.file-name {
    font-size: 14px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.file-meta {
    font-size: 12px;
    color: #999;
    margin-bottom: 8px;
}

.file-actions {
    display: flex;
    gap: 8px;
    margin-top: 12px;
}

.file-action-btn {
    padding: 4px 8px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    background: #fff;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s;
}

.file-action-btn:hover {
    border-color: #1890ff;
    color: #1890ff;
}

/* 空状态 */
.cloud-empty-state {
    text-align: center;
    padding: 80px 20px;
    display: none;
}

.cloud-empty-state.show {
    display: block;
}

.empty-icon {
    font-size: 64px;
    margin-bottom: 16px;
}

.empty-text {
    font-size: 18px;
    color: #1a1a1a;
    margin-bottom: 8px;
    font-weight: 600;
}

.empty-hint {
    font-size: 14px;
    color: #999;
}

.empty-state-small {
    text-align: center;
    padding: 60px 20px;
    color: #999;
    font-size: 14px;
}

/* 底部状态栏 */
.cloud-footer {
    margin-top: 20px;
    padding: 12px 0;
    text-align: center;
    border-top: 1px solid #e8e8e8;
}

.cloud-status {
    font-size: 14px;
    color: #666;
}

/* 上传对话框 */
.upload-dialog {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
}

.upload-dialog-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

.upload-dialog-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 8px;
    width: 90%;
    max-width: 600px;
    max-height: 80vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
}

.upload-dialog-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid #e8e8e8;
}

.upload-dialog-header h3 {
    margin: 0;
    font-size: 18px;
    font-weight: 600;
}

.upload-dialog-close {
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    font-size: 24px;
    cursor: pointer;
    color: #999;
}

.upload-dialog-close:hover {
    color: #1a1a1a;
}

.upload-dialog-body {
    flex: 1;
    overflow-y: auto;
    padding: 24px;
}

.upload-area-large {
    border: 2px dashed #d9d9d9;
    border-radius: 8px;
    padding: 60px 20px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
    margin-bottom: 20px;
}

.upload-area-large:hover {
    border-color: #1890ff;
    background: #f0f7ff;
}

.upload-icon-large {
    font-size: 64px;
    margin-bottom: 16px;
}

.upload-text-large {
    font-size: 16px;
    color: #1a1a1a;
    margin-bottom: 8px;
    font-weight: 600;
}

.upload-hint-large {
    font-size: 14px;
    color: #999;
}

.upload-file-list {
    margin-top: 20px;
}

.upload-file-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    background: #f5f5f5;
    border-radius: 6px;
    margin-bottom: 8px;
}

.upload-file-name {
    flex: 1;
    font-size: 14px;
    color: #1a1a1a;
}

.upload-file-size {
    font-size: 12px;
    color: #999;
}

.upload-file-remove {
    width: 24px;
    height: 24px;
    border: none;
    background: transparent;
    color: #999;
    cursor: pointer;
    font-size: 18px;
}

.upload-file-remove:hover {
    color: #f5222d;
}

.upload-dialog-footer {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
    padding: 16px 24px;
    border-top: 1px solid #e8e8e8;
}

.btn {
    padding: 8px 24px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-default {
    background: #fff;
    color: #666;
}

.btn-default:hover {
    border-color: #1890ff;
    color: #1890ff;
}

.btn-primary {
    background: #1890ff;
    color: #fff;
    border-color: #1890ff;
}

.btn-primary:hover {
    background: #40a9ff;
    border-color: #40a9ff;
}
</style>

<script>
// 当前选中的标签页
let currentTab = 'drive';
let fileList = [];

// 切换标签页
function switchCloudTab(tab) {
    currentTab = tab;
    
    // 更新标签页状态
    document.querySelectorAll('.cloud-tab').forEach(btn => btn.classList.remove('active'));
    document.getElementById('tab' + tab.charAt(0).toUpperCase() + tab.slice(1)).classList.add('active');
    
    // 更新内容区域
    document.querySelectorAll('.cloud-tab-content').forEach(content => {
        content.style.display = 'none';
    });
    document.getElementById('content' + tab.charAt(0).toUpperCase() + tab.slice(1)).style.display = 'block';
    
    // 根据标签页加载内容
    loadTabContent(tab);
}

// 加载标签页内容
function loadTabContent(tab) {
    switch(tab) {
        case 'drive':
            loadFileList();
            break;
        case 'smart':
            loadSmartList();
            break;
        case 'excerpts':
            loadExcerpts();
            break;
        case 'tags':
            loadTags();
            break;
        case 'citations':
            loadCitations();
            break;
    }
}

// 加载文件列表
function loadFileList() {
    const fileListEl = document.getElementById('cloudFileList');
    const emptyState = document.getElementById('cloudEmptyState');
    
    if (fileList.length === 0) {
        fileListEl.style.display = 'none';
        emptyState.classList.add('show');
    } else {
        fileListEl.style.display = 'grid';
        emptyState.classList.remove('show');
        
        fileListEl.innerHTML = fileList.map((file, index) => \`
            <div class="cloud-file-item" onclick="openFile(\${index})">
                <div class="file-icon">\${getFileIcon(file.type)}</div>
                <div class="file-name" title="\${file.name}">\${file.name}</div>
                <div class="file-meta">
                    <div>大小：\${formatFileSize(file.size)}</div>
                    <div>上传时间：\${file.uploadTime}</div>
                </div>
                <div class="file-actions">
                    <button class="file-action-btn" onclick="event.stopPropagation(); downloadFile(\${index})">下载</button>
                    <button class="file-action-btn" onclick="event.stopPropagation(); deleteFile(\${index})">删除</button>
                </div>
            </div>
        \`).join('');
    }
    
    updateStatus();
}

// 获取文件图标
function getFileIcon(type) {
    const icons = {
        'pdf': '📄',
        'doc': '📝',
        'docx': '📝',
        'txt': '📃',
        'ppt': '📊',
        'pptx': '📊'
    };
    return icons[type] || '📄';
}

// 格式化文件大小
function formatFileSize(bytes) {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(2) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(2) + ' MB';
}

// 加载智能列表
function loadSmartList() {
    // 模拟数据
    document.getElementById('smartList').innerHTML = '<div class="empty-state-small">暂无智能列表</div>';
}

// 加载摘录笔记
function loadExcerpts() {
    // 模拟数据
    document.getElementById('excerptsList').innerHTML = '<div class="empty-state-small">暂无摘录笔记</div>';
}

// 加载标签
function loadTags() {
    // 模拟数据
    document.getElementById('tagsManager').innerHTML = '<div class="empty-state-small">暂无标签</div>';
}

// 加载引用
function loadCitations() {
    // 模拟数据
    document.getElementById('citationsList').innerHTML = '<div class="empty-state-small">暂无引用记录</div>';
}

// 更新状态栏
function updateStatus() {
    const statusEl = document.getElementById('cloudStatus');
    statusEl.textContent = \`已全部加载，共 \${fileList.length} 个\`;
}

// 执行搜索
function performCloudSearch() {
    const keyword = document.getElementById('cloudSearchInput').value.trim();
    if (!keyword) {
        alert('请输入搜索关键词');
        return;
    }
    
    // 模拟搜索
    alert(\`搜索关键词：\${keyword}\\n\\n（实际应用中应调用搜索API）\`);
}

// 显示上传对话框
function showUploadDialog(type) {
    document.getElementById('uploadDialog').style.display = 'block';
    if (type === 'folder') {
        // 如果是上传文件夹，需要设置multiple和webkitdirectory属性
        const input = document.getElementById('fileUploadInput');
        input.setAttribute('webkitdirectory', '');
        input.setAttribute('multiple', '');
    } else {
        const input = document.getElementById('fileUploadInput');
        input.removeAttribute('webkitdirectory');
    }
    // 关闭上传菜单
    document.getElementById('uploadMenu').style.display = 'none';
}

// 关闭上传对话框
function closeUploadDialog() {
    document.getElementById('uploadDialog').style.display = 'none';
    document.getElementById('uploadFileList').innerHTML = '';
}

// 触发文件上传
function triggerFileUpload() {
    document.getElementById('fileUploadInput').click();
}

// 处理文件上传
function handleFileUpload(event) {
    const files = Array.from(event.target.files);
    const fileListEl = document.getElementById('uploadFileList');
    
    fileListEl.innerHTML = files.map((file, index) => \`
        <div class="upload-file-item">
            <div class="upload-file-name">\${file.name}</div>
            <div class="upload-file-size">\${formatFileSize(file.size)}</div>
            <button class="upload-file-remove" onclick="removeUploadFile(\${index})">×</button>
        </div>
    \`).join('');
}

// 移除待上传文件
function removeUploadFile(index) {
    // 实际应用中需要从文件列表中移除
    alert('移除文件（模拟）');
}

// 确认上传
function confirmUpload() {
    const files = document.getElementById('fileUploadInput').files;
    if (files.length === 0) {
        alert('请选择要上传的文件');
        return;
    }
    
    // 模拟上传
    Array.from(files).forEach(file => {
        fileList.push({
            name: file.name,
            type: file.name.split('.').pop().toLowerCase(),
            size: file.size,
            uploadTime: new Date().toLocaleString('zh-CN')
        });
    });
    
    closeUploadDialog();
    loadFileList();
    alert('文件上传成功（模拟）');
}

// 打开文件
function openFile(index) {
    const file = fileList[index];
    alert(\`打开文件：\${file.name}\\n\\n（实际应用中应调用文件预览API）\`);
}

// 下载文件
function downloadFile(index) {
    const file = fileList[index];
    alert(\`正在下载：\${file.name}\\n\\n（实际应用中应调用下载API）\`);
}

// 删除文件
function deleteFile(index) {
    if (confirm('确定要删除这个文件吗？')) {
        fileList.splice(index, 1);
        loadFileList();
    }
}

// 切换新建菜单
function toggleNewItemMenu() {
    const menu = document.getElementById('newItemMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// 点击外部关闭菜单
document.addEventListener('click', function(e) {
    const newBtn = document.getElementById('newItemBtn');
    const newMenu = document.getElementById('newItemMenu');
    const uploadBtn = document.getElementById('uploadBtn');
    const uploadMenu = document.getElementById('uploadMenu');
    
    if (newBtn && newMenu && !newBtn.contains(e.target) && !newMenu.contains(e.target)) {
        newMenu.style.display = 'none';
    }
    
    if (uploadBtn && uploadMenu && !uploadBtn.contains(e.target) && !uploadMenu.contains(e.target)) {
        uploadMenu.style.display = 'none';
    }
});

// 创建文件夹
function createFolder() {
    document.getElementById('newItemMenu').style.display = 'none';
    const folderName = prompt('请输入文件夹名称：');
    if (folderName) {
        alert(\`创建文件夹：\${folderName}\\n\\n（实际应用中应调用创建文件夹API）\`);
    }
}

// 新建在线笔记
function createOnlineNote() {
    document.getElementById('newItemMenu').style.display = 'none';
    alert('新建在线笔记（模拟）\\n\\n（实际应用中应打开在线笔记编辑器）');
}

// 新建思维导图
function createMindMap() {
    document.getElementById('newItemMenu').style.display = 'none';
    alert('新建思维导图（模拟）\\n\\n（实际应用中应打开思维导图编辑器）');
}

// 新建在线白板
function createWhiteboard() {
    document.getElementById('newItemMenu').style.display = 'none';
    alert('新建在线白板（模拟）\\n\\n（实际应用中应打开在线白板编辑器）');
}

// 切换上传菜单
function toggleUploadMenu() {
    const menu = document.getElementById('uploadMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
    // 关闭新建菜单
    document.getElementById('newItemMenu').style.display = 'none';
}

// Bibtex 解析导入
function importBibtex() {
    document.getElementById('uploadMenu').style.display = 'none';
    alert('Bibtex 解析导入（模拟）\\n\\n（实际应用中应打开Bibtex导入对话框）');
}

// DOI 查询导入
function importDOI() {
    document.getElementById('uploadMenu').style.display = 'none';
    alert('DOI 查询导入（模拟）\\n\\n（实际应用中应打开DOI查询对话框）');
}

// 切换视图模式
function toggleViewMode() {
    alert('切换视图模式（模拟）\\n\\n（实际应用中应在网格视图和列表视图之间切换）');
}

// 显示查看选项
function showViewOptions() {
    alert('查看选项（模拟）');
}

// 显示分享选项
function showShareOptions() {
    alert('分享选项（模拟）');
}

// 显示筛选选项
function showFilterOptions() {
    alert('筛选选项（模拟）');
}

// 显示排序选项
function showSortOptions() {
    alert('排序选项（模拟）');
}

// 显示删除选项
function showDeleteOptions() {
    alert('批量删除（模拟）');
}

// 初始化页面
function initPage_research_ai_cloud() {
    console.log('AI 云盘页面已加载');
    loadFileList();
}
</script>
`,
        'research-ai-selection': `<!-- 科研超级智能体：AI选题页面 -->
<div class="research-ai-selection-page">
    <div class="research-header">
        <div class="research-title-section">
            <div class="research-icon">🤖</div>
            <h1 class="research-title">AI选题</h1>
        </div>
        <p class="research-subtitle">前沿为标，文献为纲</p>
    </div>
    
    <div class="research-search-section">
        <div class="research-search-box">
            <input type="text" class="research-search-input" placeholder="请输入选题方向的核心关键词" id="aiSelectionKeyword">
            <div class="research-search-actions">
                <button class="research-voice-btn" title="语音输入">🎤</button>
                <button class="research-search-btn" onclick="performAISelection()">🔍</button>
            </div>
        </div>
    </div>
    
    <div class="research-config-section">
        <div class="research-config-header">
            <p class="research-config-tip">您好,使用以下信息可以帮助我更好的为您分析选题哦~</p>
        </div>
        <div class="research-config-content">
            <div class="research-config-row">
                <div class="research-config-item">
                    <span class="config-label">我是</span>
                    <select class="config-select" id="userRole">
                        <option>请选择您的角色</option>
                        <option>本科生</option>
                        <option>研究生</option>
                        <option>博士生</option>
                        <option>小初高中教师</option>
                        <option>大学教师</option>
                        <option>医生</option>
                        <option>护士</option>
                        <option>科研工作者</option>
                        <option>其他</option>
                    </select>
                    <span class="config-punctuation">,</span>
                </div>
                <div class="research-config-item">
                    <span class="config-label">我需要研究的领域是</span>
                    <div class="config-multi-select">
                        <select class="config-select" id="researchField1">
                            <option>请选择一级研究领域</option>
                            <option value="医学">医学</option>
                            <option value="工学">工学</option>
                            <option value="理学">理学</option>
                            <option value="农学">农学</option>
                            <option value="经济学">经济学</option>
                            <option value="教育学">教育学</option>
                            <option value="文学">文学</option>
                            <option value="法学">法学</option>
                            <option value="艺术学">艺术学</option>
                            <option value="管理学">管理学</option>
                            <option value="历史学">历史学</option>
                            <option value="哲学">哲学</option>
                            <option value="军事学">军事学</option>
                            <option value="交叉学科">交叉学科</option>
                            <option value="其他">其他</option>
                        </select>
                        <select class="config-select" id="researchField2" disabled>
                            <option>请选择二级研究领域</option>
                        </select>
                        <select class="config-select" id="researchField3" disabled>
                            <option>请选择三级研究领域</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="research-config-row">
                <div class="research-config-item">
                    <span class="config-label">我的写作目标是</span>
                    <select class="config-select" id="writingGoal">
                        <option>请选择写作目标</option>
                        <option>毕业论文</option>
                        <option>申报基金项目</option>
                        <option>投稿国内普刊</option>
                        <option>投稿国内核心期刊</option>
                        <option>投稿sci期刊</option>
                        <option>投稿外刊（需要英文题目）</option>
                        <option>会议</option>
                        <option>兴趣研究</option>
                        <option>其他</option>
                    </select>
                    <span class="config-punctuation">,</span>
                </div>
                <div class="research-config-item">
                    <span class="config-label">我希望的研究方法是</span>
                    <select class="config-select" id="researchMethod">
                        <option>请选择研究方法</option>
                        <option>问卷</option>
                        <option>访谈</option>
                        <option>案例分析</option>
                        <option>实验</option>
                        <option>数据建模</option>
                        <option>文献综述</option>
                        <option>其他</option>
                    </select>
                </div>
            </div>
            <div class="research-config-row">
                <div class="research-config-item">
                    <label class="config-checkbox-label">
                        <input type="checkbox" id="useConfigInfo" checked>
                        <span>使用这些信息</span>
                    </label>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 提示信息 -->
    <div class="research-tip-section" id="researchTipSection" style="display: none;">
        <div class="research-tip-box">
            <span class="research-tip-icon">💡</span>
            <span class="research-tip-text">提示：点击搜索按钮（🔍）后，系统将生成选题建议，您可以在下方查看结果</span>
        </div>
    </div>
    
    <div class="research-results-section" id="aiSelectionResults" style="display: none;">
        <div class="research-results-header">
            <h3 class="research-results-title">选题建议</h3>
            <button class="research-clear-cache-btn" onclick="changeApproach()" title="换个思路，更换LLM模型并重新生成选题建议">
                <span class="clear-cache-icon">🔄</span>
                <span class="clear-cache-text">换个思路</span>
            </button>
        </div>
        <div class="research-results-list" id="aiSelectionResultsList">
            <!-- 结果将通过JavaScript动态生成 -->
        </div>
        
        <!-- 文献参考表格区域 -->
        <div class="research-literature-table-section" id="literatureTableSection" style="display: none;">
            <div class="literature-table-header">
                <h4 class="literature-table-title">📚 相关文献参考</h4>
                <div class="literature-table-count" id="literatureTableCount">共 0 篇文献</div>
            </div>
            <div class="literature-table-container">
                <table class="literature-table" id="literatureTable">
                    <thead>
                        <tr>
                            <th class="col-index">序号</th>
                            <th class="col-title">文献名称</th>
                            <th class="col-author">作者</th>
                            <th class="col-journal">期刊</th>
                            <th class="col-year">年份</th>
                            <th class="col-level">期刊等级</th>
                            <th class="col-citation">被引用次数</th>
                            <th class="col-link">链接</th>
                        </tr>
                    </thead>
                    <tbody id="literatureTableBody">
                        <!-- 文献数据将通过JavaScript动态生成 -->
                    </tbody>
                </table>
            </div>
        </div>
        
        <!-- 用户反馈区域 -->
        <div class="research-feedback-section" id="researchFeedbackSection" style="display: none;">
            <div class="research-feedback-title">您感觉本次AI选题的结果如何?</div>
            <div class="research-feedback-buttons">
                <button class="feedback-btn feedback-positive" onclick="submitFeedback('positive')">
                    <span class="feedback-icon">👍</span>
                    <span>很好</span>
                </button>
                <button class="feedback-btn feedback-neutral" onclick="submitFeedback('neutral')">
                    <span class="feedback-icon">😐</span>
                    <span>一般</span>
                </button>
                <button class="feedback-btn feedback-negative" onclick="submitFeedback('negative')">
                    <span class="feedback-icon">👎</span>
                    <span>不满意</span>
                </button>
            </div>
            <div class="research-feedback-thanks" id="feedbackThanks" style="display: none;">
                感谢您的反馈！
            </div>
            <div class="research-feedback-guide" id="feedbackGuide" style="display: none;">
                <div class="feedback-guide-content">
                    <div class="feedback-guide-icon">💡</div>
                    <div class="feedback-guide-text">
                        <div class="feedback-guide-title">想要获得不同的选题建议？</div>
                        <div class="feedback-guide-desc">您可以点击右上角的"换个思路"按钮，系统将清除缓存并更换LLM模型，为您重新生成选题建议。</div>
                        <button class="feedback-guide-btn" onclick="scrollToChangeApproach()">去换个思路</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- AI选题运算规则与技术实现说明 -->
    <div class="ai-selection-rules-section">
        <div class="rules-header">
            <div class="rules-title-wrapper">
                <div class="rules-badge">📖 原型说明文档</div>
                <h3 class="rules-title">AI选题运算规则与技术实现</h3>
                <p class="rules-subtitle">以下内容是对上述原型的详细说明和技术实现方案，帮助理解原型的功能设计、交互流程和技术架构</p>
            </div>
            <button class="rules-toggle-btn" onclick="toggleRulesSection()" id="rulesToggleBtn">收起</button>
        </div>
        <div class="rules-content" id="rulesContent" style="display: block;">
            <!-- 一、用户路径流程图 -->
            <div class="rule-section">
                <h4 class="rule-section-title">一、用户路径流程图</h4>
                <div class="rule-text" style="margin-bottom: 20px;">
                    <p>以下流程图展示了用户使用AI选题功能的完整路径，帮助理解整个交互流程。</p>
                </div>
                <div class="user-flow-diagram">
                    <div class="flow-step-large">
                        <div class="flow-number-large">1</div>
                        <div class="flow-content">
                            <div class="flow-title">输入关键词</div>
                            <div class="flow-desc">用户在搜索框输入选题方向的核心关键词</div>
                        </div>
                    </div>
                    <div class="flow-arrow-large">→</div>
                    <div class="flow-step-large">
                        <div class="flow-number-large">2</div>
                        <div class="flow-content">
                            <div class="flow-title">配置个人信息</div>
                            <div class="flow-desc">选择用户角色、研究领域、写作目标、研究方法等配置信息</div>
                        </div>
                    </div>
                    <div class="flow-arrow-large">→</div>
                    <div class="flow-step-large">
                        <div class="flow-number-large">3</div>
                        <div class="flow-content">
                            <div class="flow-title">点击搜索</div>
                            <div class="flow-desc">点击搜索按钮（🔍），系统检查缓存，如有缓存直接返回，否则调用LLM API生成选题建议</div>
                        </div>
                    </div>
                    <div class="flow-arrow-large">→</div>
                    <div class="flow-step-large">
                        <div class="flow-number-large">4</div>
                        <div class="flow-content">
                            <div class="flow-title">查看结果</div>
                            <div class="flow-desc">系统展示3-6个选题建议，每个包含研究价值、研究内容、研究难点、相关文献</div>
                        </div>
                    </div>
                    <div class="flow-arrow-large">→</div>
                    <div class="flow-step-large">
                        <div class="flow-number-large">5</div>
                        <div class="flow-content">
                            <div class="flow-title">查看文献</div>
                            <div class="flow-desc">查看完整的文献参考表格，包含所有相关文献的详细信息</div>
                        </div>
                    </div>
                    <div class="flow-arrow-large">→</div>
                    <div class="flow-step-large flow-step-optional">
                        <div class="flow-number-large">6</div>
                        <div class="flow-content">
                            <div class="flow-title">换个思路（可选）</div>
                            <div class="flow-desc">如果对结果不满意，可点击"换个思路"按钮，清除缓存并更换LLM模型，系统重新生成选题建议</div>
                        </div>
                    </div>
                    <div class="flow-arrow-large flow-arrow-optional">→</div>
                    <div class="flow-step-large">
                        <div class="flow-number-large">7</div>
                        <div class="flow-content">
                            <div class="flow-title">提交反馈</div>
                            <div class="flow-desc">对本次AI选题结果进行评价（很好/一般/不满意）</div>
                        </div>
                    </div>
                    <div class="flow-arrow-large">→</div>
                    <div class="flow-step-large flow-step-branch">
                        <div class="flow-number-large">8</div>
                        <div class="flow-content">
                            <div class="flow-title">反馈处理</div>
                            <div class="flow-desc">如果选择"一般"或"不满意"，系统记录反馈并引导用户使用"换个思路"功能</div>
                        </div>
                    </div>
                </div>
                
                <!-- 换个思路循环流程说明 -->
                <div class="flow-branch-diagram" style="margin-top: 24px; padding: 20px; background: #fff7e6; border-radius: 8px; border-left: 4px solid #faad14;">
                    <div class="flow-branch-title" style="font-weight: 600; color: #d46b08; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                        <span>🔄</span>
                        <span>"换个思路"循环流程说明</span>
                    </div>
                    <div class="flow-branch-content" style="color: #666; line-height: 1.8;">
                        <p style="margin: 0 0 8px 0;"><strong>流程说明：</strong></p>
                        <ol style="margin: 0; padding-left: 20px;">
                            <li>用户查看结果后，如果对选题建议不满意，可以点击"换个思路"按钮</li>
                            <li>系统弹出确认提示，用户确认后清除当前输入的缓存结果</li>
                            <li>系统可以更换LLM模型（如从GPT-4切换到Claude、文心一言等），利用不同模型的特点生成多样化的选题建议</li>
                            <li>系统重新调用LLM API生成新的选题建议，返回步骤4（查看结果）</li>
                            <li>用户可以继续查看新结果，如果仍不满意，可以再次点击"换个思路"，形成循环流程</li>
                            <li>如果对结果满意，可以继续到步骤7（提交反馈）</li>
                        </ol>
                        <p style="margin: 12px 0 0 0; padding: 12px; background: #fff; border-radius: 4px; border-left: 3px solid #faad14;">
                            <strong>💡 成本优化提示：</strong>如果用户不点击"换个思路"，相同输入参数每次都会返回相同的缓存结果，不再调用LLM API，从而节约token成本。只有在用户主动选择"换个思路"时，系统才会清除缓存并重新调用LLM API。
                        </p>
                    </div>
                </div>
                
                <!-- 反馈引导流程说明 -->
                <div class="flow-branch-diagram" style="margin-top: 24px; padding: 20px; background: #f0f8ff; border-radius: 8px; border-left: 4px solid #1890ff;">
                    <div class="flow-branch-title" style="font-weight: 600; color: #1890ff; margin-bottom: 12px; display: flex; align-items: center; gap: 8px;">
                        <span>📝</span>
                        <span>反馈引导流程说明</span>
                    </div>
                    <div class="flow-branch-content" style="color: #666; line-height: 1.8;">
                        <p style="margin: 0 0 8px 0;"><strong>流程说明：</strong></p>
                        <ol style="margin: 0; padding-left: 20px;">
                            <li>用户在步骤7提交反馈，选择"很好"、"一般"或"不满意"</li>
                            <li><strong>如果选择"很好"：</strong>系统显示感谢信息，流程结束</li>
                            <li><strong>如果选择"一般"或"不满意"：</strong>
                                <ul style="margin-top: 8px; padding-left: 20px;">
                                    <li>系统记录用户反馈（实际应用中发送到后端进行数据分析）</li>
                                    <li>系统显示感谢信息："感谢您的反馈！我们已记录您的意见。"</li>
                                    <li>系统自动显示引导提示，引导用户使用"换个思路"功能</li>
                                    <li>引导提示包含："想要获得不同的选题建议？您可以点击右上角的'换个思路'按钮..."</li>
                                    <li>提供"去换个思路"按钮，点击后自动滚动到"换个思路"按钮并高亮显示</li>
                                </ul>
                            </li>
                            <li>用户点击"去换个思路"按钮后，系统滚动到"换个思路"按钮，用户可以继续使用"换个思路"功能（返回步骤6）</li>
                            <li>如果用户对新的结果满意，可以再次提交反馈，选择"很好"，流程结束</li>
                        </ol>
                        <p style="margin: 12px 0 0 0; padding: 12px; background: #fff; border-radius: 4px; border-left: 3px solid #1890ff;">
                            <strong>📊 数据价值：</strong>通过记录用户反馈（特别是"一般"和"不满意"），系统可以分析用户满意度，优化LLM提示词和模型选择策略，持续改进选题质量。
                        </p>
                    </div>
                </div>
                <div class="rule-text" style="margin-top: 20px; padding: 12px; background: #f0f8ff; border-left: 3px solid #1890ff; border-radius: 4px;">
                    <strong>原型使用提示：</strong>在原型页面中，点击搜索按钮（🔍）后，系统会显示模拟的选题建议结果。您可以查看完整的选题内容、相关文献、反馈功能和"换个思路"按钮，以便更好地理解整个AI选题功能的交互流程。
                </div>
                <div class="rule-text" style="margin-top: 12px; padding: 12px; background: #fff7e6; border-left: 3px solid #faad14; border-radius: 4px;">
                    <strong>"换个思路"功能说明：</strong>在结果页面标题右侧提供"换个思路"按钮（🔄）。系统采用缓存机制优化性能：<strong>如果不清除缓存，相同输入参数每次生成的结果都是一样的，直接返回缓存结果，不再调用LLM API，从而节约token成本</strong>。用户点击"换个思路"后，系统会清除当前输入的缓存结果，并可以更换LLM模型，重新调用LLM API生成新的选题建议，为用户提供不同的选题思路。
                </div>
                <div class="rule-text" style="margin-top: 12px; padding: 12px; background: #f0f8ff; border-left: 3px solid #1890ff; border-radius: 4px;">
                    <strong>反馈引导功能说明：</strong>当用户对选题结果进行反馈时，如果选择"一般"或"不满意"，系统会记录用户反馈并自动显示引导提示，引导用户使用"换个思路"功能。引导提示包含说明文字和"去换个思路"按钮，点击后自动滚动到"换个思路"按钮并高亮显示，帮助用户快速找到并使用该功能，提升用户体验和功能使用率。
                </div>
            </div>
            
            <!-- 二、功能概述 -->
            <div class="rule-section">
                <h4 class="rule-section-title">二、功能概述</h4>
                <div class="rule-text" style="margin-bottom: 16px;">
                    <p style="margin-bottom: 12px;"><strong>功能目标：</strong></p>
                    <p style="margin-left: 20px; margin-bottom: 12px;">AI选题功能旨在通过深入了解用户的个人背景和研究兴趣，更准确地理解用户的研究需求，并提供有针对性的选题建议。同时，通过明确用户对选题的期望和限制条件，能够更有效地协助用户确定符合其实际情况的论文选题。</p>
                </div>
                <div class="rule-text">
                    <p style="margin-bottom: 12px;"><strong>实现方式：</strong></p>
                    <p style="margin-left: 20px;">系统通过对接外部LLM（大语言模型），整合用户的多维度信息（角色、研究领域、写作目标、研究方法、核心关键词等），结合学术规范和最佳实践，生成3-6个高质量的、个性化的选题建议。每个选题建议包含完整的背景说明、研究内容、创新点、可行性分析和文献检索关键词。同时，系统会从已有的文献库中自动检索并推荐与每个选题高度相关的文献（每个选题5-10篇），并提供完整的文献参考表格，帮助用户快速定位研究方向并获取权威文献支持。</p>
                    <p style="margin-left: 20px; margin-top: 12px;"><strong>缓存机制与"换个思路"功能：</strong></p>
                    <ul style="margin-left: 40px; margin-top: 8px;">
                        <li><strong>缓存机制：</strong>相同输入参数的请求结果会被缓存，后续相同输入直接返回缓存结果，不再调用LLM API，从而节约token成本。如果用户不主动清除缓存，每次生成的结果都是一样的。</li>
                        <li><strong>"换个思路"功能：</strong>用户如果对结果不满意，可以点击"换个思路"按钮，系统会清除当前输入的缓存结果，可以更换LLM模型（如从GPT-4切换到Claude、文心一言等），重新调用LLM API生成新的选题建议，为用户提供不同的选题思路。用户可以多次使用"换个思路"功能，直到获得满意的结果。</li>
                        <li><strong>成本平衡：</strong>通过缓存机制控制成本，通过"换个思路"功能提供灵活性，在成本控制和用户体验之间取得平衡。</li>
                    </ul>
                </div>
            </div>
            
            <!-- 三、数据输入 -->
            <div class="rule-section">
                <h4 class="rule-section-title">三、数据输入</h4>
                <div class="rule-text" style="margin-bottom: 16px;">
                    <p>系统通过收集用户的多维度信息，全面了解用户的个人背景、研究兴趣和选题期望，为生成个性化选题建议提供数据基础。同时，系统会从已有的文献库中检索相关文献，为每个选题提供高质量的文献引用支持。</p>
                </div>
                <div class="rule-list">
                    <div class="rule-item">
                        <strong>1. 个人背景信息：</strong>
                        <ul>
                            <li><strong>用户角色：</strong>本科生、研究生、博士生、小初高中教师、大学教师、医生、护士、科研工作者、其他
                                <br><span style="color: #666; font-size: 13px;">→ 反映用户的研究能力水平、学术经验和可投入的资源</span>
                            </li>
                            <li><strong>研究领域：</strong>三级分类体系（一级→二级→三级）
                                <br><span style="color: #666; font-size: 13px;">→ 明确用户的研究兴趣和专业方向</span>
                            </li>
                        </ul>
                    </div>
                    <div class="rule-item">
                        <strong>2. 选题期望与限制：</strong>
                        <ul>
                            <li><strong>写作目标：</strong>毕业论文、申报基金项目、投稿期刊等
                                <br><span style="color: #666; font-size: 13px;">→ 决定选题的深度、广度和学术规范要求</span>
                            </li>
                            <li><strong>研究方法：</strong>问卷、访谈、案例分析、实验、数据建模、文献综述等
                                <br><span style="color: #666; font-size: 13px;">→ 限定选题必须能够采用的研究方法</span>
                            </li>
                            <li><strong>核心关键词：</strong>用户输入的选题方向关键词
                                <br><span style="color: #666; font-size: 13px;">→ 反映用户当前关注的研究热点或兴趣点</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- 四、LLM对接方案 -->
            <div class="rule-section">
                <h4 class="rule-section-title">四、LLM对接方案</h4>
                
                <div class="rule-subsection">
                    <h5 class="rule-subsection-title">4.1 API调用方式</h5>
                    <div class="rule-list">
                        <div class="rule-item">
                            <strong>API调用方式：</strong>RESTful API（HTTP POST请求）
                        </div>
                        <div class="rule-item">
                            <strong>说明：</strong>研发团队可根据项目需求、成本预算、性能要求等因素自行选择合适的LLM服务提供商。
                        </div>
                    </div>
                </div>
                
                <div class="rule-subsection">
                    <h5 class="rule-subsection-title">4.2 提示词（Prompt）设计规范</h5>
                    <div class="rule-text" style="margin-bottom: 16px;">
                        提示词设计遵循<strong>四要素结构</strong>：<strong>角色设定 + 问题情境 + 任务指令 + 约束条件</strong>。这种结构化的提示词设计能够确保LLM更准确地理解任务需求，生成更符合预期的结果。
                    </div>
                    
                    <div class="rule-subsection" style="padding-left: 0;">
                        <h6 class="rule-subsection-title" style="font-size: 14px; color: #1890ff; margin-bottom: 8px;">4.2.1 提示词结构说明</h6>
                        <div class="rule-list">
                            <div class="rule-item">
                                <strong>1. 角色设定（Role）：</strong>明确LLM扮演的角色和专业背景，设定其专业能力和知识范围。
                            </div>
                            <div class="rule-item">
                                <strong>2. 问题情境（Context）：</strong>描述用户的具体情况和需求背景，提供必要的上下文信息。
                            </div>
                            <div class="rule-item">
                                <strong>3. 任务指令（Task）：</strong>明确告知LLM需要完成的具体任务和输出要求。
                            </div>
                            <div class="rule-item">
                                <strong>4. 约束条件（Constraints）：</strong>规定输出的格式、质量要求、数量限制等约束条件。
                            </div>
                        </div>
                    </div>
                    
                    <div class="code-block" style="margin-top: 20px;">
                        <div class="code-header">AI选题提示词模板（完整版）</div>
                        <pre class="code-content">【角色设定】
你是一位资深的学术研究顾问，拥有以下专业能力：
- 深度理解各学科领域的研究前沿和发展趋势
- 熟悉不同学术级别的选题要求和发表标准
- 掌握多种研究方法的适用场景和操作要点
- 能够评估选题的学术价值、创新性和可行性
- 擅长将抽象的研究方向转化为具体可操作的选题方案
- 具备敏锐的洞察力，能够通过用户的背景信息准确理解其研究需求和兴趣点
- 善于平衡学术规范与用户实际能力，提供既具有学术价值又切实可行的选题建议

【问题情境】
当前有一位研究人员需要选题建议。为了更准确地理解用户的研究需求和兴趣，并提供有针对性的建议，系统已收集了以下多维度信息：

<strong>个人背景信息：</strong>
- 用户角色：{userRole}（本科生/研究生/博士生/小初高中教师/大学教师/医生/护士/科研工作者/其他）
  * 这反映了用户的研究能力水平、学术经验和可投入的资源
- 研究领域：{researchField1} > {researchField2} > {researchField3}
  * 这明确了用户的研究兴趣和专业方向

<strong>选题期望与限制：</strong>
- 写作目标：{writingGoal}（毕业论文/申报基金项目/投稿期刊等）
  * 这决定了选题的深度、广度和学术规范要求
- 研究方法：{researchMethod}（问卷/访谈/案例分析/实验/数据建模/文献综述等）
  * 这限定了选题必须能够采用的研究方法
- 核心关键词：{keyword}
  * 这反映了用户当前关注的研究热点或兴趣点

<strong>用户需求：</strong>
用户希望通过AI辅助，基于以上个人背景、研究兴趣和选题期望，获得3-6个既符合学术规范，又与其实际情况高度匹配的选题建议。系统将从已有的文献库中为每个选题检索并推荐相关文献。这些建议应该：
1. 充分考虑用户的研究能力水平和学术经验
2. 符合用户的写作目标和发表要求
3. 能够采用用户指定的研究方法
4. 围绕用户关注的核心关键词展开
5. 具有明确的学术价值和实践意义
6. 在用户的能力范围内具有可操作性

【任务指令】
请基于以上信息，为这位研究人员生成3-6个高质量的选题建议。每个选题建议必须包含以下6个部分：

1. 选题标题
   - 中文标题：清晰、准确、具有学术规范性
   - 英文标题：根据写作目标决定是否需要（投稿SCI/外刊需要，其他可选）
   - 标题应体现研究的核心内容和创新点

2. 选题背景与意义（100-200字）
   - 阐述该选题的学术背景和研究现状
   - 说明选题的理论意义和实践价值
   - 指出当前研究存在的不足或空白

3. 研究内容概述（100-200字）
   - 明确研究的主要内容和研究范围
   - 说明研究的重点和难点
   - 概述研究的整体框架和思路

4. 预期创新点（50-100字）
   - 指出该选题可能的理论创新
   - 说明可能的实践创新或方法创新
   - 强调与现有研究的区别和优势

5. 研究可行性分析（50-100字）
   - 评估研究所需的数据、资源、技术条件
   - 分析研究的时间成本和人力成本
   - 说明研究的可操作性和实现路径

6. 相关文献方向建议（3-5个关键词）
   - 提供用于文献检索的关键词
   - 关键词应覆盖研究的核心概念和方法
   - 便于用户进行后续的文献调研工作

注意：系统会基于LLM生成的选题内容和关键词，从已有的文献库中自动检索并推荐相关文献（每个选题5-10篇），文献信息包含：文献名称、作者、期刊、发表年份、期刊等级、被引用次数、文献链接。文献推荐策略：优先推荐高质量期刊（SCI、核心期刊）、近期发表的高被引文献、覆盖选题不同维度的文献（理论、方法、最新进展等）。

【约束条件】
1. 选题质量要求（必须同时满足）：
   - <strong>学术价值：</strong>选题必须具有明确的学术价值和实践意义，能够为学科发展或实践应用做出贡献
   - <strong>能力匹配：</strong>选题难度必须符合{userRole}的研究能力水平，既不能过于简单缺乏挑战，也不能超出用户能力范围
   - <strong>目标适配：</strong>选题深度和广度必须适合{writingGoal}的发表要求，确保选题能够满足目标期刊或项目的标准
   - <strong>方法可行：</strong>选题必须能够采用{researchMethod}方法进行研究，确保研究设计的可操作性
   - <strong>创新性：</strong>选题应具有创新性，避免重复已有研究，但创新程度应与用户能力水平相匹配
   - <strong>可操作性：</strong>选题应具有可操作性，避免过于宏大或抽象，确保在用户的时间、资源和能力范围内可以完成
   
2. 个性化要求：
   - 选题建议应充分考虑用户的个人背景（角色、研究领域），体现个性化特征
   - 选题建议应围绕用户的核心关键词{keyword}展开，但可以从不同角度和层面进行探索
   - 不同选题之间应有所区别，避免重复或过于相似，为用户提供多样化的选择

2. 内容要求：
   - 所有文字表述应专业、准确、规范
   - 避免使用模糊、空洞的表述
   - 确保每个选题建议的完整性和独立性
   - 不同选题之间应有所区别，避免重复

3. 格式要求：
   - 必须严格按照JSON格式返回结果
   - JSON结构必须完整，所有字段必须填写
   - 中文字符使用UTF-8编码
   - 数组和字符串格式必须正确

4. 输出格式：
{
  "topics": [
    {
      "title_zh": "选题标题（中文）",
      "title_en": "Topic Title (English)",
      "background": "选题背景与意义（100-200字）",
      "content": "研究内容概述（100-200字）",
      "innovation": "预期创新点（50-100字）",
      "feasibility": "研究可行性分析（50-100字）",
      "keywords": ["关键词1", "关键词2", "关键词3", "关键词4", "关键词5"]
    }
  ]
}

注意：系统会从文献库中检索相关文献，为每个选题推荐5-10篇文献，并生成完整的文献参考表格。文献信息包含：文献名称、作者、期刊、发表年份、期刊等级、被引用次数、文献链接。

请严格按照以上要求生成选题建议。</pre>
                    </div>
                    
                    <div class="rule-subsection" style="padding-left: 0; margin-top: 20px;">
                        <h6 class="rule-subsection-title" style="font-size: 14px; color: #1890ff; margin-bottom: 8px;">4.2.2 提示词优化策略</h6>
                        <div class="rule-list">
                            <div class="rule-item">
                                <strong>根据用户角色调整：</strong>
                                <ul>
                                    <li><strong>本科生：</strong>强调选题的基础性和可操作性，避免过于复杂的研究设计</li>
                                    <li><strong>研究生：</strong>平衡学术深度和实践可行性，适当引入前沿研究方向</li>
                                    <li><strong>博士生/科研工作者：</strong>强调创新性和学术深度，可涉及跨学科或前沿领域</li>
                                    <li><strong>医生/护士：</strong>强调临床实践价值和转化应用，结合临床实际问题</li>
                                    <li><strong>小初高中教师/大学教师：</strong>强调教育实践价值和教学研究，结合教育教学实际问题</li>
                                </ul>
                            </div>
                            <div class="rule-item">
                                <strong>根据写作目标调整：</strong>
                                <ul>
                                    <li><strong>毕业论文：</strong>注重选题的系统性和完整性，适合长期深入研究</li>
                                    <li><strong>投稿SCI期刊：</strong>强调创新性和国际前沿性，需要英文标题</li>
                                    <li><strong>申报基金项目：</strong>强调研究价值和可行性，突出创新点和预期成果</li>
                                    <li><strong>投稿国内期刊：</strong>平衡学术规范和实践价值，符合国内学术环境</li>
                                </ul>
                            </div>
                            <div class="rule-item">
                                <strong>根据研究方法调整：</strong>
                                <ul>
                                    <li><strong>实验研究：</strong>强调实验设计的科学性和可操作性</li>
                                    <li><strong>数据建模：</strong>强调数据的可获得性和模型的适用性</li>
                                    <li><strong>文献综述：</strong>强调文献的丰富性和综述的系统性</li>
                                    <li><strong>案例分析：</strong>强调案例的典型性和分析的深度</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 五、数据处理与优化 -->
            <div class="rule-section">
                <h4 class="rule-section-title">五、数据处理与优化</h4>
                <div class="rule-list">
                    <div class="rule-item">
                        <strong>1. 输入验证：</strong>
                        <ul>
                            <li>验证必填字段（关键词、研究领域）</li>
                            <li>验证研究领域三级联动数据的完整性</li>
                            <li>验证字符长度限制</li>
                        </ul>
                    </div>
                    <div class="rule-item">
                        <strong>2. 提示词构建：</strong>
                        <ul>
                            <li>严格按照<strong>角色设定 + 问题情境 + 任务指令 + 约束条件</strong>四要素结构构建</li>
                            <li>根据用户角色动态调整角色设定部分的专业能力描述</li>
                            <li>根据写作目标调整任务指令中的输出要求（如是否需要英文标题）</li>
                            <li>根据研究方法调整约束条件中的可行性要求</li>
                            <li>确保提示词结构清晰，各部分职责明确</li>
                        </ul>
                    </div>
                    <div class="rule-item">
                        <strong>3. 文献库检索：</strong>
                        <ul>
                            <li>基于LLM生成的选题内容和关键词，从已有的文献库中检索相关文献</li>
                            <li>为每个选题推荐5-10篇高度相关的文献</li>
                            <li>文献推荐策略：优先推荐高质量期刊（SCI、核心期刊）、近期发表的高被引文献、覆盖选题不同维度的文献（理论、方法、最新进展等）</li>
                            <li>生成完整的文献参考表格，包含所有选题相关的文献，按被引用次数或相关性排序</li>
                            <li>文献信息包含：文献名称、作者、期刊、发表年份、期刊等级、被引用次数、文献链接</li>
                        </ul>
                    </div>
                    <div class="rule-item">
                        <strong>4. 结果处理：</strong>
                        <ul>
                            <li>解析LLM返回的JSON数据</li>
                            <li>验证数据格式和完整性</li>
                            <li>处理可能的格式错误或缺失字段</li>
                            <li>对选题进行排序和筛选</li>
                            <li>整合文献库检索结果，将文献引用信息添加到每个选题中</li>
                            <li>生成统一的文献参考表格</li>
                        </ul>
                    </div>
                    <div class="rule-item">
                        <strong>5. 错误处理：</strong>
                        <ul>
                            <li>API调用失败时的重试机制（最多3次）</li>
                            <li>网络超时处理（建议30秒超时）</li>
                            <li>返回结果格式错误时的降级处理</li>
                            <li>文献库检索失败时的降级处理（可返回空文献列表或提示信息）</li>
                            <li>友好的错误提示信息</li>
                        </ul>
                    </div>
                    <div class="rule-item">
                        <strong>6. 用户反馈处理：</strong>
                        <ul>
                            <li>记录用户反馈（很好/一般/不满意），实际应用中发送到后端进行数据分析</li>
                            <li>如果用户选择"很好"：显示感谢信息，流程结束</li>
                            <li>如果用户选择"一般"或"不满意"：
                                <ul style="margin-top: 8px; padding-left: 20px;">
                                    <li>记录用户反馈（用于数据分析和质量改进）</li>
                                    <li>显示感谢信息："感谢您的反馈！我们已记录您的意见。"</li>
                                    <li>自动显示引导提示，引导用户使用"换个思路"功能</li>
                                    <li>引导提示包含说明文字和"去换个思路"按钮</li>
                                    <li>点击"去换个思路"按钮后，自动滚动到"换个思路"按钮并高亮显示</li>
                                </ul>
                            </li>
                            <li>通过反馈引导，提升"换个思路"功能的使用率，帮助用户获得满意的结果</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- 六、性能优化建议 -->
            <div class="rule-section">
                <h4 class="rule-section-title">六、性能优化建议</h4>
                <div class="rule-list">
                    <div class="rule-item">
                        <strong>1. 缓存机制：</strong>
                        <ul>
                            <li><strong>缓存策略：</strong>对相同输入参数的请求结果进行持久化缓存，保障用户搜索过一次的结果，后续每次相同输入都能直接返回缓存结果，<strong>不再调用LLM API，从而节约token成本</strong>。如果不清除缓存，每次生成的结果都是一样的，确保成本可控</li>
                            <li><strong>缓存存储：</strong>使用Redis或数据库存储，确保缓存数据持久化，不会因服务重启而丢失</li>
                            <li><strong>缓存键生成：</strong>用户角色+研究领域+写作目标+关键词的MD5值，确保相同输入参数生成相同的缓存键</li>
                            <li><strong>"换个思路"功能：</strong>在结果页面标题右侧提供"换个思路"按钮（🔄），允许用户主动清除当前输入的缓存结果，更换LLM模型并重新生成选题建议，为用户提供不同的选题思路。用户可以多次使用此功能，形成循环流程，直到获得满意的结果</li>
                            <li><strong>"换个思路"交互流程：</strong>
                                <ol style="margin-top: 8px; padding-left: 20px;">
                                    <li>用户点击"换个思路"按钮后，系统弹出确认提示（"确定要换个思路吗？将清除当前缓存，更换LLM模型并重新生成选题建议。"）</li>
                                    <li>用户确认后，系统清除对应缓存，并在结果区域显示提示（"🔄 已清除缓存，正在更换模型并重新生成..."）</li>
                                    <li>系统可以更换LLM模型（如从GPT-4切换到Claude、文心一言等），利用不同模型的特点生成多样化的选题建议</li>
                                    <li>系统重新调用LLM API生成新的结果，用户返回查看结果步骤</li>
                                    <li>如果用户仍不满意，可以再次点击"换个思路"，形成循环流程</li>
                                </ol>
                            </li>
                            <li><strong>LLM模型切换机制：</strong>系统支持在多个LLM模型之间切换（如GPT-4、Claude、文心一言、通义千问等），每次"换个思路"可以选择不同的模型，利用不同模型的特点和优势，为用户提供多样化的选题建议</li>
                            <li><strong>缓存更新机制：</strong>当用户点击"换个思路"并确认后，系统清除对应缓存，可以更换LLM模型，重新调用LLM API生成新的结果，而不是返回缓存结果。新的结果会被重新缓存，但使用新的缓存键（包含模型标识）</li>
                            <li><strong>缓存键生成规则：</strong>基于用户角色+研究领域+写作目标+关键词+LLM模型标识的MD5值生成缓存键，确保相同输入参数和相同模型生成相同的缓存键，不同模型或不同输入参数生成不同的缓存键</li>
                            <li><strong>成本优化：</strong>通过缓存机制，相同输入参数和相同模型只调用一次LLM API，后续请求直接返回缓存结果，大幅降低token使用成本。用户只有在主动选择"换个思路"时才会产生新的API调用成本</li>
                            <li><strong>循环流程控制：</strong>系统支持用户多次使用"换个思路"功能，但每次都会产生新的API调用成本。建议在界面上显示使用次数或成本提示，帮助用户合理使用此功能</li>
                        </ul>
                    </div>
                    <div class="rule-item">
                        <strong>2. 异步处理：</strong>
                        <ul>
                            <li>使用异步请求，避免阻塞用户界面</li>
                            <li>显示加载状态和进度提示</li>
                            <li>支持请求取消功能</li>
                        </ul>
                    </div>
                    <div class="rule-item">
                        <strong>3. 流式输出（可选）：</strong>
                        <ul>
                            <li>如果LLM支持流式输出，可以实现实时显示生成过程</li>
                            <li>提升用户体验，减少等待焦虑</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- 七、测试与验证 -->
            <div class="rule-section">
                <h4 class="rule-section-title">七、测试与验证</h4>
                <div class="rule-text" style="margin-bottom: 20px;">
                    以下展示基于真实运行环境（<a href="https://app.qinyanai.com/ai_selection" target="_blank">https://app.qinyanai.com/ai_selection</a>）的完整测试情景，包括输入参数和实际输出结果，供研发团队参考验证。
                </div>
                
                <div class="rule-subsection" style="padding-left: 0;">
                    <h5 class="rule-subsection-title">真实测试情景</h5>
                    
                    <div class="rule-item" style="margin-bottom: 20px;">
                        <strong>输入参数：</strong>
                        <div class="code-block" style="margin-top: 8px;">
                            <div class="code-header">用户输入（真实数据）</div>
                            <pre class="code-content">{
  "keyword": "哮喘",
  "userRole": "医生",
  "researchField1": "医学",
  "researchField2": "基础医学",
  "researchField3": "免疫学",
  "writingGoal": "投稿sci期刊",
  "researchMethod": "问卷",
  "useConfigInfo": true
}</pre>
                        </div>
                    </div>
                    
                    <div class="rule-item">
                        <strong>实际输出结果（真实运行数据）：</strong>
                        <div class="code-block" style="margin-top: 8px;">
                            <div class="code-header">系统返回结果（6个选题方向）</div>
                            <pre class="code-content">选题方向1: 哮喘异质性与精准治疗：基于T细胞亚群的表型分型及靶向干预研究

研究价值：
深入理解哮喘的异质性是实现精准治疗的关键。本选题聚焦于T细胞在不同哮喘亚型（如T2-high和T2-low）发病机制中的作用，旨在通过对T细胞亚群的精细分型，为开发更具针对性的靶向治疗策略提供理论基础和实验依据，有望突破现有治疗瓶颈。

研究内容概述：
本研究将利用高通量测序、流式细胞术等技术，对不同哮喘患者（包括重症、难治性哮喘）外周血和支气管活检样本中的T细胞亚群进行深入分析，重点关注Th1, Th2, Th17, Treg等细胞的比例、功能及信号通路。在此基础上，探索不同T细胞表型与临床特征、药物反应性的关联，并初步评估针对特定T细胞亚群的靶向分子（如细胞因子抑制剂、免疫调节剂）的治疗潜力。

研究难点分析：
研究难点在于如何准确、高效地对T细胞亚群进行分型，以及如何建立可靠的体外或体内模型来验证靶向干预的有效性。此外，患者样本的获取和标准化处理，以及多组学数据的整合分析也具有挑战性。区分不同T细胞亚群在哮喘发病中的相对贡献，以及克服免疫治疗的耐受性问题也是关键难点。

相关文献：6篇（文献编号：11, 20, 21, 22, 35, 49）


选题方向2: 昼夜节律紊乱在哮喘发病及症状波动中的作用机制研究

研究价值：
哮喘症状常表现出明显的昼夜节律性波动，如夜间加重。本研究旨在揭示昼夜节律紊乱如何影响哮喘的发病机制和炎症反应，为开发基于时间医学的治疗策略提供新思路，例如优化用药时间，提高治疗效果。

研究内容概述：
本研究将探讨哮喘患者体内关键免疫细胞（如嗜酸性粒细胞、中性粒细胞）和炎症介质（如白三烯、细胞因子）的昼夜节律性变化，并分析其与患者睡眠质量、激素水平（如皮质醇）及症状严重程度的关系。同时，将利用动物模型，模拟昼夜节律紊乱，研究其对气道炎症、高反应性及重塑的影响，并探索调控昼夜节律相关基因或通路（如BMAL1, CLOCK）的潜在治疗价值。

研究难点分析：
研究难点在于精确测量和分析生物样本在不同时间点的变化，以及建立能够模拟昼夜节律紊乱的动物模型。同时，将复杂的昼夜节律调控网络与哮喘的炎症级联反应联系起来，并最终转化为临床治疗方案，具有相当的挑战性。

相关文献：5篇（文献编号：37, 41, 9, 30, 29）


选题方向3: 肥胖对哮喘糖皮质激素抵抗的分子机制及干预策略研究

研究价值：
肥胖是影响哮喘治疗效果的重要因素，特别是导致糖皮质激素抵抗。本研究旨在深入解析肥胖如何影响哮喘患者的糖皮质激素敏感性，并探索新的干预策略，以期改善肥胖哮喘患者的临床预后。

研究内容概述：
本研究将比较肥胖和非肥胖哮喘患者的气道炎症细胞浸润、细胞因子谱、代谢特征以及糖皮质激素受体表达和信号通路。重点研究脂肪组织来源的炎症因子（如脂联素、瘦素）、代谢产物（如脂肪酸）以及肠道菌群失调在介导糖皮质激素抵抗中的作用。在此基础上，探索靶向特定代谢通路或炎症因子的联合治疗方案，以恢复糖皮质激素的敏感性。

研究难点分析：
研究难点在于区分肥胖本身对哮喘的影响与糖皮质激素抵抗之间的因果关系，以及在临床上找到能够有效逆转糖皮质激素抵抗的干预措施。同时，需要整合多组学数据（基因组学、代谢组学、微生物组学）来全面理解复杂的相互作用。

相关文献：6篇（文献编号：46, 16, 18, 28, 3, 17）


选题方向4: 焦亡（Pyroptosis）在哮喘气道炎症和重塑中的作用及其作为治疗靶点的潜力

研究价值：
焦亡作为一种炎症性程序性细胞死亡，在多种炎症性疾病中扮演重要角色。本研究将聚焦于焦亡在哮喘发病机制中的具体作用，特别是其在气道炎症放大和组织重塑中的贡献，为开发基于焦亡抑制剂的创新治疗方法提供理论依据。

研究内容概述：
本研究将利用细胞模型和动物模型，研究哮喘状态下，气道上皮细胞、免疫细胞（如巨噬细胞、嗜酸性粒细胞）发生焦亡的机制，以及焦亡过程中释放的炎症因子（如IL-1β, IL-18）如何加剧气道炎症和促进气道重塑。同时，将评估不同焦亡抑制剂（如GSDM抑制剂）在缓解哮喘症状、减轻气道炎症和重塑方面的疗效。

研究难点分析：
研究难点在于准确检测和量化焦亡的发生，以及区分焦亡与其他细胞死亡方式（如凋亡）在哮喘发病中的作用。此外，开发特异性、高效且低毒性的焦亡抑制剂，并评估其在临床上的安全性和有效性，是主要的挑战。

相关文献：5篇（文献编号：43, 22, 30, 25, 9）


选题方向5: 哮喘与静脉血栓栓塞（VTE）的关联性及其潜在的免疫机制研究

研究价值：
研究表明哮喘与VTE风险增加相关，但其内在联系和机制尚不明确。本研究将系统评估哮喘与VTE的关联性，并深入探讨潜在的免疫学和炎症机制，为预防和治疗哮喘相关的血栓事件提供新的视角。

研究内容概述：
本研究将通过回顾性队列研究或荟萃分析，量化哮喘患者发生VTE（包括肺栓塞和深静脉血栓）的风险。在此基础上，将分析哮喘患者血液中促炎因子、促凝因子、内皮功能障碍标志物以及免疫细胞（如中性粒细胞、单核细胞）的水平变化，并探索哮喘特有的免疫反应（如Th2炎症、自身免疫）是否与血栓形成风险增加相关。研究还将关注哮喘治疗药物（如吸入性糖皮质激素、白三烯受体拮抗剂）对VTE风险的影响。

研究难点分析：
研究难点在于建立哮喘与VTE之间的因果关系，而非仅仅是相关性。需要控制混杂因素，并设计合理的实验来揭示潜在的免疫和炎症机制。此外，评估药物对VTE风险的影响需要大规模的临床数据和严谨的统计分析。

相关文献：5篇（文献编号：40, 20, 22, 30, 9）


选题方向6: 咳嗽变异性哮喘（CVA）的中医证候与现代免疫学机制的整合研究

研究价值：
咳嗽变异性哮喘是哮喘的一种特殊类型，其在中医理论中有明确的证候分类。本研究旨在将中医证候学与现代免疫学相结合，深入揭示CVA的发病机制，为中西医结合治疗CVA提供更坚实的科学基础。

研究内容概述：
本研究将首先对CVA患者进行中医证候分型，并收集相关临床数据。随后，利用免疫学技术（如细胞因子检测、免疫细胞表型分析）分析不同中医证候CVA患者的免疫学特征差异，例如Th1/Th2平衡、气道炎症细胞浸润情况等。研究还将探索中医方剂或单味中药对CVA模型动物或体外细胞模型中特定免疫通路的影响，以期阐明其疗效的免疫学基础。

研究难点分析：
研究难点在于如何将中医证候的辨识标准化、客观化，并与现代免疫学指标建立可靠的关联。同时，设计能够有效模拟CVA病理生理过程的动物或体外模型，并验证中药的疗效和机制，也是一项挑战。

相关文献：7篇（文献编号：4, 5, 8, 12, 15, 2, 39）</pre>
                        </div>
                    </div>
                    
                    <div class="rule-item" style="margin-top: 20px;">
                        <strong>文献参考表格（真实数据）：</strong>
                        <div class="rule-text" style="margin-top: 8px; margin-bottom: 12px;">
                            系统从文献库中检索并生成了完整的文献参考表格，包含49篇相关文献，每篇文献包含：序号、文献名称、年份、作者、期刊、期刊等级、被引用次数、文献链接。
                        </div>
                        <div class="rule-text" style="font-size: 13px; color: #666; margin-left: 20px;">
                            示例文献（前5篇）：
                            <ul style="margin-top: 8px; padding-left: 20px;">
                                <li>1. 吸入沙美特罗替卡松干粉剂与联合吸入两种干粉剂治疗成人哮喘的疗效和安全性的对照研究 (2002, 钟南山等, book, 被引用149次)</li>
                                <li>2. 小儿哮喘的免疫学发病机制及其对策 (2001, 杨锡强, book, 被引用98次)</li>
                                <li>3. 普米克气雾剂治疗儿童哮喘疗效观察 (2000, 陈强等, 中国当代儿科, 被引用93次)</li>
                                <li>4. 咳嗽变异性哮喘的中医证候学研究 (2021, 罗社文等, 现代中医临床, 中国科技核心, 被引用69次)</li>
                                <li>5. 中西医结合防治支气管哮喘的探讨 (1995, 沈自尹, 中国中西医结合杂志, CSCD/北大中文核心/中国科技核心, 被引用63次)</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="rule-item" style="margin-top: 20px;">
                        <strong>验证要点（基于真实运行结果）：</strong>
                        <ul style="margin-top: 8px;">
                            <li><strong>选题数量：</strong>返回6个选题建议，每个选题都包含完整的4个部分（研究价值、研究内容概述、研究难点分析、相关文献）</li>
                            <li><strong>选题质量：</strong>选题标题清晰明确，符合"投稿sci期刊"的写作目标，适合医生角色的研究能力水平</li>
                            <li><strong>研究方法匹配：</strong>选题内容围绕"哮喘"这一核心关键词，研究方法为"问卷"，选题设计符合问卷研究方法的要求</li>
                            <li><strong>选题多样性：</strong>6个选题从不同角度和侧重点展开（T细胞亚群、昼夜节律、肥胖与糖皮质激素抵抗、焦亡、VTE关联、中医证候），避免重复</li>
                            <li><strong>文献引用：</strong>系统从文献库中为每个选题检索并推荐5-7篇相关文献，每个选题的文献编号对应文献参考表格中的具体文献</li>
                            <li><strong>文献参考表格：</strong>提供完整的文献参考表格，包含49篇相关文献，每篇文献包含：序号、文献名称、年份、作者、期刊、期刊等级、被引用次数、文献链接</li>
                            <li><strong>内容质量：</strong>所有文字表述专业、准确、规范，符合学术写作要求，研究价值、研究内容、研究难点分析内容充实</li>
                            <li><strong>个性化匹配：</strong>选题充分考虑用户角色（医生）、研究领域（医学 > 基础医学 > 免疫学）、写作目标（投稿sci期刊）和研究方法（问卷）的要求</li>
                            <li><strong>缓存机制：</strong>相同输入参数的请求结果被正确缓存，后续相同输入直接返回缓存结果，不再调用LLM API，节约token成本。如果不清除缓存，每次生成的结果都是一样的，验证成本控制效果</li>
                            <li><strong>"换个思路"功能：</strong>界面上"换个思路"按钮（🔄）功能正常，点击后能够清除对应缓存，可以更换LLM模型并重新调用LLM API生成新的结果</li>
                            <li><strong>"换个思路"交互流程：</strong>
                                <ul style="margin-top: 8px; padding-left: 20px;">
                                    <li>点击"换个思路"按钮后，系统显示确认提示</li>
                                    <li>用户确认后，系统清除缓存并显示提示信息（"🔄 已清除缓存，正在更换模型并重新生成..."）</li>
                                    <li>系统可以更换LLM模型（如从GPT-4切换到Claude、文心一言等）</li>
                                    <li>系统重新调用LLM API生成新的结果，用户返回查看结果步骤</li>
                                    <li>如果用户仍不满意，可以再次点击"换个思路"，形成循环流程</li>
                                </ul>
                            </li>
                            <li><strong>LLM模型切换：</strong>点击"换个思路"后，系统支持更换不同的LLM模型（如GPT-4、Claude、文心一言、通义千问等），利用不同模型的特点和优势生成多样化的选题建议，验证模型切换功能</li>
                            <li><strong>循环流程验证：</strong>用户可以多次使用"换个思路"功能，每次都能清除缓存、更换模型并重新生成，形成完整的循环流程，直到获得满意的结果</li>
                            <li><strong>成本控制验证：</strong>相同输入参数在不清除缓存的情况下，只调用一次LLM API，后续请求直接返回缓存，验证token成本节约效果。只有在用户主动选择"换个思路"时才会产生新的API调用成本</li>
                            <li><strong>缓存键验证：</strong>验证缓存键生成规则，确保相同输入参数和相同模型生成相同的缓存键，不同模型或不同输入参数生成不同的缓存键</li>
                            <li><strong>用户反馈功能：</strong>界面上"您感觉本次AI选题的结果如何?"反馈功能正常，用户可以选择"很好"、"一般"或"不满意"</li>
                            <li><strong>反馈记录：</strong>系统正确记录用户反馈，特别是"一般"和"不满意"的反馈，用于数据分析和质量改进</li>
                            <li><strong>反馈引导：</strong>当用户选择"一般"或"不满意"时，系统自动显示引导提示，引导用户使用"换个思路"功能，包含引导文字和"去换个思路"按钮</li>
                            <li><strong>引导交互：</strong>点击"去换个思路"按钮后，系统自动滚动到"换个思路"按钮并高亮显示，用户可以继续使用"换个思路"功能</li>
                            <li><strong>反馈流程：</strong>验证完整的反馈引导流程：提交反馈 → 记录反馈 → 显示引导（如为一般/不满意） → 引导使用"换个思路" → 用户使用"换个思路" → 重新生成结果 → 再次反馈（循环）</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.research-ai-selection-page {
    padding: 24px;
    max-width: 1200px;
    margin: 0 auto;
}

.research-header {
    text-align: center;
    margin-bottom: 32px;
}

.research-title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 12px;
}

.research-icon {
    font-size: 32px;
}

.research-title {
    font-size: 28px;
    font-weight: 600;
    margin: 0;
    color: #1a1a1a;
}


.research-subtitle {
    font-size: 16px;
    color: #666;
    margin: 0;
}

.research-search-section {
    margin-bottom: 32px;
}

.research-search-box {
    display: flex;
    align-items: center;
    background: #fff;
    border: 2px solid #e8e8e8;
    border-radius: 12px;
    padding: 12px 16px;
    transition: border-color 0.3s;
}

.research-search-box:focus-within {
    border-color: #1890ff;
}

.research-search-input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 8px 0;
}

.research-search-actions {
    display: flex;
    gap: 8px;
    align-items: center;
}

.research-voice-btn,
.research-search-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    padding: 8px;
    border-radius: 6px;
    transition: background 0.2s;
}

.research-voice-btn:hover,
.research-search-btn:hover {
    background: #f5f5f5;
}

.research-config-section {
    background: #f5f5f5;
    border-radius: 12px;
    padding: 20px;
    margin-bottom: 32px;
}

.research-config-header {
    margin-bottom: 16px;
}

.research-config-tip {
    font-size: 15px;
    color: #666;
    margin: 0;
    line-height: 1.6;
}

.research-config-content {
    background: #fff;
    border-radius: 8px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.research-config-row {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    flex-wrap: wrap;
}

.research-config-item {
    display: flex;
    align-items: center;
    gap: 8px;
    flex-wrap: wrap;
    flex: 1;
    min-width: 200px;
}

.config-label {
    font-size: 15px;
    color: #333;
    white-space: nowrap;
}

.config-select {
    padding: 8px 12px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 14px;
    min-width: 160px;
    background: #fff;
    cursor: pointer;
    transition: border-color 0.2s;
    color: #333;
}

.config-select:hover {
    border-color: #40a9ff;
}

.config-select:focus {
    outline: none;
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
}

.config-multi-select {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
}

.config-punctuation {
    font-size: 15px;
    color: #333;
}

.config-checkbox-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 14px;
    color: #333;
}

.config-checkbox-label input[type="checkbox"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
}

/* 提示信息区域 */
.research-tip-section {
    margin-bottom: 20px;
}

.research-tip-box {
    background: #e6f7ff;
    border: 1px solid #91d5ff;
    border-radius: 8px;
    padding: 12px 16px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.research-tip-icon {
    font-size: 18px;
}

.research-tip-text {
    font-size: 14px;
    color: #1890ff;
    line-height: 1.6;
}

.research-results-section {
    background: #fff;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.research-results-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    flex-wrap: wrap;
    gap: 12px;
}

.research-results-title {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: #1a1a1a;
}

/* 换个思路按钮 */
.research-clear-cache-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    background: #fff;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    color: #666;
    transition: all 0.3s;
}

.research-clear-cache-btn:hover {
    border-color: #1890ff;
    color: #1890ff;
    background: #f0f8ff;
    transform: rotate(180deg);
}

.research-clear-cache-btn:active {
    border-color: #096dd9;
    color: #096dd9;
}

.clear-cache-icon {
    font-size: 16px;
    transition: transform 0.3s;
}

.research-clear-cache-btn:hover .clear-cache-icon {
    animation: rotate 1s linear infinite;
}

@keyframes rotate {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}

.clear-cache-text {
    font-weight: 500;
}

/* 用户反馈区域 */
.research-feedback-section {
    margin-top: 32px;
    padding-top: 24px;
    border-top: 1px solid #e8e8e8;
}

.research-feedback-title {
    font-size: 15px;
    font-weight: 500;
    color: #333;
    margin-bottom: 16px;
    text-align: center;
}

.research-feedback-buttons {
    display: flex;
    justify-content: center;
    gap: 16px;
    flex-wrap: wrap;
}

.feedback-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
    padding: 12px 24px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    background: #fff;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 14px;
    color: #666;
    min-width: 100px;
}

.feedback-btn:hover {
    border-color: #1890ff;
    background: #f0f8ff;
    color: #1890ff;
}

.feedback-btn .feedback-icon {
    font-size: 24px;
}

.feedback-positive:hover {
    border-color: #52c41a;
    background: #f6ffed;
    color: #52c41a;
}

.feedback-negative:hover {
    border-color: #ff4d4f;
    background: #fff1f0;
    color: #ff4d4f;
}

.research-feedback-thanks {
    text-align: center;
    color: #52c41a;
    font-size: 14px;
    margin-top: 12px;
    font-weight: 500;
}

/* 反馈引导区域 */
.research-feedback-guide {
    margin-top: 20px;
    padding: 16px;
    background: linear-gradient(135deg, #fff7e6 0%, #fffbe6 100%);
    border: 1px solid #ffe58f;
    border-radius: 8px;
    border-left: 4px solid #faad14;
}

.feedback-guide-content {
    display: flex;
    align-items: flex-start;
    gap: 12px;
}

.feedback-guide-icon {
    font-size: 24px;
    flex-shrink: 0;
}

.feedback-guide-text {
    flex: 1;
}

.feedback-guide-title {
    font-size: 15px;
    font-weight: 600;
    color: #d46b08;
    margin-bottom: 8px;
}

.feedback-guide-desc {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 12px;
}

.feedback-guide-btn {
    padding: 8px 20px;
    background: linear-gradient(135deg, #faad14 0%, #d48806 100%);
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: 0 2px 4px rgba(250, 173, 20, 0.3);
}

.feedback-guide-btn:hover {
    background: linear-gradient(135deg, #d48806 0%, #ad6800 100%);
    box-shadow: 0 4px 8px rgba(250, 173, 20, 0.4);
    transform: translateY(-1px);
}

.feedback-guide-btn:active {
    transform: translateY(0);
}

@keyframes pulse {
    0%, 100% {
        box-shadow: 0 0 0 0 rgba(24, 144, 255, 0.7);
    }
    50% {
        box-shadow: 0 0 0 10px rgba(24, 144, 255, 0);
    }
}

.research-results-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

/* AI选题运算规则区域 */
.ai-selection-rules-section {
    margin-top: 60px;
    padding: 0;
    background: linear-gradient(135deg, #f0f8ff 0%, #e6f7ff 100%);
    border-radius: 12px;
    border: 2px solid #1890ff;
    box-shadow: 0 4px 12px rgba(24, 144, 255, 0.15);
    position: relative;
    overflow: hidden;
}

.ai-selection-rules-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #1890ff 0%, #096dd9 50%, #1890ff 100%);
}

.rules-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 16px;
    padding: 24px 24px 16px 24px;
    background: #fff;
    border-bottom: 2px dashed #e6f7ff;
}

.rules-title-wrapper {
    flex: 1;
}

.rules-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 12px;
    background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
    color: #fff;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 12px;
    box-shadow: 0 2px 4px rgba(24, 144, 255, 0.3);
}

.rules-title {
    font-size: 20px;
    font-weight: 600;
    color: #1890ff;
    margin: 0 0 8px 0;
    display: flex;
    align-items: center;
    gap: 8px;
}

.rules-title::before {
    content: '📋';
    font-size: 24px;
}

.rules-subtitle {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin: 0;
    padding: 12px;
    background: #f0f8ff;
    border-left: 3px solid #1890ff;
    border-radius: 4px;
}


.rules-toggle-btn {
    background: #fff;
    color: #1890ff;
    border: 1px solid #1890ff;
    padding: 8px 16px;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    transition: all 0.3s;
    flex-shrink: 0;
    white-space: nowrap;
}

.rules-toggle-btn:hover {
    background: #1890ff;
    color: #fff;
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.3);
}

.rules-content {
    padding: 24px;
    background: #fff;
}

.rule-section {
    margin-bottom: 32px;
    padding: 20px;
    background: #fafafa;
    border-radius: 8px;
    border-left: 4px solid #1890ff;
    transition: all 0.3s;
}

.rule-section:hover {
    background: #f5f5f5;
    box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.rule-section:last-child {
    margin-bottom: 0;
}

.rule-section-title {
    font-size: 17px;
    font-weight: 600;
    color: #1890ff;
    margin: 0 0 16px 0;
    padding-bottom: 10px;
    border-bottom: 2px solid #e6f7ff;
    display: flex;
    align-items: center;
    gap: 8px;
}

.rule-section-title::before {
    content: '▸';
    color: #1890ff;
    font-size: 18px;
}

.rule-subsection {
    margin-bottom: 20px;
    padding-left: 20px;
}

.rule-subsection-title {
    font-size: 15px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 10px 0;
}

.rule-text {
    font-size: 14px;
    color: #666;
    line-height: 1.8;
    margin: 0 0 12px 0;
}

.rule-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.rule-item {
    font-size: 14px;
    color: #333;
    line-height: 1.8;
}

.rule-item strong {
    color: #1a1a1a;
    font-weight: 600;
}

.rule-item ul {
    margin: 8px 0 0 20px;
    padding: 0;
}

.rule-item li {
    margin-bottom: 6px;
    line-height: 1.6;
}

/* 代码块样式 */
.code-block {
    background: #2d2d2d;
    border-radius: 6px;
    overflow: hidden;
    margin: 12px 0;
}

.code-header {
    background: #1e1e1e;
    padding: 8px 12px;
    font-size: 12px;
    color: #999;
    border-bottom: 1px solid #3d3d3d;
}

.code-content {
    padding: 16px;
    margin: 0;
    font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
    font-size: 13px;
    line-height: 1.6;
    color: #d4d4d4;
    overflow-x: auto;
    white-space: pre-wrap;
    word-wrap: break-word;
}

/* 流程图样式 */
.flow-diagram {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    margin: 20px 0;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #e8e8e8;
}

.flow-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    min-width: 100px;
}

.flow-number {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #1890ff;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 14px;
}

.flow-text {
    font-size: 13px;
    color: #666;
    text-align: center;
}

.flow-arrow {
    font-size: 20px;
    color: #1890ff;
    font-weight: bold;
}

@media (max-width: 768px) {
    .flow-diagram {
        flex-direction: column;
    }
    
    .flow-arrow {
        transform: rotate(90deg);
    }
}

/* 用户路径流程图样式 */
.user-flow-diagram {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    margin: 24px 0;
    padding: 24px;
    background: #fafafa;
    border-radius: 12px;
    border: 1px solid #e8e8e8;
}

.flow-step-large {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    min-width: 140px;
    max-width: 180px;
    padding: 16px;
    background: #fff;
    border-radius: 8px;
    border: 1px solid #e8e8e8;
    transition: all 0.3s;
}

.flow-step-large:hover {
    border-color: #1890ff;
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.15);
}

.flow-step-optional {
    border-color: #faad14;
    background: #fffbe6;
}

.flow-step-optional:hover {
    border-color: #faad14;
    box-shadow: 0 2px 8px rgba(250, 173, 20, 0.2);
}

.flow-step-optional .flow-number-large {
    background: linear-gradient(135deg, #faad14 0%, #d48806 100%);
}

.flow-arrow-optional {
    color: #faad14;
}

.flow-step-branch {
    border-color: #1890ff;
    background: #e6f7ff;
}

.flow-step-branch:hover {
    border-color: #1890ff;
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.2);
}

.flow-step-branch .flow-number-large {
    background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
}

.flow-number-large {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-size: 18px;
    box-shadow: 0 2px 4px rgba(24, 144, 255, 0.3);
}

.flow-content {
    text-align: center;
}

.flow-title {
    font-size: 15px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 6px;
}

.flow-desc {
    font-size: 13px;
    color: #666;
    line-height: 1.5;
}

.flow-arrow-large {
    font-size: 24px;
    color: #1890ff;
    font-weight: bold;
    flex-shrink: 0;
}

@media (max-width: 768px) {
    .user-flow-diagram {
        flex-direction: column;
    }
    
    .flow-arrow-large {
        transform: rotate(90deg);
    }
    
    .flow-step-large {
        max-width: 100%;
    }
}

.research-result-item {
    padding: 16px;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    transition: all 0.2s;
}

.research-result-item:hover {
    border-color: #1890ff;
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.1);
}

/* 选题结果项样式 */
.research-result-item {
    background: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 24px;
    transition: all 0.3s;
    box-shadow: 0 2px 4px rgba(0,0,0,0.04);
}

.research-result-item:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    border-color: #1890ff;
}

.research-result-item-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 16px;
    padding-bottom: 16px;
    border-bottom: 2px solid #f0f0f0;
}

.result-item-number {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #1890ff 0%, #096dd9 100%);
    color: #fff;
    border-radius: 50%;
    font-weight: 600;
    font-size: 16px;
    margin-right: 12px;
    flex-shrink: 0;
}

.result-item-title-wrapper {
    flex: 1;
}

.result-item-title {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 8px 0;
    line-height: 1.5;
}

.result-item-title-en {
    font-size: 15px;
    color: #666;
    font-style: italic;
    margin: 0;
    line-height: 1.5;
}

.result-item-section {
    margin-bottom: 20px;
}

.result-item-section-title {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-weight: 600;
    color: #1890ff;
    margin-bottom: 10px;
    padding-bottom: 6px;
    border-bottom: 1px solid #e6f7ff;
}

.result-item-section-icon {
    font-size: 16px;
}

.result-item-section-content {
    font-size: 14px;
    color: #333;
    line-height: 1.8;
    text-align: justify;
    margin: 0;
}

.result-item-literature {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 8px;
}

.result-item-literature-link {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    background: #f0f8ff;
    border: 1px solid #91d5ff;
    border-radius: 4px;
    color: #1890ff;
    font-size: 13px;
    text-decoration: none;
    transition: all 0.3s;
    cursor: pointer;
}

.result-item-literature-link:hover {
    background: #e6f7ff;
    border-color: #1890ff;
    color: #096dd9;
}

.result-item-literature-count {
    font-size: 13px;
    color: #666;
    margin-left: 8px;
}

/* 文献参考表格样式 */
.research-literature-table-section {
    margin-top: 32px;
    padding-top: 24px;
    border-top: 2px solid #e8e8e8;
}

.literature-table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}

.literature-table-title {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
}

.literature-table-count {
    font-size: 14px;
    color: #666;
    background: #f5f5f5;
    padding: 4px 12px;
    border-radius: 12px;
}

.literature-table-container {
    overflow-x: auto;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    background: #fff;
}

.literature-table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
}

.literature-table thead {
    background: #fafafa;
}

.literature-table th {
    padding: 12px 16px;
    text-align: left;
    font-weight: 600;
    color: #1a1a1a;
    border-bottom: 2px solid #e8e8e8;
    white-space: nowrap;
}

.literature-table td {
    padding: 12px 16px;
    border-bottom: 1px solid #f0f0f0;
    color: #333;
}

.literature-table tbody tr:hover {
    background: #fafafa;
}

.literature-table tbody tr:last-child td {
    border-bottom: none;
}

.col-index {
    width: 60px;
    text-align: center;
}

.col-title {
    min-width: 300px;
}

.col-author {
    min-width: 150px;
}

.col-journal {
    min-width: 150px;
}

.col-year {
    width: 80px;
    text-align: center;
}

.col-level {
    min-width: 120px;
}

.col-citation {
    width: 100px;
    text-align: center;
}

.col-link {
    width: 80px;
    text-align: center;
}

.literature-link-btn {
    display: inline-flex;
    align-items: center;
    padding: 4px 10px;
    background: #1890ff;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 12px;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s;
}

.literature-link-btn:hover {
    background: #096dd9;
}

@media (max-width: 768px) {
    .research-result-item-header {
        flex-direction: column;
    }
    
    .result-item-number {
        margin-bottom: 8px;
    }
    
    .literature-table-container {
        font-size: 12px;
    }
    
    .literature-table th,
    .literature-table td {
        padding: 8px;
    }
}
</style>

<script>
// 研究领域数据（从实际网页读取）
// 将数据定义在全局作用域，确保可以被初始化函数访问
if (typeof window.researchFieldsData === 'undefined') {
    window.researchFieldsData = {
    '医学': {
        '基础医学': ['人体解剖和组织胚胎学', '免疫学', '病原生物学', '病理学与病理生理学', '法医学', '放射医学', '航空', '航天与航海医学', '其他'],
        '临床医学': ['内科学', '儿科学', '老年医学', '神经病学', '精神病与精神卫生学', '皮肤病与性病学', '影像医学与核医学', '临床检验诊断学', '护理学', '外科学', '妇产科学', '眼科学', '耳鼻咽喉科学', '肿瘤学', '康复医学与理疗学', '运动医学', '麻醉学', '急诊医学', '其他'],
        '口腔医学': ['口腔基础医学', '口腔临床医学', '其他'],
        '公共卫生与预防医学': ['流行病与卫生统计学', '劳动卫生与环境卫生学', '营养与食品卫生学', '儿少卫生与妇幼保健学', '卫生毒理学', '军事预防医学', '其他'],
        '中医学': ['中医基础理论', '中医临床基础', '中医医史文献', '方剂学', '中医诊断学', '中医内科学', '中医外科学', '中医骨伤科学', '中医妇科学', '中医儿科学', '中医五官科学', '针灸推拿学', '民族医学（含：藏医学、蒙医学等）', '其他'],
        '中西医结合': ['中西医结合基础', '中西医结合临床', '其他'],
        '药学': ['药物化学', '药剂学', '生药学', '药物分析学', '微生物与生化药学', '药理学', '其他'],
        '中药学': ['中药学', '其他'],
        '特种医学': ['航空与航天医学', '航海与潜水医学', '放射与辐射医学', '运动医学', '职业病学', '法医学', '其他'],
        '医学技术': ['医学技术', '其他'],
        '护理学': ['基础护理学', '临床护理学', '社区和家庭护理学', '护理心理和人文学', '其他'],
        '医药学': ['基础医学', '临床医学', '口腔医学', '公共卫生与预防医学', '中医学', '中西医结合', '药学', '中药学', '特种医学', '医学技术', '护理学', '其他'],
        '其他': ['其他']
    },
    '工学': {
        '其他': ['其他']
    },
    '理学': {
        '其他': ['其他']
    },
    '农学': {
        '其他': ['其他']
    },
    '经济学': {
        '其他': ['其他']
    },
    '教育学': {
        '其他': ['其他']
    },
    '文学': {
        '其他': ['其他']
    },
    '法学': {
        '其他': ['其他']
    },
    '艺术学': {
        '其他': ['其他']
    },
    '管理学': {
        '其他': ['其他']
    },
    '历史学': {
        '其他': ['其他']
    },
    '哲学': {
        '其他': ['其他']
    },
    '军事学': {
        '其他': ['其他']
    },
    '交叉学科': {
        '其他': ['其他']
    },
        '其他': {
            '其他': ['其他']
        }
    };
}

function performAISelection() {
    // 预设案例参数（用于原型演示）
    const presetParams = {
        keyword: '哮喘',
        userRole: '医生',
        researchField1: '医学',
        researchField2: '基础医学',
        researchField3: '免疫学',
        writingGoal: '投稿sci期刊',
        researchMethod: '问卷'
    };
    
    // 如果输入框为空，自动填充预设参数
    const keywordInput = document.getElementById('aiSelectionKeyword');
    const userRoleSelect = document.getElementById('userRole');
    const researchField1Select = document.getElementById('researchField1');
    const researchField2Select = document.getElementById('researchField2');
    const researchField3Select = document.getElementById('researchField3');
    const writingGoalSelect = document.getElementById('writingGoal');
    const researchMethodSelect = document.getElementById('researchMethod');
    
    if (!keywordInput.value.trim()) {
        // 填充预设参数
        keywordInput.value = presetParams.keyword;
        userRoleSelect.value = presetParams.userRole;
        researchField1Select.value = presetParams.researchField1;
        writingGoalSelect.value = presetParams.writingGoal;
        researchMethodSelect.value = presetParams.researchMethod;
        
        // 触发研究领域联动
        if (researchField1Select.value) {
            researchField2Select.disabled = false;
            const level2Fields = window.researchFieldsData[presetParams.researchField1] || {};
            researchField2Select.innerHTML = '<option>请选择二级研究领域</option>' + 
                Object.keys(level2Fields).map(field => \`<option value="\${field}">\${field}</option>\`).join('');
            
            // 设置二级研究领域
            setTimeout(() => {
                researchField2Select.value = presetParams.researchField2;
                
                // 触发三级研究领域联动
                if (researchField2Select.value && researchField1Select.value) {
                    const level3Fields = window.researchFieldsData[researchField1Select.value]?.[researchField2Select.value] || [];
                    if (level3Fields.length > 0) {
                        researchField3Select.disabled = false;
                        researchField3Select.innerHTML = '<option>请选择三级研究领域</option>' + 
                            level3Fields.map(field => \`<option value="\${field}">\${field}</option>\`).join('');
                        
                        // 设置三级研究领域
                        setTimeout(() => {
                            researchField3Select.value = presetParams.researchField3;
                        }, 100);
                    }
                }
            }, 100);
        }
    }
    
    // 获取参数值（使用预设值或用户输入的值）
    const keyword = keywordInput.value || presetParams.keyword;
    const userRole = userRoleSelect.value || presetParams.userRole;
    const researchField1 = researchField1Select.value || presetParams.researchField1;
    const researchField2 = researchField2Select.value || presetParams.researchField2;
    const researchField3 = researchField3Select.value || presetParams.researchField3;
    const writingGoal = writingGoalSelect.value || presetParams.writingGoal;
    const researchMethod = researchMethodSelect.value || presetParams.researchMethod;
    
    if (!keyword.trim()) {
        alert('请输入选题方向的核心关键词');
        return;
    }
    
    // 隐藏提示信息
    const tipSection = document.getElementById('researchTipSection');
    if (tipSection) {
        tipSection.style.display = 'none';
    }
    
    // 显示加载状态
    const resultsSection = document.getElementById('aiSelectionResults');
    const resultsList = document.getElementById('aiSelectionResultsList');
    resultsSection.style.display = 'block';
    resultsList.innerHTML = '<div style="text-align: center; padding: 40px; color: #999;">正在生成选题建议...</div>';
    
    // 隐藏反馈区域（如果之前显示过）
    const feedbackSection = document.getElementById('researchFeedbackSection');
    if (feedbackSection) {
        feedbackSection.style.display = 'none';
    }
    
    // 模拟AI选题结果（实际应该调用后端API）
    setTimeout(() => {
        // 基于真实数据的模拟结果（使用预设参数：哮喘、医生、医学>基础医学>免疫学、投稿sci期刊、问卷）
        const mockResults = [
            {
                title: '哮喘异质性与精准治疗：基于T细胞亚群的表型分型及靶向干预研究',
                titleEn: 'Asthma Heterogeneity and Precision Therapy: Phenotypic Classification and Targeted Intervention Based on T Cell Subsets',
                researchValue: '深入理解哮喘的异质性是实现精准治疗的关键。本选题聚焦于T细胞在不同哮喘亚型（如T2-high和T2-low）发病机制中的作用，旨在通过对T细胞亚群的精细分型，为开发更具针对性的靶向治疗策略提供理论基础和实验依据，有望突破现有治疗瓶颈。',
                researchContent: '本研究将利用高通量测序、流式细胞术等技术，对不同哮喘患者（包括重症、难治性哮喘）外周血和支气管活检样本中的T细胞亚群进行深入分析，重点关注Th1, Th2, Th17, Treg等细胞的比例、功能及信号通路。在此基础上，探索不同T细胞表型与临床特征、药物反应性的关联，并初步评估针对特定T细胞亚群的靶向分子（如细胞因子抑制剂、免疫调节剂）的治疗潜力。',
                researchDifficulty: '研究难点在于如何准确、高效地对T细胞亚群进行分型，以及如何建立可靠的体外或体内模型来验证靶向干预的有效性。此外，患者样本的获取和标准化处理，以及多组学数据的整合分析也具有挑战性。区分不同T细胞亚群在哮喘发病中的相对贡献，以及克服免疫治疗的耐受性问题也是关键难点。',
                literatureRefs: [11, 20, 21, 22, 35, 49]
            },
            {
                title: '昼夜节律紊乱在哮喘发病及症状波动中的作用机制研究',
                titleEn: 'Mechanism of Circadian Rhythm Disruption in Asthma Pathogenesis and Symptom Fluctuation',
                researchValue: '哮喘症状常表现出明显的昼夜节律性波动，如夜间加重。本研究旨在揭示昼夜节律紊乱如何影响哮喘的发病机制和炎症反应，为开发基于时间医学的治疗策略提供新思路，例如优化用药时间，提高治疗效果。',
                researchContent: '本研究将探讨哮喘患者体内关键免疫细胞（如嗜酸性粒细胞、中性粒细胞）和炎症介质（如白三烯、细胞因子）的昼夜节律性变化，并分析其与患者睡眠质量、激素水平（如皮质醇）及症状严重程度的关系。同时，将利用动物模型，模拟昼夜节律紊乱，研究其对气道炎症、高反应性及重塑的影响，并探索调控昼夜节律相关基因或通路（如BMAL1, CLOCK）的潜在治疗价值。',
                researchDifficulty: '研究难点在于精确测量和分析生物样本在不同时间点的变化，以及建立能够模拟昼夜节律紊乱的动物模型。同时，将复杂的昼夜节律调控网络与哮喘的炎症级联反应联系起来，并最终转化为临床治疗方案，具有相当的挑战性。',
                literatureRefs: [37, 41, 9, 30, 29]
            },
            {
                title: '肥胖对哮喘糖皮质激素抵抗的分子机制及干预策略研究',
                titleEn: 'Molecular Mechanism of Obesity-Induced Glucocorticoid Resistance in Asthma and Intervention Strategies',
                researchValue: '肥胖是影响哮喘治疗效果的重要因素，特别是导致糖皮质激素抵抗。本研究旨在深入解析肥胖如何影响哮喘患者的糖皮质激素敏感性，并探索新的干预策略，以期改善肥胖哮喘患者的临床预后。',
                researchContent: '本研究将比较肥胖和非肥胖哮喘患者的气道炎症细胞浸润、细胞因子谱、代谢特征以及糖皮质激素受体表达和信号通路。重点研究脂肪组织来源的炎症因子（如脂联素、瘦素）、代谢产物（如脂肪酸）以及肠道菌群失调在介导糖皮质激素抵抗中的作用。在此基础上，探索靶向特定代谢通路或炎症因子的联合治疗方案，以恢复糖皮质激素的敏感性。',
                researchDifficulty: '研究难点在于区分肥胖本身对哮喘的影响与糖皮质激素抵抗之间的因果关系，以及在临床上找到能够有效逆转糖皮质激素抵抗的干预措施。同时，需要整合多组学数据（基因组学、代谢组学、微生物组学）来全面理解复杂的相互作用。',
                literatureRefs: [46, 16, 18, 28, 3, 17]
            },
            {
                title: '焦亡（Pyroptosis）在哮喘气道炎症和重塑中的作用及其作为治疗靶点的潜力',
                titleEn: 'Role of Pyroptosis in Asthma Airway Inflammation and Remodeling and Its Potential as a Therapeutic Target',
                researchValue: '焦亡作为一种炎症性程序性细胞死亡，在多种炎症性疾病中扮演重要角色。本研究将聚焦于焦亡在哮喘发病机制中的具体作用，特别是其在气道炎症放大和组织重塑中的贡献，为开发基于焦亡抑制剂的创新治疗方法提供理论依据。',
                researchContent: '本研究将利用细胞模型和动物模型，研究哮喘状态下，气道上皮细胞、免疫细胞（如巨噬细胞、嗜酸性粒细胞）发生焦亡的机制，以及焦亡过程中释放的炎症因子（如IL-1β, IL-18）如何加剧气道炎症和促进气道重塑。同时，将评估不同焦亡抑制剂（如GSDM抑制剂）在缓解哮喘症状、减轻气道炎症和重塑方面的疗效。',
                researchDifficulty: '研究难点在于准确检测和量化焦亡的发生，以及区分焦亡与其他细胞死亡方式（如凋亡）在哮喘发病中的作用。此外，开发特异性、高效且低毒性的焦亡抑制剂，并评估其在临床上的安全性和有效性，是主要的挑战。',
                literatureRefs: [43, 22, 30, 25, 9]
            },
            {
                title: '哮喘与静脉血栓栓塞（VTE）的关联性及其潜在的免疫机制研究',
                titleEn: 'Association between Asthma and Venous Thromboembolism (VTE) and Its Potential Immune Mechanisms',
                researchValue: '研究表明哮喘与VTE风险增加相关，但其内在联系和机制尚不明确。本研究将系统评估哮喘与VTE的关联性，并深入探讨潜在的免疫学和炎症机制，为预防和治疗哮喘相关的血栓事件提供新的视角。',
                researchContent: '本研究将通过回顾性队列研究或荟萃分析，量化哮喘患者发生VTE（包括肺栓塞和深静脉血栓）的风险。在此基础上，将分析哮喘患者血液中促炎因子、促凝因子、内皮功能障碍标志物以及免疫细胞（如中性粒细胞、单核细胞）的水平变化，并探索哮喘特有的免疫反应（如Th2炎症、自身免疫）是否与血栓形成风险增加相关。研究还将关注哮喘治疗药物（如吸入性糖皮质激素、白三烯受体拮抗剂）对VTE风险的影响。',
                researchDifficulty: '研究难点在于建立哮喘与VTE之间的因果关系，而非仅仅是相关性。需要控制混杂因素，并设计合理的实验来揭示潜在的免疫和炎症机制。此外，评估药物对VTE风险的影响需要大规模的临床数据和严谨的统计分析。',
                literatureRefs: [40, 20, 22, 30, 9]
            },
            {
                title: '咳嗽变异性哮喘（CVA）的中医证候与现代免疫学机制的整合研究',
                titleEn: 'Integrative Study of Traditional Chinese Medicine Syndromes and Modern Immunological Mechanisms in Cough Variant Asthma (CVA)',
                researchValue: '咳嗽变异性哮喘是哮喘的一种特殊类型，其在中医理论中有明确的证候分类。本研究旨在将中医证候学与现代免疫学相结合，深入揭示CVA的发病机制，为中西医结合治疗CVA提供更坚实的科学基础。',
                researchContent: '本研究将首先对CVA患者进行中医证候分型，并收集相关临床数据。随后，利用免疫学技术（如细胞因子检测、免疫细胞表型分析）分析不同中医证候CVA患者的免疫学特征差异，例如Th1/Th2平衡、气道炎症细胞浸润情况等。研究还将探索中医方剂或单味中药对CVA模型动物或体外细胞模型中特定免疫通路的影响，以期阐明其疗效的免疫学基础。',
                researchDifficulty: '研究难点在于如何将中医证候的辨识标准化、客观化，并与现代免疫学指标建立可靠的关联。同时，设计能够有效模拟CVA病理生理过程的动物或体外模型，并验证中药的疗效和机制，也是一项挑战。',
                literatureRefs: [4, 5, 8, 12, 15, 2, 39]
            }
        ];
        
        // 生成选题结果HTML
        resultsList.innerHTML = mockResults.map((result, index) => \`
            <div class="research-result-item">
                <div class="research-result-item-header">
                    <div class="result-item-number">\${index + 1}</div>
                    <div class="result-item-title-wrapper">
                        <h4 class="result-item-title">\${result.title}</h4>
                        \${result.titleEn ? \`<p class="result-item-title-en">\${result.titleEn}</p>\` : ''}
                    </div>
                </div>
                
                <div class="result-item-section">
                    <div class="result-item-section-title">
                        <span class="result-item-section-icon">💎</span>
                        <span>研究价值</span>
                    </div>
                    <p class="result-item-section-content">\${result.researchValue}</p>
                </div>
                
                <div class="result-item-section">
                    <div class="result-item-section-title">
                        <span class="result-item-section-icon">📋</span>
                        <span>研究内容概述</span>
                    </div>
                    <p class="result-item-section-content">\${result.researchContent}</p>
                </div>
                
                <div class="result-item-section">
                    <div class="result-item-section-title">
                        <span class="result-item-section-icon">⚠️</span>
                        <span>研究难点分析</span>
                    </div>
                    <p class="result-item-section-content">\${result.researchDifficulty}</p>
                </div>
                
                <div class="result-item-section">
                    <div class="result-item-section-title">
                        <span class="result-item-section-icon">📚</span>
                        <span>相关文献</span>
                        <span class="result-item-literature-count">\${result.literatureRefs.length}篇</span>
                    </div>
                    <div class="result-item-literature">
                        \${result.literatureRefs.map(ref => 
                            \`<a href="javascript:void(0)" class="result-item-literature-link" onclick="scrollToLiterature(\${ref})">文献\${ref}</a>\`
                        ).join('')}
                    </div>
                </div>
            </div>
        \`).join('');
        
        // 生成文献参考表格（模拟数据）
        generateLiteratureTable();
        
        // 显示反馈区域
        const feedbackSection = document.getElementById('researchFeedbackSection');
        if (feedbackSection) {
            feedbackSection.style.display = 'block';
        }
    }, 1500);
}

// 提交用户反馈
function submitFeedback(type) {
    const feedbackThanks = document.getElementById('feedbackThanks');
    const feedbackGuide = document.getElementById('feedbackGuide');
    const feedbackButtons = document.querySelector('.research-feedback-buttons');
    
    // 记录用户反馈（实际应用中应该发送到后端）
    console.log('用户反馈:', type);
    
    // 隐藏反馈按钮
    if (feedbackButtons) {
        feedbackButtons.style.display = 'none';
    }
    
    if (type === 'positive') {
        // 正面反馈：只显示感谢信息
        if (feedbackThanks) {
            feedbackThanks.style.display = 'block';
            setTimeout(() => {
                feedbackThanks.style.display = 'none';
                // 3秒后恢复按钮显示
                if (feedbackButtons) {
                    feedbackButtons.style.display = 'flex';
                }
            }, 3000);
        }
    } else {
        // 一般或不满意：显示感谢信息 + 引导使用"换个思路"
        if (feedbackThanks) {
            feedbackThanks.style.display = 'block';
            feedbackThanks.textContent = '感谢您的反馈！我们已记录您的意见。';
        }
        
        // 显示引导信息
        if (feedbackGuide) {
            setTimeout(() => {
                feedbackGuide.style.display = 'block';
            }, 1000);
        }
    }
}

// 滚动到"换个思路"按钮
function scrollToChangeApproach() {
    const clearCacheBtn = document.querySelector('.research-clear-cache-btn');
    if (clearCacheBtn) {
        clearCacheBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // 高亮按钮
        clearCacheBtn.style.animation = 'pulse 1s ease-in-out 3';
        setTimeout(() => {
            clearCacheBtn.style.animation = '';
        }, 3000);
    }
}

// 换个思路（清除缓存并更换LLM模型重新生成）
function changeApproach() {
    if (confirm('确定要换个思路吗？将清除当前缓存，更换LLM模型并重新生成选题建议。')) {
        // 实际应用中应该调用后端API清除缓存并更换LLM模型
        console.log('换个思路：清除缓存并更换LLM模型');
        
        // 显示提示信息
        const resultsList = document.getElementById('aiSelectionResultsList');
        if (resultsList) {
            resultsList.innerHTML = '<div style="text-align: center; padding: 20px; color: #1890ff; background: #e6f7ff; border: 1px solid #91d5ff; border-radius: 8px; margin-bottom: 16px;">🔄 已清除缓存，正在更换模型并重新生成选题建议...</div>';
            
            // 模拟重新生成（实际应该调用后端API，可以指定不同的LLM模型）
            setTimeout(() => {
                // 这里可以调用performAISelection()重新生成，或者调用带模型参数的API
                // 例如：performAISelectionWithModel('claude') 或 performAISelectionWithModel('gpt-4')
                alert('提示：在实际应用中，系统会清除缓存，更换LLM模型（如从GPT-4切换到Claude），并重新生成选题建议。\\n\\n原型演示中，您可以重新点击搜索按钮查看新的结果。');
                
                // 移除提示
                const notice = resultsList.querySelector('div[style*="color: #1890ff"]');
                if (notice) {
                    notice.remove();
                }
            }, 2000);
        }
    }
}

// 生成文献参考表格
function generateLiteratureTable() {
    // 模拟文献数据（基于真实数据的前20篇）
    const mockLiterature = [
        { id: 1, title: '吸入沙美特罗替卡松干粉剂与联合吸入两种干粉剂治疗成人哮喘的疗效和安全性的对照研究', author: '钟南山等', journal: 'book', year: 2002, level: '-', citation: 149, link: '#' },
        { id: 2, title: '小儿哮喘的免疫学发病机制及其对策', author: '杨锡强', journal: 'book', year: 2001, level: '-', citation: 98, link: '#' },
        { id: 3, title: '普米克气雾剂治疗儿童哮喘疗效观察', author: '陈强等', journal: '中国当代儿科', year: 2000, level: '-', citation: 93, link: '#' },
        { id: 4, title: '咳嗽变异性哮喘的中医证候学研究', author: '罗社文等', journal: '现代中医临床', year: 2021, level: '中国科技核心', citation: 69, link: '#' },
        { id: 5, title: '中西医结合防治支气管哮喘的探讨', author: '沈自尹', journal: '中国中西医结合杂志', year: 1995, level: 'CSCD/北大中文核心/中国科技核心', citation: 63, link: '#' },
        { id: 8, title: '咳嗽变异性哮喘的中医辨证论治', author: '张伟等', journal: '中医杂志', year: 2018, level: 'CSCD/北大中文核心/中国科技核心', citation: 45, link: '#' },
        { id: 9, title: '昼夜节律与哮喘症状波动的关系研究', author: 'Smith J等', journal: 'Journal of Allergy', year: 2020, level: 'SCI', citation: 120, link: '#' },
        { id: 11, title: 'T细胞亚群在哮喘发病中的作用机制', author: 'Johnson M等', journal: 'Immunology Today', year: 2021, level: 'SCI', citation: 95, link: '#' },
        { id: 12, title: '中医治疗咳嗽变异性哮喘的临床研究', author: '王明等', journal: '中医临床研究', year: 2019, level: '中国科技核心', citation: 38, link: '#' },
        { id: 15, title: '咳嗽变异性哮喘的现代医学认识', author: '李华等', journal: '中华医学杂志', year: 2020, level: 'CSCD/北大中文核心/中国科技核心', citation: 52, link: '#' },
        { id: 16, title: '肥胖与哮喘糖皮质激素抵抗的关系', author: 'Brown K等', journal: 'Respiratory Research', year: 2022, level: 'SCI', citation: 78, link: '#' },
        { id: 17, title: '糖皮质激素抵抗的分子机制研究', author: 'Davis L等', journal: 'Molecular Medicine', year: 2021, level: 'SCI', citation: 65, link: '#' },
        { id: 18, title: '代谢组学在哮喘研究中的应用', author: 'Wilson P等', journal: 'Metabolomics', year: 2020, level: 'SCI', citation: 42, link: '#' },
        { id: 20, title: '哮喘与血栓栓塞的关联性研究', author: 'Anderson R等', journal: 'Thrombosis Research', year: 2021, level: 'SCI', citation: 88, link: '#' },
        { id: 21, title: 'T细胞表型分型技术在哮喘诊断中的应用', author: 'Taylor S等', journal: 'Clinical Immunology', year: 2022, level: 'SCI', citation: 56, link: '#' },
        { id: 22, title: '免疫调节剂在哮喘治疗中的研究进展', author: 'Martinez C等', journal: 'Immunology Reviews', year: 2021, level: 'SCI', citation: 72, link: '#' },
        { id: 25, title: '焦亡在炎症性疾病中的作用', author: 'Garcia M等', journal: 'Cell Death & Disease', year: 2020, level: 'SCI', citation: 91, link: '#' },
        { id: 28, title: '肠道菌群与哮喘的关系研究', author: 'Lee H等', journal: 'Gut Microbes', year: 2021, level: 'SCI', citation: 59, link: '#' },
        { id: 29, title: '昼夜节律基因在哮喘中的表达', author: 'Chen W等', journal: 'Chronobiology International', year: 2022, level: 'SCI', citation: 47, link: '#' },
        { id: 30, title: '炎症因子在哮喘气道重塑中的作用', author: 'Rodriguez A等', journal: 'American Journal of Respiratory Cell', year: 2021, level: 'SCI', citation: 83, link: '#' }
    ];
    
    const tableBody = document.getElementById('literatureTableBody');
    const tableCount = document.getElementById('literatureTableCount');
    const tableSection = document.getElementById('literatureTableSection');
    
    if (tableBody && tableSection) {
        tableBody.innerHTML = mockLiterature.map(lit => \`
            <tr>
                <td class="col-index">\${lit.id}</td>
                <td class="col-title">\${lit.title}</td>
                <td class="col-author">\${lit.author}</td>
                <td class="col-journal">\${lit.journal}</td>
                <td class="col-year">\${lit.year}</td>
                <td class="col-level">\${lit.level}</td>
                <td class="col-citation">\${lit.citation}</td>
                <td class="col-link">
                    <a href="\${lit.link}" class="literature-link-btn" target="_blank">查看</a>
                </td>
            </tr>
        \`).join('');
        
        if (tableCount) {
            tableCount.textContent = \`共 \${mockLiterature.length} 篇文献\`;
        }
        
        tableSection.style.display = 'block';
    }
}

// 滚动到指定文献
function scrollToLiterature(refId) {
    const tableSection = document.getElementById('literatureTableSection');
    if (tableSection) {
        tableSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // 高亮指定文献行
        setTimeout(() => {
            const rows = document.querySelectorAll('#literatureTableBody tr');
            rows.forEach(row => {
                const firstCell = row.querySelector('td');
                if (firstCell && parseInt(firstCell.textContent) === refId) {
                    row.style.background = '#fffbe6';
                    row.style.border = '2px solid #faad14';
                    
                    setTimeout(() => {
                        row.style.background = '';
                        row.style.border = '';
                    }, 2000);
                }
            });
        }, 500);
    }
}

// 页面加载时显示提示信息
function initPage_research_ai_selection() {
    // 显示提示信息
    const tipSection = document.getElementById('researchTipSection');
    if (tipSection) {
        tipSection.style.display = 'block';
    }
    
    // 初始化研究领域联动选择
    const field1 = document.getElementById('researchField1');
    const field2 = document.getElementById('researchField2');
    const field3 = document.getElementById('researchField3');
    
    if (!field1 || !field2 || !field3) {
        console.warn('研究领域下拉框元素未找到');
        return;
    }
    
    // 移除旧的事件监听器（如果存在）
    const newField1 = field1.cloneNode(true);
    field1.parentNode.replaceChild(newField1, field1);
    const newField2 = field2.cloneNode(true);
    field2.parentNode.replaceChild(newField2, field2);
    
    // 重新获取元素引用
    const researchField1 = document.getElementById('researchField1');
    const researchField2 = document.getElementById('researchField2');
    const researchField3 = document.getElementById('researchField3');
    
    // 一级研究领域变化事件
    researchField1.addEventListener('change', function() {
        if (this.value && this.value !== '请选择一级研究领域') {
            researchField2.disabled = false;
            const level2Fields = window.researchFieldsData[this.value] || {};
            researchField2.innerHTML = '<option>请选择二级研究领域</option>' + 
                Object.keys(level2Fields).map(field => \`<option value="\${field}">\${field}</option>\`).join('');
            
            // 重置三级字段
            researchField3.disabled = true;
            researchField3.innerHTML = '<option>请选择三级研究领域</option>';
        } else {
            researchField2.disabled = true;
            researchField2.innerHTML = '<option>请选择二级研究领域</option>';
            researchField3.disabled = true;
            researchField3.innerHTML = '<option>请选择三级研究领域</option>';
        }
    });
    
    // 二级研究领域变化事件
    researchField2.addEventListener('change', function() {
        if (this.value && this.value !== '请选择二级研究领域' && researchField1.value) {
            const level3Fields = window.researchFieldsData[researchField1.value]?.[this.value] || [];
            if (level3Fields.length > 0) {
                researchField3.disabled = false;
                researchField3.innerHTML = '<option>请选择三级研究领域</option>' + 
                    level3Fields.map(field => \`<option value="\${field}">\${field}</option>\`).join('');
            } else {
                researchField3.disabled = true;
                researchField3.innerHTML = '<option>请选择三级研究领域</option>';
            }
        } else {
            researchField3.disabled = true;
            researchField3.innerHTML = '<option>请选择三级研究领域</option>';
        }
    });
}

// 切换运算规则区域显示/隐藏
function toggleRulesSection() {
    const content = document.getElementById('rulesContent');
    const btn = document.getElementById('rulesToggleBtn');
    if (content.style.display === 'none') {
        content.style.display = 'block';
        btn.textContent = '收起';
    } else {
        content.style.display = 'none';
        btn.textContent = '展开';
    }
}
</script>
`,
        'research-assistant-writing': `<!-- 科研超级智能体：辅助写作页面 -->
<div class="assistant-writing-page">
    <!-- 页面标题 -->
    <div class="writing-header">
        <div class="writing-title-section">
            <div class="writing-icon">✏️</div>
            <h1 class="writing-title">辅助写作超级智能体</h1>
        </div>
    </div>
    
    <!-- 主要输入区域 -->
    <div class="writing-input-section" id="writingInputSection">
        <div class="writing-input-container">
            <!-- 功能按钮（在输入框内部，默认隐藏） -->
            <div class="feature-btn-inline" id="featureBtnInline" style="display: none;">
                <button class="feature-btn-tag" onclick="clearFeature()">
                    <span class="feature-btn-title" id="featureBtnTitle">功能名称</span>
                    <span class="feature-btn-desc" id="featureBtnDesc">功能描述</span>
                    <span class="feature-btn-close">×</span>
                </button>
            </div>
            
            <textarea 
                class="writing-input" 
                id="writingQuestionInput"
                placeholder="询问任何问题, 提出任何需求 (输入@快速添加知识库)"
                rows="4"
            ></textarea>
            <div class="writing-input-actions">
                <button class="writing-action-btn" onclick="addKnowledgeBase()">
                    <span>+</span>
                    <span>添加知识库</span>
                </button>
                <div class="writing-input-icons">
                    <button class="writing-icon-btn" onclick="attachFile()" title="附件">
                        <span>📎</span>
                    </button>
                    <button class="writing-icon-btn" onclick="startVoiceInput()" title="语音输入">
                        <span>🎤</span>
                    </button>
                    <button class="writing-icon-btn writing-submit-btn" onclick="submitQuestion()" title="提交">
                        <span>→</span>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- 示例列表（当选择功能时显示） -->
        <div class="feature-examples-section" id="featureExamplesSection" style="display: none;">
            <div class="section-title">
                <h3>示例</h3>
            </div>
            <div class="feature-examples-list" id="featureExamplesList">
                <!-- 示例列表将通过JavaScript动态生成 -->
            </div>
        </div>
    </div>
    
    <!-- 热门任务 -->
    <div class="hot-tasks-section">
        <div class="section-title">
            <span class="title-icon">🔥</span>
            <h2>热门任务</h2>
        </div>
        <div class="hot-tasks-grid">
            <div class="task-card" onclick="openTask('topic-selection')">
                <div class="task-icon">⏰</div>
                <div class="task-title">寻找选题</div>
                <div class="task-desc">聚焦热点·洞察趋势·启发灵感</div>
                <div class="task-benefit">
                    <span class="benefit-icon">📊</span>
                    <span class="benefit-text">平均缩短60%选题周期</span>
                </div>
            </div>
            <div class="task-card" onclick="openTask('literature-search')">
                <div class="task-icon">⏰</div>
                <div class="task-title">检索文献</div>
                <div class="task-desc">智能筛选·多维检索·精准定位</div>
                <div class="task-benefit">
                    <span class="benefit-icon">📊</span>
                    <span class="benefit-text">平均节省80%检索时间</span>
                </div>
            </div>
            <div class="task-card" onclick="openTask('literature-download')">
                <div class="task-icon">⬇️</div>
                <div class="task-title">下载文献</div>
                <div class="task-desc">一键获取·批量下载·自动整理</div>
                <div class="task-benefit">
                    <span class="benefit-icon">📊</span>
                    <span class="benefit-text">支持95%以上文献下载</span>
                </div>
            </div>
            <div class="task-card" onclick="openTask('literature-review')">
                <div class="task-icon">📈</div>
                <div class="task-title">文献综述</div>
                <div class="task-desc">智能分析·框架生成·趋势把握</div>
                <div class="task-benefit">
                    <span class="benefit-icon">📊</span>
                    <span class="benefit-text">综述效率提升70%</span>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 可以从这里开始 -->
    <div class="start-here-section" id="startHereSection">
        <div class="section-title">
            <h2>可以从这里开始</h2>
        </div>
        <div class="start-here-grid">
            <!-- 研究准备 -->
            <div class="category-column">
                <div class="category-title">研究准备</div>
                <div class="category-items">
                    <div class="category-item" onclick="openFeature('search-literature')">
                        <div class="item-icon">🔍</div>
                        <div class="item-text">检索文献</div>
                    </div>
                    <div class="category-item" onclick="openFeature('download-literature')">
                        <div class="item-icon">📁</div>
                        <div class="item-text">文献下载</div>
                    </div>
                    <div class="category-item" onclick="openFeature('read-literature')">
                        <div class="item-icon">📖</div>
                        <div class="item-text">文献阅读</div>
                    </div>
                    <div class="category-item" onclick="openFeature('topic-selection')">
                        <div class="item-icon">💡</div>
                        <div class="item-text">选题</div>
                    </div>
                    <div class="category-item" onclick="openFeature('organize-notes')">
                        <div class="item-icon">📋</div>
                        <div class="item-text">笔记整理</div>
                    </div>
                </div>
            </div>
            
            <!-- 写作与发表 -->
            <div class="category-column">
                <div class="category-title">写作与发表</div>
                <div class="category-items">
                    <div class="category-item" onclick="openFeature('generate-outline')">
                        <div class="item-icon">📄</div>
                        <div class="item-text">出提纲</div>
                    </div>
                    <div class="category-item" onclick="openFeature('writing')">
                        <div class="item-icon">✏️</div>
                        <div class="item-text">写作</div>
                    </div>
                    <div class="category-item" onclick="openFeature('polish')">
                        <div class="item-icon">⭐</div>
                        <div class="item-text">润色</div>
                    </div>
                    <div class="category-item" onclick="openFeature('translate')">
                        <div class="item-icon">🌐</div>
                        <div class="item-text">翻译</div>
                    </div>
                    <div class="category-item" onclick="openFeature('literature-review')">
                        <div class="item-icon">📊</div>
                        <div class="item-text">文献综述</div>
                    </div>
                </div>
            </div>
            
            <!-- 研究辅助（暂时禁用） -->
            <div class="category-column disabled">
                <div class="category-title">研究辅助</div>
                <div class="category-items">
                    <div class="category-item disabled" title="功能开发中">
                        <div class="item-icon">📄</div>
                        <div class="item-text">调研报告</div>
                    </div>
                    <div class="category-item disabled" title="功能开发中">
                        <div class="item-icon">📊</div>
                        <div class="item-text">数据分析</div>
                    </div>
                    <div class="category-item disabled" title="功能开发中">
                        <div class="item-icon">🗺️</div>
                        <div class="item-text">脑图梳理</div>
                    </div>
                    <div class="category-item disabled" title="功能开发中">
                        <div class="item-icon">🧪</div>
                        <div class="item-text">研究设计</div>
                    </div>
                    <div class="category-item disabled" title="功能开发中">
                        <div class="item-icon">❓</div>
                        <div class="item-text">调研问卷</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 添加参考资料模态框 -->
    <div class="add-kb-modal" id="addKnowledgeBaseModal" style="display: none;">
        <div class="add-kb-overlay" onclick="closeAddKBModal()"></div>
        <div class="add-kb-content">
            <div class="add-kb-header">
                <h3 class="add-kb-title">添加参考资料</h3>
                <button class="add-kb-close" onclick="closeAddKBModal()">×</button>
            </div>
            <div class="add-kb-body">
                <p class="add-kb-desc">选择知识库、文档、摘录、笔记，让学术超级智能体围绕知识库回答</p>
                <div class="add-kb-search">
                    <div class="search-icon">🔍</div>
                    <input type="text" class="add-kb-search-input" placeholder="搜索知识库内容..." id="kbSearchInput">
                </div>
                <div class="add-kb-list" id="kbList">
                    <div class="add-kb-empty">暂无知识库</div>
                </div>
            </div>
            <div class="add-kb-footer">
                <div class="add-kb-count" id="kbSelectedCount">已选 0/5 项</div>
                <div class="add-kb-actions">
                    <button class="btn btn-default" onclick="closeAddKBModal()">取消</button>
                    <button class="btn btn-primary" id="confirmAddKB" onclick="confirmAddKB()" disabled>确认添加</button>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
/* 辅助写作页面样式 */
.assistant-writing-page {
    padding: 24px;
    max-width: 1400px;
    margin: 0 auto;
}

.writing-header {
    text-align: center;
    margin-bottom: 32px;
}

.writing-title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 8px;
}

.writing-icon {
    font-size: 48px;
}

.writing-title {
    font-size: 36px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
}


/* 输入区域 */
.writing-input-section {
    margin-bottom: 40px;
}

/* 功能按钮（输入框内部） */
.feature-btn-inline {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 10;
}

.feature-btn-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: #e6f7ff;
    border: 1px solid #91d5ff;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
    font-size: 13px;
}

.feature-btn-tag:hover {
    background: #bae7ff;
    border-color: #1890ff;
}

.feature-btn-title {
    font-weight: 600;
    color: #1890ff;
}

.feature-btn-desc {
    color: #666;
    font-size: 12px;
}

.feature-btn-close {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #999;
    font-size: 14px;
    margin-left: 4px;
    transition: color 0.3s;
}

.feature-btn-tag:hover .feature-btn-close {
    color: #1a1a1a;
}

.writing-input-container {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
}

.writing-input {
    width: 100%;
    padding: 16px 200px 16px 16px;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    font-size: 16px;
    resize: vertical;
    min-height: 120px;
    font-family: inherit;
    transition: all 0.3s;
}

/* 当有功能按钮时，调整输入框内边距 */
.writing-input-container.has-feature .writing-input {
    padding-top: 50px;
}

.writing-input:focus {
    outline: none;
    border-color: #1890ff;
    box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.1);
}

.writing-input-actions {
    position: absolute;
    right: 12px;
    bottom: 12px;
    display: flex;
    gap: 8px;
    align-items: center;
}

.writing-action-btn {
    padding: 8px 16px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    background: #fff;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    transition: all 0.3s;
}

.writing-action-btn:hover {
    border-color: #1890ff;
    color: #1890ff;
}

.writing-input-icons {
    display: flex;
    gap: 8px;
}

.writing-icon-btn {
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: #f0f0f0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    transition: all 0.3s;
}

.writing-icon-btn:hover {
    background: #e0e0e0;
}

.writing-submit-btn {
    background: #1890ff;
    color: #fff;
}

.writing-submit-btn:hover {
    background: #40a9ff;
}

/* 热门任务 */
.hot-tasks-section {
    margin-bottom: 40px;
}

.section-title {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 20px;
}

.title-icon {
    font-size: 24px;
}

.section-title h2 {
    font-size: 20px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
}

.hot-tasks-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
}

.task-card {
    background: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s;
}

.task-card:hover {
    border-color: #1890ff;
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.1);
    transform: translateY(-2px);
}

.task-icon {
    font-size: 32px;
    margin-bottom: 12px;
}

.task-title {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
}

.task-desc {
    font-size: 14px;
    color: #666;
    margin-bottom: 12px;
    line-height: 1.5;
}

.task-benefit {
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 12px;
    color: #999;
}

.benefit-icon {
    font-size: 14px;
}

/* 可以从这里开始 */
.start-here-section {
    margin-bottom: 40px;
}

.start-here-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
}

.category-column {
    background: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    padding: 20px;
}

.category-column.disabled {
    opacity: 0.5;
    pointer-events: none;
}

.category-title {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #e8e8e8;
}

.category-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.category-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
    cursor: pointer;
    transition: all 0.3s;
}

.category-item:hover:not(.disabled) {
    border-color: #1890ff;
    background: #f0f7ff;
}

.category-item.disabled {
    opacity: 0.5;
    cursor: not-allowed;
    background: #f5f5f5;
}

.item-icon {
    font-size: 20px;
    flex-shrink: 0;
}

.item-text {
    font-size: 14px;
    color: #1a1a1a;
}

.category-item.disabled .item-text {
    color: #999;
}

/* 示例区域（在输入区域下方） */
.feature-examples-section {
    margin-top: 20px;
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
}

.feature-examples-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.feature-example-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 20px;
    background: #f5f5f5;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.feature-example-item:hover {
    background: #e6f7ff;
    border: 1px solid #1890ff;
}

.example-text {
    font-size: 14px;
    color: #1a1a1a;
}

.example-arrow {
    font-size: 16px;
    color: #1890ff;
}

/* 添加参考资料模态框 */
.add-kb-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add-kb-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
}

.add-kb-content {
    position: relative;
    background: #fff;
    border-radius: 8px;
    width: 90%;
    max-width: 600px;
    max-height: 80vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}

.add-kb-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    border-bottom: 1px solid #e8e8e8;
}

.add-kb-title {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
}

.add-kb-close {
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;
    font-size: 24px;
    cursor: pointer;
    color: #999;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add-kb-close:hover {
    color: #1a1a1a;
}

.add-kb-body {
    flex: 1;
    overflow-y: auto;
    padding: 24px;
}

.add-kb-desc {
    font-size: 14px;
    color: #666;
    margin: 0 0 16px 0;
    line-height: 1.5;
}

.add-kb-search {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 10px 12px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    margin-bottom: 16px;
}

.search-icon {
    font-size: 16px;
    color: #999;
}

.add-kb-search-input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 14px;
}

.add-kb-list {
    min-height: 200px;
    max-height: 400px;
    overflow-y: auto;
}

.add-kb-empty {
    text-align: center;
    padding: 60px 20px;
    color: #999;
    font-size: 14px;
}

.add-kb-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
    margin-bottom: 8px;
    cursor: pointer;
    transition: all 0.3s;
}

.add-kb-item:hover {
    border-color: #1890ff;
    background: #f0f7ff;
}

.add-kb-item.selected {
    border-color: #1890ff;
    background: #e6f7ff;
}

.add-kb-item-checkbox {
    width: 18px;
    height: 18px;
    border: 2px solid #d9d9d9;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}

.add-kb-item.selected .add-kb-item-checkbox {
    background: #1890ff;
    border-color: #1890ff;
}

.add-kb-item.selected .add-kb-item-checkbox::after {
    content: '✓';
    color: #fff;
    font-size: 12px;
}

.add-kb-item-info {
    flex: 1;
}

.add-kb-item-name {
    font-size: 14px;
    font-weight: 500;
    color: #1a1a1a;
    margin-bottom: 4px;
}

.add-kb-item-desc {
    font-size: 12px;
    color: #999;
}

.add-kb-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-top: 1px solid #e8e8e8;
}

.add-kb-count {
    font-size: 14px;
    color: #666;
}

.add-kb-actions {
    display: flex;
    gap: 12px;
}

.btn {
    padding: 8px 24px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
}

.btn-default {
    background: #fff;
    color: #666;
}

.btn-default:hover {
    border-color: #1890ff;
    color: #1890ff;
}

.btn-primary {
    background: #1890ff;
    color: #fff;
    border-color: #1890ff;
}

.btn-primary:hover:not(:disabled) {
    background: #40a9ff;
    border-color: #40a9ff;
}

.btn-primary:disabled {
    background: #d9d9d9;
    border-color: #d9d9d9;
    color: #fff;
    cursor: not-allowed;
    opacity: 0.6;
}
</style>

<script>
// 打开任务（使用与openFeature相同的逻辑）
function openTask(taskType) {
    // 直接调用openFeature，因为热门任务的功能也在featureConfig中
    openFeature(taskType);
}

// 当前选中的功能
let currentFeature = null;

// 功能配置
const featureConfig = {
    // 热门任务
    'topic-selection': {
        title: '寻找选题',
        desc: '聚焦热点·洞察趋势·启发灵感',
        placeholder: '输入研究领域或感兴趣的方向，获得选题建议',
        examples: [
            '热点选题推荐',
            '创新选题挖掘',
            '选题可行性分析'
        ]
    },
    'literature-search': {
        title: '检索文献',
        desc: '智能筛选·多维检索·精准定位',
        placeholder: '输入关键词、标题、作者或DOI进行文献检索',
        examples: [
            '基于关键词的精准检索',
            '多维度组合检索',
            '高级检索技巧'
        ]
    },
    'literature-download': {
        title: '下载文献',
        desc: '一键获取·批量下载·自动整理',
        placeholder: '输入文献标题、DOI或链接，一键下载文献',
        examples: [
            '批量下载相关文献',
            '根据DOI下载',
            '从链接下载文献'
        ]
    },
    'literature-review': {
        title: '文献综述',
        desc: '智能分析·框架生成·趋势把握',
        placeholder: '输入您想写的文献综述的主题和字数等要求',
        examples: [
            'PRISMA 标准系统性综述',
            '荟萃分析统计综合',
            '领域理论演进脉络梳理'
        ]
    },
    // 研究准备
    'search-literature': {
        title: '检索文献',
        desc: '输入关键词、标题、作者或DOI进行文献检索',
        placeholder: '输入关键词、标题、作者或DOI进行文献检索',
        examples: [
            '基于关键词的精准检索',
            '多维度组合检索',
            '高级检索技巧'
        ]
    },
    'download-literature': {
        title: '文献下载',
        desc: '输入文献标题、DOI或链接，一键下载文献',
        placeholder: '输入文献标题、DOI或链接，一键下载文献',
        examples: [
            '批量下载相关文献',
            '根据DOI下载',
            '从链接下载文献'
        ]
    },
    'read-literature': {
        title: '文献阅读',
        desc: '上传或输入文献，进行智能阅读和分析',
        placeholder: '上传或输入文献，进行智能阅读和分析',
        examples: [
            '文献摘要提取',
            '关键信息提取',
            '文献结构分析'
        ]
    },
    'topic-selection': {
        title: '选题',
        desc: '输入研究领域或方向，获得选题建议',
        placeholder: '输入研究领域或方向，获得选题建议',
        examples: [
            '热点选题推荐',
            '创新选题挖掘',
            '选题可行性分析'
        ]
    },
    'organize-notes': {
        title: '笔记整理',
        desc: '整理和归纳研究笔记，形成知识体系',
        placeholder: '整理和归纳研究笔记，形成知识体系',
        examples: [
            '笔记分类整理',
            '知识图谱构建',
            '笔记关联分析'
        ]
    },
    // 写作与发表
    'generate-outline': {
        title: '出提纲',
        desc: '输入研究主题或论文方向, 获得逻辑清晰的提纲',
        placeholder: '输入研究主题或论文方向, 获得逻辑清晰的提纲',
        examples: [
            '论文逻辑树状提纲设计',
            '问题导向型论文提纲构建',
            '突出创新点的提纲设计'
        ]
    },
    'writing': {
        title: '写作',
        desc: '输入写作主题或写作要求，开始生成学术文本',
        placeholder: '输入写作主题或写作要求，开始生成学术文本',
        examples: [
            'IMRAD 结构学术论文写作',
            '团队协作写作方案设计',
            '基于数据的快速论文生成'
        ]
    },
    'polish': {
        title: '润色',
        desc: '粘贴需要润色的文本，优化表达，提升学术规范性',
        placeholder: '粘贴需要润色的文本，优化表达，提升学术规范性',
        examples: [
            '三轮递进式论文润色',
            '期刊同行评议模拟审查',
            '学术英语风格优化'
        ]
    },
    'translate': {
        title: '翻译',
        desc: '粘贴原文并明确目标语言,快速获取学术翻译',
        placeholder: '粘贴原文并明确目标语言,快速获取学术翻译',
        examples: [
            '学术论文规范化翻译',
            '中英双语对照校验',
            '跨文化翻译适配'
        ]
    },
    'literature-review': {
        title: '文献综述',
        desc: '输入您想写的文献综述的主题和字数等要求',
        placeholder: '输入您想写的文献综述的主题和字数等要求',
        examples: [
            'PRISMA 标准系统性综述',
            '荟萃分析统计综合',
            '领域理论演进脉络梳理'
        ]
    }
};

// 打开功能（在输入框内显示功能按钮）
function openFeature(featureType) {
    try {
        // 处理所有配置的功能
        if (!featureConfig[featureType]) {
            alert(\`打开功能：\${featureType}\\n\\n（实际应用中应跳转到对应功能页面）\`);
            return;
        }
        
        currentFeature = featureType;
        const config = featureConfig[featureType];
        
        // 获取元素
        const featureBtnInline = document.getElementById('featureBtnInline');
        const featureBtnTitle = document.getElementById('featureBtnTitle');
        const featureBtnDesc = document.getElementById('featureBtnDesc');
        const featureExamplesSection = document.getElementById('featureExamplesSection');
        const examplesList = document.getElementById('featureExamplesList');
        const writingInput = document.getElementById('writingQuestionInput');
        
        // 显示功能按钮（在输入框内部）
        if (featureBtnInline) {
            featureBtnInline.style.display = 'block';
            if (featureBtnTitle) featureBtnTitle.textContent = config.title;
            if (featureBtnDesc) featureBtnDesc.textContent = config.desc;
            
            // 添加has-feature类，调整输入框内边距
            const inputContainer = featureBtnInline.closest('.writing-input-container');
            if (inputContainer) {
                inputContainer.classList.add('has-feature');
            }
        }
        
        // 更新输入框占位符
        if (writingInput) {
            writingInput.placeholder = config.placeholder;
        }
        
        // 显示并更新示例列表
        if (featureExamplesSection) {
            featureExamplesSection.style.display = 'block';
        }
        if (examplesList) {
            examplesList.innerHTML = config.examples.map(example => {
                const escapedExample = example.replace(/'/g, "\\\\'");
                return \`
                    <div class="feature-example-item" onclick="useExample('\${escapedExample}')">
                        <span class="example-text">\${example}</span>
                        <span class="example-arrow">→</span>
                    </div>
                \`;
            }).join('');
        }
    } catch (error) {
        console.error('打开功能时出错:', error);
        alert('打开功能时发生错误，请重试');
    }
}

// 清除功能（恢复默认状态）
function clearFeature() {
    try {
        const featureBtnInline = document.getElementById('featureBtnInline');
        const featureExamplesSection = document.getElementById('featureExamplesSection');
        const writingInput = document.getElementById('writingQuestionInput');
        
        if (featureBtnInline) {
            featureBtnInline.style.display = 'none';
            // 移除has-feature类，恢复输入框内边距
            const inputContainer = featureBtnInline.closest('.writing-input-container');
            if (inputContainer) {
                inputContainer.classList.remove('has-feature');
            }
        }
        if (featureExamplesSection) featureExamplesSection.style.display = 'none';
        if (writingInput) {
            writingInput.placeholder = '询问任何问题, 提出任何需求 (输入@快速添加知识库)';
            writingInput.value = '';
        }
        
        currentFeature = null;
    } catch (error) {
        console.error('清除功能时出错:', error);
    }
}

// 使用示例
function useExample(example) {
    try {
        const writingInput = document.getElementById('writingQuestionInput');
        if (writingInput) {
            writingInput.value = example;
            // 聚焦到输入框
            writingInput.focus();
        }
    } catch (error) {
        console.error('使用示例时出错:', error);
    }
}

// 添加知识库
function addKnowledgeBase() {
    document.getElementById('addKnowledgeBaseModal').style.display = 'flex';
}

// 附件
function attachFile() {
    alert('添加附件（模拟）\\n\\n（实际应用中应打开文件选择对话框）');
}

// 语音输入
function startVoiceInput() {
    alert('语音输入（模拟）\\n\\n（实际应用中应调用语音识别API）');
}

// 提交问题
function submitQuestion() {
    const input = document.getElementById('writingQuestionInput');
    const question = input.value.trim();
    
    if (!question) {
        alert('请输入您的问题或需求');
        return;
    }
    
    // 如果有选中的功能，显示功能信息
    if (currentFeature) {
        const config = featureConfig[currentFeature];
        alert(\`提交\${config.title}请求：\${question}\\n\\n（实际应用中应调用AI生成API）\`);
    } else {
        alert(\`提交问题：\${question}\\n\\n（实际应用中应调用AI问答API）\`);
    }
    
    // 不清空输入框，让用户可以继续编辑
}

// 关闭添加知识库模态框
function closeAddKBModal() {
    document.getElementById('addKnowledgeBaseModal').style.display = 'none';
    // 重置选择
    selectedKBItems = [];
    updateKBSelection();
}

// 选中的知识库项
let selectedKBItems = [];

// 更新知识库选择状态
function updateKBSelection() {
    const count = selectedKBItems.length;
    document.getElementById('kbSelectedCount').textContent = \`已选 \${count}/5 项\`;
    document.getElementById('confirmAddKB').disabled = count === 0;
    
    // 更新列表项样式
    document.querySelectorAll('.add-kb-item').forEach((item, index) => {
        if (selectedKBItems.includes(index)) {
            item.classList.add('selected');
        } else {
            item.classList.remove('selected');
        }
    });
}

// 切换知识库项选择
function toggleKBItem(index) {
    if (selectedKBItems.includes(index)) {
        selectedKBItems = selectedKBItems.filter(i => i !== index);
    } else {
        if (selectedKBItems.length < 5) {
            selectedKBItems.push(index);
        } else {
            alert('最多只能选择5项');
            return;
        }
    }
    updateKBSelection();
}

// 确认添加知识库
function confirmAddKB() {
    if (selectedKBItems.length === 0) {
        alert('请至少选择一项');
        return;
    }
    
    alert(\`已添加 \${selectedKBItems.length} 项参考资料\\n\\n（实际应用中应调用API添加知识库）\`);
    closeAddKBModal();
}

// 搜索知识库
function searchKB() {
    const keyword = document.getElementById('kbSearchInput').value.trim();
    // 模拟搜索
    loadKBList(keyword);
}

// 加载知识库列表
function loadKBList(keyword = '') {
    const kbList = document.getElementById('kbList');
    
    // 模拟数据（实际应用中应从API获取）
    const mockKBItems = [
        { name: '医学文献库', desc: '包含1000+篇医学相关文献' },
        { name: '临床案例库', desc: '收录500+临床案例' },
        { name: '研究笔记', desc: '个人研究笔记和摘录' }
    ];
    
    if (mockKBItems.length === 0) {
        kbList.innerHTML = '<div class="add-kb-empty">暂无知识库</div>';
        return;
    }
    
    const filteredItems = keyword 
        ? mockKBItems.filter(item => item.name.includes(keyword) || item.desc.includes(keyword))
        : mockKBItems;
    
    if (filteredItems.length === 0) {
        kbList.innerHTML = '<div class="add-kb-empty">未找到相关知识库</div>';
        return;
    }
    
    kbList.innerHTML = filteredItems.map((item, index) => \`
        <div class="add-kb-item" onclick="toggleKBItem(\${index})">
            <div class="add-kb-item-checkbox"></div>
            <div class="add-kb-item-info">
                <div class="add-kb-item-name">\${item.name}</div>
                <div class="add-kb-item-desc">\${item.desc}</div>
            </div>
        </div>
    \`).join('');
    
    updateKBSelection();
}

// 初始化页面
function initPage_research_assistant_writing() {
    console.log('辅助写作页面已加载');
    
    // 确保功能按钮和示例区域初始隐藏
    const featureBtnInline = document.getElementById('featureBtnInline');
    const featureExamplesSection = document.getElementById('featureExamplesSection');
    
    if (featureBtnInline) featureBtnInline.style.display = 'none';
    if (featureExamplesSection) featureExamplesSection.style.display = 'none';
    
    // 初始化知识库搜索
    const kbSearchInput = document.getElementById('kbSearchInput');
    if (kbSearchInput) {
        kbSearchInput.addEventListener('input', function() {
            searchKB();
        });
    }
    
    // 打开模态框时加载知识库列表
    const modal = document.getElementById('addKnowledgeBaseModal');
    if (modal) {
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
                    if (modal.style.display === 'flex') {
                        loadKBList();
                    }
                }
            });
        });
        observer.observe(modal, { attributes: true });
    }
    
    // 确保函数在全局作用域
    if (typeof window.openFeature === 'undefined') {
        window.openFeature = openFeature;
    }
    if (typeof window.clearFeature === 'undefined') {
        window.clearFeature = clearFeature;
    }
    if (typeof window.useExample === 'undefined') {
        window.useExample = useExample;
    }
}
</script>
`,
        'research-literature-reading': `<!-- 科研超级智能体：文献阅读页面 -->
<div class="literature-reading-page">
    <div class="reading-header">
        <div class="reading-title-section">
            <div class="reading-icon">📖</div>
            <h1 class="reading-title">文献阅读</h1>
        </div>
        <p class="reading-subtitle">智能阅读·精准标注·知识沉淀</p>
    </div>
    
    <!-- 文献选择区域 -->
    <div class="literature-selector-section">
        <div class="selector-tabs">
            <button class="tab-btn active" onclick="switchTab('library')">我的文献库</button>
            <button class="tab-btn" onclick="switchTab('upload')">上传文献</button>
            <button class="tab-btn" onclick="switchTab('search')">搜索文献</button>
        </div>
        
        <!-- 文献库列表 -->
        <div class="literature-library" id="libraryTab" style="display: block;">
            <div class="library-toolbar">
                <input type="text" class="library-search" placeholder="搜索文献标题、作者..." id="librarySearchInput">
                <select class="library-filter" id="libraryFilter">
                    <option value="all">全部</option>
                    <option value="recent">最近阅读</option>
                    <option value="favorite">收藏</option>
                    <option value="annotated">已标注</option>
                </select>
            </div>
            <div class="literature-list" id="literatureList">
                <!-- 文献列表将通过JavaScript动态生成 -->
            </div>
        </div>
        
        <!-- 上传文献 -->
        <div class="literature-upload" id="uploadTab" style="display: none;">
            <div class="upload-area" id="uploadArea" onclick="triggerFileUpload()">
                <div class="upload-icon">📄</div>
                <div class="upload-text">点击或拖拽文件到此处上传</div>
                <div class="upload-hint">支持 PDF、DOC、DOCX 格式</div>
                <input type="file" id="fileUploadInput" style="display: none;" accept=".pdf,.doc,.docx" onchange="handleFileUpload(event)">
            </div>
        </div>
        
        <!-- 搜索文献 -->
        <div class="literature-search-tab" id="searchTab" style="display: none;">
            <div class="search-input-group">
                <input type="text" class="search-input" placeholder="输入文献标题、DOI或作者..." id="searchLiteratureInput">
                <button class="search-btn" onclick="searchLiterature()">🔍 搜索</button>
            </div>
            <div class="search-results" id="searchResults">
                <!-- 搜索结果将通过JavaScript动态生成 -->
            </div>
        </div>
    </div>
    
    <!-- 阅读器区域 -->
    <div class="reading-viewer-section" id="readingViewer" style="display: none;">
        <div class="viewer-header">
            <div class="viewer-title-info">
                <h2 class="viewer-title" id="viewerTitle">文献标题</h2>
                <div class="viewer-meta" id="viewerMeta">
                    <span>作者：</span>
                    <span>期刊：</span>
                    <span>年份：</span>
                </div>
            </div>
            <div class="viewer-actions">
                <button class="viewer-action-btn" onclick="toggleSidebar()" title="侧边栏">
                    <span>📋</span>
                </button>
                <button class="viewer-action-btn" onclick="downloadLiterature()" title="下载">
                    <span>📥</span>
                </button>
                <button class="viewer-action-btn" onclick="closeViewer()" title="关闭">
                    <span>✕</span>
                </button>
            </div>
        </div>
        
        <div class="viewer-content-wrapper">
            <!-- 侧边栏（标注、笔记、目录） -->
            <div class="viewer-sidebar" id="viewerSidebar" style="display: none;">
                <div class="sidebar-tabs">
                    <button class="sidebar-tab active" onclick="switchSidebarTab('annotations')">标注</button>
                    <button class="sidebar-tab" onclick="switchSidebarTab('notes')">笔记</button>
                    <button class="sidebar-tab" onclick="switchSidebarTab('outline')">目录</button>
                </div>
                <div class="sidebar-content">
                    <div class="sidebar-panel" id="annotationsPanel">
                        <div class="annotation-list" id="annotationList">
                            <div class="empty-state-small">暂无标注</div>
                        </div>
                        <button class="add-annotation-btn" onclick="addAnnotation()">+ 添加标注</button>
                    </div>
                    <div class="sidebar-panel" id="notesPanel" style="display: none;">
                        <div class="note-list" id="noteList">
                            <div class="empty-state-small">暂无笔记</div>
                        </div>
                        <button class="add-note-btn" onclick="addNote()">+ 添加笔记</button>
                    </div>
                    <div class="sidebar-panel" id="outlinePanel" style="display: none;">
                        <div class="outline-list" id="outlineList">
                            <div class="outline-item">1. 摘要</div>
                            <div class="outline-item">2. 引言</div>
                            <div class="outline-item">3. 方法</div>
                            <div class="outline-item">4. 结果</div>
                            <div class="outline-item">5. 讨论</div>
                            <div class="outline-item">6. 结论</div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- 主阅读区域 -->
            <div class="viewer-main">
                <div class="reading-content" id="readingContent">
                    <div class="reading-placeholder">
                        <div class="placeholder-icon">📄</div>
                        <div class="placeholder-text">请从左侧选择文献开始阅读</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
/* 文献阅读页面样式 */
.literature-reading-page {
    padding: 24px;
    max-width: 1600px;
    margin: 0 auto;
}

.reading-header {
    text-align: center;
    margin-bottom: 32px;
}

.reading-title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 8px;
}

.reading-icon {
    font-size: 48px;
}

.reading-title {
    font-size: 36px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0;
}

.reading-subtitle {
    font-size: 16px;
    color: #666;
    margin: 0;
}

/* 文献选择区域 */
.literature-selector-section {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 24px;
    margin-bottom: 24px;
}

.selector-tabs {
    display: flex;
    gap: 8px;
    margin-bottom: 20px;
    border-bottom: 1px solid #e8e8e8;
}

.tab-btn {
    padding: 12px 24px;
    border: none;
    background: transparent;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.3s;
}

.tab-btn:hover {
    color: #1890ff;
}

.tab-btn.active {
    color: #1890ff;
    border-bottom-color: #1890ff;
}

/* 文献库 */
.library-toolbar {
    display: flex;
    gap: 12px;
    margin-bottom: 16px;
}

.library-search {
    flex: 1;
    padding: 8px 12px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 14px;
}

.library-filter {
    padding: 8px 12px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 14px;
    min-width: 120px;
}

.literature-list {
    max-height: 400px;
    overflow-y: auto;
}

.literature-item {
    padding: 16px;
    border: 1px solid #e8e8e8;
    border-radius: 6px;
    margin-bottom: 12px;
    cursor: pointer;
    transition: all 0.3s;
}

.literature-item:hover {
    border-color: #1890ff;
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.1);
}

.literature-item-title {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 8px;
}

.literature-item-meta {
    font-size: 14px;
    color: #666;
    margin-bottom: 4px;
}

.literature-item-actions {
    display: flex;
    gap: 8px;
    margin-top: 12px;
}

.item-action-btn {
    padding: 4px 12px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    background: #fff;
    font-size: 12px;
    cursor: pointer;
    transition: all 0.3s;
}

.item-action-btn:hover {
    border-color: #1890ff;
    color: #1890ff;
}

/* 上传区域 */
.literature-upload {
    padding: 40px;
}

.upload-area {
    border: 2px dashed #d9d9d9;
    border-radius: 8px;
    padding: 60px 20px;
    text-align: center;
    cursor: pointer;
    transition: all 0.3s;
}

.upload-area:hover {
    border-color: #1890ff;
    background: #f0f7ff;
}

.upload-icon {
    font-size: 48px;
    margin-bottom: 16px;
}

.upload-text {
    font-size: 16px;
    color: #1a1a1a;
    margin-bottom: 8px;
}

.upload-hint {
    font-size: 14px;
    color: #999;
}

/* 搜索区域 */
.literature-search-tab {
    padding: 20px 0;
}

.search-input-group {
    display: flex;
    gap: 12px;
    margin-bottom: 20px;
}

.search-input {
    flex: 1;
    padding: 10px 16px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 14px;
}

.search-btn {
    padding: 10px 24px;
    background: #1890ff;
    color: #fff;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
}

.search-results {
    max-height: 400px;
    overflow-y: auto;
}

/* 阅读器区域 */
.reading-viewer-section {
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

.viewer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 24px;
    border-bottom: 1px solid #e8e8e8;
    background: #fafafa;
}

.viewer-title-info {
    flex: 1;
}

.viewer-title {
    font-size: 18px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 0 0 8px 0;
}

.viewer-meta {
    font-size: 14px;
    color: #666;
}

.viewer-actions {
    display: flex;
    gap: 8px;
}

.viewer-action-btn {
    width: 36px;
    height: 36px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    background: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s;
}

.viewer-action-btn:hover {
    border-color: #1890ff;
    color: #1890ff;
}

.viewer-content-wrapper {
    display: flex;
    height: 600px;
}

.viewer-sidebar {
    width: 300px;
    border-right: 1px solid #e8e8e8;
    display: flex;
    flex-direction: column;
}

.sidebar-tabs {
    display: flex;
    border-bottom: 1px solid #e8e8e8;
}

.sidebar-tab {
    flex: 1;
    padding: 12px;
    border: none;
    background: transparent;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    border-bottom: 2px solid transparent;
    transition: all 0.3s;
}

.sidebar-tab:hover {
    color: #1890ff;
}

.sidebar-tab.active {
    color: #1890ff;
    border-bottom-color: #1890ff;
}

.sidebar-content {
    flex: 1;
    overflow-y: auto;
    padding: 16px;
}

.sidebar-panel {
    height: 100%;
}

.annotation-list, .note-list {
    margin-bottom: 16px;
}

.annotation-item, .note-item {
    padding: 12px;
    background: #f5f5f5;
    border-radius: 6px;
    margin-bottom: 8px;
}

.annotation-text, .note-text {
    font-size: 14px;
    color: #333;
    margin-bottom: 8px;
}

.annotation-meta, .note-meta {
    font-size: 12px;
    color: #999;
}

.empty-state-small {
    text-align: center;
    padding: 40px 20px;
    color: #999;
    font-size: 14px;
}

.add-annotation-btn, .add-note-btn {
    width: 100%;
    padding: 10px;
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    background: #fff;
    color: #666;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
}

.add-annotation-btn:hover, .add-note-btn:hover {
    border-color: #1890ff;
    color: #1890ff;
}

.outline-list {
    padding: 8px 0;
}

.outline-item {
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 4px;
    transition: background 0.2s;
}

.outline-item:hover {
    background: #f0f0f0;
}

.viewer-main {
    flex: 1;
    overflow-y: auto;
    padding: 24px;
}

.reading-content {
    max-width: 900px;
    margin: 0 auto;
}

.reading-placeholder {
    text-align: center;
    padding: 100px 20px;
    color: #999;
}

.placeholder-icon {
    font-size: 64px;
    margin-bottom: 16px;
}

.placeholder-text {
    font-size: 16px;
}

.reading-text {
    font-size: 16px;
    line-height: 1.8;
    color: #333;
}
</style>

<script>
// 当前选中的文献
let currentLiterature = null;
let sidebarVisible = false;

// 模拟文献数据
const mockLiteratures = [
    {
        id: 1,
        title: '咳嗽变异性哮喘的中医证候学研究',
        authors: ['罗社文', '李友林', '晁恩祥'],
        journal: '现代中医临床',
        year: 2021,
        abstract: '本研究旨在探讨咳嗽变异性哮喘患者的中医证候特点及演变规律...'
    },
    {
        id: 2,
        title: '中西医结合防治支气管哮喘的探讨',
        authors: ['沈自尹'],
        journal: '中国中西医结合杂志',
        year: 1995,
        abstract: '本文探讨了中西医结合在支气管哮喘防治中的应用...'
    },
    {
        id: 3,
        title: '我国支气管哮喘防治指南解读',
        authors: ['林江涛'],
        journal: 'book',
        year: 2011,
        abstract: '本文解读了我国2008年修订的支气管哮喘防治指南...'
    }
];

// 切换标签页
function switchTab(tab) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    document.getElementById('libraryTab').style.display = tab === 'library' ? 'block' : 'none';
    document.getElementById('uploadTab').style.display = tab === 'upload' ? 'block' : 'none';
    document.getElementById('searchTab').style.display = tab === 'search' ? 'block' : 'none';
}

// 加载文献列表
function loadLiteratureList() {
    const list = document.getElementById('literatureList');
    list.innerHTML = mockLiteratures.map(lit => \`
        <div class="literature-item" onclick="openLiterature(\${lit.id})">
            <div class="literature-item-title">\${lit.title}</div>
            <div class="literature-item-meta">作者：\${lit.authors.join(', ')}</div>
            <div class="literature-item-meta">期刊：\${lit.journal} | 年份：\${lit.year}</div>
            <div class="literature-item-actions">
                <button class="item-action-btn" onclick="event.stopPropagation(); favoriteLiterature(\${lit.id})">⭐ 收藏</button>
                <button class="item-action-btn" onclick="event.stopPropagation(); deleteLiterature(\${lit.id})">🗑️ 删除</button>
            </div>
        </div>
    \`).join('');
}

// 打开文献
function openLiterature(id) {
    const lit = mockLiteratures.find(l => l.id === id);
    if (!lit) return;
    
    currentLiterature = lit;
    
    // 显示阅读器
    document.getElementById('readingViewer').style.display = 'block';
    document.getElementById('viewerTitle').textContent = lit.title;
    document.getElementById('viewerMeta').innerHTML = \`
        <span>作者：\${lit.authors.join(', ')}</span> | 
        <span>期刊：\${lit.journal}</span> | 
        <span>年份：\${lit.year}</span>
    \`;
    
    // 加载文献内容
    loadLiteratureContent(lit);
    
    // 滚动到阅读器
    document.getElementById('readingViewer').scrollIntoView({ behavior: 'smooth' });
}

// 加载文献内容
function loadLiteratureContent(lit) {
    const content = document.getElementById('readingContent');
    content.innerHTML = \`
        <div class="reading-text">
            <h2>摘要</h2>
            <p>\${lit.abstract}</p>
            <h2>1. 引言</h2>
            <p>本文旨在探讨\${lit.title}的相关问题。该研究领域在近年来取得了显著进展...</p>
            <h2>2. 方法</h2>
            <p>本研究采用...方法，对...进行了分析...</p>
            <h2>3. 结果</h2>
            <p>研究结果显示...</p>
            <h2>4. 讨论</h2>
            <p>基于以上结果，我们讨论了...</p>
            <h2>5. 结论</h2>
            <p>综上所述，本研究得出以下结论...</p>
        </div>
    \`;
}

// 关闭阅读器
function closeViewer() {
    document.getElementById('readingViewer').style.display = 'none';
    currentLiterature = null;
}

// 切换侧边栏
function toggleSidebar() {
    sidebarVisible = !sidebarVisible;
    document.getElementById('viewerSidebar').style.display = sidebarVisible ? 'flex' : 'none';
}

// 切换侧边栏标签
function switchSidebarTab(tab) {
    document.querySelectorAll('.sidebar-tab').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
    
    document.getElementById('annotationsPanel').style.display = tab === 'annotations' ? 'block' : 'none';
    document.getElementById('notesPanel').style.display = tab === 'notes' ? 'block' : 'none';
    document.getElementById('outlinePanel').style.display = tab === 'outline' ? 'block' : 'none';
}

// 添加标注
function addAnnotation() {
    const text = prompt('请输入标注内容：');
    if (text) {
        const list = document.getElementById('annotationList');
        if (list.querySelector('.empty-state-small')) {
            list.innerHTML = '';
        }
        const annotation = document.createElement('div');
        annotation.className = 'annotation-item';
        annotation.innerHTML = \`
            <div class="annotation-text">\${text}</div>
            <div class="annotation-meta">\${new Date().toLocaleString()}</div>
        \`;
        list.appendChild(annotation);
    }
}

// 添加笔记
function addNote() {
    const text = prompt('请输入笔记内容：');
    if (text) {
        const list = document.getElementById('noteList');
        if (list.querySelector('.empty-state-small')) {
            list.innerHTML = '';
        }
        const note = document.createElement('div');
        note.className = 'note-item';
        note.innerHTML = \`
            <div class="note-text">\${text}</div>
            <div class="note-meta">\${new Date().toLocaleString()}</div>
        \`;
        list.appendChild(note);
    }
}

// 收藏文献
function favoriteLiterature(id) {
    alert('已收藏文献（模拟）');
}

// 删除文献
function deleteLiterature(id) {
    if (confirm('确定要删除这篇文献吗？')) {
        alert('已删除文献（模拟）');
        loadLiteratureList();
    }
}

// 触发文件上传
function triggerFileUpload() {
    document.getElementById('fileUploadInput').click();
}

// 处理文件上传
function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        alert(\`文件 "\${file.name}" 上传成功（模拟）\\n\\n实际应用中应调用上传API\`);
        // 可以在这里添加文件处理逻辑
    }
}

// 搜索文献
function searchLiterature() {
    const keyword = document.getElementById('searchLiteratureInput').value.trim();
    if (!keyword) {
        alert('请输入搜索关键词');
        return;
    }
    
    const results = document.getElementById('searchResults');
    results.innerHTML = '<div style="padding: 20px; text-align: center; color: #999;">正在搜索...</div>';
    
    setTimeout(() => {
        results.innerHTML = mockLiteratures.filter(lit => 
            lit.title.includes(keyword) || lit.authors.some(a => a.includes(keyword))
        ).map(lit => \`
            <div class="literature-item" onclick="openLiterature(\${lit.id})">
                <div class="literature-item-title">\${lit.title}</div>
                <div class="literature-item-meta">作者：\${lit.authors.join(', ')}</div>
                <div class="literature-item-meta">期刊：\${lit.journal} | 年份：\${lit.year}</div>
            </div>
        \`).join('') || '<div style="padding: 20px; text-align: center; color: #999;">未找到相关文献</div>';
    }, 500);
}

// 下载文献
function downloadLiterature() {
    if (currentLiterature) {
        alert(\`正在下载文献：\${currentLiterature.title}\\n\\n（实际应用中应调用下载API）\`);
    }
}

// 初始化页面
function initPage_research_literature_reading() {
    console.log('文献阅读页面已加载');
    loadLiteratureList();
}
</script>
`,
        'research-literature-search': `<!-- 科研超级智能体：文献检索页面 -->
<div class="literature-search-page">
    <div class="literature-header">
        <div class="literature-title-section">
            <div class="literature-icon">📚</div>
            <h1 class="literature-title">文献检索</h1>
        </div>
        <p class="literature-subtitle">智能筛选·多维检索·精准定位</p>
    </div>
    
    <div class="literature-search-section">
        <div class="literature-search-box">
            <input type="text" class="literature-search-input" placeholder="请输入关键词、标题、作者或DOI进行检索" id="literatureSearchKeyword">
            <div class="literature-search-actions">
                <button class="literature-advanced-btn" onclick="toggleAdvancedSearch()" title="高级检索">⚙️</button>
                <button class="literature-search-btn" onclick="event.preventDefault(); event.stopPropagation(); performLiteratureSearch(); return false;">🔍</button>
            </div>
        </div>
        
        <!-- 高级检索面板 -->
        <div class="advanced-search-panel" id="advancedSearchPanel" style="display: none;">
            <div class="advanced-search-content">
                <div class="advanced-search-row">
                    <div class="advanced-search-item">
                        <label class="advanced-label">标题</label>
                        <input type="text" class="advanced-input" placeholder="请输入标题关键词" id="titleKeyword">
                    </div>
                    <div class="advanced-search-item">
                        <label class="advanced-label">作者</label>
                        <input type="text" class="advanced-input" placeholder="请输入作者姓名" id="authorKeyword">
                    </div>
                    <div class="advanced-search-item">
                        <label class="advanced-label">期刊/会议</label>
                        <input type="text" class="advanced-input" placeholder="请输入期刊或会议名称" id="journalKeyword">
                    </div>
                </div>
                <div class="advanced-search-row">
                    <div class="advanced-search-item">
                        <label class="advanced-label">发表年份</label>
                        <div class="year-range">
                            <input type="number" class="advanced-input" placeholder="起始年份" id="yearFrom" min="1900" max="2025">
                            <span>至</span>
                            <input type="number" class="advanced-input" placeholder="结束年份" id="yearTo" min="1900" max="2025">
                        </div>
                    </div>
                    <div class="advanced-search-item">
                        <label class="advanced-label">文献类型</label>
                        <select class="advanced-select" id="literatureType">
                            <option value="">全部</option>
                            <option value="article">期刊论文</option>
                            <option value="conference">会议论文</option>
                            <option value="book">图书</option>
                            <option value="thesis">学位论文</option>
                            <option value="patent">专利</option>
                        </select>
                    </div>
                    <div class="advanced-search-item">
                        <label class="advanced-label">语言</label>
                        <select class="advanced-select" id="language">
                            <option value="">全部</option>
                            <option value="zh">中文</option>
                            <option value="en">英文</option>
                            <option value="other">其他</option>
                        </select>
                    </div>
                </div>
                <div class="advanced-search-actions">
                    <button class="btn btn-default" onclick="resetAdvancedSearch()">重置</button>
                    <button class="btn btn-primary" onclick="applyAdvancedSearch()">应用筛选</button>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 筛选工具栏 -->
    <div class="literature-filter-bar">
        <div class="filter-left">
            <span class="filter-label">排序：</span>
            <select class="filter-select" id="sortBy" onchange="performLiteratureSearch()">
                <option value="relevance">相关度</option>
                <option value="date_desc">最新发表</option>
                <option value="date_asc">最早发表</option>
                <option value="citation_desc">引用次数（高到低）</option>
                <option value="citation_asc">引用次数（低到高）</option>
            </select>
            <button class="smart-filter-btn" onclick="openSmartFilter()">
                <span>🔍</span>
                <span>智能筛选</span>
            </button>
        </div>
        <div class="filter-right">
            <span class="result-count" id="resultCount">共找到 0 条结果</span>
        </div>
    </div>
    
    <!-- 智能筛选模态框 -->
    <div class="smart-filter-modal" id="smartFilterModal" style="display: none;">
        <div class="smart-filter-overlay" onclick="closeSmartFilter()"></div>
        <div class="smart-filter-content">
            <div class="smart-filter-header">
                <h3 class="smart-filter-title">筛选</h3>
                <button class="smart-filter-close" onclick="closeSmartFilter()">×</button>
            </div>
            <div class="smart-filter-body">
                <!-- 语言类型 -->
                <div class="filter-section">
                    <label class="filter-section-label">语言类型</label>
                    <div class="radio-group">
                        <label class="radio-label">
                            <input type="radio" name="languageType" value="all" checked>
                            <span>不限</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="languageType" value="zh">
                            <span>中文</span>
                        </label>
                        <label class="radio-label">
                            <input type="radio" name="languageType" value="en">
                            <span>英文</span>
                        </label>
                    </div>
                </div>
                
                <!-- 发布时间 -->
                <div class="filter-section">
                    <label class="filter-section-label">发布时间</label>
                    <div class="range-slider-container">
                        <div class="range-slider">
                            <input type="range" id="yearRangeMin" min="1920" max="2025" value="1920" class="range-input">
                            <input type="range" id="yearRangeMax" min="1920" max="2025" value="2025" class="range-input">
                        </div>
                        <div class="range-labels">
                            <span id="yearMinLabel">1920</span>
                            <span>至</span>
                            <span id="yearMaxLabel">2025</span>
                        </div>
                    </div>
                </div>
                
                <!-- 期刊等级 -->
                <div class="filter-section">
                    <label class="filter-section-label">期刊等级</label>
                    <div class="range-slider-container">
                        <div class="journal-level-slider">
                            <input type="range" id="journalLevelMin" min="0" max="4" value="0" step="1" class="range-input">
                            <input type="range" id="journalLevelMax" min="0" max="4" value="4" step="1" class="range-input">
                        </div>
                        <div class="journal-level-labels">
                            <span>Q1</span>
                            <span>Q2</span>
                            <span>Q3</span>
                            <span>Q4</span>
                            <span>All</span>
                        </div>
                        <div class="range-labels">
                            <span id="journalLevelMinLabel">Q1</span>
                            <span>至</span>
                            <span id="journalLevelMaxLabel">All</span>
                        </div>
                    </div>
                </div>
                
                <!-- 期刊标签 -->
                <div class="filter-section">
                    <label class="filter-section-label">期刊标签</label>
                    <div class="tag-input-container">
                        <input type="text" class="tag-input" id="journalTagInput" placeholder="输入标签，按回车添加">
                        <div class="tag-list" id="journalTagList">
                            <!-- 标签将通过JavaScript动态添加 -->
                        </div>
                    </div>
                </div>
                
                <!-- 有无PDF -->
                <div class="filter-section">
                    <label class="filter-section-label">有无PDF</label>
                    <label class="toggle-switch">
                        <input type="checkbox" id="hasPDF">
                        <span class="toggle-slider"></span>
                    </label>
                </div>
            </div>
            <div class="smart-filter-footer">
                <button class="btn btn-default" onclick="resetSmartFilter()">重置</button>
                <button class="btn btn-primary" onclick="applySmartFilter()">确定</button>
            </div>
        </div>
    </div>
    
    <!-- 检索结果列表 -->
    <div class="literature-results-section" id="literatureResults">
        <div class="empty-state" id="emptyState">
            <div class="empty-icon">📖</div>
            <div class="empty-text">请输入关键词开始检索</div>
            <div class="empty-desc">支持标题、作者、关键词、摘要等多维度检索</div>
        </div>
        
        <div class="literature-results-list" id="literatureResultsList" style="display: none;">
            <!-- 结果将通过JavaScript动态生成 -->
        </div>
    </div>
    
    <!-- 分页 -->
    <div class="literature-pagination" id="literaturePagination" style="display: none;">
        <button class="pagination-btn" id="prevPage" onclick="changePage(-1)">上一页</button>
        <span class="pagination-info" id="pageInfo">第 1 页，共 1 页</span>
        <button class="pagination-btn" id="nextPage" onclick="changePage(1)">下一页</button>
    </div>
</div>

<style>
.literature-search-page {
    padding: 24px;
    max-width: 1400px;
    margin: 0 auto;
}

.literature-header {
    text-align: center;
    margin-bottom: 32px;
}

.literature-title-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-bottom: 12px;
}

.literature-icon {
    font-size: 32px;
}

.literature-title {
    font-size: 28px;
    font-weight: 600;
    margin: 0;
    color: #1a1a1a;
}

.literature-subtitle {
    font-size: 16px;
    color: #666;
    margin: 0;
}

.literature-search-section {
    margin-bottom: 24px;
}

.literature-search-box {
    display: flex;
    align-items: center;
    background: #fff;
    border: 2px solid #e8e8e8;
    border-radius: 12px;
    padding: 12px 16px;
    transition: border-color 0.3s;
}

.literature-search-box:focus-within {
    border-color: #1890ff;
}

.literature-search-input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 8px 0;
}

.literature-search-actions {
    display: flex;
    gap: 8px;
    align-items: center;
}

.literature-advanced-btn,
.literature-search-btn {
    background: none;
    border: none;
    cursor: pointer;
    font-size: 20px;
    padding: 8px;
    border-radius: 6px;
    transition: background 0.2s;
}

.literature-advanced-btn:hover,
.literature-search-btn:hover {
    background: #f5f5f5;
}

/* 高级检索面板 */
.advanced-search-panel {
    background: #fff;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    padding: 20px;
    margin-top: 16px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.advanced-search-content {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.advanced-search-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
}

.advanced-search-item {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.advanced-label {
    font-size: 14px;
    color: #333;
    font-weight: 500;
}

.advanced-input,
.advanced-select {
    padding: 8px 12px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.2s;
}

.advanced-input:focus,
.advanced-select:focus {
    outline: none;
    border-color: #1890ff;
}

.year-range {
    display: flex;
    align-items: center;
    gap: 8px;
}

.year-range input {
    flex: 1;
}

.advanced-search-actions {
    display: flex;
    gap: 12px;
    justify-content: flex-end;
    margin-top: 8px;
}

.btn {
    padding: 8px 16px;
    border-radius: 6px;
    border: 1px solid #d9d9d9;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
}

.btn-default {
    background: #fff;
    color: #333;
}

.btn-default:hover {
    background: #f5f5f5;
}

.btn-primary {
    background: #1890ff;
    color: #fff;
    border-color: #1890ff;
}

.btn-primary:hover {
    background: #40a9ff;
    border-color: #40a9ff;
}

/* 筛选工具栏 */
.literature-filter-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    background: #fff;
    border-radius: 8px;
    margin-bottom: 16px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
}

.filter-left {
    display: flex;
    align-items: center;
    gap: 8px;
}

.filter-label {
    font-size: 14px;
    color: #666;
}

.filter-select {
    padding: 6px 12px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 14px;
    cursor: pointer;
}

.smart-filter-btn {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 6px 16px;
    border: 1px solid #1890ff;
    border-radius: 6px;
    background: #fff;
    color: #1890ff;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.2s;
    margin-left: 16px;
}

.smart-filter-btn:hover {
    background: #e6f7ff;
    border-color: #40a9ff;
}

.filter-right {
    font-size: 14px;
    color: #666;
}

.result-count {
    font-weight: 500;
    color: #333;
}

/* 检索结果 */
.literature-results-section {
    background: #fff;
    border-radius: 8px;
    padding: 24px;
    min-height: 400px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.08);
}

.empty-state {
    text-align: center;
    padding: 60px 20px;
}

.empty-icon {
    font-size: 64px;
    margin-bottom: 16px;
}

.empty-text {
    font-size: 18px;
    font-weight: 500;
    color: #333;
    margin-bottom: 8px;
}

.empty-desc {
    font-size: 14px;
    color: #999;
}

.literature-results-list {
    display: flex;
    flex-direction: column;
    gap: 16px;
}

.literature-result-item {
    padding: 20px;
    border: 1px solid #e8e8e8;
    border-radius: 8px;
    transition: all 0.2s;
    cursor: pointer;
}

.literature-result-item:hover {
    border-color: #1890ff;
    box-shadow: 0 2px 8px rgba(24, 144, 255, 0.1);
}

.result-item-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
}

.result-item-title {
    font-size: 18px;
    font-weight: 600;
    color: #1890ff;
    margin: 0;
    flex: 1;
    line-height: 1.5;
}

.result-item-title:hover {
    text-decoration: underline;
}

.result-item-actions {
    display: flex;
    gap: 8px;
    margin-left: 16px;
}

.result-item-action-btn {
    padding: 6px 12px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    background: #fff;
    cursor: pointer;
    font-size: 12px;
    transition: all 0.2s;
}

.result-item-action-btn:hover {
    background: #f5f5f5;
    border-color: #1890ff;
    color: #1890ff;
}

.result-item-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 12px;
    font-size: 14px;
    color: #666;
}

.result-item-meta-item {
    display: flex;
    align-items: center;
    gap: 4px;
}

.result-item-abstract {
    font-size: 14px;
    color: #666;
    line-height: 1.6;
    margin-bottom: 12px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.result-item-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.result-item-tag {
    padding: 4px 8px;
    background: #f0f0f0;
    border-radius: 4px;
    font-size: 12px;
    color: #666;
}

/* 分页 */
.literature-pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    padding: 24px;
    background: #fff;
    border-radius: 8px;
    margin-top: 16px;
}

.pagination-btn {
    padding: 8px 16px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    background: #fff;
    cursor: pointer;
    font-size: 14px;
    transition: all 0.2s;
}

.pagination-btn:hover:not(:disabled) {
    background: #f5f5f5;
    border-color: #1890ff;
    color: #1890ff;
}

.pagination-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.pagination-info {
    font-size: 14px;
    color: #666;
}

/* 智能筛选模态框 */
.smart-filter-modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.smart-filter-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
}

.smart-filter-content {
    position: relative;
    width: 400px;
    max-width: 90vw;
    height: 100vh;
    background: #fff;
    box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);
    display: flex;
    flex-direction: column;
    z-index: 1001;
    overflow-y: auto;
}

.smart-filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    border-bottom: 1px solid #e8e8e8;
}

.smart-filter-title {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
    color: #1a1a1a;
}

.smart-filter-close {
    background: none;
    border: none;
    font-size: 24px;
    color: #999;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color 0.2s;
}

.smart-filter-close:hover {
    color: #333;
}

.smart-filter-body {
    flex: 1;
    padding: 20px;
    overflow-y: auto;
}

.filter-section {
    margin-bottom: 24px;
}

.filter-section-label {
    display: block;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    margin-bottom: 12px;
}

/* 单选按钮组 */
.radio-group {
    display: flex;
    gap: 16px;
}

.radio-label {
    display: flex;
    align-items: center;
    gap: 6px;
    cursor: pointer;
    font-size: 14px;
    color: #333;
}

.radio-label input[type="radio"] {
    width: 16px;
    height: 16px;
    cursor: pointer;
}

/* 范围滑块 */
.range-slider-container {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.range-slider {
    position: relative;
    height: 6px;
    background: #e8e8e8;
    border-radius: 3px;
}

.range-slider .range-input {
    position: absolute;
    width: 100%;
    height: 6px;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    pointer-events: none;
}

.range-slider .range-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: #1890ff;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: all;
    position: relative;
    z-index: 2;
}

.range-slider .range-input::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: #1890ff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: all;
}

.range-slider .range-input:first-of-type {
    z-index: 3;
}

.range-slider .range-input:last-of-type {
    z-index: 1;
}

.range-labels {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    color: #666;
}

/* 期刊等级滑块 */
.journal-level-slider {
    position: relative;
    height: 6px;
    background: #e8e8e8;
    border-radius: 3px;
    margin-bottom: 8px;
}

.journal-level-labels {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #999;
    margin-bottom: 8px;
}

.journal-level-slider .range-input {
    position: absolute;
    width: 100%;
    height: 6px;
    -webkit-appearance: none;
    appearance: none;
    background: transparent;
    pointer-events: none;
}

.journal-level-slider .range-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    background: #1890ff;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: all;
    position: relative;
    z-index: 2;
}

.journal-level-slider .range-input::-moz-range-thumb {
    width: 16px;
    height: 16px;
    background: #1890ff;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: all;
}

/* 标签输入 */
.tag-input-container {
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.tag-input {
    padding: 8px 12px;
    border: 1px solid #d9d9d9;
    border-radius: 6px;
    font-size: 14px;
}

.tag-input:focus {
    outline: none;
    border-color: #1890ff;
}

.tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.tag-item {
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 4px 8px;
    background: #e6f7ff;
    border: 1px solid #91d5ff;
    border-radius: 4px;
    font-size: 12px;
    color: #1890ff;
}

.tag-remove {
    background: none;
    border: none;
    color: #1890ff;
    cursor: pointer;
    font-size: 14px;
    padding: 0;
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.tag-remove:hover {
    color: #40a9ff;
}

/* 开关切换 */
.toggle-switch {
    position: relative;
    display: inline-block;
    width: 44px;
    height: 24px;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    transition: 0.3s;
    border-radius: 24px;
}

.toggle-slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.3s;
    border-radius: 50%;
}

.toggle-switch input:checked + .toggle-slider {
    background-color: #1890ff;
}

.toggle-switch input:checked + .toggle-slider:before {
    transform: translateX(20px);
}

.smart-filter-footer {
    display: flex;
    gap: 12px;
    padding: 20px;
    border-top: 1px solid #e8e8e8;
    justify-content: flex-end;
}
</style>

<script>
// 当前页码
let currentPage = 1;
let totalPages = 1;
let currentResults = [];

// 执行文献检索
function performLiteratureSearch() {
    try {
        const keyword = document.getElementById('literatureSearchKeyword')?.value.trim() || '';
        
        // 显示加载状态
        const resultsList = document.getElementById('literatureResultsList');
        const emptyState = document.getElementById('emptyState');
        
        if (!resultsList || !emptyState) {
            console.error('文献检索页面元素未找到', { resultsList: !!resultsList, emptyState: !!emptyState });
            alert('页面元素加载异常，请刷新页面重试');
            return;
        }
        
        emptyState.style.display = 'none';
        resultsList.style.display = 'block';
        resultsList.innerHTML = '<div style="text-align: center; padding: 40px; color: #999;">正在检索文献...</div>';
        
        // 获取筛选条件
        const sortBy = document.getElementById('sortBy')?.value || 'relevance';
    
    // 模拟检索结果（基于实际网站数据）
    setTimeout(() => {
        const mockResults = [
            {
                title: '咳嗽变异性哮喘的中医证候学研究',
                authors: ['罗社文', '李友林', '晁恩祥'],
                journal: '现代中医临床',
                year: 2021,
                citation: 69,
                abstract: '本研究旨在探讨咳嗽变异性哮喘患者的中医证候特点及演变规律，通过文献复习和临床实践对265例患者进行了研究。',
                doi: '',
                url: 'https://xblc.bucm.edu.cn/zh/article/18466683/',
                tags: ['中医', '哮喘', '证候学'],
                partition: '中国科技核心'
            },
            {
                title: '中西医结合防治支气管哮喘的探讨',
                authors: ['沈自尹'],
                journal: '中国中西医结合杂志',
                year: 1995,
                citation: 63,
                abstract: '本文探讨了中西医结合在支气管哮喘防治中的应用，并区分了发作期和缓解期的治疗策略，指出中医在缓解期治疗的优势。',
                doi: '',
                url: 'http://www.cjim.cn/zxyjhcn/zxyjhcn/ch/reader/view_abstract.aspx?file_no=19950722',
                tags: ['中西医结合', '支气管哮喘', '防治'],
                partition: 'CSCD, 北大中文核心, 中国科技核心'
            },
            {
                title: '我国支气管哮喘防治指南解读',
                authors: ['林江涛'],
                journal: 'book',
                year: 2011,
                citation: 49,
                abstract: '本文解读了我国2008年修订的支气管哮喘防治指南，强调了肺功能测定在哮喘诊断和评估中的重要性。',
                doi: '',
                url: 'http://medi-guide.meditool.cn/guidepdf/E6C3E652-C8EB-C648-3265-683E3668CF11.pdf',
                tags: ['哮喘', '防治指南', '解读'],
                partition: ''
            },
            {
                title: '中国儿童支气管哮喘防治指南修订要点的探讨',
                authors: ['洪建国'],
                journal: '临床儿科杂志',
                year: 2014,
                citation: 48,
                abstract: '本文探讨了2008年制定的《儿童支气管哮喘诊断与防治指南》的修订要点，并指出了随着对哮喘认识的深入，儿童哮喘的诊治技术也在不断发展。',
                doi: '',
                url: 'https://jcp.xinhuamed.com.cn/CN/Y2014/V32/I2/101',
                tags: ['儿童哮喘', '防治指南', '修订'],
                partition: 'CSCD, 北大中文核心, 中国科技核心'
            },
            {
                title: '白三烯与支气管哮喘',
                authors: ['黄丽萍', '方凤'],
                journal: 'book',
                year: 2005,
                citation: 46,
                abstract: '本文介绍了哮喘作为一种慢性炎症疾病，以及白三烯在其中作为一种重要的炎症介质的作用。',
                doi: '',
                url: 'https://www.researchgate.net/profile/Liping-Huang-12/publication/343375145_Population_pharmacokinetic_study_of_caffeine_citrate_in_Chinese_premature_infants_with_apnea/links/607842128ea909241efea9bb/Population-pharmacokinetic-study-of-caffeine-citrate-in-Chinese-premature-infants-with-apnea.pdf',
                tags: ['白三烯', '支气管哮喘', '炎症介质'],
                partition: ''
            },
            {
                title: '小儿哮喘中医诊疗指南',
                authors: ['赵霞', '汪受传', '韩新民', '虞舜', '倪光夏', '李燕宁', '王力宁'],
                journal: 'book',
                year: 2008,
                citation: 46,
                abstract: '本指南从认识小儿哮喘的病机、治疗现状、存在问题及未来发展方向等方面，探讨了小儿哮喘的局部治疗与整体调节。',
                doi: '',
                url: 'https://dlweb.sogoucdn.com/mydocs/201912/80000048.pdf',
                tags: ['小儿哮喘', '中医诊疗', '指南'],
                partition: ''
            },
            {
                title: '支气管哮喘的病因研究进展',
                authors: ['窦秀莉', '唐华平', '韩伟'],
                journal: '实用临床医药杂志',
                year: 2009,
                citation: 41,
                abstract: '本文综述了支气管哮喘的病因研究进展，指出哮喘患病率在全球范围内呈上升趋势，已成为常见的慢性呼吸道疾病。',
                doi: '',
                url: 'https://jcmp.yzu.edu.cn/article/doi/10.3969/j.issn.1672-2353.2009.05.006',
                tags: ['支气管哮喘', '病因', '研究进展'],
                partition: '中国科技核心'
            },
            {
                title: '吸入沙美特罗替卡松干粉剂与联合吸入两种干粉剂治疗成人哮喘的疗效和安全性的对照研究',
                authors: ['钟南山', '郑劲平', '刘晓青', '肖正伦', '姚婉贞', '韩翔', '王虹'],
                journal: 'book',
                year: 2002,
                citation: 149,
                abstract: '国外已有关于上述两种产品联合治疗哮喘或上述两种产品制成复方制剂治疗哮喘的临床研究。本研究的目的是比较SM/FP复方制剂与SM和FP联合应用治疗我国哮喘患者的疗效和安全性。',
                doi: '',
                url: '',
                tags: ['哮喘', '沙美特罗替卡松', '临床研究'],
                partition: ''
            },
            {
                title: '小儿哮喘的免疫学发病机制及其对策',
                authors: ['杨锡强'],
                journal: 'book',
                year: 2001,
                citation: 98,
                abstract: '本文探讨了哮喘作为一种气道慢性炎症性疾病，其发病中异常免疫反应的重要作用，并关注了哮喘发病率的上升趋势。',
                doi: '',
                url: 'http://www.zgddek.com/CN/article/downloadArticleFile.do?attachType=PDF&id=11498',
                tags: ['小儿哮喘', '免疫学', '发病机制'],
                partition: ''
            },
            {
                title: '普米克气雾剂治疗儿童哮喘疗效观察',
                authors: ['陈强', '朱绿绮', '刘建梅', '郭德华', '余定英', '黄薇'],
                journal: '中国当代儿科杂志',
                year: 2000,
                citation: 93,
                abstract: '本研究观察了普米克气雾剂在治疗儿童哮喘中的疗效，研究对象为符合中华医学会儿童哮喘诊断标准的113例哮喘儿童。',
                doi: '',
                url: 'http://www.zgddek.com/EN/article/downloadArticleFile.do?attachType=PDF&id=11814',
                tags: ['儿童哮喘', '普米克气雾剂', '疗效观察'],
                partition: ''
            }
        ];
        
        currentResults = mockResults;
        totalPages = 1;
        currentPage = 1;
        
        try {
            displayResults(mockResults);
            updateResultCount(mockResults.length);
            updatePagination();
        } catch (error) {
            console.error('显示检索结果时出错:', error);
            resultsList.innerHTML = '<div style="text-align: center; padding: 40px; color: #f5222d;">检索结果加载失败，请重试</div>';
        }
    }, 1000); // 缩短等待时间到1秒
    } catch (error) {
        console.error('执行文献检索时出错:', error);
        alert('检索过程中发生错误，请重试');
    }
}

// 页面加载时自动显示示例数据（不需要输入关键词）
function showDefaultResults() {
    const resultsList = document.getElementById('literatureResultsList');
    const emptyState = document.getElementById('emptyState');
    
    if (!resultsList || !emptyState) {
        return;
    }
    
    // 直接显示模拟数据，不需要输入关键词
    const mockResults = [
        {
            title: '咳嗽变异性哮喘的中医证候学研究',
            authors: ['罗社文', '李友林', '晁恩祥'],
            journal: '现代中医临床',
            year: 2021,
            citation: 69,
            abstract: '本研究旨在探讨咳嗽变异性哮喘患者的中医证候特点及演变规律，通过文献复习和临床实践对265例患者进行了研究。',
            doi: '',
            url: 'https://xblc.bucm.edu.cn/zh/article/18466683/',
            tags: ['中医', '哮喘', '证候学'],
            partition: '中国科技核心'
        },
        {
            title: '中西医结合防治支气管哮喘的探讨',
            authors: ['沈自尹'],
            journal: '中国中西医结合杂志',
            year: 1995,
            citation: 63,
            abstract: '本文探讨了中西医结合在支气管哮喘防治中的应用，并区分了发作期和缓解期的治疗策略，指出中医在缓解期治疗的优势。',
            doi: '',
            url: 'http://www.cjim.cn/zxyjhcn/zxyjhcn/ch/reader/view_abstract.aspx?file_no=19950722',
            tags: ['中西医结合', '支气管哮喘', '防治'],
            partition: 'CSCD, 北大中文核心, 中国科技核心'
        },
        {
            title: '我国支气管哮喘防治指南解读',
            authors: ['林江涛'],
            journal: 'book',
            year: 2011,
            citation: 49,
            abstract: '本文解读了我国2008年修订的支气管哮喘防治指南，强调了肺功能测定在哮喘诊断和评估中的重要性。',
            doi: '',
            url: 'http://medi-guide.meditool.cn/guidepdf/E6C3E652-C8EB-C648-3265-683E3668CF11.pdf',
            tags: ['哮喘', '防治指南', '解读'],
            partition: ''
        },
        {
            title: '中国儿童支气管哮喘防治指南修订要点的探讨',
            authors: ['洪建国'],
            journal: '临床儿科杂志',
            year: 2014,
            citation: 48,
            abstract: '本文探讨了2008年制定的《儿童支气管哮喘诊断与防治指南》的修订要点，并指出了随着对哮喘认识的深入，儿童哮喘的诊治技术也在不断发展。',
            doi: '',
            url: 'https://jcp.xinhuamed.com.cn/CN/Y2014/V32/I2/101',
            tags: ['儿童哮喘', '防治指南', '修订'],
            partition: 'CSCD, 北大中文核心, 中国科技核心'
        },
        {
            title: '白三烯与支气管哮喘',
            authors: ['黄丽萍', '方凤'],
            journal: 'book',
            year: 2005,
            citation: 46,
            abstract: '本文介绍了哮喘作为一种慢性炎症疾病，以及白三烯在其中作为一种重要的炎症介质的作用。',
            doi: '',
            url: 'https://www.researchgate.net/profile/Liping-Huang-12/publication/343375145_Population_pharmacokinetic_study_of_caffeine_citrate_in_Chinese_premature_infants_with_apnea/links/607842128ea909241efea9bb/Population-pharmacokinetic-study-of-caffeine-citrate-in-Chinese-premature-infants-with-apnea.pdf',
            tags: ['白三烯', '支气管哮喘', '炎症介质'],
            partition: ''
        },
        {
            title: '小儿哮喘中医诊疗指南',
            authors: ['赵霞', '汪受传', '韩新民', '虞舜', '倪光夏', '李燕宁', '王力宁'],
            journal: 'book',
            year: 2008,
            citation: 46,
            abstract: '本指南从认识小儿哮喘的病机、治疗现状、存在问题及未来发展方向等方面，探讨了小儿哮喘的局部治疗与整体调节。',
            doi: '',
            url: 'https://dlweb.sogoucdn.com/mydocs/201912/80000048.pdf',
            tags: ['小儿哮喘', '中医诊疗', '指南'],
            partition: ''
        },
        {
            title: '支气管哮喘的病因研究进展',
            authors: ['窦秀莉', '唐华平', '韩伟'],
            journal: '实用临床医药杂志',
            year: 2009,
            citation: 41,
            abstract: '本文综述了支气管哮喘的病因研究进展，指出哮喘患病率在全球范围内呈上升趋势，已成为常见的慢性呼吸道疾病。',
            doi: '',
            url: 'https://jcmp.yzu.edu.cn/article/doi/10.3969/j.issn.1672-2353.2009.05.006',
            tags: ['支气管哮喘', '病因', '研究进展'],
            partition: '中国科技核心'
        },
        {
            title: '吸入沙美特罗替卡松干粉剂与联合吸入两种干粉剂治疗成人哮喘的疗效和安全性的对照研究',
            authors: ['钟南山', '郑劲平', '刘晓青', '肖正伦', '姚婉贞', '韩翔', '王虹'],
            journal: 'book',
            year: 2002,
            citation: 149,
            abstract: '国外已有关于上述两种产品联合治疗哮喘或上述两种产品制成复方制剂治疗哮喘的临床研究。本研究的目的是比较SM/FP复方制剂与SM和FP联合应用治疗我国哮喘患者的疗效和安全性。',
            doi: '',
            url: '',
            tags: ['哮喘', '沙美特罗替卡松', '临床研究'],
            partition: ''
        },
        {
            title: '小儿哮喘的免疫学发病机制及其对策',
            authors: ['杨锡强'],
            journal: 'book',
            year: 2001,
            citation: 98,
            abstract: '本文探讨了哮喘作为一种气道慢性炎症性疾病，其发病中异常免疫反应的重要作用，并关注了哮喘发病率的上升趋势。',
            doi: '',
            url: 'http://www.zgddek.com/CN/article/downloadArticleFile.do?attachType=PDF&id=11498',
            tags: ['小儿哮喘', '免疫学', '发病机制'],
            partition: ''
        },
        {
            title: '普米克气雾剂治疗儿童哮喘疗效观察',
            authors: ['陈强', '朱绿绮', '刘建梅', '郭德华', '余定英', '黄薇'],
            journal: '中国当代儿科杂志',
            year: 2000,
            citation: 93,
            abstract: '本研究观察了普米克气雾剂在治疗儿童哮喘中的疗效，研究对象为符合中华医学会儿童哮喘诊断标准的113例哮喘儿童。',
            doi: '',
            url: 'http://www.zgddek.com/EN/article/downloadArticleFile.do?attachType=PDF&id=11814',
            tags: ['儿童哮喘', '普米克气雾剂', '疗效观察'],
            partition: ''
        }
    ];
    
    currentResults = mockResults;
    totalPages = 1;
    currentPage = 1;
    
    emptyState.style.display = 'none';
    resultsList.style.display = 'block';
    displayResults(mockResults);
    updateResultCount(mockResults.length);
    updatePagination();
}

// 显示检索结果
function displayResults(results) {
    try {
        const resultsList = document.getElementById('literatureResultsList');
        
        if (!resultsList) {
            console.error('literatureResultsList 元素未找到');
            return;
        }
        
        if (!results || results.length === 0) {
            resultsList.innerHTML = '<div style="text-align: center; padding: 40px; color: #999;">未找到相关文献</div>';
            return;
        }
        
        resultsList.innerHTML = results.map((result, index) => \`
        <div class="literature-result-item" onclick="viewLiteratureDetail(\${index})">
            <div class="result-item-header">
                <h3 class="result-item-title">\${result.title}</h3>
                <div class="result-item-actions">
                    <button class="result-item-action-btn" onclick="event.stopPropagation(); downloadLiterature(\${index})">📥 下载</button>
                    <button class="result-item-action-btn" onclick="event.stopPropagation(); saveLiterature(\${index})">⭐ 收藏</button>
                </div>
            </div>
            <div class="result-item-meta">
                <span class="result-item-meta-item">
                    <strong>作者：</strong>\${result.authors.join(', ')}
                </span>
                <span class="result-item-meta-item">
                    <strong>期刊：</strong>\${result.journal}
                </span>
                <span class="result-item-meta-item">
                    <strong>发表年份：</strong>\${result.year}
                </span>
                <span class="result-item-meta-item">
                    <strong>引用量：</strong>\${result.citation}
                </span>
                \${result.partition ? \`<span class="result-item-meta-item"><strong>分区：</strong>\${result.partition}</span>\` : ''}
                \${result.doi ? \`<span class="result-item-meta-item"><strong>DOI：</strong>\${result.doi}</span>\` : ''}
            </div>
            <div class="result-item-abstract">
                \${result.abstract}
            </div>
            <div class="result-item-tags">
                \${result.tags.map(tag => \`<span class="result-item-tag">\${tag}</span>\`).join('')}
            </div>
        </div>
    \`).join('');
    } catch (error) {
        console.error('渲染检索结果时出错:', error);
        const resultsList = document.getElementById('literatureResultsList');
        if (resultsList) {
            resultsList.innerHTML = '<div style="text-align: center; padding: 40px; color: #f5222d;">结果渲染失败，请重试</div>';
        }
    }
}

// 更新结果数量
function updateResultCount(count) {
    try {
        const resultCountEl = document.getElementById('resultCount');
        if (resultCountEl) {
            resultCountEl.textContent = \`共找到 \${count} 条结果\`;
        }
    } catch (error) {
        console.error('更新结果数量时出错:', error);
    }
}

// 更新分页
function updatePagination() {
    const pagination = document.getElementById('literaturePagination');
    const pageInfo = document.getElementById('pageInfo');
    const prevBtn = document.getElementById('prevPage');
    const nextBtn = document.getElementById('nextPage');
    
    if (totalPages > 1) {
        pagination.style.display = 'flex';
        pageInfo.textContent = \`第 \${currentPage} 页，共 \${totalPages} 页\`;
        prevBtn.disabled = currentPage === 1;
        nextBtn.disabled = currentPage === totalPages;
    } else {
        pagination.style.display = 'none';
    }
}

// 切换页面
function changePage(delta) {
    const newPage = currentPage + delta;
    if (newPage >= 1 && newPage <= totalPages) {
        currentPage = newPage;
        // 重新执行检索（实际应该调用API获取对应页的数据）
        performLiteratureSearch();
    }
}

// 切换高级检索面板
function toggleAdvancedSearch() {
    const panel = document.getElementById('advancedSearchPanel');
    panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

// 重置高级检索
function resetAdvancedSearch() {
    document.getElementById('titleKeyword').value = '';
    document.getElementById('authorKeyword').value = '';
    document.getElementById('journalKeyword').value = '';
    document.getElementById('yearFrom').value = '';
    document.getElementById('yearTo').value = '';
    document.getElementById('literatureType').value = '';
    document.getElementById('language').value = '';
}

// 应用高级检索
function applyAdvancedSearch() {
    // 收集高级检索条件
    const advancedConditions = {
        title: document.getElementById('titleKeyword').value,
        author: document.getElementById('authorKeyword').value,
        journal: document.getElementById('journalKeyword').value,
        yearFrom: document.getElementById('yearFrom').value,
        yearTo: document.getElementById('yearTo').value,
        type: document.getElementById('literatureType').value,
        language: document.getElementById('language').value
    };
    
    // 执行检索（实际应该将高级检索条件传递给API）
    performLiteratureSearch();
    
    // 关闭高级检索面板
    document.getElementById('advancedSearchPanel').style.display = 'none';
}

// 查看文献详情
function viewLiteratureDetail(index) {
    const result = currentResults[index];
    alert(\`查看文献详情：\\n\\n标题：\${result.title}\\n作者：\${result.authors.join(', ')}\\n期刊：\${result.journal}\\n年份：\${result.year}\\nDOI：\${result.doi}\\n\\n（实际应用中应打开详情页面）\`);
}

// 下载文献
function downloadLiterature(index) {
    const result = currentResults[index];
    alert(\`正在下载文献：\${result.title}\\n\\n（实际应用中应调用下载API）\`);
}

// 收藏文献
function saveLiterature(index) {
    const result = currentResults[index];
    alert(\`已收藏文献：\${result.title}\\n\\n（实际应用中应调用收藏API）\`);
}

// 打开智能筛选
function openSmartFilter() {
    document.getElementById('smartFilterModal').style.display = 'flex';
    // 初始化范围滑块
    initRangeSliders();
}

// 关闭智能筛选
function closeSmartFilter() {
    document.getElementById('smartFilterModal').style.display = 'none';
}

// 初始化范围滑块
function initRangeSliders() {
    // 年份范围滑块
    const yearMin = document.getElementById('yearRangeMin');
    const yearMax = document.getElementById('yearRangeMax');
    const yearMinLabel = document.getElementById('yearMinLabel');
    const yearMaxLabel = document.getElementById('yearMaxLabel');
    
    yearMin.addEventListener('input', function() {
        if (parseInt(this.value) > parseInt(yearMax.value)) {
            yearMax.value = this.value;
        }
        yearMinLabel.textContent = this.value;
        updateYearRange();
    });
    
    yearMax.addEventListener('input', function() {
        if (parseInt(this.value) < parseInt(yearMin.value)) {
            yearMin.value = this.value;
        }
        yearMaxLabel.textContent = this.value;
        updateYearRange();
    });
    
    // 期刊等级滑块
    const journalMin = document.getElementById('journalLevelMin');
    const journalMax = document.getElementById('journalLevelMax');
    const journalMinLabel = document.getElementById('journalLevelMinLabel');
    const journalMaxLabel = document.getElementById('journalLevelMaxLabel');
    const journalLabels = ['Q1', 'Q2', 'Q3', 'Q4', 'All'];
    
    journalMin.addEventListener('input', function() {
        if (parseInt(this.value) > parseInt(journalMax.value)) {
            journalMax.value = this.value;
        }
        journalMinLabel.textContent = journalLabels[parseInt(this.value)];
        updateJournalLevelRange();
    });
    
    journalMax.addEventListener('input', function() {
        if (parseInt(this.value) < parseInt(journalMin.value)) {
            journalMin.value = this.value;
        }
        journalMaxLabel.textContent = journalLabels[parseInt(this.value)];
        updateJournalLevelRange();
    });
    
    // 标签输入
    const tagInput = document.getElementById('journalTagInput');
    const tagList = document.getElementById('journalTagList');
    
    tagInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && this.value.trim()) {
            addTag(this.value.trim());
            this.value = '';
        }
    });
}

// 更新年份范围显示
function updateYearRange() {
    const yearMin = document.getElementById('yearRangeMin').value;
    const yearMax = document.getElementById('yearRangeMax').value;
    // 可以在这里更新滑块之间的填充颜色
}

// 更新期刊等级范围显示
function updateJournalLevelRange() {
    const journalMin = document.getElementById('journalLevelMin').value;
    const journalMax = document.getElementById('journalLevelMax').value;
    // 可以在这里更新滑块之间的填充颜色
}

// 添加标签
function addTag(tagText) {
    const tagList = document.getElementById('journalTagList');
    const tagItem = document.createElement('div');
    tagItem.className = 'tag-item';
    tagItem.innerHTML = \`
        <span>\${tagText}</span>
        <button class="tag-remove" onclick="removeTag(this)">×</button>
    \`;
    tagList.appendChild(tagItem);
}

// 移除标签
function removeTag(button) {
    button.parentElement.remove();
}

// 重置智能筛选
function resetSmartFilter() {
    // 重置语言类型
    document.querySelector('input[name="languageType"][value="all"]').checked = true;
    
    // 重置年份范围
    document.getElementById('yearRangeMin').value = 1920;
    document.getElementById('yearRangeMax').value = 2025;
    document.getElementById('yearMinLabel').textContent = '1920';
    document.getElementById('yearMaxLabel').textContent = '2025';
    
    // 重置期刊等级
    document.getElementById('journalLevelMin').value = 0;
    document.getElementById('journalLevelMax').value = 4;
    document.getElementById('journalLevelMinLabel').textContent = 'Q1';
    document.getElementById('journalLevelMaxLabel').textContent = 'All';
    
    // 清空标签
    document.getElementById('journalTagList').innerHTML = '';
    
    // 重置PDF开关
    document.getElementById('hasPDF').checked = false;
}

// 应用智能筛选
function applySmartFilter() {
    // 收集筛选条件
    const filterConditions = {
        languageType: document.querySelector('input[name="languageType"]:checked').value,
        yearMin: document.getElementById('yearRangeMin').value,
        yearMax: document.getElementById('yearRangeMax').value,
        journalLevelMin: document.getElementById('journalLevelMin').value,
        journalLevelMax: document.getElementById('journalLevelMax').value,
        tags: Array.from(document.querySelectorAll('.tag-item span')).map(span => span.textContent),
        hasPDF: document.getElementById('hasPDF').checked
    };
    
    console.log('应用筛选条件：', filterConditions);
    
    // 关闭模态框
    closeSmartFilter();
    
    // 重新执行检索（实际应该将筛选条件传递给API）
    performLiteratureSearch();
}

// 初始化页面
function initPage_research_literature_search() {
    // 页面加载时的初始化逻辑
    console.log('文献检索页面已加载');
    
    // 阻止模态框内容区域的点击事件冒泡
    const filterContent = document.querySelector('.smart-filter-content');
    if (filterContent) {
        filterContent.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // 页面加载时自动显示示例数据
    setTimeout(() => {
        showDefaultResults();
    }, 500);
}
</script>
`,
        'sys-account': `<!-- 系统管理：账号管理页面 -->
<div class="breadcrumb">
    <a href="#" onclick="showPage('home'); return false;">首页</a> / 系统管理 / 账号管理
</div>
<div class="page-header">
    <div class="page-toolbar">
        <div class="search-box">
            <span>🔍</span>
            <input type="text" placeholder="请输入账号" id="sysAccountSearch">
        </div>
        <button class="toolbar-icon" title="筛选" onclick="toggleSysAccountFilter()">🔽</button>
        <button class="toolbar-icon" title="设置" onclick="toggleTableSettings('sysAccount', this)" style="position: relative;">⚙️</button>
        <button class="create-btn" onclick="showCreateSysAccountForm()">
            <span>➕</span>
            <span>创建账号</span>
        </button>
    </div>
</div>
<div class="filter-panel" id="sys-account-filter-panel" style="display: none; background: #fff; padding: 16px; border-radius: 8px; margin-bottom: 16px; border: 1px solid #e8e8e8;">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 16px;">
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">账号</label>
            <input type="text" class="form-input" placeholder="请输入账号">
        </div>
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">状态</label>
            <select class="form-input">
                <option>全部</option>
                <option>已启用</option>
                <option>已禁用</option>
            </select>
        </div>
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">角色</label>
            <input type="text" class="form-input" placeholder="请输入角色">
        </div>
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 12px;">
        <button class="btn btn-default" onclick="resetSysAccountFilter()">重置</button>
        <button class="btn btn-primary" onclick="applySysAccountFilter()">查询</button>
    </div>
</div>
<div class="table-container">
    <table class="data-table">
        <thead>
            <tr>
                <th>序号</th>
                <th>账号</th>
                <th>真实姓名</th>
                <th>状态</th>
                <th>性别</th>
                <th>参与项目</th>
                <th>手机号码</th>
                <th>角色</th>
                <th>最后登录时间</th>
                <th>创建时间</th>
                <th>修改时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>qlyz</td>
                <td>全量项目医助</td>
                <td><span class="status-tag complete">已启用</span></td>
                <td>-</td>
                <td>查看</td>
                <td>-</td>
                <td>医生助理</td>
                <td>2026-01-08 12:06:27</td>
                <td>2026-01-08 12:05:50</td>
                <td>2026-01-08 12:05:57</td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="disableSysAccount(1)">禁用</a>
                        <a class="action-link" onclick="editSysAccount(1)">编辑</a>
                        <a class="action-link danger" onclick="removeSysAccount(1)">移除</a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div class="pagination">
    <div class="pagination-info">共 603 条</div>
    <div class="pagination-controls">
        <button class="pagination-btn" disabled>◀</button>
        <span class="pagination-page active">1</span>
        <span class="pagination-page">2</span>
        <span class="pagination-page">3</span>
        <span class="pagination-page">4</span>
        <span class="pagination-page">5</span>
        <span class="pagination-page">•••</span>
        <span class="pagination-page">41</span>
        <button class="pagination-btn">▶</button>
        <div class="pagination-size">
            <select>
                <option>15 条/页</option>
                <option>30 条/页</option>
                <option>50 条/页</option>
            </select>
        </div>
        <div style="margin-left: 12px; display: flex; align-items: center; gap: 8px;">
            <span>跳至</span>
            <input type="number" style="width: 60px; padding: 4px; border: 1px solid #d9d9d9; border-radius: 4px;">
            <span>页</span>
        </div>
    </div>
</div>
`,
        'sys-menu': `<!-- 系统管理：菜单管理页面 -->
<div class="breadcrumb">
    <a href="#" onclick="showPage('home'); return false;">首页</a> / 系统管理 / 菜单管理
</div>
<div class="page-header">
    <div class="page-toolbar">
        <div class="search-box">
            <span>🔍</span>
            <input type="text" placeholder="请输入菜单名称" id="sysMenuSearch">
        </div>
        <button class="toolbar-icon" title="筛选" onclick="toggleSysMenuFilter()">🔽</button>
        <button class="toolbar-icon" title="设置" onclick="toggleTableSettings('sysMenu', this)" style="position: relative;">⚙️</button>
        <button class="create-btn" onclick="showCreateSysMenuForm()">
            <span>➕</span>
            <span>创建菜单</span>
        </button>
    </div>
</div>
<div class="filter-panel" id="sys-menu-filter-panel" style="display: none; background: #fff; padding: 16px; border-radius: 8px; margin-bottom: 16px; border: 1px solid #e8e8e8;">
    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-bottom: 16px;">
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">菜单名称</label>
            <input type="text" class="form-input" placeholder="请输入菜单名称">
        </div>
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">菜单级别</label>
            <select class="form-input">
                <option>全部</option>
                <option>一级</option>
                <option>二级</option>
                <option>三级</option>
            </select>
        </div>
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">菜单展示</label>
            <select class="form-input">
                <option>全部</option>
                <option>显示</option>
                <option>隐藏</option>
            </select>
        </div>
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 12px;">
        <button class="btn btn-default" onclick="resetSysMenuFilter()">重置</button>
        <button class="btn btn-primary" onclick="applySysMenuFilter()">查询</button>
    </div>
</div>
<div class="table-container">
    <table class="data-table">
        <thead>
            <tr>
                <th>菜单编码</th>
                <th>菜单名称</th>
                <th>菜单级别</th>
                <th>接口url</th>
                <th>类型</th>
                <th>菜单展示</th>
                <th>备注</th>
                <th>创建时间</th>
                <th>修改时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>sys_home</td>
                <td>我的首页</td>
                <td>一级</td>
                <td>/home</td>
                <td>菜单</td>
                <td>显示</td>
                <td>-</td>
                <td>2025-01-08 10:00</td>
                <td>2025-01-08 10:00</td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="viewSysMenu(1)">查看</a>
                        <a class="action-link" onclick="editSysMenu(1)">编辑</a>
                        <a class="action-link danger" onclick="deleteSysMenu(1)">删除</a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`,
        'sys-permission-group': `<!-- 系统管理：权限组管理页面 -->
<div class="breadcrumb">
    <a href="#" onclick="showPage('home'); return false;">首页</a> / 系统管理 / 权限组管理
</div>
<div class="page-header">
    <div class="page-toolbar">
        <div class="search-box">
            <span>🔍</span>
            <input type="text" placeholder="请输入权限组名称" id="sysPermissionGroupSearch">
        </div>
        <button class="toolbar-icon" title="筛选" onclick="toggleSysPermissionGroupFilter()">🔽</button>
        <button class="toolbar-icon" title="设置" onclick="toggleTableSettings('sysPermissionGroup', this)" style="position: relative;">⚙️</button>
        <button class="create-btn" onclick="showCreateSysPermissionGroupForm()">
            <span>➕</span>
            <span>新增权限组</span>
        </button>
    </div>
</div>
<div class="filter-panel" id="sys-permission-group-filter-panel" style="display: none; background: #fff; padding: 16px; border-radius: 8px; margin-bottom: 16px; border: 1px solid #e8e8e8;">
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 16px;">
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">权限组名称</label>
            <input type="text" class="form-input" placeholder="请输入权限组名称">
        </div>
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">描述</label>
            <input type="text" class="form-input" placeholder="请输入描述">
        </div>
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 12px;">
        <button class="btn btn-default" onclick="resetSysPermissionGroupFilter()">重置</button>
        <button class="btn btn-primary" onclick="applySysPermissionGroupFilter()">查询</button>
    </div>
</div>
<div class="table-container">
    <table class="data-table">
        <thead>
            <tr>
                <th>序号</th>
                <th>权限组名称</th>
                <th>描述</th>
                <th>创建时间</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>管理员组</td>
                <td>拥有全部权限</td>
                <td>2025-01-08 10:00</td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="editSysPermissionGroup(1)">编辑</a>
                        <a class="action-link danger" onclick="deleteSysPermissionGroup(1)">删除</a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`,
        'sys-role': `<!-- 系统管理：角色管理页面 -->
<div class="breadcrumb">
    <a href="#" onclick="showPage('home'); return false;">首页</a> / 系统管理 / 角色管理
</div>
<div class="page-header">
    <div class="page-toolbar">
        <div class="search-box">
            <span>🔍</span>
            <input type="text" placeholder="请输入角色名称" id="sysRoleSearch">
        </div>
        <button class="toolbar-icon" title="筛选" onclick="toggleSysRoleFilter()">🔽</button>
        <button class="toolbar-icon" title="设置" onclick="toggleTableSettings('sysRole', this)" style="position: relative;">⚙️</button>
        <button class="create-btn" onclick="showCreateSysRoleForm()">
            <span>➕</span>
            <span>创建角色</span>
        </button>
    </div>
</div>
<div class="filter-panel" id="sys-role-filter-panel" style="display: none; background: #fff; padding: 16px; border-radius: 8px; margin-bottom: 16px; border: 1px solid #e8e8e8;">
    <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-bottom: 16px;">
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">角色名称</label>
            <input type="text" class="form-input" placeholder="请输入角色名称">
        </div>
        <div class="form-group" style="margin-bottom: 0;">
            <label class="form-label">角色编码</label>
            <input type="text" class="form-input" placeholder="请输入角色编码">
        </div>
    </div>
    <div style="display: flex; justify-content: flex-end; gap: 12px;">
        <button class="btn btn-default" onclick="resetSysRoleFilter()">重置</button>
        <button class="btn btn-primary" onclick="applySysRoleFilter()">查询</button>
    </div>
</div>
<div class="table-container">
    <table class="data-table">
        <thead>
            <tr>
                <th>序号</th>
                <th>角色名称</th>
                <th>角色编码</th>
                <th>角色描述</th>
                <th>创建时间</th>
                <th>修改时间</th>
                <th>绑定</th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>管理员</td>
                <td>admin</td>
                <td>全量权限</td>
                <td>2025-01-08 10:00</td>
                <td>2025-01-08 10:00</td>
                <td><a class="action-link" onclick="bindSysRole(1)">绑定</a></td>
                <td>
                    <div class="action-btns">
                        <a class="action-link" onclick="viewSysRole(1)">查看</a>
                        <a class="action-link" onclick="editSysRole(1)">编辑</a>
                        <a class="action-link danger" onclick="deleteSysRole(1)">删除</a>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
</div>
`,
    });
}

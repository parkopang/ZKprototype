// 管理员登录脚本
// 在浏览器控制台（F12或Cmd+Option+I）中运行此脚本

(function() {
    // 查找账号输入框
    const usernameSelectors = [
        'input[type="text"]',
        'input[name*="user"]',
        'input[name*="account"]',
        'input[id*="user"]',
        'input[id*="account"]',
        'input[placeholder*="账号"]',
        'input[placeholder*="用户名"]',
        'input[placeholder*="account"]',
        '.ant-input',
        '.el-input__inner'
    ];
    
    let usernameInput = null;
    for (let sel of usernameSelectors) {
        const inputs = document.querySelectorAll(sel);
        for (let input of inputs) {
            if (input.type !== 'password' && input.type !== 'checkbox' && input.type !== 'hidden' && input.offsetParent !== null) {
                usernameInput = input;
                break;
            }
        }
        if (usernameInput) break;
    }
    
    // 查找密码输入框
    const passwordInput = document.querySelector('input[type="password"]');
    
    if (usernameInput && passwordInput) {
        // 填写账号
        usernameInput.focus();
        usernameInput.value = 'admin1';
        usernameInput.dispatchEvent(new Event('input', {bubbles: true}));
        usernameInput.dispatchEvent(new Event('change', {bubbles: true}));
        usernameInput.dispatchEvent(new KeyboardEvent('keyup', {bubbles: true}));
        
        // 填写密码
        setTimeout(() => {
            passwordInput.focus();
            passwordInput.value = 'admin123@';
            passwordInput.dispatchEvent(new Event('input', {bubbles: true}));
            passwordInput.dispatchEvent(new Event('change', {bubbles: true}));
            passwordInput.dispatchEvent(new KeyboardEvent('keyup', {bubbles: true}));
            
            // 查找并点击登录按钮
            setTimeout(() => {
                const btnSelectors = [
                    'button[type="submit"]',
                    '.ant-btn-primary',
                    '.el-button--primary',
                    'button.btn-primary',
                    '.login-btn',
                    'button'
                ];
                
                let loginBtn = null;
                for (let sel of btnSelectors) {
                    const btns = document.querySelectorAll(sel);
                    for (let btn of btns) {
                        const text = btn.textContent || btn.innerText || '';
                        if (text.includes('登录') || text.includes('登陆') || text.includes('Login') || btn.type === 'submit') {
                            loginBtn = btn;
                            break;
                        }
                    }
                    if (loginBtn) break;
                }
                
                if (loginBtn) {
                    console.log('找到登录按钮，准备点击...');
                    loginBtn.click();
                } else {
                    console.log('未找到登录按钮，尝试按Enter键...');
                    const enterEvent = new KeyboardEvent('keydown', {
                        key: 'Enter',
                        code: 'Enter',
                        keyCode: 13,
                        bubbles: true
                    });
                    passwordInput.dispatchEvent(enterEvent);
                }
            }, 300);
        }, 300);
        
        console.log('账号密码已填写：admin1 / admin123@');
    } else {
        console.log('未找到输入框');
        console.log('找到的输入框：', document.querySelectorAll('input'));
    }
})();

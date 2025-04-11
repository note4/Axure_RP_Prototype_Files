(function () {
    $.holdReady(true);

    var script = window.document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.onload = script.onreadystatechange = function (e, isAbort) {
        if (isAbort || !script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = undefined;
        }

        if (!isAbort) { $.holdReady(false); }
    }

    script.src = "data/document.js";
    window.document.head.appendChild(script);
})();


// 刷新倒计时
// 定义刷新时间（秒）
var refreshTimeInSeconds = 44 * 60;  // 44分钟

// 剩余倒计时
var refreshSeconds = refreshTimeInSeconds;

// 创建提示框
var timerBox = document.createElement('div');
timerBox.id = 'refresh-timer';
timerBox.style.position = 'fixed';
timerBox.style.right = '10px';
timerBox.style.bottom = '10px';
timerBox.style.background = '#ffffff99';
timerBox.style.color = '#08d5aa';
timerBox.style.padding = '4px 10px';
timerBox.style.borderRadius = '30px';
timerBox.style.fontSize = '12px';
timerBox.style.zIndex = '9999';
document.body.appendChild(timerBox);

// 更新倒计时
function updateTimer() {
    var minutes = Math.floor(refreshSeconds / 60);
    var seconds = refreshSeconds % 60;
    timerBox.innerText = 'Refresh after ' + String(minutes).padStart(2, '0') + ':' + String(seconds).padStart(2, '0');
    refreshSeconds--;
    if (refreshSeconds >= 0) {
        setTimeout(updateTimer, 1000);
    }
}

// 开始倒计时
updateTimer();

// 定时自动刷新
setTimeout(function() {
    location.reload();
}, refreshTimeInSeconds * 1000);
// This script precedes the app so even a missing bundle has a readable outcome.
window.addEventListener('error',function(){
 var status=document.getElementById('boot-status');
 if(status)status.textContent='工坊未能开启，请关闭后重新打开；本机预览请使用本地服务。';
},true);

// Browser previews already sit below browser chrome; only the native host needs
// the additional overlay allowance. The documented miniTool bridge may arrive late.
(function(){
 function updateHostLayout(){
  var hosted=location.protocol==='file:'||!!(window.xhs&&window.xhs.miniTool);
  document.documentElement.classList.toggle('minitool-host',hosted);
 }
 updateHostLayout();
 document.addEventListener('DOMContentLoaded',updateHostLayout);
 window.addEventListener('load',updateHostLayout);
 window.addEventListener('focus',updateHostLayout);
 [250,1000,3000].forEach(function(delay){setTimeout(updateHostLayout,delay);});
})();

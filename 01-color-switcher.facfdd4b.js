const t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]");let a=null;const r=document.querySelector("body");t.addEventListener("click",(()=>{t.disabled=!0,a=setInterval((()=>{let t=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`;r.style.backgroundColor=t}),1e3)})),e.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.facfdd4b.js.map

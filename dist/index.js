(()=>{var e={31:()=>{button.onclick=function(){document.getElementById("email").value.indexOf("@")<0&&(document.getElementById("email").style.border="1px solid red"),document.getElementById("password").value.length<8&&(document.getElementById("password").style.border="1px solid red"),document.getElementById("password").value!=document.getElementById("password2").value&&(document.getElementById("password2").style.border="1px solid red");const e=document.getElementById("email").style.borderColor,t=document.getElementById("password").style.borderColor,o=document.getElementById("password2").style.borderColor;"red"==e||"red"==t||"red"==o?alert("Warning! Неверно заполненные поля"):alert("Добро пожаловать, "+document.getElementById("yourName").value)},yourName.onclick=function(){document.getElementById("yourName").style.border="0.5px solid grey"},email.onclick=function(){document.getElementById("email").style.border="0.5px solid grey"},userName.onclick=function(){document.getElementById("userName").style.border="0.5px solid grey"},password.onclick=function(){document.getElementById("password").style.border="0.5px solid grey"},password2.onclick=function(){document.getElementById("password2").style.border="0.5px solid grey"}}},t={};function o(d){var r=t[d];if(void 0!==r)return r.exports;var n=t[d]={exports:{}};return e[d](n,n.exports,o),n.exports}(()=>{"use strict";o(31)})()})();
function carousel(t=8e3){function a(){s[d].classList.remove("active"),l[d].classList.remove("active"),d++,d>=s.length&&(d=0),s[d].classList.add("active"),l[d].classList.add("active")}const s=document.querySelectorAll(".slider-slide"),c=document.querySelector(".previous"),r=document.querySelector(".next"),l=document.querySelectorAll(".selector");let i=setInterval(a,t),d=0;document.addEventListener("click",e=>{if(e.target.matches(".selector")){if(e.target.matches(".active"))return!1;clearInterval(i),s[d].classList.remove("active"),l[d].classList.remove("active"),d=e.target.getAttribute("data-id"),s[d].classList.add("active"),l[d].classList.add("active"),i=setInterval(a,t)}e.target!==c&&e.target!==r||(clearInterval(i),e.target===c&&(s[d].classList.remove("active"),l[d].classList.remove("active"),d--,d<0&&(d=s.length-1),s[d].classList.add("active"),l[d].classList.add("active")),e.target===r&&a(),i=setInterval(a,t))})}document.addEventListener("DOMContentLoaded",e=>{carousel()});
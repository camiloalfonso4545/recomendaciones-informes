import { CONTRACTS } from '../../data/contracts.js';

// Comportamiento de la página: render de tarjetas de contrato, apertura del
// dossier (Acto 2), scroll-reveal y efecto de escala en los numerales.

var grid = document.getElementById("contract-grid");
CONTRACTS.forEach(function(c){
  var isActive = c.status === "active";
  var el = document.createElement(isActive ? "button" : "div");
  el.className = "contract-card" + (isActive ? "" : " placeholder");
  el.innerHTML =
    '<div class="tag mono">' + c.tag + '</div>' +
    '<div class="num display">' + c.num + '</div>' +
    '<div class="obj">' + c.obj + '</div>' +
    (isActive ? '<div class="go mono">Ver recomendaciones específicas &#8594;</div>' : '');
  if(isActive){
    el.addEventListener("click", function(){ openContract(c); });
  }
  grid.appendChild(el);
});

function openContract(c){
  var d = c.detail;
  var html = '';
  html += '<div class="dossier-head reveal in">';
  html += '<img class="logo-neg" src="assets/img/logo-neg.png" alt="UPTC" />';
  html += '<div class="eyebrow">' + d.eyebrow + '</div>';
  html += '<h1>' + d.title + '</h1>';
  html += '<p class="ctx">' + d.context + '</p>';
  html += '</div>';
  d.blocks.forEach(function(b, i){
    html += '<div class="d-block reveal in">';
    html += '<div class="n mono">' + String(i+1).padStart(2,"0") + '</div>';
    html += '<div><h3>' + b.h + '</h3><p>' + b.p + '</p>';
    if(b.example){ html += '<div class="d-example">' + b.example + '</div>'; }
    html += '</div></div>';
  });
  html += '<div class="dossier-close reveal in"><p>' + d.closing + '</p></div>';
  document.getElementById("act2-content").innerHTML = html;
  document.getElementById("act2").classList.add("show");
  document.getElementById("act1").style.display = "none";
  window.scrollTo(0,0);
}

document.getElementById("back-btn").addEventListener("click", function(){
  document.getElementById("act2").classList.remove("show");
  document.getElementById("act1").style.display = "";
  window.scrollTo(0,0);
});

// ---- scroll reveal ----
var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if("IntersectionObserver" in window && !reduced){
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
  document.querySelectorAll(".reveal:not(.in)").forEach(function(el){ io.observe(el); });
} else {
  document.querySelectorAll(".reveal").forEach(function(el){ el.classList.add("in"); });
}

// ---- continuous scale-on-scroll for the big index numerals ----
if(!reduced){
  var scaleEls = Array.prototype.slice.call(document.querySelectorAll(".scale-el"));
  var isotipo = document.querySelector(".hero-isotipo");
  var ticking = false;
  function update(){
    var vh = window.innerHeight;
    scaleEls.forEach(function(el){
      var r = el.getBoundingClientRect();
      var center = r.top + r.height/2;
      var dist = Math.abs(center - vh/2) / (vh/2);
      var p = Math.max(0, 1 - dist);
      var scale = 0.72 + 0.28*p;
      el.style.transform = "scale(" + scale.toFixed(3) + ")";
      el.style.opacity = (0.35 + 0.65*p).toFixed(3);
    });
    if(isotipo){
      var drift = window.scrollY * 0.12;
      isotipo.style.transform = "translateY(calc(-50% + " + drift.toFixed(1) + "px)) rotate(" + (drift*0.02).toFixed(2) + "deg)";
    }
    ticking = false;
  }
  function onScroll(){ if(!ticking){ requestAnimationFrame(update); ticking = true; } }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  update();
}

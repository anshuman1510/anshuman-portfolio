/* ============ Shared shell + interactions ============ */
(function(){
  "use strict";

  var PAGES = [
    ["index.html","Home"],["about.html","About"],["experience.html","Experience"],
    ["case-studies.html","Cases"],["performance.html","Performance"],["seo.html","SEO"],
    ["websites.html","Websites"],["social.html","Social"],["video.html","Video"],
    ["ai-systems.html","AI"]
  ];
  var here = (location.pathname.split("/").pop() || "index.html");
  if(here === "") here = "index.html";

  /* ---------- progress bar ---------- */
  var prog = document.createElement("div");
  prog.className = "progress";
  document.body.insertBefore(prog, document.body.firstChild);

  /* ---------- nav ---------- */
  var links = PAGES.map(function(p){
    var a = p[0]===here ? ' class="active"' : '';
    return '<a href="'+p[0]+'"'+a+'>'+p[1]+'</a>';
  }).join("");

  var nav = document.createElement("nav");
  nav.className = "nav";
  nav.innerHTML =
    '<a class="brand" href="index.html">'+
      '<span class="mono">AG</span>'+
      '<span>Anshuman Gupta<small>Digital Marketing &amp; Growth</small></span>'+
    '</a>'+
    '<div class="nav-links" id="navLinks">'+links+'</div>'+
    '<div class="nav-cta">'+
      '<a class="btn btn-ghost resume-btn" href="assets/files/Anshuman-Gupta-Resume.pdf" download>'+
        '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Resume</a>'+
      '<a class="btn btn-blue" href="contact.html">Contact</a>'+
      '<button class="hamburger" id="ham" aria-label="Menu"><span></span><span></span><span></span></button>'+
    '</div>';
  document.body.insertBefore(nav, prog.nextSibling);

  var ham = document.getElementById("ham");
  var navLinks = document.getElementById("navLinks");
  ham.addEventListener("click", function(){
    ham.classList.toggle("open");
    navLinks.classList.toggle("open");
  });

  /* ---------- footer ---------- */
  var foot = document.createElement("footer");
  foot.innerHTML =
    '<div class="wrap">'+
      '<div class="foot-grid">'+
        '<div>'+
          '<div class="brand"><span class="mono">AG</span><span>Anshuman Gupta<small>Digital Marketing &amp; Growth</small></span></div>'+
          '<p class="desc">I build complete growth systems — strategy, performance marketing, SEO &amp; GEO, websites, content and AI workflows — engineered around measurable business outcomes.</p>'+
        '</div>'+
        '<div class="foot-col"><h4>Explore</h4>'+
          '<a href="about.html">About</a><a href="experience.html">Experience</a><a href="case-studies.html">Case Studies</a><a href="ai-systems.html">AI Systems</a></div>'+
        '<div class="foot-col"><h4>Work</h4>'+
          '<a href="performance.html">Performance</a><a href="seo.html">SEO &amp; GEO</a><a href="websites.html">Websites</a><a href="social.html">Social &amp; Content</a><a href="video.html">Video</a></div>'+
      '</div>'+
      '<div class="foot-bottom">'+
        '<span>© '+new Date().getFullYear()+' Anshuman Gupta · Pune, India · Built &amp; hosted on GitHub Pages</span>'+
        '<div class="foot-social">'+
          '<a href="mailto:anshumangupta1510@gmail.com" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></svg></a>'+
          '<a href="tel:+917080577753" aria-label="Call"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg></a>'+
          '<a href="https://wa.me/917080577753" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.98-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43-.14-.01-.31-.01-.48-.01a.92.92 0 0 0-.67.31c-.23.25-.88.86-.88 2.09s.9 2.42 1.03 2.59c.12.16 1.77 2.7 4.29 3.79.6.26 1.07.41 1.43.53.6.19 1.15.16 1.58.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29z"/></svg></a>'+
        '</div>'+
      '</div>'+
    '</div>';
  document.body.appendChild(foot);

  /* ---------- lightboxes (media + image) ---------- */
  var lb = document.createElement("div");
  lb.className = "lb";
  lb.innerHTML =
    '<div class="lb-inner">'+
      '<button class="lb-close" id="lbClose"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button>'+
      '<button class="lb-nav lb-prev" id="lbPrev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"/></svg></button>'+
      '<button class="lb-nav lb-next" id="lbNext"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg></button>'+
      '<div class="lb-frame portrait" id="lbFrame"></div>'+
      '<div class="lb-cap" id="lbCap"></div>'+
    '</div>';
  document.body.appendChild(lb);

  var imglb = document.createElement("div");
  imglb.className = "imglb";
  imglb.innerHTML = '<button class="lb-close" id="imgClose"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg></button><img id="imgBig" alt="preview">';
  document.body.appendChild(imglb);

  var lbFrame = document.getElementById("lbFrame");
  var lbInner = lb.querySelector(".lb-inner");
  var lbCap = document.getElementById("lbCap");
  var playlist = [], idx = 0;

  function srcFor(item){
    if(item.kind==="yt") return "https://www.youtube-nocookie.com/embed/"+item.id+"?autoplay=1&rel=0";
    if(item.kind==="drive") return "https://drive.google.com/file/d/"+item.id+"/preview";
    if(item.kind==="post") return "https://www.instagram.com/p/"+item.id+"/embed/";
    return "https://www.instagram.com/reel/"+item.id+"/embed/";
  }
  function renderLB(){
    var it = playlist[idx];
    var wide = (it.kind==="yt"||it.kind==="drive");
    lbInner.classList.toggle("wide", wide);
    lbFrame.className = "lb-frame " + (wide ? "landscape" : "portrait");
    lbFrame.innerHTML = '<iframe src="'+srcFor(it)+'" allow="autoplay; encrypted-media; fullscreen" allowfullscreen scrolling="no"></iframe>';
    lbCap.innerHTML = it.t + (it.sub?'<span>'+it.sub+'</span>':'');
    lb.querySelector(".lb-prev").style.display = playlist.length>1?"grid":"none";
    lb.querySelector(".lb-next").style.display = playlist.length>1?"grid":"none";
  }
  function openLB(list, i){
    playlist = list; idx = i;
    document.body.style.overflow="hidden";
    lb.classList.add("show");
    renderLB();
  }
  function closeLB(){
    lb.classList.remove("show");
    lbFrame.innerHTML="";
    document.body.style.overflow="";
  }
  document.getElementById("lbClose").addEventListener("click", closeLB);
  lb.addEventListener("click", function(e){ if(e.target===lb) closeLB(); });
  document.getElementById("lbPrev").addEventListener("click", function(){ idx=(idx-1+playlist.length)%playlist.length; renderLB(); });
  document.getElementById("lbNext").addEventListener("click", function(){ idx=(idx+1)%playlist.length; renderLB(); });
  document.addEventListener("keydown", function(e){
    if(!lb.classList.contains("show")) return;
    if(e.key==="Escape") closeLB();
    if(e.key==="ArrowLeft" && playlist.length>1){ idx=(idx-1+playlist.length)%playlist.length; renderLB(); }
    if(e.key==="ArrowRight" && playlist.length>1){ idx=(idx+1)%playlist.length; renderLB(); }
  });
  window.openLB = openLB;

  // image lightbox
  var imgBig = document.getElementById("imgBig");
  window.openImg = function(src){
    imgBig.src = src; imglb.classList.add("show"); document.body.style.overflow="hidden";
  };
  function closeImg(){ imglb.classList.remove("show"); document.body.style.overflow=""; }
  document.getElementById("imgClose").addEventListener("click", closeImg);
  imglb.addEventListener("click", function(e){ if(e.target===imglb) closeImg(); });

  /* ---------- scroll: progress + nav shadow ---------- */
  function onScroll(){
    var st = window.scrollY;
    var h = document.documentElement.scrollHeight - window.innerHeight;
    prog.style.width = (h>0 ? (st/h*100) : 0) + "%";
    nav.style.background = st>30 ? "rgba(255,255,255,.9)" : "rgba(255,255,255,.72)";
    nav.style.boxShadow = st>30 ? "0 14px 40px -18px rgba(16,32,64,.28)" : "var(--shadow)";
  }
  window.addEventListener("scroll", onScroll, {passive:true}); onScroll();

  /* ---------- reveal on scroll ---------- */
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
  }, {threshold:.12, rootMargin:"0px 0px -40px 0px"});
  document.querySelectorAll(".reveal").forEach(function(el){ io.observe(el); });

  /* ---------- counters ---------- */
  function animateCount(el){
    var target = parseFloat(el.getAttribute("data-count"));
    var dec = (el.getAttribute("data-dec")|0);
    var pre = el.getAttribute("data-pre")||"";
    var suf = el.getAttribute("data-suf")||"";
    var dur = 1600, start = null;
    function fmt(n){
      if(dec>0) return n.toFixed(dec);
      return Math.round(n).toLocaleString("en-IN");
    }
    function tick(ts){
      if(!start) start=ts;
      var p = Math.min((ts-start)/dur,1);
      var e = 1-Math.pow(1-p,3);
      el.textContent = pre + fmt(target*e) + suf;
      if(p<1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  var cio = new IntersectionObserver(function(entries){
    entries.forEach(function(en){ if(en.isIntersecting){ animateCount(en.target); cio.unobserve(en.target); } });
  }, {threshold:.5});
  document.querySelectorAll("[data-count]").forEach(function(el){ cio.observe(el); });

  /* ---------- animate css bars ---------- */
  var bio = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        en.target.querySelectorAll(".bar").forEach(function(b){ b.style.height=b.getAttribute("data-h"); });
        bio.unobserve(en.target);
      }
    });
  },{threshold:.4});
  document.querySelectorAll(".bars").forEach(function(el){ el.querySelectorAll(".bar").forEach(function(b){b.style.height="4px";}); bio.observe(el); });

  /* ---------- case study accordion ---------- */
  document.querySelectorAll(".cs-head").forEach(function(h){
    h.addEventListener("click", function(){
      var cs = h.closest(".cs");
      var body = cs.querySelector(".cs-body");
      var open = cs.classList.toggle("open");
      body.style.maxHeight = open ? body.scrollHeight+"px" : 0;
    });
  });

  /* ---------- gallery filters ---------- */
  document.querySelectorAll("[data-filtergroup]").forEach(function(group){
    var btns = group.querySelectorAll(".filter-btn");
    var targetSel = group.getAttribute("data-target");
    btns.forEach(function(b){
      b.addEventListener("click", function(){
        btns.forEach(function(x){x.classList.remove("active");});
        b.classList.add("active");
        var f = b.getAttribute("data-filter");
        document.querySelectorAll(targetSel+" [data-cat]").forEach(function(item){
          var show = (f==="all" || item.getAttribute("data-cat").indexOf(f)>-1);
          item.style.display = show ? "" : "none";
        });
      });
    });
  });

  /* ---------- before/after slider ---------- */
  document.querySelectorAll(".ba").forEach(function(ba){
    var range = ba.querySelector(".ba-range");
    var before = ba.querySelector(".before");
    var handle = ba.querySelector(".ba-handle");
    function set(v){ before.style.clipPath="inset(0 "+(100-v)+"% 0 0)"; handle.style.left=v+"%"; }
    range.addEventListener("input", function(){ set(range.value); });
    set(50);
  });

  /* ---------- lazy Instagram inline embeds + facade play ---------- */
  var igIO = new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        var card = en.target;
        igIO.unobserve(card);
        if(card.getAttribute("data-loaded")) return;
        card.setAttribute("data-loaded","1");
        var holder = document.createElement("div");
        holder.className = "ig-holder";
        var f = document.createElement("iframe");
        f.setAttribute("scrolling","no");
        f.setAttribute("allowtransparency","true");
        f.setAttribute("allow","autoplay; encrypted-media; clipboard-write; picture-in-picture");
        f.loading = "lazy";
        f.src = card.getAttribute("data-src");
        holder.appendChild(f);
        card.appendChild(holder);
      }
    });
  }, {rootMargin:"500px 0px"});

  window.scanMedia = function(){
    document.querySelectorAll("[data-ig]").forEach(function(c){
      if(c.getAttribute("data-obs")) return;
      c.setAttribute("data-obs","1"); igIO.observe(c);
    });
    document.querySelectorAll(".facade").forEach(function(fc){
      if(fc.getAttribute("data-wired")) return;
      fc.setAttribute("data-wired","1");
      fc.addEventListener("click", function(){
        if(fc.getAttribute("data-playing")) return;
        fc.setAttribute("data-playing","1");
        var f = document.createElement("iframe");
        f.setAttribute("allow","autoplay; encrypted-media; fullscreen; picture-in-picture");
        f.setAttribute("allowfullscreen","");
        f.src = fc.getAttribute("data-src");
        fc.appendChild(f);
      });
    });
    // pick up reveals added dynamically
    document.querySelectorAll(".reveal:not(.in)").forEach(function(el){ io.observe(el); });
  };
  window.scanMedia();

})();

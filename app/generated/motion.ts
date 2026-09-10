// =============================================================
// 이 파일은 scripts/export_nextjs.py 가 생성합니다. 직접 고치지 마세요.
// 고칠 곳은 생성기의 copy_*.json 입니다.
//   copy_a.json -> onpharm_build.py -> export_nextjs.py -> 이 파일
// =============================================================

// 모션 런타임. <script> 태그의 textContent 로 주입하세요.
// 주입되면 window.__onpharmInitMotion(faceEl?) 이 생깁니다.
// 같은 요소를 두 번 배선하지 않으므로 몇 번을 불러도 안전합니다.
export const MOTION_JS: string = `/*! onpharm-motion (next export wrapper)
   ---------------------------------------------------------------------------
   이 래퍼는 scripts/export_nextjs.py 가 붙입니다. 안쪽 원본 로직은 손대지 않았습니다.

   왜 필요한가
     - 원본은 즉시실행 IIFE 다. React 는 마운트가 끝난 뒤에 DOM 을 꽂으므로
       한 번 실행되고 끝나면 나중에 켜지는 면은 배선되지 않는다.
     - 그래서 원본을 run() 안에 그대로 넣고, 다시 부를 수 있는 진입점을
       window.__onpharmInitMotion 으로 노출한다.

   쓰는 법
     window.__onpharmInitMotion();          // 문서 전체
     window.__onpharmInitMotion(faceEl);    // 그 면의 DOM 만

   보장
     - 같은 요소를 두 번 배선하지 않는다(WeakSet + 후크 임시 제거).
       React StrictMode 의 이펙트 2회 호출, 면 토글 반복 모두 안전하다.
     - scope 를 주면 그 바깥은 건드리지 않는다.
     - <html class="op-static"> 조기 return, prefers-reduced-motion 등
       원본 계약은 그대로다.
   --------------------------------------------------------------------------- */
(function (global) {
  "use strict";

  var doc = global.document;
  if (!doc) { return; }

  var HOOKS = [
    { attr: "data-carousel" },
    { attr: "data-accordion" },
    { attr: "data-reveal" },
    { attr: "data-form" },
    { attr: "data-form-thanks" },
    { cls: "op-heromedia__video" }
  ];

  var bound = (typeof global.WeakSet === "function") ? new global.WeakSet() : null;
  var runs = 0;

  /* ===== 여기서부터 onpharm.js 원본. 한 글자도 고치지 않았다. =============== */
  function __onpharmRunOriginal() {
/*! onpharm-motion v1 | OnPharm landing motion runtime | no dependencies */
/* ==========================================================================
   온팜 랜딩 모션 런타임
   --------------------------------------------------------------------------
   계약
     - 가장 먼저 <html> 에 op-js 를 붙인다.
       (콘텐츠를 숨기는 CSS 는 .op-js:not(.op-static) 아래에서만 동작하므로
        JS 가 꺼져 있으면 아무것도 숨겨지지 않는다)
     - <html class="op-static"> 이면 즉시 return. 캡처 결정성을 위해 손대지 않는다.
     - prefers-reduced-motion 이면 자동전환/리빌은 끄고 수동 조작만 남긴다.
     - 전역 오염 0. 모든 구성요소는 개별 try/catch 로 격리한다.
   담당
     1) 캐러셀   [data-carousel]
     2) 아코디언 [data-accordion] > details
     3) 리빌     [data-reveal]
     4) 히어로 영상 .op-heromedia__video
     5) 폼       [data-form]
   ========================================================================== */
(function () {
  "use strict";

  var doc = window.document;
  var root = doc && doc.documentElement;
  if (!root || !root.classList) { return; }

  /* ---- (a) 최우선: JS 생존 신호 -------------------------------------- */
  try {
    root.classList.add("op-js");
  } catch (e) {
    return;
  }

  var STATIC_CLASS = "op-static";

  /* ---- (b) 정지(캡처) 모드면 아무 동작도 하지 않는다 ------------------ */
  if (root.classList.contains(STATIC_CLASS)) { return; }

  /* ---- 공용 유틸 ------------------------------------------------------ */
  function isStatic() {
    try { return root.classList.contains(STATIC_CLASS); } catch (e) { return false; }
  }

  function warn(msg, err) {
    if (window.console && typeof console.warn === "function") {
      if (err) { console.warn("[onpharm] " + msg, err); }
      else { console.warn("[onpharm] " + msg); }
    }
  }

  function guard(name, fn) {
    try { fn(); } catch (err) { warn(name + " 초기화 실패", err); }
  }

  function list(selector, ctx) {
    var scope = ctx || doc;
    var found;
    try { found = scope.querySelectorAll(selector); } catch (e) { return []; }
    var out = [];
    for (var i = 0; i < found.length; i++) { out.push(found[i]); }
    return out;
  }

  function on(el, type, fn, opts) {
    if (el && el.addEventListener) { el.addEventListener(type, fn, opts || false); }
  }

  var reduceMotion = false;
  try {
    reduceMotion = !!(window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  } catch (e) { reduceMotion = false; }

  /* 정지 모드가 뒤늦게 주입돼도(캡처 스크립트가 스크린샷 직전에 붙인다)
     결정적인 최종 프레임이 되도록 되돌리는 훅들. */
  var restorers = [];
  function onRestore(fn) { restorers.push(fn); }
  function restoreAll() {
    for (var i = 0; i < restorers.length; i++) {
      try { restorers[i](); } catch (err) { warn("정지 모드 복원 실패", err); }
    }
    restorers = [];
  }

  /* ======================================================================
     1) 캐러셀
     ====================================================================== */
  function initCarousel(box) {
    var track = box.querySelector(".op-carousel__track");
    if (!track) { return; }

    var slides = list(".op-carousel__slide", track);
    if (!slides.length) {
      var kids = track.children || [];
      for (var k = 0; k < kids.length; k++) { slides.push(kids[k]); }
    }
    if (slides.length < 2) { return; }

    var viewport = box.querySelector(".op-carousel__viewport") || track.parentNode;
    var dots = list(".op-carousel__dot", box);
    var index = 0;
    var timer = null;
    var hovering = false;
    var horizontal = null;

    var interval = parseInt(box.getAttribute("data-interval"), 10);
    if (!isFinite(interval) || interval < 2000) { interval = 7000; }

    /* 접근성 보강 (마크업에 이미 있으면 덮어쓰지 않는다) */
    for (var s = 0; s < slides.length; s++) {
      if (!slides[s].getAttribute("role")) { slides[s].setAttribute("role", "group"); }
      if (!slides[s].getAttribute("aria-roledescription")) {
        slides[s].setAttribute("aria-roledescription", "슬라이드");
      }
    }
    if (viewport && !viewport.getAttribute("aria-live")) {
      viewport.setAttribute("aria-live", "off");
    }

    /* 가로 배치 CSS 가 실제로 먹었는지 확인한다.
       (무JS 폴백은 세로로 쌓이므로 그 상태에서 translateX 를 걸면 화면이 사라진다) */
    function measure() {
      if (horizontal !== null) { return horizontal; }
      try {
        var a = slides[0].getBoundingClientRect();
        var b = slides[1].getBoundingClientRect();
        horizontal = Math.abs(b.top - a.top) < 8 && b.left > a.left;
      } catch (e) {
        horizontal = false;
      }
      return horizontal;
    }

    function paintDots() {
      for (var d = 0; d < dots.length; d++) {
        var on_ = (d === index);
        if (dots[d].classList) { dots[d].classList.toggle("is-on", on_); }
        if (on_) { dots[d].setAttribute("aria-current", "true"); }
        else { dots[d].removeAttribute("aria-current"); }
      }
    }

    function go(next) {
      if (isStatic()) { return; }
      var n = slides.length;
      index = ((next % n) + n) % n;
      if (measure()) {
        track.style.transform = "translateX(" + (-100 * index) + "%)";
      }
      paintDots();
    }

    function stop() {
      if (timer) { window.clearTimeout(timer); timer = null; }
    }

    function tick() {
      stop();
      if (reduceMotion || isStatic() || hovering) { return; }
      if (doc.visibilityState === "hidden") { return; }
      timer = window.setTimeout(function () {
        go(index + 1);
        tick();
      }, interval);
    }

    for (var i = 0; i < dots.length; i++) {
      (function (target, node) {
        if (node.tagName === "BUTTON" && !node.getAttribute("type")) {
          node.setAttribute("type", "button");
        }
        on(node, "click", function (ev) {
          if (ev && ev.preventDefault) { ev.preventDefault(); }
          go(target);
          tick();
        });
      })(i, dots[i]);
    }

    on(box, "mouseenter", function () { hovering = true; stop(); });
    on(box, "mouseleave", function () { hovering = false; tick(); });
    on(box, "focusin", function (ev) {
      hovering = true;
      stop();
      /* 키보드 탭이 화면 밖 슬라이드로 들어가면 그 슬라이드로 이동한다 */
      for (var j = 0; j < slides.length; j++) {
        if (ev && ev.target && slides[j].contains(ev.target)) {
          if (j !== index) { go(j); }
          break;
        }
      }
    });
    on(box, "focusout", function () { hovering = false; tick(); });

    if (box.classList) { box.classList.add("is-ready"); }
    paintDots();
    tick();

    onRestore(function () {
      stop();
      track.style.transform = "";
      index = 0;
      paintDots();
    });

    return { stop: stop, tick: tick };
  }

  var carousels = [];

  function setupCarousels() {
    var boxes = list("[data-carousel]");
    for (var i = 0; i < boxes.length; i++) {
      (function (box) {
        guard("캐러셀", function () {
          var api = initCarousel(box);
          if (api) { carousels.push(api); }
        });
      })(boxes[i]);
    }
    if (carousels.length) {
      on(doc, "visibilitychange", function () {
        for (var c = 0; c < carousels.length; c++) {
          if (doc.visibilityState === "hidden") { carousels[c].stop(); }
          else { carousels[c].tick(); }
        }
      });
    }
  }

  /* ======================================================================
     2) 아코디언 (네이티브 details)
     ====================================================================== */
  function setupAccordions() {
    var boxes = list("[data-accordion]");
    for (var i = 0; i < boxes.length; i++) {
      (function (box) {
        guard("아코디언", function () {
          var items = list("details", box);
          if (!items.length) { return; }

          var busy = false;
          for (var j = 1; j < items.length; j++) { items[j].open = false; }
          if (!items[0].open) { items[0].open = true; }

          for (var k = 0; k < items.length; k++) {
            (function (item) {
              on(item, "toggle", function () {
                if (busy || isStatic() || !item.open) { return; }
                busy = true;
                for (var m = 0; m < items.length; m++) {
                  if (items[m] !== item && items[m].open) { items[m].open = false; }
                }
                busy = false;
              });
            })(items[k]);
          }

          onRestore(function () {
            busy = true;
            for (var n = 0; n < items.length; n++) { items[n].open = true; }
            busy = false;
          });
        });
      })(boxes[i]);
    }
  }

  /* ======================================================================
     3) 스크롤 진입 리빌
     ====================================================================== */
  function setupReveal() {
    var targets = list("[data-reveal]");
    if (!targets.length) { return; }

    function showAll() {
      for (var i = 0; i < targets.length; i++) {
        if (targets[i].classList) { targets[i].classList.add("is-in"); }
      }
    }

    if (reduceMotion || isStatic() || typeof window.IntersectionObserver !== "function") {
      showAll();
      return;
    }

    var io = new window.IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var entry = entries[i];
        if (entry.isIntersecting || entry.intersectionRatio > 0) {
          if (entry.target.classList) { entry.target.classList.add("is-in"); }
          io.unobserve(entry.target);
        }
      }
    /* threshold 에 0 을 함께 둔다.
       뷰포트보다 훨씬 긴 섹션(모바일에서 흔하다)은 0.12 에 영원히 못 닿아
       화면을 다 덮고도 숨어 있을 수 있다. 0 크로싱이 그 경우를 막는다. */
    }, { threshold: [0, 0.12], rootMargin: "0px 0px -40px 0px" });

    for (var t = 0; t < targets.length; t++) { io.observe(targets[t]); }

    /* 안전망 — IntersectionObserver 만으로는 부족한 경우가 있다.
       앵커 점프(\`href="#signup"\`)나 브라우저 스크롤 복원처럼 한 프레임에
       페이지 중간을 통째로 건너뛰면, 지나쳐 온 섹션은 교차 콜백을 단 한 번도
       받지 못해 opacity:0 인 채로 남는다. 폴드 위로 올라온 것은 조건 없이
       드러내서 "숨겨진 채로 남는" 상태를 원천 차단한다. */
    var sweepPending = false;

    function detachSweep() {
      window.removeEventListener("scroll", scheduleSweep);
      window.removeEventListener("resize", scheduleSweep);
    }

    function sweep() {
      sweepPending = false;
      var vh = window.innerHeight || document.documentElement.clientHeight || 0;
      var remaining = 0;
      for (var i = 0; i < targets.length; i++) {
        var el = targets[i];
        if (!el.classList) { continue; }
        if (el.classList.contains("is-in")) { continue; }
        /* rootMargin 의 -40px 과 같은 기준선 */
        if (el.getBoundingClientRect().top < vh - 40) {
          el.classList.add("is-in");
          io.unobserve(el);
        } else {
          remaining++;
        }
      }
      if (!remaining) { detachSweep(); }
    }

    function scheduleSweep() {
      if (sweepPending) { return; }
      sweepPending = true;
      if (typeof window.requestAnimationFrame === "function") {
        window.requestAnimationFrame(sweep);
      } else {
        sweep();
      }
    }

    window.addEventListener("scroll", scheduleSweep);
    window.addEventListener("resize", scheduleSweep);
    scheduleSweep();

    onRestore(function () {
      io.disconnect();
      detachSweep();
      showAll();
    });
  }

  /* ======================================================================
     4) 히어로 영상 (없거나 실패하면 슬라이드가 보이게 한다)
     ====================================================================== */
  function setupHeroVideo() {
    var videos = list(".op-heromedia__video");
    for (var i = 0; i < videos.length; i++) {
      (function (video) {
        guard("히어로 영상", function () {
          function drop() {
            video.hidden = true;
            try { video.pause(); } catch (e) {}
          }

          var src = (video.getAttribute("src") || "").replace(/^\\s+|\\s+$/g, "");
          if (!src) {
            var source = video.querySelector("source[src]");
            src = source ? (source.getAttribute("src") || "").replace(/^\\s+|\\s+$/g, "") : "";
          }
          if (!src) { drop(); return; }

          video.hidden = false;
          video.muted = true;
          video.playsInline = true;
          on(video, "error", drop);

          var s2 = video.querySelector("source");
          if (s2) { on(s2, "error", drop); }

          if (typeof video.play === "function") {
            var played = video.play();
            if (played && typeof played.then === "function") {
              played.then(null, function () { drop(); });
            }
          }
        });
      })(videos[i]);
    }
  }

  /* ======================================================================
     5) 폼

     두 상태가 있고, 판단 기준은 마크업의 action 하나뿐이다.

       (a) action 이 비어 있다 = 수신처 미연결
           제출을 막고 콘솔에만 남긴다. 화면 문구는 절대 건드리지 않는다.

       (b) action 이 있다 = 구글폼 등에 연결됨
           막지 않는다. 필수 동의(required) 검증은 브라우저 기본에 맡긴다.
           form[target] 이 가리키는 숨은 iframe 으로 POST 되므로 페이지 이동이 없고,
           그 iframe 의 load 를 성공 신호로 받아 폼을 감사 문구로 교체한다.
           (구글폼은 CORS 때문에 fetch 로 응답을 읽을 수 없다. iframe 이 유일한 신호다.)

     JS 가 꺼져 있으면 (b) 는 그냥 폼 제출로 동작한다 - 감사 문구만 안 나온다.
     ====================================================================== */
  var FORM_FALLBACK_MS = 12000;   /* iframe load 가 끝내 안 오면 되돌릴 시간 */

  function trimmed(el, name) {
    return ((el && el.getAttribute(name)) || "").replace(/^\\s+|\\s+$/g, "");
  }

  /* target 이름과 같은 iframe 을 찾는다.
     못 찾으면 브라우저가 새 창을 열어 버리므로 경고한다. */
  function findSink(name) {
    if (!name) { return null; }
    var frames = list("iframe");
    for (var i = 0; i < frames.length; i++) {
      if (frames[i].name === name || frames[i].getAttribute("name") === name) {
        return frames[i];
      }
    }
    return null;
  }

  function findThanks(form) {
    var key = trimmed(form, "data-form");
    var all = list("[data-form-thanks]");
    for (var i = 0; i < all.length; i++) {
      if (!key || all[i].getAttribute("data-form-thanks") === key) { return all[i]; }
    }
    return null;
  }

  function initForm(form) {
    var action = trimmed(form, "action");
    var label = form.getAttribute("id") || trimmed(form, "data-form") || "form";

    /* (a) 수신처 미연결 */
    if (!action || action === "#") {
      on(form, "submit", function (ev) {
        if (ev && ev.preventDefault) { ev.preventDefault(); }
        warn("폼 action 이 비어 있어 제출을 막았습니다. 수신 엔드포인트를 연결하세요: " + label);
      });
      return;
    }

    /* (b) 수신처 연결됨 */
    var sinkName = trimmed(form, "target");
    var sink = findSink(sinkName);
    if (sinkName && !sink) {
      warn("target=\\"" + sinkName + "\\" 에 해당하는 iframe 이 없습니다. "
           + "이대로 제출하면 새 창이 열립니다: " + label);
    }

    var buttons = list("button[type='submit'], input[type='submit']", form);
    var thanks = findThanks(form);
    var sending = false;
    var timer = null;

    function lock(state) {
      for (var i = 0; i < buttons.length; i++) {
        try { buttons[i].disabled = state; } catch (e) {}
      }
    }

    function clearTimer() {
      if (timer) { window.clearTimeout(timer); timer = null; }
    }

    /* 성공 - 폼을 감사 문구로 교체한다 */
    function succeed() {
      clearTimer();
      sending = false;
      if (!thanks) { lock(false); return; }
      if (form.classList) { form.classList.add("op-form-done"); }
      form.hidden = true;
      thanks.hidden = false;
      try { thanks.focus(); } catch (e) {}
    }

    /* 신호가 끝내 안 왔다 - 성공을 가장하지 않는다.
       버튼만 되살려 다시 시도할 수 있게 둔다(잃어버린 신청이 중복 신청보다 나쁘다). */
    function giveUp() {
      clearTimer();
      sending = false;
      lock(false);
      warn("폼 전송 응답을 확인하지 못했습니다(차단 또는 지연). 다시 시도할 수 있습니다: " + label);
    }

    if (sink) {
      on(sink, "load", function () {
        /* iframe 은 최초 about:blank 로도 load 를 한 번 쏜다. 제출 이후만 신호로 본다. */
        if (!sending || isStatic()) { return; }
        succeed();
      });
    }

    on(form, "submit", function (ev) {
      if (isStatic()) { return; }
      if (sending) {
        /* 중복 제출 차단 (버튼은 잠겨 있지만 입력칸 Enter 로 들어올 수 있다) */
        if (ev && ev.preventDefault) { ev.preventDefault(); }
        return;
      }
      /* 여기서 preventDefault 를 하지 않는다 = 브라우저가 그대로 보낸다.
         required 미체크면 애초에 이 핸들러까지 오지 않는다(기본 검증). */
      sending = true;
      /* 버튼 잠금은 다음 틱에. 제출 직렬화가 끝난 뒤라야 안전하다. */
      window.setTimeout(function () { lock(true); }, 0);
      clearTimer();
      timer = window.setTimeout(giveUp, FORM_FALLBACK_MS);
    });

    /* 캡처 스크립트가 뒤늦게 정지 모드를 붙여도 폼은 원래 상태로 */
    onRestore(function () {
      clearTimer();
      sending = false;
      lock(false);
      if (form.classList) { form.classList.remove("op-form-done"); }
      form.hidden = false;
      if (thanks) { thanks.hidden = true; }
    });
  }

  function setupForms() {
    var forms = list("[data-form]");
    for (var i = 0; i < forms.length; i++) {
      (function (form) {
        guard("폼 배선", function () { initForm(form); });
      })(forms[i]);
    }
  }

  /* ======================================================================
     정지 모드 감시 - 캡처 스크립트가 나중에 op-static 을 붙여도 최종 프레임 고정
     ====================================================================== */
  function watchStatic() {
    if (typeof window.MutationObserver !== "function") { return; }
    var mo = new window.MutationObserver(function () {
      if (isStatic()) {
        mo.disconnect();
        restoreAll();
      }
    });
    mo.observe(root, { attributes: true, attributeFilter: ["class"] });
  }

  /* ======================================================================
     부팅
     ====================================================================== */
  function init() {
    if (isStatic()) { return; }
    guard("캐러셀 묶음", setupCarousels);
    guard("아코디언 묶음", setupAccordions);
    guard("리빌", setupReveal);
    guard("히어로 영상 묶음", setupHeroVideo);
    guard("폼", setupForms);
    guard("정지 모드 감시", watchStatic);
  }

  if (doc.readyState === "loading") {
    on(doc, "DOMContentLoaded", init);
  } else {
    init();
  }
})();
  }
  /* ===== 원본 끝 ========================================================= */

  function collect(spec) {
    var sel = spec.attr ? ("[" + spec.attr + "]") : ("." + spec.cls);
    var found;
    try { found = doc.querySelectorAll(sel); } catch (e) { return []; }
    var out = [];
    for (var i = 0; i < found.length; i++) { out.push(found[i]); }
    return out;
  }

  function inScope(el, scope) {
    if (!scope) { return true; }
    return scope === el || (scope.contains ? scope.contains(el) : false);
  }

  /* 이미 배선했거나 scope 밖인 요소는 후크를 잠깐 떼어 둔다.
     원본의 querySelectorAll 이 그 요소를 못 보게 만드는 것이 목적이다.
     전부 동기 구간이라 화면에는 아무 영향이 없다. */
  function park(scope) {
    var parked = [];
    for (var i = 0; i < HOOKS.length; i++) {
      var spec = HOOKS[i];
      var els = collect(spec);
      for (var j = 0; j < els.length; j++) {
        var el = els[j];
        var skip = (bound && bound.has(el)) || !inScope(el, scope);
        if (!skip) { continue; }
        try {
          if (spec.attr) {
            parked.push({ el: el, attr: spec.attr, val: el.getAttribute(spec.attr) });
            el.removeAttribute(spec.attr);
          } else if (el.classList) {
            parked.push({ el: el, cls: spec.cls });
            el.classList.remove(spec.cls);
          }
        } catch (e) {}
      }
    }
    return parked;
  }

  function unpark(parked) {
    for (var i = parked.length - 1; i >= 0; i--) {
      var p = parked[i];
      try {
        if (p.attr) {
          if (p.val === null) { p.el.removeAttribute(p.attr); }
          else { p.el.setAttribute(p.attr, p.val); }
        } else if (p.el.classList) {
          p.el.classList.add(p.cls);
        }
      } catch (e) {}
    }
  }

  function markBound(scope) {
    if (!bound) { return; }
    for (var i = 0; i < HOOKS.length; i++) {
      var els = collect(HOOKS[i]);
      for (var j = 0; j < els.length; j++) {
        if (inScope(els[j], scope)) { try { bound.add(els[j]); } catch (e) {} }
      }
    }
  }

  function init(scope) {
    /* 이벤트 핸들러로 바로 물렸을 때 Event 객체가 scope 로 새어 들어오는 걸 막는다 */
    if (scope && scope.nodeType !== 1) { scope = null; }

    var parked = park(scope);

    /* 원본의 '정지 모드 감시'는 <html> 에 MutationObserver 를 건다.
       첫 실행에서 이미 걸었으므로 재호출 때는 쌓이지 않게 잠깐 가려 둔다.
       (원본은 MutationObserver 가 없으면 그 부분만 조용히 건너뛴다) */
    var savedMO = null;
    var stubbed = false;
    if (runs > 0 && typeof global.MutationObserver === "function") {
      savedMO = global.MutationObserver;
      try { global.MutationObserver = undefined; stubbed = true; } catch (e) { stubbed = false; }
    }

    try {
      __onpharmRunOriginal();
    } finally {
      if (stubbed) { try { global.MutationObserver = savedMO; } catch (e) {} }
      unpark(parked);
    }

    runs += 1;
    markBound(scope);
  }

  global.__onpharmInitMotion = init;

  /* React 마운트 뒤에도, 평범한 정적 페이지에서도 똑같이 동작해야 한다 */
  if (doc.readyState !== "loading") {
    init();
  } else {
    doc.addEventListener("DOMContentLoaded", function () { init(); });
  }
})(typeof window !== "undefined" ? window : this);
`;

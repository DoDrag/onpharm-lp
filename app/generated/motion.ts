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
     1) 캐러셀     [data-carousel]
     2) 아코디언   [data-accordion] > details
     3) 리빌       [data-reveal]
     4) 히어로 영상 .op-heromedia__video
     5) 폼         [data-form]
     6) 고민 고르기 [data-concern-picker] > [data-concern] + [data-suggest]
     7) 부드러운 스크롤 [data-scroll-to]
     8) 마퀴(안전망) [data-marquee]  ← 흐름 자체는 순수 CSS 애니메이션이다
     9) 스크럽 엔진 [data-scrub] → --op-p   ← 스크롤 연동 모션의 유일한 경로
    10) 카운트업   [data-countup]
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
     6) 고민 고르기  [data-concern-picker]

     계약
       <section data-concern-picker>
         <button data-concern="fatigue" aria-pressed="true">          <- 선택형
         <button data-concern="unsure"  data-scroll-to="#signup">     <- 이동형
         <div data-suggest>
           <div class="fa-suggest__panel" data-for="fatigue"> …성분 칩… </div>

     ★ 무JS 열화의 핵심
       패널을 숨기는 CSS 는 \`.op-js:not(.op-static) .fa-suggest.is-live\` 하위에만 있다.
       .is-live 는 **여기서 초기화에 성공했을 때만** 붙인다. 그래서
         - JS 없음        -> op-js 자체가 없음        -> 8개 전부 보임
         - 정지모드(캡처) -> :not(.op-static) 이 끊음 -> 8개 전부 보임
         - 초기화 실패    -> is-live 를 안 붙임       -> 8개 전부 보임
       .is-on 을 먼저 칠하고 .is-live 를 나중에 붙여, 한 프레임도 빈 화면이 없다.
     ====================================================================== */
  function scrollToEl(target) {
    if (!target) { return; }
    if (typeof target.scrollIntoView !== "function") { return; }
    try {
      target.scrollIntoView({
        behavior: reduceMotion ? "auto" : "smooth",
        block: "start"
      });
    } catch (e) {
      /* 옵션 객체를 모르는 구형 브라우저 */
      try { target.scrollIntoView(true); } catch (e2) {}
    }
  }

  /* "#signup" / "signup" 둘 다 받는다. querySelector 대신 getElementById 라
     id 에 특수문자가 있어도 셀렉터 파싱으로 터지지 않는다. */
  function elementFor(ref) {
    var raw = (ref || "").replace(/^\\s+|\\s+$/g, "");
    if (!raw) { return null; }
    if (raw.charAt(0) === "#") { raw = raw.slice(1); }
    if (!raw) { return null; }
    try { return doc.getElementById(raw); } catch (e) { return null; }
  }

  function initPicker(box) {
    var buttons = list("[data-concern]", box);
    if (!buttons.length) { return; }

    var wrap = box.querySelector("[data-suggest]");
    var panels = wrap ? list("[data-for]", wrap) : [];

    function select(key) {
      var found = false;
      for (var i = 0; i < panels.length; i++) {
        var on_ = (panels[i].getAttribute("data-for") === key);
        if (panels[i].classList) { panels[i].classList.toggle("is-on", on_); }
        if (on_) { found = true; }
      }
      if (!found) { return false; }
      for (var j = 0; j < buttons.length; j++) {
        /* aria-pressed 가 없는 버튼(= 이동형)은 선택 상태를 갖지 않는다 */
        if (!buttons[j].hasAttribute || !buttons[j].hasAttribute("aria-pressed")) { continue; }
        buttons[j].setAttribute(
          "aria-pressed",
          buttons[j].getAttribute("data-concern") === key ? "true" : "false"
        );
      }
      return true;
    }

    function keyOf(btn) { return btn.getAttribute("data-concern") || ""; }

    /* 마크업이 이미 정해 둔 기본 선택을 그대로 따른다 */
    var initial = "";
    for (var a = 0; a < buttons.length; a++) {
      if (buttons[a].getAttribute("aria-pressed") === "true") { initial = keyOf(buttons[a]); break; }
    }
    if (!initial) {
      for (var b = 0; b < buttons.length; b++) {
        if (buttons[b].hasAttribute && buttons[b].hasAttribute("aria-pressed")) {
          initial = keyOf(buttons[b]);
          break;
        }
      }
    }

    var live = false;
    if (panels.length && initial && select(initial) && wrap && wrap.classList) {
      wrap.classList.add("is-live");     /* ← 여기서만 "하나만 보이기" 가 켜진다 */
      live = true;
    }

    for (var k = 0; k < buttons.length; k++) {
      (function (btn) {
        if (btn.tagName === "BUTTON" && !btn.getAttribute("type")) {
          btn.setAttribute("type", "button");
        }

        on(btn, "click", function (ev) {
          if (isStatic()) { return; }
          var jump = trimmed(btn, "data-scroll-to");
          if (jump) {
            var target = elementFor(jump);
            if (!target) { return; }           /* 대상이 없으면 기본동작에 맡긴다 */
            if (ev && ev.preventDefault) { ev.preventDefault(); }
            scrollToEl(target);
            return;                            /* 이동형은 성분 패널을 건드리지 않는다 */
          }
          if (!live) { return; }
          if (ev && ev.preventDefault) { ev.preventDefault(); }
          select(keyOf(btn));
        });

        /* 좌우 화살표로 카드 사이 이동 (roving tabindex 는 쓰지 않는다 -
           전부 Tab 으로 닿아야 무JS 폴백과 초점 순서가 같다) */
        on(btn, "keydown", function (ev) {
          var key = ev && ev.key;
          if (key !== "ArrowLeft" && key !== "ArrowRight") { return; }
          var idx = -1;
          for (var q = 0; q < buttons.length; q++) {
            if (buttons[q] === btn) { idx = q; break; }
          }
          if (idx < 0) { return; }
          if (ev.preventDefault) { ev.preventDefault(); }
          var step = (key === "ArrowRight") ? 1 : (buttons.length - 1);
          var next = buttons[(idx + step) % buttons.length];
          try { next.focus(); } catch (e) {}
          if (live && !trimmed(next, "data-scroll-to")) { select(keyOf(next)); }
        });
      })(buttons[k]);
    }

    onRestore(function () {
      /* 정지 모드 = 8개 전부 보이는 상태로 되돌린다 (섹션 PNG 에 다 담긴다) */
      if (wrap && wrap.classList) { wrap.classList.remove("is-live"); }
    });
  }

  function setupPickers() {
    var boxes = list("[data-concern-picker]");
    for (var i = 0; i < boxes.length; i++) {
      (function (box) {
        guard("고민 고르기", function () { initPicker(box); });
      })(boxes[i]);
    }
  }

  /* ======================================================================
     8) 마퀴 [data-marquee]  —  안전망 전용
     --------------------------------------------------------------------
     흐름(무한 루프)은 theme_onpharm.css 의 @keyframes opMarquee 가 혼자 한다.
     JS 가 없어도 그대로 돈다. 여기서 하는 일은 세 가지뿐이다.

       (1) 트랙이 1벌뿐이면 복제해 이음매를 메운다
           (템플릿이 2벌 넣는 것이 정석이다. 이건 빠뜨렸을 때의 보정.)
       (2) data-speed 가 CSS 표(15~120)에 없는 값이어도 --op-marquee-dur 를 꽂는다
       (3) 아이템 총 폭이 컨테이너보다 좁으면 .is-short 로 흐름을 끈다
           (짧으면 한 바퀴에 빈 구간이 생겨 보기 흉하다)

     ★ 정지 모드(op-static)에서는 이 함수가 아예 실행되지 않는다. 캡처 PNG 는
       "템플릿 마크업 그대로"여야 결정적이므로, 나중에 op-static 이 붙는 경우를
       대비해 여기서 만든 흔적(복제 트랙 / is-short / 인라인 duration)을
       onRestore 로 전부 되돌린다.
     ====================================================================== */
  var MQ_MIN_DUR = 4;
  var MQ_MAX_DUR = 600;

  function mqTracks(box) {
    var out = [];
    var kids = box.children || [];
    for (var i = 0; i < kids.length; i++) {
      if (kids[i].classList && kids[i].classList.contains("op-marquee__track")) {
        out.push(kids[i]);
      }
    }
    return out;
  }

  function mqNeutralize(node) {
    /* 복제본은 보조기기에서 한 번만 읽히고 탭 순서에도 안 걸려야 한다 */
    node.setAttribute("aria-hidden", "true");
    node.setAttribute("data-marquee-clone", "");
    var ids = list("[id]", node);
    for (var i = 0; i < ids.length; i++) { ids[i].removeAttribute("id"); }
    var focusable = list("a[href],button,input,select,textarea,[tabindex]", node);
    for (var j = 0; j < focusable.length; j++) {
      focusable[j].setAttribute("tabindex", "-1");
      focusable[j].setAttribute("aria-hidden", "true");
    }
  }

  function initMarquee(box) {
    var tracks = mqTracks(box);
    if (!tracks.length) { return; }

    /* (1) 복제본 보정 */
    var made = null;
    if (tracks.length === 1) {
      made = tracks[0].cloneNode(true);
      mqNeutralize(made);
      box.appendChild(made);
      tracks.push(made);
    }

    /* (2) 속도 */
    var hadDur = box.style.getPropertyValue("--op-marquee-dur");
    var raw = trimmed(box, "data-speed");
    var secs = parseFloat(raw);
    if (raw && !isNaN(secs) && secs >= MQ_MIN_DUR && secs <= MQ_MAX_DUR) {
      box.style.setProperty("--op-marquee-dur", secs + "s");
    }

    /* (2-b) data-speed="auto" — 초(duration)가 아니라 **픽셀 속도**로 맞춘다.
       duration 고정은 트랙 폭이 바뀌면(반응형/아이템 수 변경) 체감 속도가 같이
       바뀐다. 삼신 실측은 4,113.9px / 50s = 41.1 px/s 인데 상세페이지에서는
       "멈춰 있는 것 같다"로 읽힌다. 기본 75 px/s (권장 60~90).
       data-pxs 로 덮을 수 있다. 이건 **선택 기능**이라 기존 숫자 data-speed 는
       그대로 동작한다. */
    var autoDur = null;
    if (raw === "auto") {
      var pxs = parseFloat(trimmed(box, "data-pxs"));
      if (!isFinite(pxs) || pxs < 10 || pxs > 400) { pxs = 75; }
      autoDur = function () {
        var w = 0;
        try { w = tracks[0].getBoundingClientRect().width; } catch (e) { return; }
        if (!w) { return; }                       /* display:none -> 판정 보류 */
        var d = w / pxs;
        if (d < MQ_MIN_DUR) { d = MQ_MIN_DUR; }
        if (d > MQ_MAX_DUR) { d = MQ_MAX_DUR; }
        box.style.setProperty("--op-marquee-dur", d.toFixed(2) + "s");
      };
    }

    /* (3) 짧은 내용 판정 — 한 벌이 컨테이너를 못 채우면 흐르게 두지 않는다 */
    function measure() {
      if (isStatic()) { return; }
      var one = tracks[0];
      var w = 0;
      try { w = one.getBoundingClientRect().width; } catch (e) { return; }
      var boxW = 0;
      try { boxW = box.getBoundingClientRect().width; } catch (e) { return; }
      if (!w || !boxW) { return; }          /* display:none 구간 = 판정 보류 */
      if (w < boxW) { box.classList.add("is-short"); }
      else { box.classList.remove("is-short"); }
      if (autoDur) { autoDur(); }
    }
    measure();

    var ro = null;
    if (typeof window.ResizeObserver === "function") {
      try {
        ro = new window.ResizeObserver(function () { measure(); });
        ro.observe(box);
      } catch (e) { ro = null; }
    }
    if (!ro) { on(window, "resize", measure); }

    onRestore(function () {
      if (ro) { try { ro.disconnect(); } catch (e) {} }
      box.classList.remove("is-short");
      if (made && made.parentNode === box) { box.removeChild(made); }
      if (hadDur) { box.style.setProperty("--op-marquee-dur", hadDur); }
      else { box.style.removeProperty("--op-marquee-dur"); }
    });
  }

  function setupMarquees() {
    var boxes = list("[data-marquee]");
    for (var i = 0; i < boxes.length; i++) {
      (function (box) {
        guard("마퀴", function () { initMarquee(box); });
      })(boxes[i]);
    }
  }

  /* ======================================================================
     7) 부드러운 스크롤 [data-scroll-to]  (히어로 "쿠폰받기" 칩 등)
     앵커의 기본동작을 대신한다. JS 가 없으면 <a href="#..."> 가 그대로 동작한다.
     피커 버튼은 6) 이 직접 처리하므로 여기서 건너뛴다.
     ====================================================================== */
  function setupScrollLinks() {
    var links = list("[data-scroll-to]");
    for (var i = 0; i < links.length; i++) {
      (function (el) {
        if (el.hasAttribute && el.hasAttribute("data-concern")) { return; }
        on(el, "click", function (ev) {
          if (isStatic()) { return; }
          var target = elementFor(trimmed(el, "data-scroll-to"));
          if (!target) { return; }
          if (ev && ev.preventDefault) { ev.preventDefault(); }
          scrollToEl(target);
        });
      })(links[i]);
    }
  }

  /* ======================================================================
     9) 스크롤 스크럽 엔진  [data-scrub]  ->  --op-p
     ----------------------------------------------------------------------
     삼신(samsin.biz) 실측 모션을 바닐라로 옮긴 것. 외부 의존 0.

     설계 결정 (바꾸기 전에 반드시 읽을 것)

       * 문서 스크롤을 하이재킹하지 않는다.
         Lenis 식 "스크롤 위치 자체를 rAF 로 보간" 은 (a) 캡처 PNG 결정성이
         무너지고 (b) 키보드/스크린리더/브라우저 찾기/스크롤 복원이 깨지고
         (c) onpharm.kr 에 임베드된 면이 호스트 스크롤을 뺏는 사고가 된다.
         **관성은 "스크롤"이 아니라 "진행률"에만 건다.** 체감의 대부분은
         여기서 나온다. (삼신 실측: 여운의 정체는 scrub 지연이지 Lenis 가 아니었다)

       * JS 는 스타일을 직접 쓰지 않는다. --op-p 하나만 쓴다.
         transform / opacity / background 는 전부 theme_onpharm.css 가 만든다.

       * rAF 는 문서당 하나. 엔진은 window.__onpharmScrubEngine 싱글턴이다.
         (Next.js 래퍼가 면을 바꿔 낄 때마다 이 원본을 재실행하므로,
          모듈 지역변수에 두면 rAF 가 면 개수만큼 늘어난다)

       * 화면 밖 요소는 계산하지 않는다. IntersectionObserver 로 추린다.
         화면을 지나쳐 버린 요소는 교차 콜백에서 한 번 목표값으로 스냅하므로
         앵커 점프(#signup)/스크롤 복원으로 건너뛰어도 숨은 채 남지 않는다.

       * display:none 구간(rect 0)은 값을 캐시하지 않고 직전 값을 유지한다.
         (면 토글 시 캐러셀 트랙이 죽었던 회귀의 같은 함정)

     감쇠식 — 삼신 실측 그대로
         p += (t - p) * (1 - 2^(-dt/hl))      hl = 반감기(초)
     GSAP scrub s 의 반감기는 s/10 이다(실측: scrub 1.5 -> 150ms).
     그래서 data-scrub 값이 1 보다 크면 scrub 값으로 보고 1/10 로 환산한다.
     상세페이지 권장치는 0.08~0.10 이다(삼신의 0.15 는 "안 따라온다"로 읽힌다).
     ====================================================================== */
  var SCRUB_KEY = "__onpharmScrubEngine";
  var SCRUB_EPS = 0.0008;       /* 이 이하로 붙으면 목표값에 스냅하고 멈춘다 */
  var SCRUB_HL_DEFAULT = 0.12;  /* 기본 반감기(초) */
  var SCRUB_HL_MAX = 0.6;

  function coarsePointer() {
    try {
      return !!(window.matchMedia && window.matchMedia("(pointer: coarse)").matches);
    } catch (e) { return false; }
  }

  function makeScrubEngine() {
    var items = [];      /* {el, hl, from, to, seq, parts, p, t, live, wrote} */
    var tweens = [];     /* {t0, dur, step, done} - 카운트업이 여기 얹힌다 */
    var raf = 0;
    var last = 0;
    var dirty = true;
    var dead = false;
    var io = null;
    /* 모바일(coarse)과 감소 모션에서는 보간을 끄고 즉시 반영한다.
       터치 스크롤은 이미 OS 관성이 붙어 있어 한 겹 더 얹으면 늦게만 느껴진다. */
    var instant = reduceMotion || coarsePointer();
    var eng = {};

    function vh() {
      return window.innerHeight ||
             (doc.documentElement && doc.documentElement.clientHeight) || 0;
    }

    /* 진행률 0~1.
         a = top    - vh*from   (음수가 되면 진입)
         b = bottom - vh*to     (음수가 되면 종료)
       구간 = b - a = 요소높이 + vh*(from-to) 라 항상 양수다. */
    function targetOf(it) {
      var r;
      try { r = it.el.getBoundingClientRect(); } catch (e) { return it.t; }
      if (!r || (!r.width && !r.height)) { return it.t; }   /* display:none -> 보류 */
      var h = vh();
      if (!h) { return it.t; }
      it.measured = true;
      var a = r.top - h * it.from;
      var b = r.bottom - h * it.to;
      var span = b - a;
      if (span <= 1) { return r.top <= h * it.from ? 1 : 0; }
      var p = -a / span;
      return p < 0 ? 0 : (p > 1 ? 1 : p);
    }

    function put(el, v) {
      try { el.style.setProperty("--op-p", v.toFixed(4)); } catch (e) {}
    }

    function write(it) {
      if (it.wrote !== null && Math.abs(it.wrote - it.p) < 0.0005) { return; }
      it.wrote = it.p;
      put(it.el, it.p);
      if (it.seq > 0 && it.parts.length) {
        /* 타임라인 stagger: 한 진행률을 자식 n개로 1:1:1 분할 (삼신과 동일) */
        for (var i = 0; i < it.parts.length; i++) {
          var q = it.p * it.seq - i;
          put(it.parts[i], q < 0 ? 0 : (q > 1 ? 1 : q));
        }
      }
    }

    function snap(it) {
      it.t = targetOf(it);
      it.p = it.t;
      write(it);
    }

    function schedule() {
      if (raf || dead) { return; }
      if (typeof window.requestAnimationFrame !== "function") { return; }
      raf = window.requestAnimationFrame(step);
    }

    function step(now) {
      raf = 0;
      if (dead) { return; }
      if (isStatic()) { eng.freeze(); return; }

      var dt = last ? (now - last) / 1000 : 0.016;
      if (!(dt > 0)) { dt = 0.016; }
      if (dt > 0.05) { dt = 0.05; }     /* 탭 복귀 등으로 튀는 dt 를 자른다 */
      last = now;

      var wasDirty = dirty;
      dirty = false;
      var moving = false;
      var i;

      for (i = items.length - 1; i >= 0; i--) {
        var it = items[i];
        if (it.el.isConnected === false) {          /* 면 교체로 떨어져 나간 노드 */
          if (io) { try { io.unobserve(it.el); } catch (e) {} }
          try { it.el.__opScrub = null; } catch (e) {}
          items.splice(i, 1);
          continue;
        }
        if (!it.live) { continue; }
        it.t = targetOf(it);
        if (instant || it.hl <= 0) {
          it.p = it.t;
        } else {
          it.p += (it.t - it.p) * (1 - Math.pow(2, -dt / it.hl));
          if (Math.abs(it.t - it.p) < SCRUB_EPS) { it.p = it.t; }
          else { moving = true; }
        }
        write(it);
      }

      for (i = tweens.length - 1; i >= 0; i--) {
        var tw = tweens[i];
        var u = (now - tw.t0) / tw.dur;
        if (u >= 1) { u = 1; }
        try { tw.step(u); } catch (err) { u = 1; }
        if (u >= 1) { tweens.splice(i, 1); } else { moving = true; }
      }

      if (moving || wasDirty) { schedule(); }
      else { last = 0; }
    }

    function wake() {
      if (dead) { return; }
      dirty = true;
      schedule();
    }

    function onLeave(el, live) {
      var it = el.__opScrub;
      if (!it) { return; }
      var was = it.live;
      it.live = !!live;
      /* 아직 한 번도 실측되지 못한 요소(면이 hidden 이라 rect 0 이었다)가 이제야
         보이기 시작했다면, 보간 없이 현재 위치값으로 바로 찍는다.
         면 토글 직후 이미 지나온 섹션이 --op-p:0 으로 한 프레임 깜빡이는 것을 막는다.
         (평소의 폴드 아래 진입은 t 도 0 이라 스냅해도 결과가 같다) */
      if (live && !was && !it.measured) { snap(it); return; }
      /* 화면 밖으로 나갈 때 한 번 목표값으로 스냅해 둔다.
         위로 지나쳐 온 요소는 여기서 --op-p:1 이 되므로 "숨은 채 남는" 상태가
         구조적으로 생기지 않는다(리빌의 스크롤 스윕 안전망과 같은 역할). */
      if (!live) { snap(it); }
    }

    function ensureIO() {
      if (io || typeof window.IntersectionObserver !== "function") { return; }
      try {
        io = new window.IntersectionObserver(function (entries) {
          for (var i = 0; i < entries.length; i++) {
            onLeave(entries[i].target,
                    entries[i].isIntersecting || entries[i].intersectionRatio > 0);
          }
          wake();
        }, { rootMargin: "25% 0px 25% 0px", threshold: 0 });
      } catch (e) { io = null; }
    }

    function num(el, name, dflt) {
      var v = parseFloat(trimmed(el, name));
      return isFinite(v) ? v : dflt;
    }

    eng.scan = function (ctx) {
      if (dead || isStatic()) { return; }
      var els = list("[data-scrub]", ctx && ctx.nodeType === 1 ? ctx : doc);
      if (!els.length) { return; }
      ensureIO();

      for (var i = 0; i < els.length; i++) {
        var el = els[i];
        if (el.__opScrub) { continue; }

        var hl = num(el, "data-scrub", SCRUB_HL_DEFAULT);
        if (hl > 1) { hl = hl / 10; }            /* GSAP scrub 표기 호환 */
        if (!(hl >= 0)) { hl = SCRUB_HL_DEFAULT; }
        if (hl > SCRUB_HL_MAX) { hl = SCRUB_HL_MAX; }

        var from = num(el, "data-scrub-from", 0.85);
        var to = num(el, "data-scrub-to", 0.35);
        if (!(from > to) || from > 1.5 || to < -0.5) { from = 0.85; to = 0.35; }

        var seq = Math.floor(num(el, "data-scrub-seq", 0));
        var parts = seq > 0 ? list("[data-scrub-part]", el) : [];
        if (seq > 0 && parts.length && parts.length !== seq) { seq = parts.length; }

        var it = { el: el, hl: hl, from: from, to: to, seq: seq, parts: parts,
                   p: 0, t: 0, live: true, wrote: null, measured: false };
        try { el.__opScrub = it; } catch (e) {}
        items.push(it);

        /* 최초 값은 보간 없이 현재 스크롤 위치 그대로 찍는다.
           스크럽은 "등장 애니메이션"이 아니라 위치 함수라, 새로고침 직후
           이미 지나온 섹션이 0 에서 다시 차오르면 오히려 어색하다.
           첫 rAF 를 기다리지 않고 여기서 동기로 써야 첫 페인트가 안 튄다. */
        snap(it);
        if (io) { try { io.observe(el); } catch (e) {} }
      }
      wake();
    };

    /* 카운트업 등 시간 기반 모션이 얹히는 자리. rAF 를 새로 열지 않는다. */
    eng.tween = function (dur, stepFn) {
      if (dead || typeof stepFn !== "function") { return; }
      if (!(dur > 0)) { dur = 1; }
      tweens.push({ t0: (window.performance && performance.now) ? performance.now()
                                                                : +new Date(),
                    dur: dur, step: stepFn });
      wake();
    };

    /* 정지 모드 진입 = 인라인 --op-p 를 걷어낸다.
       그러면 .op-js:not(.op-static) 조건이 풀리면서 CSS 기본값 1(최종 프레임)이
       그대로 남는다. 인라인 값을 1 로 "쓰는" 것보다 지우는 쪽이 결정적이다. */
    eng.freeze = function () {
      if (dead) { return; }
      dead = true;
      if (raf && typeof window.cancelAnimationFrame === "function") {
        try { window.cancelAnimationFrame(raf); } catch (e) {}
      }
      raf = 0;
      if (io) { try { io.disconnect(); } catch (e) {} io = null; }
      for (var i = 0; i < items.length; i++) {
        var it = items[i];
        try { it.el.style.removeProperty("--op-p"); } catch (e) {}
        for (var j = 0; j < it.parts.length; j++) {
          try { it.parts[j].style.removeProperty("--op-p"); } catch (e) {}
        }
      }
      for (var k = 0; k < tweens.length; k++) {
        try { tweens[k].step(1); } catch (e) {}
      }
      tweens.length = 0;
      window.removeEventListener("scroll", wake);
      window.removeEventListener("resize", wake);
      window.removeEventListener("orientationchange", wake);
      window.removeEventListener("load", wake);
    };

    eng.wake = wake;
    eng.instant = instant;

    on(window, "scroll", wake, { passive: true });
    on(window, "resize", wake);
    on(window, "orientationchange", wake);
    on(window, "load", wake);     /* 늦게 뜬 이미지로 레이아웃이 밀린 경우 */

    return eng;
  }

  function scrubEngine() {
    var eng = window[SCRUB_KEY];
    if (eng) { return eng; }
    eng = makeScrubEngine();
    try { window[SCRUB_KEY] = eng; } catch (e) {}
    return eng;
  }

  function setupScrub() {
    if (isStatic()) { return; }
    if (!list("[data-scrub]").length && !list("[data-countup]").length) { return; }
    var eng = scrubEngine();
    eng.scan();
    onRestore(function () { eng.freeze(); });
  }

  /* ======================================================================
     10) 카운트업 [data-countup]
     ----------------------------------------------------------------------
     마크업에 최종 숫자가 이미 적혀 있다(무JS = 그 숫자가 그냥 보인다).
     JS 는 화면에 들어올 때 딱 한 번 0 -> 최종값으로 굴리고 끝난다.

     ★ 금액에는 걸지 않는다. 가격은 면에 노출하지 않는 것이 확정 정책이라,
       주변 텍스트에 원/₩/$ 가 보이면 런타임이 조용히 건너뛴다(안전한 쪽으로 실패).
     ★ 숫자 자리만 갈아끼우고 앞뒤 문자열은 그대로 둔다("249개사", "+12%").
     ====================================================================== */
  var COUNT_NUM_RE = /^([\\s\\S]*?)([0-9][0-9,]*(?:\\.[0-9]+)?)([\\s\\S]*)$/;
  var COUNT_MONEY_RE = /[원₩$]|\\bKRW\\b|\\bUSD\\b/;

  function countFormat(v, dec, grouped) {
    var s = dec > 0 ? v.toFixed(dec) : String(Math.round(v));
    if (!grouped) { return s; }
    var parts = s.split(".");
    parts[0] = parts[0].replace(/\\B(?=(\\d{3})+(?!\\d))/g, ",");
    return parts.join(".");
  }

  function initCountup(el) {
    var raw = (el.textContent || "");
    var m = COUNT_NUM_RE.exec(raw);
    if (!m) { return; }

    /* 금액 방어: 요소 본문과 그 부모의 문맥을 함께 본다.
       오탐(=그냥 안 굴러감)은 무해하고, 누락(=가격이 굴러감)은 금칙 위반이다. */
    var ctxText = raw;
    try {
      if (el.parentNode && el.parentNode.textContent) {
        ctxText += " " + el.parentNode.textContent;
      }
    } catch (e) {}
    if (COUNT_MONEY_RE.test(ctxText)) {
      warn("카운트업: 금액으로 보여 건너뜁니다 - " + raw.slice(0, 24));
      return;
    }

    var head = m[1], body = m[2], tail = m[3];
    var grouped = body.indexOf(",") >= 0;
    var dot = body.indexOf(".");
    var dec = dot >= 0 ? (body.length - dot - 1) : 0;
    if (dec > 3) { dec = 3; }
    var end = parseFloat(body.replace(/,/g, ""));
    if (!isFinite(end)) { return; }

    var start = parseFloat(trimmed(el, "data-countup-from"));
    if (!isFinite(start)) { start = 0; }

    var dur = parseFloat(trimmed(el, "data-countup-dur"));
    if (!isFinite(dur) || dur < 300 || dur > 4000) { dur = 1100; }

    function paint(v) {
      try { el.textContent = head + countFormat(v, dec, grouped) + tail; } catch (e) {}
    }
    function finish() { try { el.textContent = raw; } catch (e) {} }

    if (reduceMotion || isStatic() || typeof window.IntersectionObserver !== "function") {
      return;   /* 마크업이 이미 최종값이다. 손대지 않는 것이 정답. */
    }

    var eng = scrubEngine();
    var fired = false;

    var cio = new window.IntersectionObserver(function (entries) {
      for (var i = 0; i < entries.length; i++) {
        if (!entries[i].isIntersecting && entries[i].intersectionRatio <= 0) { continue; }
        cio.disconnect();
        if (fired || isStatic()) { finish(); return; }
        fired = true;
        paint(start);
        eng.tween(dur, function (u) {
          if (isStatic()) { finish(); return; }
          /* easeOutExpo — 삼신 scrub 과 같은 계열의 감속 */
          var e = u >= 1 ? 1 : 1 - Math.pow(2, -10 * u);
          if (u >= 1) { finish(); }
          else { paint(start + (end - start) * e); }
        });
        return;
      }
    }, { threshold: [0, 0.35], rootMargin: "0px 0px -10% 0px" });

    cio.observe(el);
    onRestore(function () {
      try { cio.disconnect(); } catch (e) {}
      finish();
    });
  }

  function setupCountups() {
    var els = list("[data-countup]");
    for (var i = 0; i < els.length; i++) {
      (function (el) {
        if (el.__opCount) { return; }
        try { el.__opCount = 1; } catch (e) {}
        guard("카운트업", function () { initCountup(el); });
      })(els[i]);
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
    guard("고민 고르기 묶음", setupPickers);
    guard("부드러운 스크롤", setupScrollLinks);
    guard("마퀴 묶음", setupMarquees);
    guard("스크럽 엔진", setupScrub);
    guard("카운트업 묶음", setupCountups);
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

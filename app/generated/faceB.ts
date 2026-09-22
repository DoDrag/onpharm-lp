// =============================================================
// 이 파일은 scripts/export_nextjs.py 가 생성합니다. 직접 고치지 마세요.
// 고칠 곳은 생성기의 copy_*.json 입니다.
//   copy_a.json -> onpharm_build.py -> export_nextjs.py -> 이 파일
// =============================================================

// 면 B · 약국 파트너 (6섹션). /partner/ 라우트만 import 한다.
export const FACE_B_HTML: string = `<section class="op-sec op-sec--navy op-sec--tall" data-section="b01_hero">
    <div class="fb-hero-bg" aria-hidden="true"><div class="op-heromedia" data-motion="crossfade" data-count="2">
        <video class="op-heromedia__video" autoplay muted loop playsinline
></video>
        <div class="op-heromedia__slides">
          <img class="op-heromedia__slide" src="/onpharm/b01_hero.jpg" alt=""
               width="1536" height="864" style="--i:0">
          <img class="op-heromedia__slide" src="/onpharm/b01_hero_2.jpg" alt=""
               width="1536" height="864" style="--i:1">
        </div>
      </div>
      <span class="op-veil op-veil--soft"></span>
    </div><div class="op-inner op-veil-content">
      <div class="fb-hero-head">
        <span class="op-logotype op-logotype--sm" role="img" aria-label="온팜"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 363 50" role="img" aria-label="ONPHARM"><g fill="currentColor"><path d="M128.05 0.98L23.01 0.98C10.17 0.98 -0.28 11.43 -0.28 24.27C-0.28 37.11 10.17 47.56 23.01 47.56L128.05 47.56C140.89 47.56 151.34 37.11 151.34 24.27C151.34 11.43 140.89 0.98 128.05 0.98M128.05 36.98L23.01 36.98C16 36.98 10.3 31.28 10.3 24.27C10.3 17.26 16 11.56 23.01 11.56L128.05 11.56C135.06 11.56 140.77 17.26 140.77 24.27C140.77 31.28 135.06 36.98 128.05 36.98 Z"/><path d="M24.2 16.99C20.19 16.99 16.92 20.26 16.92 24.27C16.92 28.29 20.19 31.55 24.2 31.55C28.22 31.55 31.48 28.29 31.48 24.27C31.48 20.26 28.22 16.99 24.2 16.99 Z"/><path d="M239.89 17.19L235.32 17.19L235.32 13.64C235.32 10.32 232.63 7.63 229.31 7.63L239.89 7.63L239.89 1.79L206.88 1.79L206.88 7.63L211.61 7.63L211.61 17.19L206.88 17.19L206.88 23.04L239.89 23.04L239.89 17.19M225.82 17.19L221.1 17.19L221.1 13.64C221.1 10.32 218.41 7.63 215.09 7.63L225.82 7.63L225.82 17.19 Z"/><path d="M211.51 44.55C211.51 46.21 212.86 47.56 214.52 47.56L254.03 47.56L254.03 27.05L211.51 27.05L211.51 44.55M221.01 32.89H244.54V41.71H221.01Z Z"/><path d="M254.03 1.79L244.54 1.79L244.54 23.04L254.03 23.04L254.03 14.22L259.43 14.22L259.43 8.37L254.03 8.37L254.03 1.79 Z"/><path d="M168.96 35.91L159.46 35.91L159.46 44.55C159.46 46.21 160.81 47.56 162.47 47.56L201.98 47.56L201.98 41.71L168.96 41.71L168.96 35.91 Z"/><path d="M191.35 23.04C197.22 23.04 201.98 18.28 201.98 12.41C201.98 6.54 197.22 1.79 191.35 1.79L170.09 1.79C164.22 1.79 159.46 6.54 159.46 12.41C159.46 18.28 164.22 23.04 170.09 23.04L175.97 23.04L175.97 27.05L159.46 27.05L159.46 32.89L201.98 32.89L201.98 27.05L185.47 27.05L185.47 23.04L191.35 23.04M173.74 17.19C171.1 17.19 168.96 15.05 168.96 12.41C168.96 9.77 171.1 7.63 173.74 7.63L187.71 7.63C190.35 7.63 192.49 9.77 192.49 12.41C192.49 15.05 190.35 17.19 187.71 17.19L173.74 17.19 Z"/><path d="M360.63 1.79L321.12 1.79L321.12 7.63L354.14 7.63L354.14 17.63L363.63 17.63L363.63 4.79C363.63 3.13 362.29 1.79 360.63 1.79 Z"/><path d="M321.12 21.12L321.12 26.97L337.63 26.97L337.63 32.8L321.12 32.8L321.12 38.65L354.14 38.65L354.14 47.56L363.63 47.56L363.63 35.81C363.63 34.15 362.29 32.8 360.63 32.8L347.12 32.8L347.12 26.97L363.63 26.97L363.63 21.12L321.12 21.12 Z"/><path d="M308.23 30.16L268.72 30.16L268.72 36L301.74 36L301.74 47.56L311.23 47.56L311.23 33.16C311.23 31.5 309.89 30.16 308.23 30.16 Z"/><path d="M284.91 26.15C291.64 26.15 297.09 20.7 297.09 13.97C297.09 7.24 291.64 1.79 284.91 1.79L276.1 1.79C269.37 1.79 263.91 7.24 263.91 13.97C263.91 20.7 269.37 26.15 276.1 26.15L284.91 26.15M273.4 13.97C273.4 10.47 276.24 7.63 279.74 7.63L281.26 7.63C284.76 7.63 287.6 10.47 287.6 13.97C287.6 17.47 284.76 20.31 281.26 20.31L279.74 20.31C276.24 20.31 273.4 17.47 273.4 13.97 Z"/><path d="M311.23 1.79L301.74 1.79L301.74 26.15L311.23 26.15L311.23 21.56L316.63 21.56L316.63 15.71L311.23 15.71L311.23 12.23L316.63 12.23L316.63 6.38L311.23 6.38L311.23 1.79 Z"/></g></svg></span>
        <span class="op-badge op-badge--line">약국 파트너 모집</span>
      </div>

      <span class="op-eyebrow">약국 파트너</span>
      <h1 class="op-h1 fb-hero-title">
        <span class="op-accent">손님을</span> 보내드립니다
      </h1>
      <p class="op-lead op-measure op-mt-24">
        매대만 내어 드리는 유통이 아닙니다. 온라인 상담에서 만난 고객을 위치에 맞는 파트너 약국으로 배정하고, 픽업 쿠폰까지 붙여서 보내드립니다.
      </p>

      <div class="op-row op-row--wrap op-mt-40">
        <a class="op-btn op-btn--lg" href="#b06_apply">파트너 신청하기</a>
        <span class="op-note">지역별 순차 오픈 · 신청 순으로 배정 지역 확정</span>
      </div>

      <div class="op-grid-3 op-mt-64">
        <div class="op-card op-card--flat fb-stat">
          <span class="fb-stat__mark"></span>
          <p class="fb-stat__label">위치 기반 자동 배정</p>
          <p class="fb-stat__desc">고객이 남긴 고민은 가장 가까운 파트너 약국으로 자동 배정됩니다.</p>
        </div>
        <div class="op-card op-card--flat fb-stat">
          <span class="fb-stat__mark"></span>
          <p class="fb-stat__label">정찰가 · 온라인 미유통</p>
          <p class="fb-stat__desc">온팜 카드는 온라인에 풀리지 않습니다. 가격 비교의 대상이 아닙니다.</p>
        </div>
        <div class="op-card op-card--flat fb-stat">
          <span class="fb-stat__mark"></span>
          <p class="fb-stat__label">리필 알림 자동 안내</p>
          <p class="fb-stat__desc">소진 시점에 맞춰 다음 안내가 담당 상담사 이름으로 나갑니다.</p>
        </div>
      </div>
    </div>
  </section>

<section class="op-sec" data-section="b02_compare" data-reveal>
    <div class="op-inner">
      <div class="op-center op-measure--center">
        <span class="op-eyebrow">무엇이 다른가</span>
        <h2 class="op-h2">지금까지의 매대 vs 온팜 파트너 약국</h2>
        <p class="op-lead op-mt-16">
          같은 진열장이라도, 손님이 들어오는 이유가 다릅니다.
        </p>
      </div>

<div class="op-grid-2 op-mt-48"
           data-scrub="0.09" data-scrub-from="0.95" data-scrub-to="0.55">
        <div class="op-card fb-col fb-col--old op-anim-rise" style="--op-d:0">
          <div class="fb-col__head">
            <span class="op-badge op-badge--gray">BEFORE</span>
          </div>
          <h3 class="op-h3">지금까지의 매대</h3>
          <ul class="op-list op-list--x fb-col__body">
            <li>온라인 최저가와 나란히 비교당합니다</li>
            <li>손님이 왜 그 제품을 집었는지 알 수 없습니다</li>
            <li>한 번 팔면 그걸로 끝입니다</li>
            <li>진열은 늘어도 상담으로 이어지지 않습니다</li>
          </ul>
        </div>

        <div class="op-card fb-col fb-col--on op-anim-rise" style="--op-d:1">
          <div class="fb-col__head">
            <span class="op-badge op-badge--solid">ONPHARM</span>
          </div>
          <h3 class="op-h3">온팜 파트너 약국</h3>
          <ul class="op-list op-list--check fb-col__body">
            <li>검색되지 않는 조합 전용 카드입니다</li>
            <li>상담을 거쳐 배정된 고객이 이름을 보고 찾아옵니다</li>
            <li>소진 시점에 다음 안내가 다시 나갑니다</li>
            <li>상담사의 전문성이 그대로 매출로 남습니다</li>
          </ul>
        </div>
      </div>

      <p class="op-note op-center op-mt-24">
        세부 조건은 신청 이후 계약 단계에서 따로 협의합니다.
      </p>
    </div>
  </section>

<section class="op-sec op-sec--warm" data-section="b03_flow" data-reveal>
    <div class="op-inner">
      <div class="op-center op-measure--center">
        <span class="op-eyebrow">운영 방식</span>
        <h2 class="op-h2">약국이 하는 일은 두 가지뿐입니다</h2>
        <p class="op-lead op-mt-16">
          다섯 단계 가운데 세 단계는 온팜이 처리합니다.
        </p>
      </div><div class="fb-flow op-mt-48"
           data-scrub="0.1" data-scrub-from="0.92" data-scrub-to="0.62"
           data-scrub-seq="5">
        <div class="fb-node op-anim-rise op-anim-rise--sm" data-scrub-part>
          <div class="fb-node__top">
            <span class="fb-node__num">1</span>
            <span class="fb-node__owner">온팜</span>
          </div>
          <h3 class="fb-node__title">고민 한 줄 접수</h3>
          <p class="fb-node__desc">고객이 온팜에 자기 고민을 한 줄로 남깁니다.</p>
        </div>
        <span class="fb-arrow" aria-hidden="true">›</span>
        <div class="fb-node op-anim-rise op-anim-rise--sm" data-scrub-part>
          <div class="fb-node__top">
            <span class="fb-node__num">2</span>
            <span class="fb-node__owner">온팜</span>
          </div>
          <h3 class="fb-node__title">위치 기반 배정</h3>
          <p class="fb-node__desc">가까운 파트너 약국으로 상담이 자동 배정됩니다.</p>
        </div>
        <span class="fb-arrow" aria-hidden="true">›</span>
        <div class="fb-node op-anim-rise op-anim-rise--sm fb-node--on" data-scrub-part>
          <div class="fb-node__top">
            <span class="fb-node__num">3</span>
            <span class="fb-node__owner">약국</span>
          </div>
          <h3 class="fb-node__title">전담 상담사 답변</h3>
          <p class="fb-node__desc">배정된 상담사가 카드 조합을 골라 답을 씁니다.</p>
        </div>
        <span class="fb-arrow" aria-hidden="true">›</span>
        <div class="fb-node op-anim-rise op-anim-rise--sm" data-scrub-part>
          <div class="fb-node__top">
            <span class="fb-node__num">4</span>
            <span class="fb-node__owner">온팜</span>
          </div>
          <h3 class="fb-node__title">픽업 쿠폰 발급</h3>
          <p class="fb-node__desc">고객에게 그 약국에서 쓸 픽업 쿠폰이 나갑니다.</p>
        </div>
        <span class="fb-arrow" aria-hidden="true">›</span>
        <div class="fb-node op-anim-rise op-anim-rise--sm fb-node--on" data-scrub-part>
          <div class="fb-node__top">
            <span class="fb-node__num">5</span>
            <span class="fb-node__owner">약국</span>
          </div>
          <h3 class="fb-node__title">방문 고객에게 전달</h3>
          <p class="fb-node__desc">들른 고객에게 카드를 건네주면 끝입니다.</p>
        </div>
      </div>

      <p class="op-note op-center op-mt-32">
        1 · 2 · 4 단계는 온팜이 맡습니다. 약국은 3번과 5번, 답변과 전달만 하면 됩니다.
      </p>
    </div>
  </section>

<section class="op-sec" data-section="b04_values" data-reveal>
    <div class="op-inner">
      <div class="op-center op-measure--center">
        <span class="op-eyebrow">파트너 혜택</span>
        <h2 class="op-h2">파트너 약국이 얻는 것</h2>
        <p class="op-lead op-mt-16">
          물건이 아니라 손님과 이유가 함께 들어옵니다.
        </p>
      </div>

      <div class="op-grid-3 op-grid--top op-mt-48">
        <div class="op-card fb-value">
          <span class="op-eyebrow">TRAFFIC</span>
          <h3 class="op-h3 fb-value__title">집객</h3>
          <ul class="op-list fb-value__list">
            <li>온라인에서 고민을 남긴 사람이 약국 이름을 보고 찾아옵니다</li>
            <li>지역 단위로 배정돼 가까운 약국끼리 겹치지 않습니다</li>
            <li>처음 오는 손님도 상담 기록을 들고 들어옵니다</li>
          </ul>
        </div>
        <div class="op-card fb-value">
          <span class="op-eyebrow">PRODUCT</span>
          <h3 class="op-h3 fb-value__title">전용 상품</h3>
          <ul class="op-list fb-value__list">
            <li>조합 전용 카드라 온라인 검색에 노출되지 않습니다</li>
            <li>정찰가로만 움직여 최저가 경쟁에서 빠집니다</li>
            <li>6일치 소포장이라 처음 권하기가 가볍습니다</li>
          </ul>
        </div>
        <div class="op-card fb-value">
          <span class="op-eyebrow">RETENTION</span>
          <h3 class="op-h3 fb-value__title">재방문</h3>
          <ul class="op-list fb-value__list">
            <li>소진 시점에 맞춰 다음 안내가 자동으로 나갑니다</li>
            <li>안내에는 담당 상담사 이름이 그대로 들어갑니다</li>
            <li>다음 방문이 우연이 아니라 일정이 됩니다</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

<section class="op-sec op-sec--gray" data-section="b05_faq" data-reveal>
    <div class="op-inner op-inner--narrow">
      <div class="op-center">
        <span class="op-eyebrow">FAQ</span>
        <h2 class="op-h2">파트너 문의</h2>
        <p class="op-lead op-mt-16">
          가장 많이 받는 질문을 먼저 정리했습니다.
        </p>
      </div><div class="op-faq op-mt-40" data-accordion>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">입점 조건이 어떻게 되나요</summary>
          <div class="op-faq__a">조합에 가입한 개설 약국이면 신청할 수 있습니다. 지역별 배정이 겹치지 않도록 순차 오픈하며, 상담 답변을 직접 맡아 주실 수 있는 곳을 먼저 배정합니다.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">초기 비용이 있나요</summary>
          <div class="op-faq__a">가맹비나 보증금 형태로 미리 받는 돈은 없습니다. 진열 집기와 안내물은 온팜이 준비해 드리고, 나머지 조건은 신청 이후 협의해서 계약서에 담습니다.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">재고 부담은 어떻게 되나요</summary>
          <div class="op-faq__a">카드 단위 소포장이라 한 번에 많이 쌓아 둘 필요가 없습니다. 첫 물량과 회전 주기는 약국 상황에 맞춰 정하고, 남은 물량을 어떻게 처리할지는 계약 시 별도 안내합니다.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">고객 데이터는 누구 것인가요</summary>
          <div class="op-faq__a">개인정보 수집·이용 동의를 받는 주체는 온팜입니다. 파트너 약국은 배정된 고객에 한해 상담 내역을 열람하고 리필 안내를 보낼 수 있으며, 그 범위를 벗어난 활용은 하지 않습니다.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">상담 답변이 부담되지 않을까요</summary>
          <div class="op-faq__a">고민 한 줄에 서너 문장이면 충분합니다. 자주 오는 질문은 답변 틀과 카드 조합 가이드를 미리 드리고, 최종 판단과 답변만 담당 상담사가 하시면 됩니다.</div>
        </details>
      </div>
    </div>
  </section>

<section class="op-sec op-sec--charcoal" data-section="b06_apply" id="b06_apply" data-reveal>
    <div class="op-inner op-inner--narrow">
      <div class="op-center">
        <span class="op-eyebrow">파트너 신청</span>
        <h2 class="op-h2">1호 파트너 약국을 모집합니다</h2>
        <p class="op-lead op-mt-16">
          지역별로 순차 오픈합니다. 먼저 신청한 약국부터 배정 지역을 확정합니다.
        </p>
      </div>      <div class="fb-kakao-cta op-mt-32 op-center">
        <a class="op-btn op-btn--ghost op-btn--kakao"
   href="https://pf.kakao.com/_wxdxhrX/chat" target="_blank" rel="noopener noreferrer">
  <svg class="op-btn__ico" viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"
       fill="none" stroke="currentColor" stroke-width="1.7"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 4.3c-4.4 0-8 2.8-8 6.2 0 2.2 1.5 4.1 3.7 5.2l-.9 3.2c-.1.4.3.7.6.5l3.6-2.2c.3 0 .7.1 1 .1 4.4 0 8-2.8 8-6.2s-3.6-6.2-8-6.2z"/>
  </svg>
  <span>카카오톡으로 문의하기</span>
</a>
      </div>
<form class="fb-form" action="https://docs.google.com/forms/d/e/1FAIpQLSedRtIMw1mZ46Pi5Pr-cyMNTwczceSBDDLfWY7-N1xZ5Q2ELw/formResponse" method="post"
            data-form="partner" target="op-form-sink"><div class="op-grid-2">
          <label class="fb-field">
            <span class="fb-label">약국명</span>
            <input class="fb-input" type="text" name="entry.1635817952"
                   data-field="pharmacy"
                   autocomplete="organization"
                   placeholder="온팜약국" required>
          </label>
          <label class="fb-field">
            <span class="fb-label">대표자명</span>
            <input class="fb-input" type="text" name="entry.961979349"
                   data-field="owner"
                   autocomplete="name"
                   placeholder="홍길동" required>
          </label>
        </div>

        <div class="op-grid-2 op-mt-24">
          <label class="fb-field">
            <span class="fb-label">사업자등록번호</span><input class="fb-input" type="text" name="biz_no"
                   data-field="biz_no"
                   inputmode="numeric" autocomplete="off" maxlength="14"
                   pattern="[0-9\\-\\s]{10,14}"
                   placeholder="0000000000" required>
            <span class="fb-help">숫자 10자리</span>
          </label>
          <label class="fb-field">
            <span class="fb-label">연락처</span>
            <input class="fb-input" type="tel" name="entry.281860316"
                   data-field="phone"
                   autocomplete="tel"
                   placeholder="010-0000-0000" required>
          </label>
        </div>

        <label class="fb-field op-mt-24">
          <span class="fb-label">약국 주소</span>
          <input class="fb-input" type="text" name="address"
                 data-field="address"
                 autocomplete="street-address"
                 placeholder="예: 인천 연수구 ○○로 12" required>
          <span class="fb-help">약국명과 주소로 실제 운영 중인 곳인지 확인합니다.</span>
        </label>

        <label class="fb-field op-mt-24">
          <span class="fb-label">
            요양기관기호
            <span class="fb-opt">선택</span>
          </span>
          <input class="fb-input" type="text" name="ykiho"
                 data-field="ykiho"
                 inputmode="numeric" autocomplete="off" maxlength="8"
                 pattern="[0-9]{8}"
                 placeholder="00000000">
          <span class="fb-help">8자리 숫자. 모르시면 비워 두셔도 됩니다.</span>
        </label>

        <label class="fb-field op-mt-24">
          <span class="fb-label">
            문의 내용
            <span class="fb-opt">선택</span>
          </span>
          <textarea class="fb-textarea" name="entry.79913361"
                    data-field="message"
                    placeholder="약국 위치나 지금 궁금한 점을 자유롭게 적어 주세요."></textarea>
        </label><p class="op-note fb-purpose op-mt-16">
          적어 주신 정보는 약국 확인과 배정 상담 연락에만 씁니다. 그 밖의 용도로 쓰지 않습니다.
        </p><label class="op-check fb-check">
          <input class="op-check__input" type="checkbox"
                 name="entry.1935935562" data-field="consent"
                 value="동의합니다" required>
          <span class="op-check__box" aria-hidden="true"></span>
          <span class="op-check__text">
            파트너 상담을 위해 입력한 정보를 온팜이 수집·이용하는 데 동의합니다.
          </span>
        </label>

        <div class="fb-submit">
          <button class="op-btn op-btn--lg op-btn--block" type="submit">
            파트너 신청
          </button>
        </div>
      </form>      <iframe class="op-form-sink" name="op-form-sink" title="폼 전송" hidden></iframe>
      <p class="op-form-thanks op-center op-mt-32" data-form-thanks="partner"
         role="status" tabindex="-1" hidden>신청이 접수되었습니다. 순서대로 확인해 연락드리겠습니다.</p>

      <p class="op-note op-center op-mt-20">
        신청해 주시면 담당자가 영업일 기준 3일 안에 연락드립니다.
      </p>

      <div class="fb-sign">
        <span class="op-logotype op-logotype--sm" role="img" aria-label="온팜"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 363 50" role="img" aria-label="ONPHARM"><g fill="currentColor"><path d="M128.05 0.98L23.01 0.98C10.17 0.98 -0.28 11.43 -0.28 24.27C-0.28 37.11 10.17 47.56 23.01 47.56L128.05 47.56C140.89 47.56 151.34 37.11 151.34 24.27C151.34 11.43 140.89 0.98 128.05 0.98M128.05 36.98L23.01 36.98C16 36.98 10.3 31.28 10.3 24.27C10.3 17.26 16 11.56 23.01 11.56L128.05 11.56C135.06 11.56 140.77 17.26 140.77 24.27C140.77 31.28 135.06 36.98 128.05 36.98 Z"/><path d="M24.2 16.99C20.19 16.99 16.92 20.26 16.92 24.27C16.92 28.29 20.19 31.55 24.2 31.55C28.22 31.55 31.48 28.29 31.48 24.27C31.48 20.26 28.22 16.99 24.2 16.99 Z"/><path d="M239.89 17.19L235.32 17.19L235.32 13.64C235.32 10.32 232.63 7.63 229.31 7.63L239.89 7.63L239.89 1.79L206.88 1.79L206.88 7.63L211.61 7.63L211.61 17.19L206.88 17.19L206.88 23.04L239.89 23.04L239.89 17.19M225.82 17.19L221.1 17.19L221.1 13.64C221.1 10.32 218.41 7.63 215.09 7.63L225.82 7.63L225.82 17.19 Z"/><path d="M211.51 44.55C211.51 46.21 212.86 47.56 214.52 47.56L254.03 47.56L254.03 27.05L211.51 27.05L211.51 44.55M221.01 32.89H244.54V41.71H221.01Z Z"/><path d="M254.03 1.79L244.54 1.79L244.54 23.04L254.03 23.04L254.03 14.22L259.43 14.22L259.43 8.37L254.03 8.37L254.03 1.79 Z"/><path d="M168.96 35.91L159.46 35.91L159.46 44.55C159.46 46.21 160.81 47.56 162.47 47.56L201.98 47.56L201.98 41.71L168.96 41.71L168.96 35.91 Z"/><path d="M191.35 23.04C197.22 23.04 201.98 18.28 201.98 12.41C201.98 6.54 197.22 1.79 191.35 1.79L170.09 1.79C164.22 1.79 159.46 6.54 159.46 12.41C159.46 18.28 164.22 23.04 170.09 23.04L175.97 23.04L175.97 27.05L159.46 27.05L159.46 32.89L201.98 32.89L201.98 27.05L185.47 27.05L185.47 23.04L191.35 23.04M173.74 17.19C171.1 17.19 168.96 15.05 168.96 12.41C168.96 9.77 171.1 7.63 173.74 7.63L187.71 7.63C190.35 7.63 192.49 9.77 192.49 12.41C192.49 15.05 190.35 17.19 187.71 17.19L173.74 17.19 Z"/><path d="M360.63 1.79L321.12 1.79L321.12 7.63L354.14 7.63L354.14 17.63L363.63 17.63L363.63 4.79C363.63 3.13 362.29 1.79 360.63 1.79 Z"/><path d="M321.12 21.12L321.12 26.97L337.63 26.97L337.63 32.8L321.12 32.8L321.12 38.65L354.14 38.65L354.14 47.56L363.63 47.56L363.63 35.81C363.63 34.15 362.29 32.8 360.63 32.8L347.12 32.8L347.12 26.97L363.63 26.97L363.63 21.12L321.12 21.12 Z"/><path d="M308.23 30.16L268.72 30.16L268.72 36L301.74 36L301.74 47.56L311.23 47.56L311.23 33.16C311.23 31.5 309.89 30.16 308.23 30.16 Z"/><path d="M284.91 26.15C291.64 26.15 297.09 20.7 297.09 13.97C297.09 7.24 291.64 1.79 284.91 1.79L276.1 1.79C269.37 1.79 263.91 7.24 263.91 13.97C263.91 20.7 269.37 26.15 276.1 26.15L284.91 26.15M273.4 13.97C273.4 10.47 276.24 7.63 279.74 7.63L281.26 7.63C284.76 7.63 287.6 10.47 287.6 13.97C287.6 17.47 284.76 20.31 281.26 20.31L279.74 20.31C276.24 20.31 273.4 17.47 273.4 13.97 Z"/><path d="M311.23 1.79L301.74 1.79L301.74 26.15L311.23 26.15L311.23 21.56L316.63 21.56L316.63 15.71L311.23 15.71L311.23 12.23L316.63 12.23L316.63 6.38L311.23 6.38L311.23 1.79 Z"/></g></svg></span>
        <span>들르면, 건강이 켜집니다</span>
      </div>
    </div>
  </section>
`;

type Tone = 'navy' | 'orange';

const items: Array<{ tone: Tone; title: string; body: string }> = [
  {
    tone: 'navy',
    title: '약국에 맞는 큐레이션',
    body: '한약사 약국에 어울리는 건강기능식품과 전용 상품을 엄선해 제안합니다.'
  },
  {
    tone: 'orange',
    title: '맞춤 소분 전문성',
    body: '한약사 상담을 살린 맞춤형 소분으로 약국만의 차별화를 만듭니다.'
  },
  {
    tone: 'navy',
    title: '집객·운영 지원',
    body: '온라인 노출부터 재방문 관리까지 — 약국은 상담에 집중하도록 돕습니다.'
  }
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="section-rounded bg-bone py-20 lg:py-32"
    >
      <div className="container-x">
        <div className="text-center mb-12 lg:mb-16">
          <span className="badge-orange">1ST PARTNER</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-navy leading-tight">
            한약사 약국과 함께 시작합니다
          </h2>
          <p className="mt-4 text-base sm:text-lg text-ink-sub">
            OnPharm은 현재 <strong className="text-orange">1호 파트너 약국</strong>을 모집하고 있습니다.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-7 md:grid-cols-3">
          {items.map((t, i) => (
            <article
              key={i}
              className={`relative rounded-4xl p-8 lg:p-10 text-white ${
                t.tone === 'orange' ? 'bg-orange' : 'bg-navy'
              }`}
            >
              <h3 className="text-lg sm:text-xl font-bold leading-snug">{t.title}</h3>
              <p className="mt-4 text-[15px] sm:text-base font-medium leading-relaxed opacity-90">
                {t.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

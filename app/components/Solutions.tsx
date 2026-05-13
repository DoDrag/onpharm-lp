/* eslint-disable @next/next/no-img-element */

const services = [
  {
    tag: '유통 혁신',
    img: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?auto=format&fit=crop&q=80&w=900',
    alt: 'Supply chain',
    title: '큐레이션 & 직거래 공급',
    body: '중간 마진을 뺀 제조사 직거래 시스템으로 프리미엄 한방 제품을 경쟁력 있게 공급합니다.'
  },
  {
    tag: '제품 개발',
    img: 'https://images.unsplash.com/photo-1550577624-42c7cf5dd824?auto=format&fit=crop&q=80&w=900',
    alt: 'Compounding',
    title: '커스텀 소분 조제 포맷',
    body: '환자 개별 맞춤형 상담 결과를 데이터화하여 최적의 패키징과 조제 솔루션을 제공합니다.'
  },
  {
    tag: '마케팅 지원',
    img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=900',
    alt: 'Digital marketing',
    title: '디지털 고객 확보 채널',
    body: '카카오톡 기반 케어 시스템과 온라인 광고 대행으로 인근 잠재 고객을 약국으로 유입시킵니다.'
  }
];

export function Solutions() {
  return (
    <section id="solutions" className="py-20 lg:py-32">
      <div className="container-x">
        <div className="mb-12 lg:mb-16">
          <span className="badge-green">OUR SOLUTIONS</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-navy leading-tight">
            성장을 위한 온팜의 핵심 서비스
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="group bg-white rounded-4xl border border-[#EEE] overflow-hidden transition-all duration-300 ease-smooth hover:-translate-y-1.5 hover:shadow-soft"
            >
              <div className="relative h-56 sm:h-60 overflow-hidden bg-[#f0f0f0]">
                <img
                  src={s.img}
                  alt={s.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-smooth group-hover:scale-105"
                />
              </div>
              <div className="p-7 lg:p-8">
                <span className="inline-block rounded-md bg-green-50 text-green px-2.5 py-1 text-[11px] font-extrabold tracking-wide">
                  {s.tag}
                </span>
                <h3 className="mt-3 text-lg lg:text-xl font-bold text-navy">
                  {s.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-sub">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 lg:mt-14 text-center">
          <a href="#cta" className="pill-btn pill-btn-primary">
            서비스 상세 가이드 다운로드
          </a>
        </div>
      </div>
    </section>
  );
}

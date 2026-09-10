const items = [
  {
    num: '01',
    title: '출혈적인 가격 경쟁',
    body: '대형 약국과의 무분별한 가격 경쟁으로 인해 수익성은 낮아지고 운영 부담은 가중되고 있습니다.'
  },
  {
    num: '02',
    title: '제한적인 인지도',
    body: '한약사 약국만의 전문성을 대중에게 알릴 마케팅 도구와 채널이 부족하여 성장이 정체됩니다.'
  },
  {
    num: '03',
    title: '재방문 관리의 어려움',
    body: '상담 후 지속적인 케어와 디지털 데이터 관리가 부재하여 고객 락인(Lock-in)이 쉽지 않습니다.'
  }
];

export function Problem() {
  return (
    <section id="problem" className="section-rounded bg-bone py-20 lg:py-32">
      <div className="container-x">
        <div className="text-center mb-12 lg:mb-16">
          <span className="badge-orange">WHY ONPHARM</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-navy leading-tight">
            현재 한약사 약국이
            <br />
            직면한 현실적인 고민들
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-7 md:grid-cols-3">
          {items.map((it) => (
            <div
              key={it.num}
              className="group bg-white rounded-4xl border border-black/[0.03] p-8 sm:p-10 lg:p-12 flex flex-col gap-4 transition-all duration-300 ease-smooth hover:-translate-y-2 hover:shadow-soft"
            >
              <div className="h-10 w-10 rounded-full bg-green-50 text-green flex items-center justify-center text-sm font-extrabold">
                {it.num}
              </div>
              <h3 className="text-xl lg:text-[22px] font-bold text-navy">
                {it.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink-sub">
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* eslint-disable @next/next/no-img-element */

type Tone = 'navy' | 'orange';

const items: Array<{
  tone: Tone;
  quote: string;
  name: string;
  pharmacy: string;
  img: string;
}> = [
  {
    tone: 'navy',
    quote:
      '온팜의 직공급 시스템 덕분에 제품 단가 경쟁력이 생겼어요. 마케팅 지원도 확실해서 동네 인지도가 확 올라갔습니다.',
    name: '김태형 약사님',
    pharmacy: '강남 바른한약국',
    img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=240'
  },
  {
    tone: 'orange',
    quote:
      '기존의 낡은 이미지를 벗고 현대적인 웰니스 약국으로 거듭났어요. 젊은 층 고객 유입이 꾸준히 늘었습니다.',
    name: '이서윤 약사님',
    pharmacy: '자연숨 한약국',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=240'
  },
  {
    tone: 'navy',
    quote:
      '상담 데이터 관리가 편해지니 단골 고객 관리가 너무 쉬워졌습니다. 온팜은 단순 유통사가 아니라 든든한 파트너예요.',
    name: '박지훈 약사님',
    pharmacy: '늘봄 한약국',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=240'
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
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-extrabold text-navy leading-tight">
            온팜과 함께하는 약사님들의 목소리
          </h2>
        </div>

        <div className="grid gap-6 sm:gap-7 md:grid-cols-3">
          {items.map((t, i) => (
            <article
              key={i}
              className={`relative rounded-4xl p-8 lg:p-10 text-white ${
                t.tone === 'orange' ? 'bg-orange' : 'bg-navy'
              }`}
            >
              <span
                aria-hidden
                className="absolute top-3 right-7 font-serif text-7xl leading-none opacity-10 select-none"
              >
                &ldquo;
              </span>
              <p className="text-[15px] sm:text-base font-medium leading-relaxed min-h-[100px]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={t.img}
                  alt={t.name}
                  className="h-12 w-12 rounded-full border-2 border-orange object-cover bg-[#333]"
                  loading="lazy"
                />
                <div>
                  <div className="text-[15px] font-bold">{t.name}</div>
                  <div className="text-[13px] opacity-70">{t.pharmacy}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs text-ink-sub/70">
          본 후기는 서비스 이해를 돕기 위한 가상 시나리오이며, 실제
          약국·약사의 진술이 아닙니다.
        </p>
      </div>
    </section>
  );
}

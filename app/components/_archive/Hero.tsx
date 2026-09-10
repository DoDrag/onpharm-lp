/* eslint-disable @next/next/no-img-element */

const stats = [
  { value: '873곳', label: '한약사 개설 약국' },
  { value: '전용', label: '한약사 약국 맞춤' },
  { value: '2026', label: '1호 파트너 오픈 예정' }
];

export function Hero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#f4fcf9] pt-16 pb-24 lg:pt-24 lg:pb-32">
      <div className="container-x">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          <div className="text-center lg:text-left">
            <span className="badge-green">한약사 맞춤형 솔루션</span>

            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[58px] font-extrabold leading-[1.15] tracking-tight text-navy">
              한약사 약국,
              <br />
              새로운 표준을
              <br />
              함께 만듭니다
            </h1>

            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-ink-sub">
              복잡한 유통 구조와 마케팅 고민은 온팜에게 맡기세요.
              <br className="hidden sm:block" />
              약사님은 오직 환자의 건강에만 집중할 수 있는 환경을
              제공합니다.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-3 justify-center lg:justify-start">
              <a href="#cta" className="pill-btn pill-btn-primary">
                파트너 가입하기
              </a>
              <a href="#solutions" className="pill-btn pill-btn-outline">
                서비스 더보기
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 sm:gap-10 max-w-xl mx-auto lg:mx-0">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-[26px] font-extrabold text-navy">
                    {s.value}
                  </div>
                  <div className="mt-1 text-xs sm:text-sm text-ink-sub">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capsule visual */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="capsule-group">
              <span
                className="dot-accent bg-orange"
                style={{ top: '20%', left: '12%' }}
                aria-hidden
              />
              <span
                className="dot-accent bg-green"
                style={{ bottom: '12%', right: '42%' }}
                aria-hidden
              />

              <div className="capsule-item capsule-1">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800"
                  alt="Pharmacy lab"
                  loading="lazy"
                />
              </div>
              <div className="capsule-item capsule-2">
                <img
                  src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?auto=format&fit=crop&q=80&w=800"
                  alt="Herbal medicine workspace"
                  loading="lazy"
                />
              </div>
              <div className="capsule-item capsule-3" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

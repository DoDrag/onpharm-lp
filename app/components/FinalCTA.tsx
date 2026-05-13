'use client';

import { FormEvent, useState } from 'react';

export function FinalCTA() {
  const [value, setValue] = useState('');
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!value.trim()) return;
    const subject = encodeURIComponent('OnPharm 상담 신청');
    const body = encodeURIComponent(`신청인: ${value}\n\n약국명·연락처를 회신 메일에 남겨주시면 1영업일 내 상담 안내드립니다.`);
    window.location.href = `mailto:hello@onpharm.kr?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section id="cta" className="py-20 lg:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-5xl sm:rounded-6xl bg-green text-white p-10 sm:p-16 lg:p-20 text-center">
          <span
            aria-hidden
            className="absolute -top-3 right-[10%] h-14 w-14 rounded-full bg-white/20"
          />
          <span
            aria-hidden
            className="absolute bottom-8 left-[6%] hidden sm:block h-3 w-3 rounded-full bg-orange/80"
          />

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-white leading-tight tracking-tight">
            한약사 약국의 새로운 표준,
            <br />
            지금 온팜과 시작하세요.
          </h2>
          <p className="mt-5 text-base sm:text-lg text-white/90 max-w-xl mx-auto">
            상담 신청을 남겨주시면 담당 컨설턴트가 24시간 내에
            연락드립니다.
          </p>

          {sent ? (
            <div className="mx-auto mt-10 max-w-xl rounded-full bg-white/15 backdrop-blur px-6 py-4 text-white">
              메일 클라이언트가 열렸어요. 본문에 약국명·연락처만 남겨
              보내주시면 됩니다. 📩
            </div>
          ) : (
            <form
              onSubmit={onSubmit}
              className="mx-auto mt-10 flex max-w-xl flex-col sm:flex-row gap-3 sm:gap-2 sm:rounded-full sm:bg-white sm:p-2"
            >
              <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="약국 이름 또는 성함을 입력하세요"
                className="flex-1 rounded-full bg-white px-6 py-3.5 text-base text-ink placeholder:text-ink-sub/60 outline-none focus:ring-2 focus:ring-green-700"
                required
              />
              <button
                type="submit"
                className="pill-btn pill-btn-primary !bg-green-700 hover:!bg-navy px-10 py-3.5"
              >
                상담 신청하기
              </button>
            </form>
          )}

          <p className="mt-6 text-xs text-white/70">
            입력하신 정보는 가입 상담 안내 목적 외에 사용되지 않습니다.
          </p>
        </div>
      </div>
    </section>
  );
}

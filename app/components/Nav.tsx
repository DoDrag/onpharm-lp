'use client';

import { useEffect, useState } from 'react';
import { Logo } from './Logo';

const links = [
  { label: '온팜스토리', href: '#story' },
  { label: '공급망 안내', href: '#solutions' },
  { label: '마케팅 지원', href: '#solutions' },
  { label: '약사 커뮤니티', href: '#testimonials' }
];

export function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    window.addEventListener('hashchange', close);
    return () => window.removeEventListener('hashchange', close);
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 h-[72px] lg:h-[90px] border-b border-black/5 bg-white/90 backdrop-blur-md">
      <div className="container-x flex h-full items-center justify-between">
        <Logo />

        <div className="hidden lg:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-[15px] font-medium text-ink transition-colors duration-300 hover:text-green"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#cta"
            className="pill-btn pill-btn-ghost hidden sm:inline-flex"
          >
            로그인
          </a>
          <button
            type="button"
            aria-label="메뉴 열기"
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {open ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-black/5 bg-white">
          <div className="container-x flex flex-col py-4 gap-1">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-[15px] font-medium text-ink hover:bg-green-50 hover:text-green"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 pill-btn pill-btn-primary justify-center"
            >
              로그인
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

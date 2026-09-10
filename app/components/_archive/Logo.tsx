import Link from 'next/link';

type Props = {
  className?: string;
  centered?: boolean;
};

export function Logo({ className = '', centered = false }: Props) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-1 text-[22px] font-extrabold tracking-tight text-green ${
        centered ? 'justify-center' : ''
      } ${className}`}
    >
      <span>On</span>
      <span className="text-orange">Pharm</span>
    </Link>
  );
}

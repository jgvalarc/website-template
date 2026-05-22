import { MARQUEE_ITEMS } from '@/lib/constants'

export default function MarqueeBar() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]

  return (
    <div
      className="surface-default border-line overflow-hidden border-y"
      aria-hidden="true"
      role="presentation"
    >
      <div className="marquee-track">
        {items.map((item, i) => (
          <div
            key={`${item}-${i}`}
            className="font-display text-surface-inverse flex shrink-0 items-center gap-5 px-5 py-4 text-[28px] leading-none tracking-normal uppercase"
          >
            {item}
            <span
              className="bg-accent h-2 w-2 shrink-0 rounded-full"
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

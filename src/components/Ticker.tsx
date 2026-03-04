import { tickerItems } from '@/data/drugs';

const Ticker = () => {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="relative z-10 bg-bio-surface border-b border-border h-9 overflow-hidden flex items-center">
      <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-bio-surface to-transparent z-[2]" />
      <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-bio-surface to-transparent z-[2]" />
      <div
        className="flex gap-10 whitespace-nowrap pl-[100%]"
        style={{ animation: 'tickerScroll 35s linear infinite' }}
      >
        {items.map((t, i) => (
          <span key={i} className="text-[0.62rem] tracking-wider inline-flex items-center gap-1.5 text-bio-muted2">
            <span className="text-foreground font-medium">{t.name}</span>
            {t.price}
            <span className={t.up ? 'text-bio-green' : 'text-bio-red'}>{t.change}</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Ticker;

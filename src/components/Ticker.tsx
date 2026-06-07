interface TickerProps {
  items: string[];
  dark?: boolean;
  reverse?: boolean;
}

export default function Ticker({ items, dark, reverse }: TickerProps) {
  const run = items.concat(items);
  return (
    <div
      className={`ticker${dark ? " ticker--dark" : ""}${reverse ? " ticker--rev" : ""}`}
      aria-hidden="true"
    >
      <div className="ticker__track">
        {run.map((it, i) => (
          <span className="ticker__item" key={i}>
            {it}
            <span className="star">{"\u2726"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

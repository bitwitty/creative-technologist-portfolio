interface MarqueeProps {
  items: string[];
  reverse?: boolean;
}

export default function Marquee({ items, reverse }: MarqueeProps) {
  const run = items.concat(items);
  return (
    <div
      className={`marq${reverse ? " marq--rev" : ""}`}
      aria-hidden="true"
    >
      <div className="marq__track">
        {run.map((it, i) => (
          <span className="marq__item" key={i}>
            {it}
            <span className="x">{"\u2715"}</span>
          </span>
        ))}
      </div>
    </div>
  );
}

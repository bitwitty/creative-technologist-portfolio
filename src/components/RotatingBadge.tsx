interface RotatingBadgeProps {
  text?: string;
  reverse?: boolean;
  size?: number;
}

export default function RotatingBadge({
  text = "Currently open for offers",
  reverse,
  size = 116,
}: RotatingBadgeProps) {
  const id =
    "bp-" + text.replace(/\W/g, "").slice(0, 8) + (reverse ? "r" : "");
  const repeated = (text + "  \u2726  ").repeat(2);

  return (
    <div
      className={`badge${reverse ? " badge--rev" : ""}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 100 100">
        <defs>
          <path
            id={id}
            d="M 50,50 m -38,0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <text className="badge__text">
          <textPath href={`#${id}`} startOffset="0">
            {repeated}
          </textPath>
        </text>
      </svg>
      <span className="badge__core">{"\u2726"}</span>
    </div>
  );
}

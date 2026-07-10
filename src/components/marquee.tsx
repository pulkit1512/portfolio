"use client";

// Technologies drawn from the resume skill set.
const items = [
  "Python",
  "C++",
  "TypeScript",
  "React.js",
  "Next.js",
  "Node.js",
  "XGBoost",
  "NumPy",
  "Pandas",
  "Matplotlib",
  "Seaborn",
  "Scikit-learn",
  "Gradient Boosting",
  "Feature Engineering",
  "Git",
  "MySQL",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-line py-5">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-10">
          {row.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-3 whitespace-nowrap font-mono text-sm text-muted"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-iris/60" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

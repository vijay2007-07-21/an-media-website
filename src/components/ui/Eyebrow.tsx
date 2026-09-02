export default function Eyebrow({
  code,
  label,
  dark = false,
}: {
  code: string;
  label: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-xs tracking-[0.18em] uppercase ${
        dark ? "text-ink/60" : "text-ink-soft"
      }`}
      style={{ color: dark ? "rgba(17,17,17,0.55)" : "#4A4A46" }}
    >
      <span
        className="inline-block h-[6px] w-[6px] rounded-full"
        style={{ backgroundColor: "#F5C518" }}
        aria-hidden
      />
      <span>{code}</span>
      <span className="opacity-40">/</span>
      <span>{label}</span>
    </div>
  );
}

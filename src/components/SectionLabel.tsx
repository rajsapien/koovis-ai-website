export default function SectionLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block font-jetbrains text-xs font-medium uppercase tracking-[0.25em] text-accent ${className}`}
    >
      {children}
    </span>
  );
}

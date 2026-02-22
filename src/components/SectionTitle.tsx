export default function SectionTitle({
  children,
  as: Tag = "h2",
  className = "",
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3";
  className?: string;
}) {
  return (
    <Tag
      className={`font-serif text-[clamp(1.75rem,5vw,3rem)] font-semibold leading-tight tracking-tight text-white [&>span]:text-accent [&>em]:italic [&>em]:text-accent ${className}`}
    >
      {children}
    </Tag>
  );
}

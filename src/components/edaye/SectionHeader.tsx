type Props = {
  eyebrow?: string;
  title: string;
  italicWord?: string;
  intro?: string;
  align?: "left" | "center";
  rightLabel?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  italicWord,
  intro,
  align = "left",
  rightLabel,
}: Props) {
  const alignClass = align === "center" ? "text-center items-center" : "items-start";
  return (
    <div className={`mb-12 flex flex-col gap-4 ${alignClass}`}>
      <div className="flex w-full items-baseline justify-between gap-6">
        <h2 className="font-serif text-4xl leading-[1.05] text-foreground sm:text-5xl">
          {title}
          {italicWord && (
            <>
              {" "}
              <span className="italic text-primary">{italicWord}</span>
            </>
          )}
        </h2>
        {rightLabel && (
          <span className="hidden shrink-0 text-[10px] uppercase tracking-[0.35em] text-muted-foreground sm:inline-block">
            {rightLabel}
          </span>
        )}
      </div>
      {eyebrow && (
        <div className="flex items-center gap-4">
          <span className="h-px w-10 bg-primary/40" />
          <span className="text-[10px] uppercase tracking-[0.35em] text-primary">
            {eyebrow}
          </span>
        </div>
      )}
      {intro && (
        <p className="max-w-xl text-base leading-relaxed text-muted-foreground">
          {intro}
        </p>
      )}
    </div>
  );
}

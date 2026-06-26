import { BRAND } from "./data";

export function QuoteBand() {
  return (
    <section className="bg-primary py-24 text-primary-foreground sm:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <span className="mx-auto mb-10 block h-px w-10 bg-primary-foreground/40" />
        <p className="font-serif text-3xl italic leading-snug sm:text-4xl">
          « {BRAND.promise.replace("UNIQUE", "")}
          <span className="not-italic">unique.</span> »
        </p>
        <div className="mt-10 flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.4em] text-primary-foreground/70">
          <span>Institut EDAYE</span>
          <span>Lomé · Hedzranawoé</span>
        </div>
      </div>
    </section>
  );
}

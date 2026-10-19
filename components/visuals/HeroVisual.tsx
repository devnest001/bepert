export function HeroVisual() {
  return (
    <div
      className="relative overflow-hidden rounded-[16px] border border-white/10 bg-slate shadow-[0_24px_60px_rgb(0_0_0_/_0.35)]"
      aria-hidden="true"
    >
      <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-teal/80" />
        <span className="ml-3 h-5 flex-1 rounded bg-white/8" />
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-3">
          <div className="h-24 rounded-[10px] bg-linear-to-br from-action/40 to-teal/20" />
          <div className="h-3 w-4/5 rounded bg-white/15" />
          <div className="h-3 w-2/3 rounded bg-white/10" />
          <div className="grid grid-cols-2 gap-2 pt-2">
            <div className="h-16 rounded-[10px] bg-white/8" />
            <div className="h-16 rounded-[10px] bg-white/8" />
          </div>
        </div>
        <div className="space-y-2 rounded-[10px] bg-navy/60 p-4 font-mono text-[11px] leading-6 text-teal/80">
          <p>service: software-development</p>
          <p>consulting: architecture</p>
          <p>staffing: on-request</p>
          <p className="text-white/50">status: ready to discuss</p>
          <p className="text-white/70">outcome: practical delivery</p>
        </div>
      </div>
    </div>
  );
}

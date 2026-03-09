"use client";

const tabs = ["overview", "streaming", "social", "audience", "valuation"];

export function SectionNav() {
  const goTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <nav className="sticky top-[104px] z-40 border-b border-border bg-card/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-3 text-sm md:px-8">
        {tabs.map((tab, index) => (
          <button key={tab} onClick={() => goTo(tab)} className={`capitalize ${index === 0 ? "border-b-2 border-accent text-accent" : "text-text-secondary hover:text-text-primary"}`}>
            {tab}
          </button>
        ))}
      </div>
    </nav>
  );
}

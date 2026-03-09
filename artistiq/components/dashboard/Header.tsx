export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-full bg-border" />
          <div>
            <p className="text-xl font-bold">SZA</p>
            <div className="mt-1 flex flex-wrap gap-2 text-xs">
              {['R&B','Pop','Soul'].map((g) => <span key={g} className="rounded-full border border-accent/60 px-2 py-0.5 text-accent">{g}</span>)}
            </div>
            <p className="mt-1 text-xs text-text-secondary">TDE / RCA Records</p>
          </div>
        </div>
        <div className="text-center">
          <p className="font-numeric text-3xl font-bold text-positive">87 <span className="text-base">▲ +3.2%</span></p>
          <p className="text-xs text-text-secondary">ArtistIQ Score</p>
        </div>
        <div className="text-right">
          <p className="text-xs text-text-secondary">Last synced: 2 min ago</p>
          <div className="mt-2 flex gap-2">
            <button className="rounded-lg bg-accent px-3 py-2 text-xs font-semibold">Refresh Data</button>
            <button className="rounded-lg border border-border px-3 py-2 text-xs">Export Report</button>
          </div>
        </div>
      </div>
    </header>
  );
}

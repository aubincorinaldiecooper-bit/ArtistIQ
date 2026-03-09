const artists = [
  { name: "SZA", meta: "R&B/Pop, TDE/RCA Records", score: 87, listeners: "42.1M", slug: "sza" },
  { name: "CRXWN", meta: "Hip-Hop, Independent", score: 74, listeners: "18.3M", slug: "crxwn" },
  { name: "Lena Voss", meta: "Indie/Alt-Pop, AWAL", score: 61, listeners: "820K", slug: "lena-voss" }
];

const scoreClass = (score: number) => (score > 70 ? "bg-positive/20 text-positive" : score >= 40 ? "bg-amber/20 text-amber" : "bg-negative/20 text-negative");

export default function HomePage() {
  return (
    <main className="min-h-screen px-6 pb-20 pt-6 md:px-12">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <p className="text-xl font-bold">ArtistIQ</p>
        <button className="rounded-lg border border-border px-4 py-2 text-sm text-text-secondary hover:border-accent hover:text-text-primary">Request Access</button>
      </nav>

      <section className="mx-auto mt-20 max-w-4xl text-center">
        <h1 className="text-6xl font-bold text-accent">ArtistIQ</h1>
        <p className="mt-4 text-xl text-text-secondary">The Bloomberg Terminal for Music</p>
        <p className="mt-2 text-text-secondary">Quantitative and qualitative valuation for every artist on your roster.</p>
        <input
          placeholder="Search an artist..."
          className="mt-8 w-full rounded-xl border border-border bg-card px-5 py-4 text-sm outline-none ring-accent placeholder:text-text-secondary focus:ring-1"
        />
      </section>

      <section className="mx-auto mt-16 w-full max-w-7xl">
        <h2 className="text-2xl font-semibold">Featured Artists</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {artists.map((artist) => (
            <article key={artist.name} className="rounded-2xl border border-border bg-card p-6 text-center transition hover:border-accent hover:shadow-[0_0_20px_rgba(108,71,255,0.2)]">
              <div className="mx-auto h-20 w-20 rounded-full bg-border" />
              <h3 className="mt-4 text-xl font-bold">{artist.name}</h3>
              <p className="mt-1 text-sm text-text-secondary">{artist.meta}</p>
              <span className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-semibold ${scoreClass(artist.score)}`}>ArtistIQ Score {artist.score}</span>
              <p className="mt-4 text-sm text-text-secondary">Monthly Listeners</p>
              <p className="font-numeric text-2xl font-bold">{artist.listeners}</p>
              <a href={`/artist/${artist.slug}`} className="mt-6 inline-block text-sm text-accent">View Dashboard →</a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

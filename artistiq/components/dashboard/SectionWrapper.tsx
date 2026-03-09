interface SectionWrapperProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  loading?: boolean;
  error?: string;
  onRetry?: () => void;
}

export function SectionWrapper({ id, title, subtitle, children, loading, error, onRetry }: SectionWrapperProps) {
  return (
    <section id={id} className="scroll-mt-44 py-8">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">{title}</h2>
          {subtitle && <p className="text-sm text-text-secondary">{subtitle}</p>}
        </div>
      </div>
      {loading ? <div className="skeleton h-40 w-full" /> : error ? <div className="rounded-xl border border-negative/40 bg-negative/10 p-4 text-sm">{error}<button onClick={onRetry} className="ml-3 text-accent">Retry</button></div> : children}
    </section>
  );
}

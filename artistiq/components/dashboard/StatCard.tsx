interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  loading?: boolean;
}

export function StatCard({ label, value, change, loading = false }: StatCardProps) {
  if (loading) return <div className="skeleton h-36 w-full" />;

  const positive = (change ?? "").startsWith("+");
  return (
    <div className="relative rounded-xl border border-border bg-card p-5">
      <p className="text-xs uppercase tracking-widest text-text-secondary">{label}</p>
      <p className="font-numeric mt-4 text-3xl font-bold">{value}</p>
      {change && (
        <span className={`absolute bottom-5 right-5 rounded-full px-2 py-1 text-xs ${positive ? "bg-positive/20 text-positive" : "bg-negative/20 text-negative"}`}>
          {positive ? "▲" : "▼"} {change.replace("+", "").replace("-", "")}
        </span>
      )}
    </div>
  );
}

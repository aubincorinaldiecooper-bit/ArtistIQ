"use client";

import { Area, AreaChart, Bar, BarChart, Line, LineChart, ResponsiveContainer } from "recharts";

type SparkType = "area" | "bar" | "line";

interface StatCardProps {
  label: string;
  value: string;
  change?: string;
  loading?: boolean;
  sparkType?: SparkType;
  sparkData?: number[];
}

const defaultSpark = [8, 10, 9, 12, 13, 14, 15, 17];

export function StatCard({ label, value, change, loading = false, sparkType = "area", sparkData = defaultSpark }: StatCardProps) {
  if (loading) return <div className="skeleton h-40 w-full" />;
  const positive = (change ?? "").startsWith("+");
  const data = sparkData.map((v, i) => ({ i, v }));

  return (
    <div className="group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#1a1a2a] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-[1px] hover:border-[#6c47ff4d] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(108,71,255,0.15)]">
      <div className="absolute right-5 top-5 h-10 w-20 opacity-80">
        <ResponsiveContainer>
          {sparkType === "bar" ? (
            <BarChart data={data}>
              <Bar dataKey="v" fill="rgba(108,71,255,0.6)" radius={[4, 4, 0, 0]} />
            </BarChart>
          ) : sparkType === "line" ? (
            <LineChart data={data}>
              <Line dataKey="v" stroke="rgba(108,71,255,0.7)" dot={false} strokeWidth={2} />
            </LineChart>
          ) : (
            <AreaChart data={data}>
              <Area dataKey="v" stroke="rgba(108,71,255,0.7)" fill="rgba(108,71,255,0.25)" strokeWidth={2} />
            </AreaChart>
          )}
        </ResponsiveContainer>
      </div>

      <p className="text-xs uppercase tracking-widest text-[#64748b]">{label}</p>
      <p className="font-numeric mt-4 text-3xl font-bold text-[#f1f5f9]">{value}</p>
      {change && (
        <span className={`mt-4 inline-flex rounded-full px-2 py-1 text-xs ${positive ? "bg-[#22c55e1f] text-[#22c55e]" : "bg-[#ef44441f] text-[#ef4444]"}`}>
          {positive ? "▲" : "▼"} {change.replace("+", "").replace("-", "")}
        </span>
      )}
    </div>
  );
}

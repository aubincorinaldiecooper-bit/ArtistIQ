"use client";

import { useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  RadialBar,
  RadialBarChart,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
import { SectionWrapper } from "@/components/dashboard/SectionWrapper";
import { StatCard } from "@/components/dashboard/StatCard";
import { useDashboard } from "./Header";

const cardClass = "group relative overflow-hidden rounded-[20px] border border-white/10 bg-[#1a1a2a] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.4)] transition-all duration-200 hover:-translate-y-[1px] hover:border-[#6c47ff4d] hover:shadow-[0_8px_32px_rgba(0,0,0,0.5),0_0_0_1px_rgba(108,71,255,0.15)]";
const chartTooltip = { background: "#1a1a2a", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "10px", color: "#f1f5f9", fontFamily: "monospace" };

const listenersData = [31.2, 32.8, 34.1, 35.3, 36.7, 37.4, 38.6, 39.4, 40.8, 41.3, 41.8, 42.1].map((value, i) => ({ month: ["Apr 24", "May 24", "Jun 24", "Jul 24", "Aug 24", "Sep 24", "Oct 24", "Nov 24", "Dec 24", "Jan 25", "Feb 25", "Mar 25"][i], value }));
const pillars = [{ name: "Streaming Momentum", score: 92 }, { name: "Social Reach", score: 84 }, { name: "Audience Quality", score: 81 }, { name: "Revenue Consistency", score: 76 }];
const tracks = [["Kill Bill", "2.1B"], ["Snooze", "1.5B"], ["Good Days", "1.2B"], ["Seek & Destroy", "930M"], ["Open Arms", "780M"], ["Nobody Gets Me", "520M"], ["Shirt", "310M"], ["Love Language", "180M"]];

export function DashboardContent() {
  const { activeSection } = useDashboard();
  const [socialTab, setSocialTab] = useState<"instagram" | "tiktok" | "youtube">("instagram");
  const [open, setOpen] = useState(false);

  return (
    <div className="text-[#f1f5f9]">
      {activeSection === "overview" && (
        <SectionWrapper id="overview" title="Overview">
          <div className="grid gap-4 xl:grid-cols-3">
            <StatCard label="Monthly Listeners" value="42.1M" change="+8.3%" sparkType="area" sparkData={[30, 31, 33, 34, 36, 38, 40, 42]} />
            <div className={cardClass}><div className="grid gap-3 md:grid-cols-[160px_1fr]"><div className="h-40"><ResponsiveContainer><RadialBarChart innerRadius="65%" outerRadius="95%" data={[{ value: 87, fill: "#22c55e" }]} startAngle={90} endAngle={-270}><RadialBar dataKey="value" cornerRadius={10} /></RadialBarChart></ResponsiveContainer><p className="-mt-24 text-center font-numeric text-4xl font-bold">87</p></div><div className="space-y-2">{pillars.map((p) => <div key={p.name}><div className="mb-1 flex justify-between text-xs text-[#64748b]"><span>{p.name}</span><span>{p.score}</span></div><div className="h-2 rounded bg-white/10"><div className={`h-2 rounded ${p.score > 80 ? "bg-[#22c55e]" : "bg-[#f59e0b]"}`} style={{ width: `${p.score}%` }} /></div></div>)}</div></div></div>
            <StatCard label="Catalog Valuation" value="$16.8M" change="+2.1%" sparkType="area" sparkData={[11.2, 12.4, 13.3, 14.6, 15.1, 15.9, 16.2, 16.8]} />
          </div>
          <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            <StatCard label="All-Time Streams" value="12.4B" change="+2.1%" sparkType="bar" sparkData={[5, 6, 6.5, 7, 8, 9, 10, 11]} />
            <StatCard label="Total Followers" value="38.7M" change="+5.6%" sparkType="area" sparkData={[24, 25, 27, 29, 31, 34, 36, 38]} />
            <StatCard label="Avg Engagement Rate" value="6.2%" change="+0.8%" sparkType="line" sparkData={[5.8, 6, 5.9, 6.1, 6.2, 6.3, 6.1, 6.2]} />
            <StatCard label="Est. Annual Royalties" value="$1.4M" change="+2.1%" sparkType="bar" sparkData={[1.1, 1.1, 1.2, 1.2, 1.25, 1.3, 1.3, 1.4]} />
          </div>
          <div className={`${cardClass} mt-4`} style={{ borderLeft: "3px solid #6c47ff" }}><p className="text-xs uppercase tracking-widest text-[#a78bfa]">Analyst Note</p><p className="font-numeric mt-2 text-sm text-[#64748b]">SZA continues to demonstrate exceptional catalog durability with monthly listener growth outpacing genre peers by 2.3×. Her cross-platform engagement rate of 6.2% sits in the top 4% of artists at her listener tier. Consistent editorial playlist placement and a loyal core fanbase signal strong royalty revenue stability, supporting a base-case catalog valuation of $16.8M at a 12× multiple.</p></div>
        </SectionWrapper>
      )}

      {activeSection === "streaming" && <SectionWrapper id="streaming" title="Streaming Analytics" subtitle="Spotify"><div className={cardClass}><div className="h-80"><ResponsiveContainer><AreaChart data={listenersData}><defs><linearGradient id="streamArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="rgba(192,132,252,0.3)"/><stop offset="100%" stopColor="rgba(192,132,252,0)"/></linearGradient></defs><CartesianGrid stroke="#ffffff0f" /><XAxis dataKey="month" stroke="#64748b" /><YAxis stroke="#64748b" /><Tooltip contentStyle={chartTooltip} /><ReferenceLine x="Jul 24" stroke="#f59e0b" strokeDasharray="4 4" label="SOS Deluxe" /><ReferenceLine x="Jan 25" stroke="#22c55e" strokeDasharray="4 4" label="Lana single" /><Area dataKey="value" stroke="#c084fc" strokeWidth={2.5} fill="url(#streamArea)" /></AreaChart></ResponsiveContainer></div></div><div className={`${cardClass} mt-4 overflow-auto`}><table className="w-full text-sm"><thead><tr className="border-b border-white/10">{["#", "Track", "Streams", "Released", "Velocity", "Royalty Est."].map((h) => <th key={h} className="px-3 py-3 text-left text-[#64748b]">{h}</th>)}</tr></thead><tbody>{tracks.map((row, i) => <tr key={row[0]} className="border-b border-white/5 last:border-0"><td className="px-3 py-2">{i + 1}</td><td>{row[0]}</td><td>{row[1]}</td><td>202{2 + (i % 3)}-0{i + 1}-12</td><td>{(3.2 - i * 0.3).toFixed(1)}M/day</td><td>${190 - i * 15}K</td></tr>)}</tbody></table></div></SectionWrapper>}

      {activeSection === "social" && <SectionWrapper id="social" title="Social Media"><div className="mb-4 flex gap-2">{(["instagram", "tiktok", "youtube"] as const).map((tab) => <button key={tab} onClick={() => setSocialTab(tab)} className={`rounded-[10px] px-3 py-2 text-sm capitalize ${socialTab === tab ? "bg-[#6c47ff33] text-[#a78bfa] border border-[#6c47ff40]" : "border border-white/10 text-[#64748b]"}`}>{tab}</button>)}</div><div className="grid gap-4 md:grid-cols-2"><div className={cardClass}><p className="font-numeric text-4xl font-bold">{socialTab === "instagram" ? "28.4M" : socialTab === "tiktok" ? "9.3M" : "3.1M"}</p><div className="mt-3 h-56"><ResponsiveContainer><LineChart data={listenersData}><CartesianGrid stroke="#ffffff0f"/><XAxis dataKey="month" stroke="#64748b" /><YAxis stroke="#64748b" /><Tooltip contentStyle={chartTooltip} /><Line dataKey="value" stroke="#c084fc" strokeWidth={2} dot={false} activeDot={{ r: 5, fill: "#c084fc", stroke: "rgba(192,132,252,0.3)", strokeWidth: 2 }} /></LineChart></ResponsiveContainer></div></div><div className={cardClass}><div className="h-56"><ResponsiveContainer><BarChart data={listenersData}><CartesianGrid stroke="#ffffff0f"/><XAxis dataKey="month" stroke="#64748b" /><YAxis stroke="#64748b" /><Tooltip contentStyle={chartTooltip} /><Bar dataKey="value" fill="rgba(108,71,255,0.6)" radius={[6,6,0,0]} /></BarChart></ResponsiveContainer></div></div></div></SectionWrapper>}

      {activeSection === "audience" && <SectionWrapper id="audience" title="Audience Intelligence"><div className="grid gap-4 md:grid-cols-2"><div className={cardClass}><div className="h-64"><ResponsiveContainer><PieChart><Pie data={[{ name: "18-24", value: 38 }, { name: "25-34", value: 31 }, { name: "35-44", value: 18 }, { name: "45+", value: 13 }]} dataKey="value" innerRadius={55} outerRadius={95}>{["#6c47ff", "#8b72ff", "#aa95ff", "#cbbfff"].map((c) => <Cell key={c} fill={c} />)}</Pie><Legend /></PieChart></ResponsiveContainer></div></div><div className={cardClass}><div className="h-64"><ResponsiveContainer><PieChart><Pie data={[{ name: "Female", value: 64 }, { name: "Male", value: 31 }, { name: "Other", value: 5 }]} dataKey="value" innerRadius={55} outerRadius={95}><Cell fill="#6c47ff" /><Cell fill="#8b72ff" /><Cell fill="#b9a9ff" /></Pie><Legend /></PieChart></ResponsiveContainer></div></div></div></SectionWrapper>}

      {activeSection === "valuation" && <SectionWrapper id="valuation" title="Valuation Engine"><div className={cardClass}><div className="h-72"><ResponsiveContainer><BarChart layout="vertical" data={[{ name: "Streaming Momentum (30%)", score: 92 }, { name: "Social Reach (25%)", score: 84 }, { name: "Audience Quality (25%)", score: 81 }, { name: "Revenue Consistency (20%)", score: 76 }]}><CartesianGrid stroke="#ffffff0f"/><XAxis type="number" stroke="#64748b" /><YAxis type="category" dataKey="name" width={180} stroke="#64748b" /><Tooltip contentStyle={chartTooltip} /><Bar dataKey="score" radius={[6,6,0,0]}>{[92,84,81,76].map((s) => <Cell key={s} fill={s > 80 ? "#22c55e" : s > 60 ? "#f59e0b" : "#ef4444"} />)}</Bar></BarChart></ResponsiveContainer></div></div><div className={`${cardClass} mt-4`} style={{ borderLeft: "3px solid #6c47ff" }}><div className="flex items-center justify-between"><p>Base Royalty Estimate</p><p className="font-numeric">$1.4M / year</p></div><p className="text-xs text-[#64748b]">12.4B streams × $0.004 / 8.9 years</p><table className="mt-3 w-full text-sm"><tbody>{[["Conservative", "8×", "$11.2M"], ["Base Case", "12×", "$16.8M"], ["Optimistic", "16×", "$22.4M"]].map((r) => <tr key={r[0]}><td className="py-1">{r[0]}</td><td>{r[1]}</td><td className="font-numeric font-bold">{r[2]}</td></tr>)}</tbody></table><button className="mt-3 text-sm text-[#a78bfa]" onClick={() => setOpen((v) => !v)}>{open ? "▼" : "▶"} How we calculate this</button>{open && <p className="font-numeric mt-2 text-sm text-[#64748b]">ArtistIQ weights 4 pillars: Streaming (30%), Social (25%), Audience (25%), Revenue Consistency (20%). Base royalty assumes $0.004 per stream equivalent and normalized catalog age. Scenarios apply 8×, 12×, and 16× multiples.</p>}</div></SectionWrapper>}
    </div>
  );
}

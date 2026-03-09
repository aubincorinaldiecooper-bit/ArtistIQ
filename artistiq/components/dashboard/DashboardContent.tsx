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

const listenersData = [31.2, 32.8, 34.1, 35.3, 36.7, 37.4, 38.6, 39.4, 40.8, 41.3, 41.8, 42.1].map((value, i) => ({ month: ["Apr 24", "May 24", "Jun 24", "Jul 24", "Aug 24", "Sep 24", "Oct 24", "Nov 24", "Dec 24", "Jan 25", "Feb 25", "Mar 25"][i], value }));
const pillars = [{ name: "Streaming Momentum", score: 92 }, { name: "Social Reach", score: 84 }, { name: "Audience Quality", score: 81 }, { name: "Revenue Consistency", score: 76 }];
const tracks = [["Kill Bill", "2.1B"], ["Snooze", "1.5B"], ["Good Days", "1.2B"], ["Seek & Destroy", "930M"], ["Open Arms", "780M"], ["Nobody Gets Me", "520M"], ["Shirt", "310M"], ["Love Language", "180M"]];

export function DashboardContent() {
  const [socialTab, setSocialTab] = useState<"instagram" | "tiktok" | "youtube">("instagram");
  const [open, setOpen] = useState(false);

  return <div className="mx-auto max-w-7xl px-4 md:px-8">
    <SectionWrapper id="overview" title="Overview">
      <div className="rounded-xl border border-border bg-card p-5"><div className="grid gap-6 md:grid-cols-2">
        <div className="h-72"><ResponsiveContainer><RadialBarChart innerRadius="65%" outerRadius="95%" data={[{ value: 87, fill: "#22c55e" }]} startAngle={90} endAngle={-270}><RadialBar dataKey="value" cornerRadius={10} /></RadialBarChart></ResponsiveContainer><p className="-mt-40 text-center font-numeric text-5xl font-bold">87</p><p className="text-center text-sm text-text-secondary">ArtistIQ Score</p></div>
        <div className="space-y-4">{pillars.map((p) => <div key={p.name}><div className="mb-1 flex justify-between text-sm"><span>{p.name}</span><span>{p.score}/100</span></div><div className="h-2 rounded bg-border"><div className={`h-2 rounded ${p.score > 80 ? "bg-positive" : "bg-amber"}`} style={{ width: `${p.score}%` }} /></div></div>)}</div>
      </div></div>
      <div className="mt-6 grid gap-4 md:grid-cols-3"><StatCard label="Monthly Listeners" value="42.1M" change="+8.3%" /><StatCard label="All-Time Streams" value="12.4B" change="+2.1%" /><StatCard label="Total Followers" value="38.7M" change="+5.6%" /><StatCard label="Avg Engagement Rate" value="6.2%" change="+0.8%" /><StatCard label="Est. Annual Royalties" value="$1.4M" change="+2.1%" /><StatCard label="Catalog Valuation" value="$16.8M" change="+2.1%" /></div>
      <div className="mt-6 rounded-xl border border-border bg-card p-5" style={{ borderLeft: "3px solid #6c47ff" }}><p className="text-xs uppercase tracking-widest text-accent">Analyst Note</p><p className="font-numeric mt-2 text-sm text-text-secondary">SZA continues to demonstrate exceptional catalog durability with monthly listener growth outpacing genre peers by 2.3×. Her cross-platform engagement rate of 6.2% sits in the top 4% of artists at her listener tier. Consistent editorial playlist placement and a loyal core fanbase signal strong royalty revenue stability, supporting a base-case catalog valuation of $16.8M at a 12× multiple.</p></div>
    </SectionWrapper>

    <SectionWrapper id="streaming" title="Streaming Analytics" subtitle="Spotify">
      <div className="rounded-xl border border-border bg-card p-5"><div className="h-72"><ResponsiveContainer><AreaChart data={listenersData}><defs><linearGradient id="streamingGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#6c47ff" stopOpacity={0.5} /><stop offset="100%" stopColor="#6c47ff" stopOpacity={0.01} /></linearGradient></defs><CartesianGrid stroke="#1e1e2e" /><XAxis dataKey="month" stroke="#64748b" /><YAxis stroke="#64748b" /><Tooltip /><ReferenceLine x="Jul 24" stroke="#f59e0b" strokeDasharray="4 4" label="SOS Deluxe" /><ReferenceLine x="Jan 25" stroke="#22c55e" strokeDasharray="4 4" label="Lana single" /><Area dataKey="value" stroke="#6c47ff" fill="url(#streamingGrad)" /></AreaChart></ResponsiveContainer></div></div>
      <div className="mt-6 overflow-auto rounded-xl border border-border bg-card"><table className="w-full text-sm"><thead className="bg-[#161622]"><tr>{["#", "Track", "Streams", "Released", "Velocity", "Royalty Est."] .map((h) => <th key={h} className="px-3 py-3 text-left text-text-secondary">{h}</th>)}</tr></thead><tbody>{tracks.map((row, i) => <tr key={row[0]} className="odd:bg-card even:bg-[#161622]"><td className="px-3 py-2">{i + 1}</td><td>{row[0]}</td><td>{row[1]}</td><td>202{2 + (i % 3)}-0{i + 1}-12</td><td>{(3.2 - i * 0.3).toFixed(1)}M/day</td><td>${190 - i * 15}K</td></tr>)}</tbody></table></div>
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-5"><div className="h-64"><ResponsiveContainer><BarChart layout="vertical" data={["US", "UK", "Canada", "Australia", "Germany", "France", "Brazil", "Mexico"].map((c, i) => ({ c, v: 100 - i * 9 }))}><XAxis type="number" stroke="#64748b" /><YAxis type="category" dataKey="c" stroke="#64748b" /><Bar dataKey="v" fill="#6c47ff" /></BarChart></ResponsiveContainer></div></div>
        <div className="rounded-xl border border-border bg-card p-5"><div className="h-64"><ResponsiveContainer><LineChart data={Array.from({ length: 10 }, (_, i) => ({ day: i * 10, a: 90 - i * 5, b: 80 - i * 4, c: 70 - i * 3 }))}><CartesianGrid stroke="#1e1e2e" /><XAxis dataKey="day" stroke="#64748b" /><YAxis stroke="#64748b" /><Legend /><Line dataKey="a" stroke="#6c47ff" name="Kill Bill" /><Line dataKey="b" stroke="#8f77ff" name="Snooze" /><Line dataKey="c" stroke="#b2a3ff" name="Good Days" /></LineChart></ResponsiveContainer></div></div>
      </div>
    </SectionWrapper>

    <SectionWrapper id="social" title="Social Media">
      <div className="mb-4 flex gap-2">{(["instagram", "tiktok", "youtube"] as const).map((tab) => <button key={tab} className={`rounded-lg px-3 py-1 text-sm capitalize ${socialTab === tab ? "bg-accent text-white" : "border border-border text-text-secondary"}`} onClick={() => setSocialTab(tab)}>{tab}</button>)}</div>
      {socialTab === "instagram" && <div><div className="grid gap-6 md:grid-cols-2"><div className="rounded-xl border border-border bg-card p-5"><p className="font-numeric text-4xl font-bold">28.4M <span className="text-sm text-positive">▲ +4.2%</span></p><div className="mt-3 h-56"><ResponsiveContainer><LineChart data={listenersData}><XAxis dataKey="month" stroke="#64748b" /><YAxis stroke="#64748b" /><Line dataKey="value" stroke="#E1306C" /></LineChart></ResponsiveContainer></div></div><div className="rounded-xl border border-border bg-card p-5"><div className="h-56"><ResponsiveContainer><LineChart data={listenersData.map((d, i) => ({ ...d, e: 5.8 + (i % 4) * 0.2, b: 3 }))}><XAxis dataKey="month" stroke="#64748b" /><YAxis stroke="#64748b" /><Line dataKey="e" stroke="#6c47ff" /><Line dataKey="b" stroke="#64748b" strokeDasharray="5 5" name="Industry Avg 3%" /></LineChart></ResponsiveContainer></div></div></div><div className="mt-6 grid gap-4 md:grid-cols-3">{["2.1M", "1.8M", "1.4M"].map((likes, i) => <div key={likes} className="rounded-xl border border-border bg-card p-4"><div className="aspect-square rounded-lg bg-border" /><p className="mt-2 text-sm text-text-secondary">Campaign post snippet {i + 1}</p><p className="text-xs">❤️ {likes} likes · 💬 {230 - i * 30}K · <span className="rounded-full bg-positive/20 px-2 py-1 text-positive">6.{i + 1}%</span></p></div>)}</div></div>}
      {socialTab === "tiktok" && <div className="grid gap-4 md:grid-cols-5"><StatCard label="Followers" value="9.3M" change="+5.1%" /><StatCard label="Total Video Views" value="4.2B" /><StatCard label="Viral Posts" value="47" /><StatCard label="Sound Usages" value="892K" /><div className="rounded-xl border border-border bg-card p-4"><p className="text-xs text-text-secondary">Engagement benchmark</p><p className="font-numeric text-2xl">5%</p></div></div>}
      {socialTab === "youtube" && <div className="grid gap-4 md:grid-cols-5"><StatCard label="Subscribers" value="3.1M" change="+2.8%" /><StatCard label="Total Views" value="1.8B" /><StatCard label="Avg View Duration" value="3:42" /><div className="rounded-xl border border-border bg-card p-4 md:col-span-2"><p className="text-sm">Top videos: Kill Bill (Live) · Snooze (Official) · Saturn (Visualizer)</p></div></div>}
    </SectionWrapper>

    <SectionWrapper id="audience" title="Audience Intelligence">
      <div className="grid gap-6 md:grid-cols-2"><div className="rounded-xl border border-border bg-card p-5"><div className="h-64"><ResponsiveContainer><PieChart><Pie data={[{ name: "18-24", value: 38 }, { name: "25-34", value: 31 }, { name: "35-44", value: 18 }, { name: "45+", value: 13 }]} dataKey="value" innerRadius={55} outerRadius={95}>{["#6c47ff", "#8b72ff", "#aa95ff", "#cbbfff"].map((c) => <Cell key={c} fill={c} />)}</Pie><Legend /></PieChart></ResponsiveContainer></div></div><div className="rounded-xl border border-border bg-card p-5"><div className="h-64"><ResponsiveContainer><PieChart><Pie data={[{ name: "Female", value: 64 }, { name: "Male", value: 31 }, { name: "Other", value: 5 }]} dataKey="value" innerRadius={55} outerRadius={95}><Cell fill="#6c47ff" /><Cell fill="#8b72ff" /><Cell fill="#b9a9ff" /></Pie><Legend /></PieChart></ResponsiveContainer></div></div></div>
      <div className="mt-6 grid gap-6 md:grid-cols-2"><div className="rounded-xl border border-border bg-card p-5 space-y-3">{["Atlanta", "Los Angeles", "New York", "London", "Toronto"].map((city, i) => <div key={city} className="grid grid-cols-[120px_1fr_72px] items-center gap-2"><span>{city}</span><div className="h-2 rounded bg-border"><div className="h-2 rounded bg-accent" style={{ width: `${100 - i * 12}%` }} /></div><span className="text-xs text-text-secondary">{(3.2 - i * 0.4).toFixed(1)}M</span></div>)}</div><div className="rounded-xl border border-border bg-card p-5"><div className="h-44"><ResponsiveContainer><RadialBarChart innerRadius="70%" outerRadius="100%" data={[{ value: 73, fill: "#f59e0b" }]} startAngle={90} endAngle={-270}><RadialBar dataKey="value" cornerRadius={8} /></RadialBarChart></ResponsiveContainer></div><p className="-mt-20 text-center font-numeric text-3xl">73%</p><p className="text-center text-xs text-text-secondary">Fan Loyalty</p></div></div>
      <div className="mt-6 rounded-xl border border-border bg-card p-5"><p className="mb-2 text-sm">Cross-platform overlap</p><div className="flex h-4 overflow-hidden rounded"><div className="bg-[#6c47ff]" style={{ width: "42%" }} /><div className="bg-[#8f77ff]" style={{ width: "35%" }} /><div className="bg-[#b3a7ff]" style={{ width: "23%" }} /></div><div className="mt-1 flex justify-between text-xs text-text-secondary"><span>1 Platform only 42%</span><span>2 Platforms 35%</span><span>3+ Platforms 23%</span></div><p className="mt-4 mb-2 text-sm">Community Sentiment — Last 30 Days</p><div className="flex h-4 overflow-hidden rounded"><div className="bg-positive" style={{ width: "71%" }} /><div className="bg-[#64748b]" style={{ width: "22%" }} /><div className="bg-negative" style={{ width: "7%" }} /></div></div>
    </SectionWrapper>

    <SectionWrapper id="valuation" title="Valuation Engine">
      <div className="rounded-xl border border-border bg-card p-5"><div className="h-64"><ResponsiveContainer><BarChart layout="vertical" data={[{ name: "Streaming Momentum (30%)", score: 92 }, { name: "Social Reach (25%)", score: 84 }, { name: "Audience Quality (25%)", score: 81 }, { name: "Revenue Consistency (20%)", score: 76 }]}><XAxis type="number" stroke="#64748b" /><YAxis type="category" dataKey="name" width={180} stroke="#64748b" /><Bar dataKey="score">{[92, 84, 81, 76].map((s) => <Cell key={s} fill={s > 80 ? "#22c55e" : s > 60 ? "#f59e0b" : "#ef4444"} />)}</Bar></BarChart></ResponsiveContainer></div></div>
      <div className="mt-6 rounded-xl border border-border bg-card p-5" style={{ borderLeft: "3px solid #6c47ff" }}><div className="flex items-center justify-between"><p>Base Royalty Estimate</p><p className="font-numeric">$1.4M / year</p></div><p className="text-xs text-text-secondary">12.4B streams × $0.004 / 8.9 years</p><table className="mt-3 w-full text-sm"><tbody>{[["Conservative", "8×", "$11.2M"], ["Base Case", "12×", "$16.8M"], ["Optimistic", "16×", "$22.4M"]].map((r) => <tr key={r[0]}><td className="py-1">{r[0]}</td><td>{r[1]}</td><td className="font-numeric font-bold">{r[2]}</td></tr>)}</tbody></table><div className="mt-4"><div className="mb-1 flex justify-between text-xs"><span>$11.2M</span><span>$16.8M</span><span>$22.4M</span></div><div className="relative h-3 rounded bg-gradient-to-r from-negative via-amber to-positive"><div className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 border border-white bg-background" /></div></div></div>
      <div className="mt-6 grid gap-4 md:grid-cols-3">{[["Jhené Aiko", "R&B/Soul", "81", "$12M – $19M"], ["Summer Walker", "R&B", "78", "$9M – $15M"], ["Tinashe", "R&B/Pop", "72", "$6M – $11M"]].map((a) => <div key={a[0]} className="rounded-xl border border-border bg-card p-4"><p className="font-semibold">{a[0]}</p><span className="text-xs text-text-secondary">{a[1]}</span><span className="ml-2 rounded-full bg-positive/20 px-2 py-1 text-xs text-positive">{a[2]}</span><p className="font-numeric mt-2 font-bold">{a[3]}</p></div>)}</div>
      <button className="mt-6 text-sm text-accent" onClick={() => setOpen((v) => !v)}>{open ? "▼" : "▶"} How we calculate this</button>
      {open && <div className="mt-2 rounded-xl border border-border bg-card p-4 font-numeric text-sm text-text-secondary">ArtistIQ weights 4 pillars: Streaming (30%), Social (25%), Audience (25%), Revenue Consistency (20%). Base royalty assumes $0.004 per stream equivalent and normalized catalog age. Scenarios apply 8×, 12×, and 16× multiples to generate conservative, base, and optimistic valuation ranges.</div>}
    </SectionWrapper>
  </div>;
}

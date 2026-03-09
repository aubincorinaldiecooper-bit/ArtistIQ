"use client";

import { createContext, useContext, useMemo, useState } from "react";
import { BarChart2, Music2, Smartphone, Users, TrendingUp, Bell, Download, Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "overview", label: "Overview", icon: BarChart2 },
  { id: "streaming", label: "Streaming", icon: Music2 },
  { id: "social", label: "Social", icon: Smartphone },
  { id: "audience", label: "Audience", icon: Users },
  { id: "valuation", label: "Valuation", icon: TrendingUp }
] as const;

type SectionId = (typeof NAV_ITEMS)[number]["id"];

interface DashboardContextValue {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
}

const DashboardContext = createContext<DashboardContextValue | null>(null);

export function DashboardProvider({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState<SectionId>("overview");
  const value = useMemo(() => ({ activeSection, setActiveSection }), [activeSection]);
  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}

export function useDashboard() {
  const context = useContext(DashboardContext);
  if (!context) {
    throw new Error("useDashboard must be used within DashboardProvider");
  }
  return context;
}

export function useActiveSection() {
  return useDashboard();
}

function Header({ children }: { children: React.ReactNode }) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <DashboardProvider>
      <HeaderInner drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}>
        {children}
      </HeaderInner>
    </DashboardProvider>
  );
}

function HeaderInner({
  children,
  drawerOpen,
  setDrawerOpen
}: {
  children: React.ReactNode;
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
}) {
  const { activeSection, setActiveSection } = useDashboard();

  const Sidebar = (
    <aside className="flex h-full w-[220px] flex-col justify-between border-r border-white/5 bg-[#13131f] px-3 py-5">
      <div>
        <h1 className="text-lg font-bold tracking-tight text-white">
          ArtistIQ
          <span className="ml-1 inline-block h-1 w-1.5 bg-[#6c47ff]" />
        </h1>

        <div className="my-4 h-px w-full bg-white/5" />

        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[rgba(108,71,255,0.4)] bg-[rgba(108,71,255,0.2)]">
            <span className="text-lg font-bold text-[#a78bfa]">SZ</span>
          </div>
          <p className="mt-3 text-base font-bold text-white">SZA</p>
          <p className="text-xs text-[#64748b]">R&B · Pop · Soul</p>
          <p className="mt-1 text-xs text-[#475569]">TDE / RCA Records</p>
          <div className="mt-4 text-center">
            <p className="font-numeric text-2xl font-bold text-white">
              87
              <span className="ml-2 text-xs text-[#22c55e]">+3.2%</span>
            </p>
            <p className="text-[10px] uppercase tracking-widest text-[#475569]">ArtistIQ Score</p>
          </div>
        </div>

        <div className="my-4 h-px w-full bg-white/5" />

        <nav className="space-y-2">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const active = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id);
                  setDrawerOpen(false);
                }}
                className={`flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
                  active
                    ? "border-[rgba(108,71,255,0.25)] bg-[rgba(108,71,255,0.15)] text-[#a78bfa]"
                    : "border-transparent text-[#64748b] hover:bg-[rgba(255,255,255,0.04)] hover:text-[#94a3b8]"
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>

      <div>
        <button className="w-full rounded-xl py-2.5 text-sm font-semibold text-white shadow-[0_0_20px_rgba(108,71,255,0.35)] transition hover:shadow-[0_0_28px_rgba(108,71,255,0.5)]" style={{ background: "linear-gradient(135deg, #6c47ff, #4f35cc)" }}>
          Refresh Data
        </button>
        <button className="mt-2 w-full rounded-xl border border-[rgba(255,255,255,0.08)] py-2.5 text-sm text-[#64748b] transition hover:border-[rgba(255,255,255,0.15)] hover:text-[#94a3b8]">
          Export Report
        </button>
        <p className="mt-3 text-center text-[11px] text-[#475569]">Last synced: 2 min ago</p>
      </div>
    </aside>
  );

  return (
    <div className="min-h-screen bg-[#0d0d16]">
      <div className="fixed left-0 top-0 z-30 hidden h-screen md:block">{Sidebar}</div>

      <header className="fixed left-0 right-0 top-0 z-40 flex h-16 items-center justify-between border-b border-[rgba(255,255,255,0.05)] bg-[rgba(13,13,20,0.9)] px-4 backdrop-blur-[20px] md:left-[220px] md:right-[280px] md:px-6">
        <div className="flex items-center gap-3">
          <button className="md:hidden" onClick={() => setDrawerOpen(true)} aria-label="Open navigation">
            <Menu className="h-5 w-5 text-[#64748b]" />
          </button>
          <p className="text-lg font-bold text-white">{activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}</p>
        </div>

        <input
          placeholder="Search artists..."
          className="hidden w-72 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-4 py-2 text-sm text-[#94a3b8] placeholder:text-[#64748b] focus:border-[rgba(108,71,255,0.5)] focus:outline-none focus:shadow-[0_0_0_3px_rgba(108,71,255,0.12)] md:block"
        />

        <div className="flex items-center gap-4">
          <Bell className="h-5 w-5 text-[#64748b]" />
          <Download className="h-5 w-5 text-[#64748b]" />
          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-[rgba(108,71,255,0.3)] bg-[rgba(108,71,255,0.2)] text-xs font-semibold text-[#a78bfa]">
            JL
          </div>
        </div>
      </header>

      <aside className="fixed right-0 top-16 hidden h-[calc(100vh-64px)] w-[280px] overflow-y-auto border-l border-[rgba(255,255,255,0.05)] bg-[#13131f] p-5 md:block">
        <div className="rounded-2xl border border-[rgba(108,71,255,0.25)] bg-[linear-gradient(135deg,rgba(108,71,255,0.2),rgba(108,71,255,0.05))] p-5">
          <p className="mb-2 text-[10px] uppercase tracking-widest text-[#a78bfa]">CATALOG VALUE</p>
          <p className="font-numeric text-3xl font-bold text-white">$16.8M</p>
          <p className="mt-1 text-xs text-[#64748b]">Base Case · 12×</p>
          <div className="mt-4 flex justify-between">
            <div>
              <p className="font-numeric text-sm text-[#ef4444]">$11.2M</p>
              <p className="text-[10px] text-[#475569]">Conservative</p>
            </div>
            <div className="text-right">
              <p className="font-numeric text-sm text-[#22c55e]">$22.4M</p>
              <p className="text-[10px] text-[#475569]">Optimistic</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-3 text-[10px] uppercase tracking-widest text-[#475569]">KEY METRICS</p>
          <div className="divide-y divide-[rgba(255,255,255,0.04)]">
            {[
              ["Monthly Listeners", "42.1M"],
              ["Total Streams", "12.4B"],
              ["Total Followers", "38.7M"],
              ["Annual Royalties", "$1.4M"]
            ].map((row) => (
              <div key={row[0]} className="flex justify-between py-2.5 text-sm">
                <span className="text-[#64748b]">{row[0]}</span>
                <span className="font-numeric text-white">{row[1]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <p className="mb-3 text-[10px] uppercase tracking-widest text-[#475569]">ACTIVITY</p>
          {[
            ["#22c55e", "Data refreshed", "2 min ago"],
            ["#6c47ff", "Score updated", "2 min ago"],
            ["#475569", "Last export", "3 days ago"]
          ].map((row) => (
            <div key={row[1]} className="flex items-center justify-between py-2">
              <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: row[0] }} />
              <span className="mx-3 flex-1 text-sm text-[#94a3b8]">{row[1]}</span>
              <span className="text-xs text-[#475569]">{row[2]}</span>
            </div>
          ))}
        </div>
      </aside>

      {drawerOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button className="absolute inset-0 bg-black/60" onClick={() => setDrawerOpen(false)} aria-label="Close navigation" />
          <div className="relative h-full w-[220px]">
            {Sidebar}
            <button className="absolute right-2 top-2 rounded bg-black/60 p-2" onClick={() => setDrawerOpen(false)} aria-label="Close drawer">
              <X className="h-5 w-5 text-white" />
            </button>
          </div>
        </div>
      )}

      <main style={{ marginLeft: 220, marginRight: 280, paddingTop: 64 }} className="min-h-screen overflow-y-auto bg-[#0d0d16] p-6 max-md:m-0 max-md:pt-16">
        {children}
      </main>
    </div>
  );
}

export { Header };
export default Header;

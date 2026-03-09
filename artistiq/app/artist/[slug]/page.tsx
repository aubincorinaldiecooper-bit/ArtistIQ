"use client";
import dynamic from "next/dynamic";
import { Header } from "@/components/dashboard/Header";
import SectionNav from "@/components/dashboard/SectionNav";

const DashboardContent = dynamic( () => import("@/components/dashboard/DashboardContent").then((m) => m.DashboardContent), { ssr: false } );

export default function ArtistDashboardPage() { return ( <Header> <SectionNav /> <DashboardContent /> </Header> ); }

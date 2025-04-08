import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { StatsGrid } from "@/components/StatsGrid"
import { EarnSteps } from "@/components/EarnSteps"
import { DownloadCard } from "@/components/DownloadCard"
import { WalkCard } from "@/components/WalkCard"
import { RarityLevel } from "@/components/RarityLevel"
import { PurpleGradient } from "@/components/ui/PurpleGradient"

export default function Home() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <Header />

      <main className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <Hero />
        <StatsGrid />
        <div className="relative">
          <PurpleGradient />
          <EarnSteps />
        </div>
        <RarityLevel />
        <DownloadCard />
        <WalkCard />
      </main>
    </div>
  )
}

import Link from "next/link";
import { Home, ArrowLeft, Compass } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-28 sm:px-6">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <section className="mx-auto flex min-h-[70vh] w-full max-w-4xl items-center justify-center">
        <div className="glass-morphism w-full rounded-3xl border border-accent/20 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] sm:p-10">
          <p className="font-kodeMono text-[10px] uppercase tracking-[0.35em] text-accent/80 sm:text-xs">
            Error Protocol: 404
          </p>

          <h1 className="mt-3 font-orbitron text-6xl font-black leading-none text-transparent text-gradient sm:text-8xl">
            LOST IN THE GRID
          </h1>

          <p className="mt-5 max-w-2xl font-spaceGrotesk text-sm leading-relaxed text-muted-foreground sm:text-lg">
            The route you are trying to access does not exist in this sector.
            Recalibrate your path using one of the navigation channels below.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
            <Button
              asChild
              className="font-orbitron tracking-[0.12em] uppercase"
            >
              <Link href="/" aria-label="Return to home page">
                <Home className="h-4 w-4" />
                Return Home
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-accent/35 bg-transparent font-orbitron tracking-[0.12em] uppercase text-accent hover:bg-accent/10 hover:text-highlight"
            >
              <Link href="/contact" aria-label="Go to contact page">
                <Compass className="h-4 w-4" />
                Contact Crew
              </Link>
            </Button>

            <Button
              asChild
              variant="ghost"
              className="font-kodeMono text-[11px] tracking-[0.22em] uppercase text-muted-foreground hover:text-accent"
            >
              <Link href="/teams" aria-label="Go to teams page">
                <ArrowLeft className="h-4 w-4" />
                Meet The Crew
              </Link>
            </Button>
          </div>

          <div className="mt-10 border-t border-accent/15 pt-4 font-kodeMono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/80 sm:text-xs">
            TECHLAVYA // IGNITE 2026 // NAVIGATION FAILURE
          </div>
        </div>
      </section>
    </main>
  );
}

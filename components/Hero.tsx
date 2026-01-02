import { Section } from '@/components/Section'

/**
 * Hero component - Opening section with animated background
 * Full viewport height with attention-grabbing background
 */
export function Hero() {
  return (
    <Section id="hero" className="relative overflow-hidden h-[100dvh]">
      {/* Background placeholder - TODO: Add animated GIF or video background */}
      <div className="absolute inset-0 bg-gradient-to-b from-retro-purple/20 to-retro-blue/20 dark:from-purple-900/40 dark:to-blue-900/40 z-0" />

      {/* Content overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-8">
        <h1 className="text-4xl md:text-6xl font-pixel text-center animate-pulse">
          WELCOME
        </h1>
        <p className="text-lg md:text-2xl text-center max-w-2xl px-4">
          {/* TODO: Add hero subtitle or description */}
          Scroll down to explore
        </p>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <p className="text-sm font-pixel mb-2">↓</p>
        </div>
      </div>
    </Section>
  )
}

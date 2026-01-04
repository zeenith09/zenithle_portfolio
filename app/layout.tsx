import { Press_Start_2P } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import { ThemeProvider } from '@/lib/hooks/useTheme'
import { BackToTop } from '@/components/BackToTop/BackToTop'
import { ParticlesBackground } from '@/components/ParticlesBackground/ParticlesBackground'
import { CloudsBackground } from '@/components/CloudsBackground/CloudsBackground'
import { IntroOverlayWrapper } from '@/components/IntroOverlay/IntroOverlayWrapper'

const Header = dynamic(() =>
  import('@/components/Header/Header').then((mod) => ({
    default: mod.Header,
  }))
)

const pixelFont = Press_Start_2P({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-pixel',
})

export const metadata = {
  title: "MY NAME'S PORTFOLIO",
  description: 'Retro 2000s space-themed portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.className = theme;
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={pixelFont.variable}>
        <ParticlesBackground />
        <CloudsBackground />
        <IntroOverlayWrapper />

        <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
          Skip to main content
        </a>

        <ThemeProvider>
          <Header />

          {children}

          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}

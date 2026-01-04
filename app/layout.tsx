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
                document.documentElement.className = 'dark';
              } catch (e) {}
              
              // Hide content until intro overlay is ready (only on home page with no hash)
              if (window.location.pathname === '/' && !window.location.hash) {
                document.documentElement.setAttribute('data-hide-content', 'true');
                document.documentElement.style.backgroundColor = '#000000';
              }
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

import { Press_Start_2P } from 'next/font/google'
import dynamic from 'next/dynamic'
import { ThemeProvider } from '@/lib/hooks/useTheme'
import { BackToTop } from '@/components/BackToTop/BackToTop'
import { ParticlesBackground } from '@/components/ParticlesBackground/ParticlesBackground'
import { CloudsBackground } from '@/components/CloudsBackground/CloudsBackground'
import { IntroOverlayWrapper } from '@/components/IntroOverlay/IntroOverlayWrapper'

import './globals.css'

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
  title: 'Player Zenith: Portfolio',
  description: 'Retro 2000s space-themed portfolio website',
  icons: {
    icon: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>',
  },
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

        {/* Fallback in case the other one fails for social link */}
        <meta property="og:title" content="Player Zenith: Portfolio" />
        <meta
          property="og:description"
          content="Retro 2000s space-themed portfolio website"
        />
        <meta property="og:image" content="/opengraph-image.png" />
        <meta property="og:url" content="https://www.zenithle.tech" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="/opengraph-image.png" />
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

import { Press_Start_2P } from 'next/font/google'
import dynamic from 'next/dynamic'
import './globals.css'
import { ThemeProvider } from '@/lib/hooks/useTheme'
import { BackToTop } from '@/components/BackToTop/BackToTop'

const Header = dynamic(() =>
  import('@/components/Header/Header').then((mod) => ({ default: mod.Header }))
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
        {/* T056: Skip-to-content link for keyboard users */}
        <a href="#main-content" className="skip-link sr-only focus:not-sr-only">
          Skip to main content
        </a>

        <ThemeProvider>
          {/* T057: ARIA navigation landmark */}
          <Header />

          {/* T057: ARIA main landmark for primary content */}
          {children}

          {/* Back to top button */}
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  )
}

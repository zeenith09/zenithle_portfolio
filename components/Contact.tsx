import { Section } from '@/components/Section'

/**
 * Contact section - Call-to-action and contact information
 */
export function Contact() {
  return (
    <Section
      id="contact"
      title="Get In Touch"
      className="bg-gradient-to-b from-transparent to-retro-accent/5 dark:to-pink-900/10"
    >
      <div className="max-w-2xl mx-auto w-full text-center">
        <p className="text-base mb-8 max-w-lg mx-auto">
          TODO: Add contact message/CTA
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <a
            href="mailto:TODO@example.com"
            className="px-8 py-3 border-2 border-current hover:bg-retro-primary hover:text-white transition-all font-pixel text-sm"
          >
            Email
          </a>
          <a
            href="#"
            className="px-8 py-3 border-2 border-current hover:bg-retro-primary hover:text-white transition-all font-pixel text-sm"
          >
            GitHub
          </a>
          <a
            href="#"
            className="px-8 py-3 border-2 border-current hover:bg-retro-primary hover:text-white transition-all font-pixel text-sm"
          >
            LinkedIn
          </a>
        </div>

        <p className="text-xs text-retro-secondary">
          TODO: Add contact availability or response time message
        </p>
      </div>
    </Section>
  )
}

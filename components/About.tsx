import { Section } from '@/components/Section'

/**
 * About section - Biographical information
 */
export function About() {
  return (
    <Section
      id="about"
      title="About"
      className="bg-gradient-to-b from-transparent to-retro-purple/5 dark:to-purple-900/10"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {/* TODO: Replace with actual biographical content */}
        <p className="text-base md:text-lg leading-relaxed">
          This is the About section. Add your biographical information,
          education, work experience, and current focus here.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div>
            <h3 className="text-xl font-pixel mb-3">Education</h3>
            <p className="text-sm">TODO: Add education details</p>
          </div>
          <div>
            <h3 className="text-xl font-pixel mb-3">Current Role</h3>
            <p className="text-sm">TODO: Add current role information</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-pixel mb-3 mt-8">Current Focus</h3>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>TODO: Learning goal 1</li>
            <li>TODO: Learning goal 2</li>
            <li>TODO: Learning goal 3</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

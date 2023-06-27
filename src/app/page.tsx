import { Banner } from '@/components/Banner'
import { HeadingSection } from '@/components/HeadingSection'

export default function Home() {
  return (
    <div>
      <Banner />
      <HeadingSection
        title="My Tech Stack"
        subtitle="Technologies I’ve been working with recently"
      />
      <HeadingSection title="Projects" subtitle="Things I’ve built so far" />
    </div>
  )
}

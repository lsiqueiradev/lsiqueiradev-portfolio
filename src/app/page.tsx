import { Banner } from '@/components/Banner'
import { HeadingSection } from '@/components/HeadingSection'
import { ProjectItem } from '@/components/ProjectItem'
import { StackItem } from '@/components/StackItem'

import projects from './(screens)/projects/data'
import stacks from './(screens)/stacks/data'

export default function Home() {
  return (
    <div>
      <Banner />
      <HeadingSection
        title="My Tech Stack"
        subtitle="Technologies I’ve been working with recently"
      />
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 mt-10 mb-20">
        {stacks.map((stack) => (
          <StackItem key={stack.id} data={stack} />
        ))}
      </div>
      <HeadingSection title="Projects" subtitle="Things I’ve built so far" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 mb-20">
        {projects.map((project) => (
          <ProjectItem
            key={project.id}
            data={project}
          />
        ))}
      </div>
    </div>
  )
}

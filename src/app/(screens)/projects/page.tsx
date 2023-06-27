import projects from '../../config/projects'

import { ProjectItem } from '@/components/ProjectItem'
import { Title } from '@/components/Title'
import { Description } from '@/components/Description'

export default function Projects() {
  return (
    <div className="pt-40">
      <Title>Projects</Title>
      <Description className="pb-40">Things I’ve built so far</Description>

      {projects.map((project) => (
        <ProjectItem
          key={project.id}
          data={project}
        />
      ))}
    </div>
  )
}

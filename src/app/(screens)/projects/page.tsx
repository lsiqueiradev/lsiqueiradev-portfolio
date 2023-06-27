import projects from '../../config/projects'

import { ProjectItem, ProjectItemProps } from '@/components/ProjectItem'
import { Title } from '@/components/Title'
import { Description } from '@/components/Description'

export default function Projects({
  title,
  description,
  src,
  stacks,
  preview,
  githubUrl,
}: ProjectItemProps) {
  return (
    <div className="pt-40">
      <Title>Projects</Title>
      <Description className="pb-40">Things I’ve built so far</Description>

      {projects.map(() => (
        <ProjectItem
          key={title}
          title={title}
          description={description}
          src={src}
          stacks={stacks}
          preview={preview}
          githubUrl={githubUrl}
        />
      ))}
    </div>
  )
}

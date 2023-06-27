import Image from 'next/image'

export interface ProjectItemProps {
  title: string
  description: string
  src: string
  stacks: string
  preview: string
  githubUrl: string
}

export function ProjectItem({
  title,
  src,
  description,
  stacks,
  preview,
  githubUrl,
}: ProjectItemProps) {
  return (
    <div>
      <div>
        <Image src={src} alt="" />
      </div>
      <div>
        <h6>{title} </h6>
        <p>{description}</p>
        <p>Tech stack : {stacks}</p>
        <div>
          <a href={preview}>Live Preview</a>
          <a href={githubUrl}>View Code</a>
        </div>
      </div>
    </div>
  )
}

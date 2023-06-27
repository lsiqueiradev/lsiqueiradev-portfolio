import Image from 'next/image'

interface ProjectItemProps {
  link: string,
  title: string
  description: string
  image_url: string
  stacks: string
  preview: string
  githubUrl: string
}

interface Props {
  data: ProjectItemProps
}

export function ProjectItem({ data }: Props) {
  return (
    <div>
      <div>
        <Image src={data.image_url} alt="" />
      </div>
      <div>
        <h6>{data.title} </h6>
        <p>{data.description}</p>
        <p>Tech stack : {data.stacks}</p>
        <div>
          <a href={data.preview}>Live Preview</a>
          <a href={data.githubUrl}>View Code</a>
        </div>
      </div>
    </div>
  )
}

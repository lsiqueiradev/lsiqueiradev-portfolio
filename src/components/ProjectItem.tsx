import Image from 'next/image'
import { IoLinkOutline, IoLogoGithub } from 'react-icons/io5'

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
    <div className="bg-gray-700 rounded-2xl overflow-hidden">
      <div className="relative h-52 w-full z-0">
        <Image src={data.image_url} alt={data.title} fill />
      </div>
      <div className="p-6">
        <h6 className="text-2xl font-medium text-gray-200">{data.title} </h6>
        <p className="py-4 font-light text-gray-200">{data.description}</p>
        <div className="flex">
          <p className="font-medium text-sm text-gray-200 mr-2">Tech stack:</p>
          <p className="font-light text-sm text-gray-200"> {data.stacks}</p>
        </div>
        <div className="flex justify-between mt-4 text-gray-600 text-sm font-light underline">
          <a href={data.preview} className="flex items-center gap-2">
            <IoLinkOutline />
            Live Preview
          </a>
          <a href={data.githubUrl} className="flex items-center gap-2">
            <IoLogoGithub />
            View Code</a>
        </div>
      </div>
    </div>
  )
}

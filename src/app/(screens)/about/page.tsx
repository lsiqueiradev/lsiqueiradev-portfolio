import { WorkItem } from '@/components/WorkItem'

import { Title } from '@/components/Title'
import { Description } from '@/components/Description'

import { works } from '../../config/works'

export default function About() {
  return (
    <div className="max-w-xl pt-40">
      <Title>About Me</Title>
      <Description className="my-12">
        The Generator App is an online tool that helps you to export ready-made
        templates ready to work as your future website. It helps you to combine
        slides, panels and other components and export it as a set of static
        files: HTML/CSS/JS.
      </Description>
      <Title>Work Experience</Title>
      <div className="my-16">
        {works.map((item, index) => (
          <WorkItem item={item} key={index} />
        ))}
      </div>
      <Title>Educations</Title>
      <div></div>
    </div>
  )
}

/* eslint-disable prettier/prettier */
import Image from 'next/image'

import stacks from './data'
import { Title } from '@/components/Title'
import { Description } from '@/components/Description'
import { StackItem } from '@/components/StackItem'

export default function Stacks() {
  return (
    <div className="pt-40">
      <Title>My Teck Stack</Title>
      <Description className="pb-40">Technologies I’ve been working with recently</Description>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10">
        {stacks.map((stack) => (
          <StackItem key={stack.id} data={stack} />
        ))}
      </div>
    </div>
  )
}

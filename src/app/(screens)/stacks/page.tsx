/* eslint-disable prettier/prettier */
import Image from 'next/image'

import stacks from '../../config/stacks'
import { Title } from '@/components/Title'
import { Description } from '@/components/Description'

export default function Stacks() {
  return (
    <div className="pt-40">
      <Title>My Teck Stack</Title>
      <Description className="pb-40">Technologies I’ve been working with recently</Description>
      <div className="grid grid-cols-6">
        {stacks.map((stack) => (
          <Image
            key={stack.id}
            src={stack.src}
            className={`${stack.src === '/greensock.svg' || stack.src === '/github.svg'
              ? 'dark:invert mb-10'
              : 'mb-14'
              }`}
            alt="Stack LSIQUEIRA.DEV"
            width={120}
            height={120}
            priority
          />
        ))}
      </div>
    </div>
  )
}

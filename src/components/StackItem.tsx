import Image from "next/image";

interface StackItemProps {
  src: string,
}

interface Props {
  data: StackItemProps
}

export function StackItem({ data }: Props) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src={data.src}
        className={`${data.src === '/greensock.svg' || data.src === '/github.svg'
          ? 'dark:invert'
          : ''
          }`}
        alt={data.src}
        width={120}
        height={120}
        priority
      />
    </div>
  )
}
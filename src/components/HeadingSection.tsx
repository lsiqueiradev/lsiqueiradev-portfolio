interface HeadingSectionProps {
  title: string
  subtitle: string
}

export function HeadingSection({ title, subtitle }: HeadingSectionProps) {
  return (
    <div className="text-center pb-12">
      <h2 className="text-5xl font-bold text-gray-200 mb-3">{title}</h2>
      <h3 className="text-2xl text-gray-300">{subtitle}</h3>
    </div>
  )
}

interface BannerInternProps {
  title: string
  subtitle: string
}

export function BannerIntern({ title, subtitle }: BannerInternProps) {
  return (
    <div className="py-40">
      <h2 className="text-5xl font-bold text-gray-200 mb-3">{title}</h2>
      <h3 className="text-lg text-gray-300 max-w-xl">{subtitle}</h3>
    </div>
  )
}

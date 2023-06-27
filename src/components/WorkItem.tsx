interface WorkItemProps {
  item: {
    title: string
    journey: string
    enterprise: string
    local: string
    time: string
  }
}

export function WorkItem({ item }: WorkItemProps) {
  return (
    <div className="border-b-2 mb-8">
      <div className="flex justify-between items-center mb-2">
        <h4>{item.title}</h4>
        <p className="bg-success-light text-success-dark py-1 px-3 text-xs rounded-2xl">
          {item.journey}
        </p>
      </div>
      <div className="flex justify-between items-center mb-4 text-sm">
        <div className="flex">
          <p>{item.enterprise}</p>
          <p className="ml-16">{item.local}</p>
        </div>
        <p>{item.time}</p>
      </div>
    </div>
  )
}

import Image from 'next/image'

export function Banner() {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:justify-between py-32">
      <h1 className="text-center lg:text-left text-5xl text-gray-100 font-bold leading-snug">
        Hi 👋, <br />
        My name is <br />
        Lucas Siqueira <br />
        I build things <br />
        for web and mobile
      </h1>

      <div className="p-2 bg-violet-600 rounded-full overflow-hidden mt-10 lg:mt-0">
        <Image
          className="rounded-full"
          src="/avatar.jpeg"
          alt="Avatar Lucas Siqueira"
          width={400}
          height={400}
          priority
        />
      </div>
    </div>
  )
}

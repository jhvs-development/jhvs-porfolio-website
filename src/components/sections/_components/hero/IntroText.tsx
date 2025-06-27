interface IntroTextProps {
  name: string
  title: string
}

export const IntroText = ({ name, title }: IntroTextProps) => {
  return (
    <div className="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
      <span className="text-primary-blue text-lg md:text-xl font-mono">
        {'// Welcome to my portfolio 👋🏻'}
      </span>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
        <span className="text-foreground">{name}</span>
        <span className="text-primary-blue">.</span>
      </h1>
      <h2 className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-mono max-w-4xl mx-auto leading-relaxed">
        {title}
      </h2>
    </div>
  )
}

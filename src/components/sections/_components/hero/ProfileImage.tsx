import Image from 'next/image'

interface ProfileImageProps {
  name: string
  imageSrc: string
}

export const ProfileImage = ({ name, imageSrc }: ProfileImageProps) => {
  return (
    <div className="relative flex-shrink-0">
      <div className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full overflow-hidden border-4 border-primary-blue/30 hover:border-primary-blue transition-all duration-300 shadow-lg hover:shadow-primary-blue/25">
        <Image
          src={imageSrc}
          alt={`${name} - Profile Picture`}
          width={192}
          height={192}
          className="w-full h-full object-cover"
          priority
        />
      </div>
      {/* Decorative code brackets around image */}
      <div className="absolute -top-2 -left-2 text-primary-blue text-2xl md:text-3xl font-mono">
        &#123;
      </div>
      <div className="absolute -bottom-2 -right-2 text-primary-blue text-2xl md:text-3xl font-mono">
        &#125;
      </div>
    </div>
  )
}

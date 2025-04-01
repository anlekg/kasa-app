import "~/assets/Banner.scss"

type BannerProps = {
  imageSrc: string
  text: string
}

export function Banner({ imageSrc, text }: BannerProps) {
  return (
    <div className="banner">
      <img src={imageSrc} alt="Banner Image" className="banner-image" />
      <p className="banner-text">{text}</p>
    </div>
  )
}

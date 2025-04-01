import React, { useState } from "react"
import logementsData from "~/assets/logements.json"
import "~/assets/Carousel.scss"

type CarouselProps = {
  id: string
}

const Carousel: React.FC<CarouselProps> = ({ id }) => {
  const logement = logementsData.find((logement) => logement.id === id)

  if (!logement || !logement.pictures || logement.pictures.length === 0) {
    return <div>Aucune image disponible</div>
  }

  const pictures = logement.pictures
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    )
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="carousel">
      <div className="carousel-image">
        <img src={pictures[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      </div>
      {pictures.length > 1 && (
        <>
          <button className="carousel-button prev" onClick={handlePrevious}>
            ❮
          </button>
          <button className="carousel-button next" onClick={handleNext}>
            ❯
          </button>
        </>
      )}
      <div className="carousel-counter">
        {currentIndex + 1}/{pictures.length}
      </div>
    </div>
  )
}

export default Carousel

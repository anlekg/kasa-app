import React, { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Dropdown from "~/composants/Dropdown"
import logementsData from "~/assets/logements.json"
import "~/assets/LogementPage.scss"
import { Header } from "~/composants/header"
import { Footer } from "~/composants/footer"
import StarIcon from "~/images/star-solid.svg"
import Carousel from "~/composants/Carousel"

type Logement = {
  id: string
  title: string
  cover: string
  pictures: string[]
  description: string
  host: {
    name: string
    picture: string
  }
  rating: string
  location: string
  equipments: string[]
  tags: string[]
}

const LogementPage: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [logement, setLogement] = useState<Logement | null>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const navigate = useNavigate()

  useEffect(() => {
    const fetchLogement = (id: string) => {
      const logement = logementsData.find((logement) => logement.id === id)
      setLogement(logement || null)
      setLoading(false)
    }

    if (id) {
      fetchLogement(id)
    }
  }, [id])

  useEffect(() => {
    if (!loading && !logement) {
      navigate("/404", { replace: true })
    }
  }, [loading, logement, navigate])

  useEffect(() => {
    if (logement) {
      document.title = `${logement.title} - Kasa`
    }
  }, [logement])

  if (loading) return <div>Chargement...</div>

  if (!logement) return null

  return (
    <div className="root">
      <div className="main-container">
        <Header />
        <div className="logement-page">
          <Carousel id={logement.id} />
          <div className="logements">
            <div className="logement-header">
              <h1>{logement.title}</h1>
              <div className="logement-location">
                <span>{logement.location}</span>
              </div>
              <div className="logement-tags">
                {logement.tags.map((tag) => (
                  <span key={tag} className="logement-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="logement-footer">
              <div className="logement-host">
                <span>{logement.host.name}</span>
                <img src={logement.host.picture} alt={logement.host.name} />
              </div>
              <div className="logement-rating">
                {[...Array(5)].map((_, index) => (
                  <StarIcon
                    className={
                      index < parseInt(logement.rating)
                        ? "star red"
                        : "star grey"
                    }
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="logement-dropdowns">
            <Dropdown title="Description" description={logement.description} />
            <Dropdown
              title="Équipements"
              description={
                <ul>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              }
            />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default LogementPage

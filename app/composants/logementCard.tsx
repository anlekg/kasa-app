import React from "react"
import { useNavigate } from "react-router-dom"
import "~/assets/LogementCard.scss"

type LogementProps = {
  id: string
  title: string
  cover: string
}

const LogementCard: React.FC<LogementProps> = ({ id, title, cover }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/logement/${id}`)
  }

  return (
    <div className="logement-card" onClick={handleClick}>
      <img src={cover} alt={title} />

      <div className="card-title">{title}</div>
    </div>
  )
}

export default LogementCard

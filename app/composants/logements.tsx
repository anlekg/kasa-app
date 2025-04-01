import React, { useEffect, useState } from "react"
import LogementCard from "./logementCard"
import logementsData from "~/assets/logements.json"
import "~/assets/Logements.scss"

type Logement = {
  id: string
  title: string
  cover: string
}

const Logements: React.FC = () => {
  const [logements, setLogements] = useState<Logement[]>(logementsData)

  return (
    <div className="logements-grid">
      {logements.map((logement) => (
        <LogementCard
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
        />
      ))}
    </div>
  )
}

export default Logements

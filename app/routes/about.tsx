import type { Route } from "./+types/home"
import { Header } from "~/composants/header"
import { Footer } from "~/composants/footer"
import { Banner } from "~/composants/Banner"
import banner from "~/images/about-banner.jpg"
import Dropdown from "~/composants/Dropdown"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "A Propos - Kasa" },
    { name: "description", content: "About Kasa" },
  ]
}

export default function About() {
  return (
    <div className="root">
      <div className="main-container">
        <Header />
        <Banner imageSrc={banner} text="" />
        <Dropdown
          title="Fiabilité"
          description="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Dropdown
          title="Respect"
          description="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Service"
          description="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        />
        <Dropdown
          title="Sécurité"
          description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

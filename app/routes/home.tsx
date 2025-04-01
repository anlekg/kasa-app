import type { Route } from "./+types/home"
import { Header } from "~/composants/header"
import { Footer } from "~/composants/footer"
import Logements from "~/composants/logements"
import { Banner } from "~/composants/Banner"
import banner from "~/images/home-banner.jpg"

export function meta({}: Route.MetaArgs) {
  return [{ title: "Kasa" }, { name: "description", content: "Kasa Web App" }]
}

export default function Home() {
  return (
    <div className="root">
      <div className="main-container">
        <Header />
        <Banner imageSrc={banner} text="Chez vous, partout et ailleurs" />
        <Logements />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

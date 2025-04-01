import type { Route } from "./+types/home"
import { Header } from "~/composants/header"
import { Footer } from "~/composants/footer"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "404 - Kasa" },
    { name: "description", content: "Error 404" },
  ]
}

export default function Error() {
  return (
    <div className="root">
      <div className="main-container">
        <Header />
        <div className="error-container">
          <span className="error-title">404</span>
          <p className="error-text">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <a href="/" className="error-link">
            Retourner sur la page d'accueil
          </a>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

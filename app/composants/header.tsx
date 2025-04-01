import Logo from "~/images/logo.svg"
import "~/assets/Header.scss"

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Logo className="logo-icon" />
      </div>
      <nav className="nav">
        <a href="/" className="nav-link">
          Accueil
        </a>
        <a href="/about" className="nav-link">
          À Propos
        </a>
      </nav>
    </header>
  )
}

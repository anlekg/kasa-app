import Logo from "~/images/logo.svg"
import "~/assets/Footer.scss"

export function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <Logo className="footer-logo-icon" />
      </div>
      <div className="legal">© 2024 Kasa. All rights reserved</div>
    </footer>
  )
}

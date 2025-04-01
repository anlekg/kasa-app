import React, { useState } from "react"
import "~/assets/Dropdown.scss"
import ArrowUp from "~/images/chevron-up-solid.svg"

type DropdownProps = {
  title: string
  description: React.ReactNode
}

const Dropdown: React.FC<DropdownProps> = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown-container">
      <div className="dropdown-header" onClick={toggleDropdown}>
        <span className="dropdown-title">{title}</span>
        <span className={`dropdown-arrow ${isOpen ? "open" : ""}`}>
          {<ArrowUp />}
        </span>
      </div>
      <div
        className="dropdown-content"
        style={{ maxHeight: isOpen ? "200px" : "0px" }}
      >
        <div className="dropdown-description">{description}</div>
      </div>
    </div>
  )
}

export default Dropdown

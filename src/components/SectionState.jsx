import { useState } from 'react'

export function useSectionState() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [activeSection, setActiveSection] = useState(0)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  return {
    showNavbar,
    setShowNavbar,
    activeSection,
    setActiveSection,
    mobileMenuOpen,
    setMobileMenuOpen,
    selectedImage,
    setSelectedImage,
  }
}

import React from 'react'
import Link from 'next/link'

const DesktopMenu = () => {
  return (
    <div className="desktop-menu">
      <Link href="/why-us"><p className="desktop-menu-item">Why us?</p></Link>
      <Link href="/our-works"> <p className="desktop-menu-item" >Our Works</p></Link>
      <Link href="/our-network"><p className="desktop-menu-item" >Our Network</p></Link>
      <Link href="/contacts"><p className="desktop-menu-item">Contacts</p></Link>
    </div>
  )
}

export default DesktopMenu

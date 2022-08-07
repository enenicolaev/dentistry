import React from 'react'
import { NavLink } from 'react-router-dom'

interface LinkProps {
  href: string
  activeStyle?: React.CSSProperties
  children: React.ReactNode
}

export const Link: React.FC<LinkProps> = ({children, href, activeStyle}) => {
  return (
    <NavLink
      to={href}
      style={({isActive}) => (isActive && activeStyle) ? activeStyle : {}}
    >
      {children}
    </NavLink>
  )
}

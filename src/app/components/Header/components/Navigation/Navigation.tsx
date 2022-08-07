import React from 'react'
import { AppRoutes, routesView } from '../../../../types/routes/routes'
import { Link } from '../../../../ui/Link/Link'
import { Text } from '../../../../ui/Text/Text'
import styles from './Navigation.module.scss'

export const Navigation: React.FC = () => {
  return (
    <nav className={styles.nav}>
      {Object.values(AppRoutes).map((route, i) => (
        <Link key={i} href={route}>
          <Text color='ocean-blue'>{routesView[route]}</Text>
        </Link>
      ))}
    </nav>
  )
}

import React, {ReactNode} from 'react'
import styles from './PageContainer.module.scss'

interface PageContainerProps {
  children: {
    header: ReactNode
    content: ReactNode
  }
}

export const PageContainer: React.FC<PageContainerProps> = ({children}) => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.container}>
        {children.header}
        <main className={styles.content}>{children.content}</main>
      </div>
    </div>
  )
}

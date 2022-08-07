import React from 'react'
import { Header } from '../../components/Header/Header'
import { PageContainer } from '../../ui/PageContainer/PageContainer'
import {Text} from '../../ui/Text/Text'

export const PageTwo: React.FC = () => {
  return (
    <PageContainer>
      {{
        header: <Header />,
        content: <Text color='red' fs='40px'>Page two</Text>
      }}
    </PageContainer>
  )
}

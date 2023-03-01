import React from 'react'
import { HighlightCard } from '../../components'
import {
  ContainerView,
  HeaderView,
  Photo,
  User,
  UserGreeting,
  UserWrapper,
  UserInfo,
  UserName,
  Icon,
  DashboardHightlightCards
} from './styles'

export const Dashboard: React.FunctionComponent = () => {
  return (
    <ContainerView>
      <HeaderView>
          <UserWrapper>
            <UserInfo>
              <Photo 
                source={{ uri: 'https://avatars.githubusercontent.com/u/60861927?v=4' }} 
              />
              <User>
                <UserGreeting>Olá</UserGreeting>
                <UserName>Edgar Silva</UserName>
              </User>
            </UserInfo>
            <Icon name="power" />
          </UserWrapper>
      </HeaderView>
      <DashboardHightlightCards>
        <HighlightCard
          type="up"
          title='Entradas'
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </DashboardHightlightCards>
    </ContainerView>
  )
}

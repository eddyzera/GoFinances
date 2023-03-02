import React from 'react'
import { HighlightCard, TransactionCard,  TransactionCardData } from '../../components'
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
  DashboardHightlightCards,
  DashboardTransactions,
  DashboardTransactionsTitle,
  DashboardTransactionsListFlatList
} from './styles'

export interface DataListProps extends TransactionCardData {
  id: string
}

export const Dashboard: React.FunctionComponent = () => {
  const data = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de site',
      amount: 'R$ 12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '13/04/2020'
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      category: { name: 'Alimentação', icon: 'coffee' },
      date: '10/04/2020'
    }
  ] as Array<DataListProps>
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
      <DashboardTransactions>
        <DashboardTransactionsTitle>Listagem</DashboardTransactionsTitle>
        <DashboardTransactionsListFlatList 
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </DashboardTransactions>
    </ContainerView>
  )
}

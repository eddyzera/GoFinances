import React from 'react'
import { Text } from 'react-native'
import {
  TransactionCardContainerView,
  TransactionCardTitleText,
  TransactionCardAmountTitleText,
  TransactionCardFooterView,
  TransactionCardCategoryView,
  TransactionCardIcon,
  TransactionCardCategoryNameText
} from './styles'

export const TransactionCard: React.FunctionComponent = () => {
  return (
    <TransactionCardContainerView>
      <TransactionCardTitleText>Desenvolvimento de site</TransactionCardTitleText>
      <TransactionCardAmountTitleText>R$ 12.000,00</TransactionCardAmountTitleText>
      <TransactionCardFooterView>
        <TransactionCardCategoryView>
          <TransactionCardIcon name="dollar-sign" />
          <TransactionCardCategoryNameText>Vendas</TransactionCardCategoryNameText>
        </TransactionCardCategoryView>
        
      </TransactionCardFooterView>
    </TransactionCardContainerView>
  )
}
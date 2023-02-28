import React from 'react'
import {
  CardAmountText,
  CardContainerView,
  CardFooterView,
  CardHeaderView,
  CardIcon,
  CardLastTransaction,
  CardTitleText
} from './styles'

export const HighlightCard: React.FunctionComponent = () => {
  return (
    <CardContainerView>
      <CardHeaderView>
        <CardTitleText>Entradas</CardTitleText>
        <CardIcon name="arrow-up-circle" />
      </CardHeaderView>
      <CardFooterView>
        <CardAmountText>R$ 17.400,00</CardAmountText>
        <CardLastTransaction>Última entrada dia 13 de abril</CardLastTransaction>
      </CardFooterView>
    </CardContainerView>
  )
}
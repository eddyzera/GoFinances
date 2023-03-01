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

interface HighlightCardProps {
  title: string
  amount: string
  lastTransaction: string
  type: 'up' | 'down' | 'total'
}

export const HighlightCard: React.FunctionComponent<HighlightCardProps> = ({
  title,
  amount,
  lastTransaction,
  type
}) => {
  const icon = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle',
    total: 'dollar-sign'
  }
  return (
    <CardContainerView type={type}>
      <CardHeaderView>
        <CardTitleText type={type}>{title}</CardTitleText>
        <CardIcon name={icon[type]} type={type} />
      </CardHeaderView>
      <CardFooterView>
        <CardAmountText type={type}>{amount}</CardAmountText>
        <CardLastTransaction type={type}>{lastTransaction}</CardLastTransaction>
      </CardFooterView>
    </CardContainerView>
  )
}
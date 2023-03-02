import React from 'react'
import { Text } from 'react-native'
import {
  TransactionCardContainerView,
  TransactionCardTitleText,
  TransactionCardAmountTitleText,
  TransactionCardFooterView,
  TransactionCardCategoryView,
  TransactionCardIcon,
  TransactionCardCategoryNameText,
  TransactionCardDateText
} from './styles'

type CategoryProps = {
  name: string
  icon: string
}

interface TransactionCardProps {
  title: string
  amount: string
  category: CategoryProps
  date: string
}

export const TransactionCard: React.FunctionComponent<TransactionCardProps> = ({
  title,
  amount,
  category,
  date
}) => {
  return (
    <TransactionCardContainerView>
      <TransactionCardTitleText>{title}e</TransactionCardTitleText>
      <TransactionCardAmountTitleText>{amount}</TransactionCardAmountTitleText>
      <TransactionCardFooterView>
        <TransactionCardCategoryView>
          <TransactionCardIcon name="dollar-sign" />
          <TransactionCardCategoryNameText>{category.name}</TransactionCardCategoryNameText>
        </TransactionCardCategoryView>
        <TransactionCardDateText>{date}</TransactionCardDateText>
      </TransactionCardFooterView>
    </TransactionCardContainerView>
  )
}
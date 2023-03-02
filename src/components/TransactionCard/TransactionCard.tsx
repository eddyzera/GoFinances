import React from 'react'
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
  data: {
    title: string
    amount: string
    category: CategoryProps
    date: string
  }
}

export const TransactionCard: React.FunctionComponent<TransactionCardProps> = ({
  data
}) => {
  return (
    <TransactionCardContainerView>
      <TransactionCardTitleText>{data.title}e</TransactionCardTitleText>
      <TransactionCardAmountTitleText>{data.amount}</TransactionCardAmountTitleText>
      <TransactionCardFooterView>
        <TransactionCardCategoryView>
          <TransactionCardIcon name="dollar-sign" />
          <TransactionCardCategoryNameText>{data.category.name}</TransactionCardCategoryNameText>
        </TransactionCardCategoryView>
        <TransactionCardDateText>{data.date}</TransactionCardDateText>
      </TransactionCardFooterView>
    </TransactionCardContainerView>
  )
}
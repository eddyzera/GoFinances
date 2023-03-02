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

export interface TransactionCardData {
  type: 'positive' | 'negative'
  title: string
  amount: string
  category: CategoryProps
  date: string
}
interface TransactionCardProps {
  data: TransactionCardData
}

export const TransactionCard: React.FunctionComponent<TransactionCardProps> = ({
  data
}) => {
  return (
    <TransactionCardContainerView>
      <TransactionCardTitleText>{data.title}e</TransactionCardTitleText>
      <TransactionCardAmountTitleText type={data.type}>
        { data.type === 'negative' && '- ' }
        {data.amount}
      </TransactionCardAmountTitleText>
      <TransactionCardFooterView>
        <TransactionCardCategoryView>
          <TransactionCardIcon name={data.category.icon} />
          <TransactionCardCategoryNameText>{data.category.name}</TransactionCardCategoryNameText>
        </TransactionCardCategoryView>
        <TransactionCardDateText>{data.date}</TransactionCardDateText>
      </TransactionCardFooterView>
    </TransactionCardContainerView>
  )
}
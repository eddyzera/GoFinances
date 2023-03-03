import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import {
  TransactionTypeContainerTouchableOpacity,
  TransactionTypeIcon,
  TransactionTypeTitle
} from './styles'

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  title: string,
  type: 'up' | 'down',
  isActive: boolean
}

export const TransactionTypeButton: React.FunctionComponent<TransactionTypeButtonProps> = ({
  title,
  type,
  isActive,
  ...props
}) => {

  const icons = {
    up: 'arrow-up-circle',
    down: 'arrow-down-circle'
  }

  return (
    <TransactionTypeContainerTouchableOpacity 
      {...props}
      isActive={isActive}
      type={type}
    >
      <TransactionTypeIcon name={icons[type]} type={type} />
      <TransactionTypeTitle>{title}</TransactionTypeTitle>
    </TransactionTypeContainerTouchableOpacity>
  )
}
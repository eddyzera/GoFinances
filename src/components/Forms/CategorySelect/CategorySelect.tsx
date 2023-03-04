import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import {
  CategorySelectContainerView,
  CategorySelectIcon,
  CategorySelectTitleText
} from './styles'

interface CategorySelectProps {
  title: string
  onShowModal: () => void
}

export const CategorySelect: React.FunctionComponent<CategorySelectProps> = ({
  title,
  onShowModal
}) => {
  return (
    <CategorySelectContainerView onPress={onShowModal}>
      <CategorySelectTitleText>
        { title }
      </CategorySelectTitleText>
      <CategorySelectIcon name="chevron-down" />
    </CategorySelectContainerView>
  )
}
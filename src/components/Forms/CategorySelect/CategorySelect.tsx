import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import {
  CategorySelectContainerView,
  CategorySelectIcon,
  CategorySelectTitleText
} from './styles'

interface CategorySelectProps {
  title: string
}

export const CategorySelect: React.FunctionComponent<CategorySelectProps> = ({
  title,
}) => {
  return (
    <CategorySelectContainerView>
      <CategorySelectTitleText>
        { title }
      </CategorySelectTitleText>
      <CategorySelectIcon name="chevron-down" />
    </CategorySelectContainerView>
  )
}
import React from 'react'
import {
  CategoriesSelectContainerView,
  CategoriesSelectHeaderView,
  CategoriesSelectTitleText,
  CategoryView,
  CategoryIcon,
  CategoryNameText,
  CategorySeparatorView,
  CategoriesSelectFooterView,
  CategoriesSelectButtonTouchable,
  CategoriesSelectButtonText
} from './styles'
import { FlatList } from 'react-native'
import { categories } from '../../utils/categories'

type Category = {
  key: string
  name: string
}

interface CategoriesSelectProps {
  category: Category
  setCategory: (category: Category) => void
  closeSelectCategory: () => void
}

export const CategoriesSelect: React.FunctionComponent = () => {
  return (
    <CategoriesSelectContainerView>
      <CategoriesSelectHeaderView>
        <CategoriesSelectTitleText>
          Categoria
        </CategoriesSelectTitleText>
      </CategoriesSelectHeaderView>
      <FlatList
        data={categories}
        style={{ flex: 1, width: '100%', }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <CategoryView>
            <CategoryIcon name={item.icon} />
            <CategoryNameText>{item.name}</CategoryNameText>
          </CategoryView>
        )}
        ItemSeparatorComponent={() => (<CategorySeparatorView/>) }
      />
      <CategoriesSelectFooterView>
        <CategoriesSelectButtonTouchable>
          <CategoriesSelectButtonText>
            Selecionar
          </CategoriesSelectButtonText>
        </CategoriesSelectButtonTouchable>
      </CategoriesSelectFooterView>
    </CategoriesSelectContainerView>
  )
}
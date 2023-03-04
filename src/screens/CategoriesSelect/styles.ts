import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import styled from 'styled-components/native'

export const CategoriesSelectContainerView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`

export const CategoriesSelectHeaderView = styled.View`
  width: 100%;
  height: ${RFValue(113)}px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`

export const CategoriesSelectTitleText = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`

export const CategoryView = styled.View`
  width: 100%;
  padding: ${RFValue(15)}px;
  flex-direction: row;
  align-items: center;
`

export const CategoryIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  margin-right: 16px;
`

export const CategoryNameText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`

export const CategorySeparatorView = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`

export const CategoriesSelectFooterView = styled.View`
  width: 100%;
  padding: 24px;
`

export const CategoriesSelectButtonTouchable = styled.TouchableOpacity`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 18px;
  border-radius: 5px;
  align-items: center;
`

export const CategoriesSelectButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`
import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

export const TransactionCardContainerView = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  border-radius: 5px;
  padding: 17px 24px;
`

export const TransactionCardTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular}
  font-size: ${RFValue(14)}px;
`

export const TransactionCardAmountTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular}
  font-size: ${RFValue(20)}px;
  margin-top: 2px;
`

export const TransactionCardFooterView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 19px;
`

export const TransactionCardCategoryView = styled.View`
  flex-direction: row;
  align-items: center;
`

export const TransactionCardIcon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
  margin-right: 17px;
`

export const TransactionCardCategoryNameText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`

export const TransactionCardDateText = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`
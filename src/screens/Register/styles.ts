import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const RegisterContainerView = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
`

export const RegisterHeaderView = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 100%;
  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;
`

export const RegisterTitleText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
`
export const RegisterFormView = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
`

export const RegisterFieldsView = styled.View``

export const TransactionTypesView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 8px;
  margin-bottom: 16px; 
`
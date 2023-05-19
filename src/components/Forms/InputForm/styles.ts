import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'

export const ContainerView = styled.View`
  width: 100%;
`

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.attention};
  font-size: ${RFValue(14)}px;
  font-weight: ${({ theme }) => theme.fonts.regular};
  margin: 7px 0;
`

import styled from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const ButtonContainerTouchableOpacity = styled(TouchableOpacity)`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 18px;
  border-radius: 5px;
  align-items: center;
`
export const ButtonLabelText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  background-color: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.shape};
`
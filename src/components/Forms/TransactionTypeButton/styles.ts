import styled, { css } from 'styled-components/native'
import { TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface TransactionTypeIcons {
  type: 'up' | 'down'
}

interface TransactionTypeContainerProps extends TransactionTypeIcons {
  isActive: boolean
}

export const TransactionTypeContainerTouchableOpacity = 
  styled(TouchableOpacity)<TransactionTypeContainerProps>`
  width: 48%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;
  padding: 16px;

  ${({ isActive, type }) => isActive && type === "up" && css`
    background-color: ${({ theme }) => theme.colors.success_light};
    border: none;
  `}

  ${({ isActive, type }) => isActive && type === "down" && css`
    background-color: ${({ theme }) => theme.colors.attention_light};
    border: none;
  `}
`

export const TransactionTypeIcon = styled(Feather)<TransactionTypeIcons>`
  font-size: ${RFValue(24)}px;
  margin-right: 12px;
  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention
  };
`

export const TransactionTypeTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`
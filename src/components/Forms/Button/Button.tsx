import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { ButtonContainerTouchableOpacity, ButtonLabelText } from './styles'

interface ButtonProps extends TouchableOpacityProps {
  label: string
}

export const Button: React.FunctionComponent<ButtonProps> = ({
  label,
  ...props
}) => {
  return (
    <ButtonContainerTouchableOpacity {...props}>
      <ButtonLabelText>
        {label}
      </ButtonLabelText>
    </ButtonContainerTouchableOpacity>
  )
}
import React from 'react'
import { TextInputProps } from 'react-native'
import { InputContainerTextInput } from './styles'

type InputProps = TextInputProps

export const Input: React.FunctionComponent<InputProps> = ({ ...props }) => {
  return (
    <InputContainerTextInput {...props} />
  )
}
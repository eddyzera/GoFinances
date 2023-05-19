import React from 'react'
import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'
import { Input } from '../Input/Inputs'
import { ContainerView, ErrorText } from './styles'

interface Props extends TextInputProps {
  control: Control<any>
  name: string
  error: string
}

export const InputForm: React.FunctionComponent<Props> = ({ control, name, error, ...props }) => {
  return (
    <ContainerView>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value} }) => (
          <Input
            onChangeText={onChange}
            value={value}
            {...props}
          />
        )}
      />
      {error && <ErrorText>{error}</ErrorText>}
    </ContainerView>
  )
}
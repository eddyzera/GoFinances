import React from 'react'
import { Input } from '../Input/Inputs'
import { ContainerView } from './styles'
import { TextInputProps } from 'react-native'
import { Control, Controller } from 'react-hook-form'

interface Props extends TextInputProps {
  control: Control
  name: string
}

export const InputForm: React.FunctionComponent<Props> = ({ control, name, ...props }) => {
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
    </ContainerView>
  )
}
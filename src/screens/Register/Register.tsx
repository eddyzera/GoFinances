import React from 'react'
import {
  RegisterContainerView,
  RegisterFieldsView,
  RegisterFormView,
  RegisterHeaderView,
  RegisterTitleText
} from './styles'
import { Button, Input } from '../../components'

export const Register: React.FunctionComponent = () => {
  return (
    <RegisterContainerView>
      <RegisterHeaderView>
        <RegisterTitleText>Cadastro</RegisterTitleText>
      </RegisterHeaderView>
      <RegisterFormView>
        <RegisterFieldsView>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
        </RegisterFieldsView>
        <Button label="Enviar" />
      </RegisterFormView>
    </RegisterContainerView>
  )
}
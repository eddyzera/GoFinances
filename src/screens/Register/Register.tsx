import React from 'react'
import {
  RegisterContainerView,
  RegisterFormView,
  RegisterHeaderView,
  RegisterTitleText
} from './styles'
import { Input } from '../../components'

export const Register: React.FunctionComponent = () => {
  return (
    <RegisterContainerView>
      <RegisterHeaderView>
        <RegisterTitleText>Cadastro</RegisterTitleText>
      </RegisterHeaderView>
      <RegisterFormView>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
      </RegisterFormView>
    </RegisterContainerView>
  )
}
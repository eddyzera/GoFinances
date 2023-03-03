import React, { useState } from 'react'
import {
  RegisterContainerView,
  RegisterFieldsView,
  RegisterFormView,
  RegisterHeaderView,
  RegisterTitleText,
  TransactionTypesView
} from './styles'
import {
  Button,
  CategorySelect,
  Input,
  TransactionTypeButton
} from '../../components'

export const Register: React.FunctionComponent = () => {

  const [transactionType, setTransactionType] = useState<'up' | 'down'>()

  const handleTransactionTypeSelect = (type: 'up' | 'down') => {
    setTransactionType(type)
  }

  return (
    <RegisterContainerView>
      <RegisterHeaderView>
        <RegisterTitleText>Cadastro</RegisterTitleText>
      </RegisterHeaderView>
      <RegisterFormView>
        <RegisterFieldsView>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />
          <TransactionTypesView>
            <TransactionTypeButton
              type="up"
              title="Entrada"
              onPress={() => handleTransactionTypeSelect('up')}
              isActive={transactionType === "up"}
            />
            <TransactionTypeButton
              type="down"
              title="Saida"
              onPress={() => handleTransactionTypeSelect('down')}
              isActive={transactionType === "down"}
            />
          </TransactionTypesView>
          <CategorySelect title="Categoria" />
        </RegisterFieldsView>
        <Button label="Enviar" />
      </RegisterFormView>
    </RegisterContainerView>
  )
}
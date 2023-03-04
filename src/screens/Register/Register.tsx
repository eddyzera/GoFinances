import React, { useState } from 'react'
import { Modal } from 'react-native'
import { CategoriesSelect } from '..'
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

type Category = {
  key: string
  name: string
}

export const Register: React.FunctionComponent = () => {

  const [transactionType, setTransactionType] = useState<'up' | 'down'>()
  const [category, setCategory] = useState<Category>({
    key: '',
    name: '',
  })
  const [isCaregoryModalOpen, setIsCategoryModalOpen] = useState<boolean>(false)

  const handleShowModalSelectCategory = () => {
    setIsCategoryModalOpen(state => !state)
  }

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
          <CategorySelect
            title="Categoria"
            onShowModal={handleShowModalSelectCategory}
          />
        </RegisterFieldsView>
        <Button label="Enviar"  />
      </RegisterFormView>
      <Modal visible={isCaregoryModalOpen}>
        <CategoriesSelect
          category={category}
          setCategory={setCategory}
          closeSelectCategory={handleShowModalSelectCategory}
        />
      </Modal>
    </RegisterContainerView>
  )
}
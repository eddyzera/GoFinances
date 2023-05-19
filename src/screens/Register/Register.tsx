import React, { useState } from 'react'
import { Modal, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
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
  InputForm,
  TransactionTypeButton
} from '../../components'


type Category = {
  key: string
  name: string
}

interface FormData {
  name: string,
  amount: string
}

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é obrigatorio'),
  amount: Yup.number().typeError('Informe um valor numerico').positive().required()
})

export const Register: React.FunctionComponent = () => {
  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema)
  })
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

  const handleRegister = (form: FormData) => { 
    console.log(form)
  }


  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <RegisterContainerView>
        <RegisterHeaderView>
          <RegisterTitleText>Cadastro</RegisterTitleText>
        </RegisterHeaderView>
        <RegisterFormView>
          <RegisterFieldsView>
            <InputForm name="name"
              control={control}
              placeholder="Nome"
              autoCapitalize="sentences"
              autoCorrect={false}
            />
            <InputForm name="amount"
              control={control}
              placeholder="Preço"
              keyboardType="numeric"
            />
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
          <Button label="Enviar" onPress={handleSubmit(handleRegister)}  />
        </RegisterFormView>
        <Modal visible={isCaregoryModalOpen}>
          <CategoriesSelect
            category={category}
            setCategory={setCategory}
            closeSelectCategory={handleShowModalSelectCategory}
          />
        </Modal>
      </RegisterContainerView>
    </TouchableWithoutFeedback>
  )
}
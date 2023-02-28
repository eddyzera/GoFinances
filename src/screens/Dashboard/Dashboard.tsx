import React from 'react'
import {
  ContainerView,
  HeaderView,
  Photo,
  User,
  UserGreeting,
  UserWrapper,
  UserInfo,
  UserName,
} from './styles'

export const Dashboard: React.FunctionComponent = () => {
  return (
    <ContainerView>
      <HeaderView>
        <UserWrapper>
          <UserInfo>
            <Photo 
              source={{ uri: 'https://avatars.githubusercontent.com/u/60861927?v=4' }} 
            />
            <User>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Edgar Silva</UserName>
            </User>
          </UserInfo>
        </UserWrapper>
      </HeaderView>
    </ContainerView>
  )
}

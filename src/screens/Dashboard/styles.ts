import styled from 'styled-components/native'

export const ViewContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.backgroundColor};
`

export const TitleText = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: purple;
`
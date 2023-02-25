import React from 'react'
import { ThemeProvider } from 'styled-components'
import { Dashboard } from './src/screens'
import { customTheme } from './src/global'

export default function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <Dashboard />
    </ThemeProvider>
  )
}

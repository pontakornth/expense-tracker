import React from 'react'
import { createGlobalStyles } from 'goober/global'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyles`
	html, body {
    min-height: 100%;
		-webkit-tap-highlight-color: ${theme`colors.green.500`};
    ${tw`antialiased bg-blue-100`}
	}
  #root {
    min-height: 100%;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles

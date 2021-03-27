import React from 'react'
import tw, { css } from 'twin.macro'
import {styled} from "goober"
//import { Button, Logo } from './components'

const Main = styled('div')(tw`flex flex-col justify-center h-full gap-y-5`)

const App = () => (
  <main className={css(tw`bg-green-100 h-full w-full`)}>
    <Main>
    <h1 className={css(tw`font-bold text-5xl text-center`)}>Hihi</h1>
    </Main>
  </main>
)

export default App

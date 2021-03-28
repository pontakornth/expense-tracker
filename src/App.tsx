import React from 'react'
import tw, { css } from 'twin.macro'
import {styled} from "goober"
import RecordCard from "./components/RecordCard"
import RecordForm from "./components/RecordForm"

const Container = styled('div')(tw`flex container mx-auto py-8 my-auto flex-col h-full gap-y-5`)

const App = () => (
  <main className={css(tw`bg-green-100 h-full w-full`)}>
    <Container>
      <RecordForm />
      <h1 className={css(tw`font-bold text-5xl text-center`)}>Expense Tracker</h1>
      <RecordCard amount={500} description="Expense" transactionType="expense" />
      <RecordCard amount={500} description="Income" transactionType="income" />
      <RecordCard amount={500} description="Income" transactionType="income" />
      <RecordCard amount={500} description="Income" transactionType="income" />
      <RecordCard amount={500} description="Income" transactionType="income" />
    </Container>
  </main>
)

export default App

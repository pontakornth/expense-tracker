import React from 'react'
import tw, { css } from 'twin.macro'
import {styled} from "goober"
import RecordCard from "./components/RecordCard"

const Container = styled('div')(tw`flex container mx-auto py-8 my-auto flex-col h-full gap-y-5`)
const GroupedInput = styled('div')(tw`mr-4 inline-block`)
const Radio = styled('input')(tw`mr-4`)

const App = () => (
  <main className={css(tw`bg-green-100 h-full w-full`)}>
    <Container>
      <h1 className={css(tw`font-bold text-5xl text-center`)}>Expense Tracker</h1>
      <form className={css(tw`flex flex-row flex-wrap align-baseline rounded shadow-md p-4 bg-white`)}>
        <label className={css(tw`block py-2 w-full md:w-1/2`)}>Transaction Type</label>
        <div className={css(tw`block w-full md:w-1/2 py-2 text-right`)}>
          <GroupedInput>
            <Radio type="radio" name="transactionType" value="expense"/>
            <span className={css(tw`text-red-500`)}>Expense</span>
          </GroupedInput>
          <GroupedInput>
            <Radio type="radio" name="transactionType" value="income"/>
            <span className={css(tw`text-green-500`)}>Income</span>
          </GroupedInput>
        </div>
        <label className={css(tw`block py-2 w-1/2`)}>Amount</label>
        <div className={css(tw`w-full md:w-1/2 py-2 text-right`)}>
          <input name="amount" type="number" className={css(tw`p-2 border rounded`)} />
        </div>
        <label className={css(tw`block py-2 w-full md:w-1/2`)}>Description</label>
        <div className={css(tw`w-full md:w-1/2 py-2 text-right`)}>
          <input name="description" type="text" className={css(tw`p-2 border rounded`)} />
        </div>
        <div className={css(tw`w-full text-center md:text-right w-full py-2`)}>
          <button className={css(tw`p-2 bg-blue-400 rounded shadow-md border hover:bg-blue-300 text-white`)}>
            Add transaction
          </button>
        </div>
      </form>
      <RecordCard amount={500} description="All cafe" transactionType="expense" />
      <RecordCard amount={500} description="Income" transactionType="income" />
      <RecordCard amount={500} description="Income" transactionType="income" />
      <RecordCard amount={500} description="Income" transactionType="income" />
      <RecordCard amount={500} description="Income" transactionType="income" />
    </Container>
  </main>
)

export default App

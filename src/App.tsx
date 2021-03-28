import React, { ChangeEvent, MouseEvent, useReducer } from 'react'
import tw, { css } from 'twin.macro'
import {styled} from "goober"
import RecordCard, { RecordCardProps } from "./components/RecordCard"
import RecordForm from "./components/RecordForm"

const Container = styled('div')(tw`flex container mx-auto py-8 my-auto flex-col h-full gap-y-5`)

interface AppState {
  currentTransactionType: 'expense' | 'income';
  currentAmount: number;
  currentDescription: string;
  transactions: RecordCardProps[]

}

type Action =
  | {type: 'CHANGE_AMOUNT', amount: number}
  | {type: 'CHANGE_TYPE', transcationType: 'expense' | 'income'}
  | {type: 'CHANGE_DESCRIPTION', description: string}
  | {type: 'ADD_TRANSACTION'}

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'CHANGE_AMOUNT':
      return {...state, currentAmount: action.amount}
    case 'CHANGE_DESCRIPTION':
      return {...state, currentDescription: action.description}
    case 'CHANGE_TYPE':
      return {...state, currentTransactionType: action.transcationType}
    case 'ADD_TRANSACTION':
      return {...state, transactions: [...state.transactions, {
        amount: state.currentAmount,
        transactionType: state.currentTransactionType,
        description: state.currentDescription
      }]}
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    currentAmount: 0,
    currentTransactionType: 'income',
    currentDescription: '',
    transactions: []
  })
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_AMOUNT', amount: e.target.value as unknown as number})
  }
  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_DESCRIPTION', description: e.target.value})
  }
  const handleTransactionTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_TYPE', transcationType: e.target.value as unknown as 'income' | 'expense'})
  }
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch({ type: 'ADD_TRANSACTION' })
  }
  return (
  <main className={css(tw`h-full w-full`)}>
    <Container>
      <h1 className={css(tw`font-bold text-5xl text-center`)}>Expense Tracker</h1>
      <RecordForm 
        amount={state.currentAmount}
        handleAmountChange={handleAmountChange}
        transactionType={state.currentTransactionType}
        handleTransactionTypeChange={handleTransactionTypeChange}
        description={state.currentDescription}
        handleDescriptionChange={handleDescriptionChange}
        handleSubmit={handleSubmit}
      />
      {state.transactions.map(t => (
        <RecordCard 
        amount={t.amount} 
        description={t.description} 
        transactionType={t.transactionType}
        key={t}
        />
      ))}
    </Container>
  </main>
  );
}

export default App

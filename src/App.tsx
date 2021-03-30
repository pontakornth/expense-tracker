import React, { ChangeEvent, MouseEvent, useReducer } from 'react'
import tw, { css } from 'twin.macro'
import {styled} from "goober"
import { nanoid } from "nanoid"
import RecordCard, { RecordCardProps } from "./components/RecordCard"
import RecordForm from "./components/RecordForm"

const Container = styled('div')(tw`flex container mx-auto py-8 my-auto flex-col h-full gap-y-5`)

interface AppState {
  currentTransactionType: 'expense' | 'income';
  currentAmount: string;
  currentDescription: string;
  transactions: (RecordCardProps & {id: string})[]

}

type Action =
  | {type: 'CHANGE_AMOUNT', amount: string}
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
        amount: Number.parseFloat(state.currentAmount as unknown as string),
        transactionType: state.currentTransactionType,
        description: state.currentDescription,
        id: nanoid()
      }]}
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, {
    currentAmount: '0',
    currentTransactionType: 'income',
    currentDescription: '',
    transactions: []
  })
  const getBalance = () => {
    return state.transactions.reduce((prev: number, current) => {
      if (current.transactionType == 'expense') {
          return prev - current.amount
      } else {
          return prev + current.amount
      }
    }, 0)
  }
  const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_AMOUNT', amount: e.target.value})
  }
  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_DESCRIPTION', description: e.target.value})
  }
  const handleTransactionTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'CHANGE_TYPE', transcationType: e.target.value as unknown as 'income' | 'expense'})
  }
  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!isNaN(Number.parseFloat(state.currentAmount))) {
      dispatch({ type: 'ADD_TRANSACTION' })
    }
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
      <div className={css(tw`p-4 shadow-md rounded border`)}>
      <p>Balance: { getBalance() }</p>
      </div>
      {state.transactions.map(t => (
        <RecordCard 
        amount={t.amount} 
        description={t.description} 
        transactionType={t.transactionType}
        key={t.id}
        />
      ))}
    </Container>
  </main>
  );
}

export default App

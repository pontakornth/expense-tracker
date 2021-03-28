import React, { ChangeEventHandler, MouseEventHandler } from 'react'
import tw, { css, styled } from 'twin.macro'

const GroupedInput = styled('div')(tw`mr-4 inline-block`)
const Radio = styled('input')(tw`mr-4`)
const FormLabel = styled('label')(tw`block py-2 w-full md:w-1/2`)
const FormInputBox = styled('div')(tw`w-full md:w-1/2 py-2 text-right`)

interface RecordFormProps {
    transactionType: 'expense' | 'income';
    handleTransactionTypeChange: ChangeEventHandler<HTMLInputElement>;
    amount: number;
    handleAmountChange: ChangeEventHandler<HTMLInputElement>;
    description: string;
    handleDescriptionChange: ChangeEventHandler<HTMLInputElement>;
    handleSubmit: MouseEventHandler<HTMLButtonElement>;
}

const RecordForm = (props: RecordFormProps) => {
    return (
      <form className={css(tw`flex flex-row flex-wrap align-baseline rounded shadow-md p-4 bg-white`)}>
        <FormLabel>Transaction Type</FormLabel>
        <FormInputBox>
          <GroupedInput>
            <Radio type="radio" onChange={props.handleTransactionTypeChange} checked={props.transactionType == 'expense'} name="transactionType" value="expense"/>
            <span className={css(tw`text-red-500`)}>Expense</span>
          </GroupedInput>
          <GroupedInput>
            <Radio type="radio" onChange={props.handleTransactionTypeChange} checked={props.transactionType == 'income'} name="transactionType" value="income"/>
            <span className={css(tw`text-green-500`)}>Income</span>
          </GroupedInput>
        </FormInputBox>
        <FormLabel>Amount</FormLabel>
        <FormInputBox>
          <input name="amount" type="number" onChange={props.handleAmountChange} value={props.amount} className={css(tw`p-2 border rounded`)} />
        </FormInputBox>
        <FormLabel>Description</FormLabel>
        <FormInputBox>
          <input name="description" onChange={props.handleDescriptionChange} value={props.description} type="text" className={css(tw`p-2 border rounded`)} />
        </FormInputBox>
        <div className={css(tw`w-full text-center md:text-right w-full py-2`)}>
          <button onClick={props.handleSubmit} className={css(tw`p-2 bg-blue-400 rounded shadow-md border hover:bg-blue-300 text-white`)}>
            Add transaction
          </button>
        </div>
      </form>
    )
}

export default RecordForm
import React from 'react'
import tw, { css } from 'twin.macro'

export interface RecordCardProps {
    amount: number;
    transactionType: 'expense' | 'income';
    description: string;

}

const RecordCard = (props: RecordCardProps) => {
    return (
        <div className={css(tw`border p-8 rounded shadow-md bg-white align-baseline flex-wrap flex`)}>
            <p className={css([tw`font-bold capitalize flex-1`, props.transactionType == 'expense' ? tw`text-red-500` : tw`text-green-500`])}>
                {props.transactionType}
            </p>
            <p className={css(tw`font-bold flex-1 text-black text-right`)}>
                {props.amount}
            </p>
            <p className={css(tw`w-full`)}>
                {props.description}
            </p>
        </div>
    )
}

export default RecordCard;
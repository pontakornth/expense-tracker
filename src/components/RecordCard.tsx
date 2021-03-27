import React from 'react'
import tw, { css } from 'twin.macro'

interface RecordCardProps {
    amount: number;
    transactionType: 'expense' | 'income';
    description: string;

}

const RecordCard = (props: RecordCardProps) => {
    return (
        <div className={css(tw`border rounded bg-white flex`)}>
            <p className={css([tw`font-bold capitalize`, props.transactionType == 'expense' ? tw`text-red-500` : tw`text-green-500`])}>
                {props.transactionType}
            </p>
            <p className={css(tw`font-bold text-black`)}>
                {props.amount}
            </p>
            <p>
                {props.description}
            </p>
        </div>
    )
}

export default RecordCard;
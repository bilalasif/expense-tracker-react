import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ transaction }) => {
    const sign = transaction.amount < 0 ? '-' : '+'
    const amount = transaction.amount
    const { deleteTransaction } = useContext(GlobalContext)
    return (
        <li className={amount < 0 ? "minus" : "plus"}>
            {transaction.text}
            <span>{sign}${Math.abs(amount)}</span>
            <button className="delete-btn" onClick={() => deleteTransaction(transaction.id)}>x</button>
        </li>
    )
}

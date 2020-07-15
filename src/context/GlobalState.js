import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
// Iniitial State

const iniitalState = {
    transactions: [
    ]
}

// Create Context
export const GlobalContext = createContext(iniitalState)
// Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, iniitalState)

    //Actions
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }
    return (
        <GlobalContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
            {children}
        </GlobalContext.Provider>
    )
}
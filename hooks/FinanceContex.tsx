import React, { createContext, ReactNode, useContext, useReducer } from 'react';
import uuid from 'react-native-uuid'
import {
  FinanceAction,
  FinanceContextType,
  FinanceState,
  Transaction,
} from '../types';

// 🔸 Estado inicial
const initialState: FinanceState = {
  transactions: [
    { id: uuid.v4(), type: 'ingreso', description: 'Sueldo', amount: 5000 },
    { id: uuid.v4(), type: 'egreso', description: 'Supermercado', amount: 1200 },
  ],
};

// 🔸 Reducer
const financeReducer = (state: FinanceState, action: FinanceAction): FinanceState => {
  switch (action.type) {
    case 'AGREGAR_TRANSACCION':
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};

interface FinanceProviderProps {
  children: ReactNode;
}

const FinanceContext = createContext<FinanceContextType | null>(null);

// 🔸 Provider
export function FinanceProvider({ children }: FinanceProviderProps) {
  const [state, dispatch] = useReducer(financeReducer, initialState);

  const agregarTransaccion = (tx: Omit<Transaction, 'id'>) => {
    const nuevaTransaccion: Transaction = {
      ...tx,
      id: uuid.v4(),
    };
    dispatch({ type: 'AGREGAR_TRANSACCION', payload: nuevaTransaccion });
  };

  return (
    <FinanceContext.Provider value={{ transactions: state.transactions, agregarTransaccion }
    }>
      {children}
    </FinanceContext.Provider>
  );
};

// 🔸 Hook para usar el contexto de forma segura
export const useFinance = (): FinanceContextType => {
  const context = useContext(FinanceContext);
  if (!context) {
    throw new Error('useFinance debe usarse dentro de <FinanceProvider>');
  }
  return context;
};


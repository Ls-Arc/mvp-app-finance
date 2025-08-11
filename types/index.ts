export type TransactionType = 'ingreso' | 'egreso';

export interface Transaction {
  id: string;
  type: TransactionType;
  description: string;
  amount: number;
}

export interface FinanceState {
  transactions: Transaction[];
}

export type FinanceAction =
  | { type: 'AGREGAR_TRANSACCION' | 'ELIMINAR_TRANSACCION'; payload: Transaction };


export interface FinanceContextType {
  transactions: Transaction[];
  agregarTransaccion: (tx: Omit<Transaction, 'id'>) => void;
}


import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';

interface TransactionsProps {
  id: number;
  title: string;
  type: string;
  category: string;
  amount: number;
  createdAt: string;
}

export function TransactionTable() {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(() => {
    api.get('/transactions')
      .then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions &&
            transactions.map(({
              id,
              title,
              amount,
              category,
              type,
              createdAt
            }) => (
              <tr key={id}>
                <td>{title}</td>
                <td className={type}>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL'
                  }).format(amount)}
                </td>
                <td>{category}</td>
                <td>
                  {new Intl.DateTimeFormat('pt-BR').format(
                    new Date(createdAt)
                  )}
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </Container>
  )
}
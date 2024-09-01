import React, { useEffect, useState } from 'react';
import "../Transaction/Transaction.css";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { toast } from 'react-toastify';

const Transaction = ({ url }) => {
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const response = await axios.get(`${url}/api/transaction/history`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem("token")}`
                    }
                });

                if (response.data.success) {
                    setTransactions(response.data.transactions);
                } else {
                    setError("Failed to fetch transactions.");
                }
            } catch (error) {
                console.error("Error fetching transactions:", error);
                setError("Error fetching transactions.");
            } finally {
                setLoading(false);
            }
        };

        fetchTransactions();
    }, [url]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section className="transaction-history">
            <h1>Payment History</h1>
            <Table bordered className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.length > 0 ? (
                        transactions.map((transaction) => (
                            <tr key={transaction._id}>
                                <td>{new Date(transaction.date).toLocaleDateString()}</td>
                                <td>{transaction.description}</td>
                                <td>{transaction.amount}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="3">No transactions found</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </section>
    );
};

export default Transaction;

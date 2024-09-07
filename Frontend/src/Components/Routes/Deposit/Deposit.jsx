import React, { useState } from 'react';
import "../Deposit/Deposit.css"
import axios from "axios"
import { toast } from 'react-toastify';
import "../../../Responsive.css"

const Deposit = ({ url }) => {
    const [accountNumber, setAccountNumber] = useState('');
    const [depositAmount, setDepositAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Online Transfer');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }

            const response = await axios.post(`${url}/api/transaction/deposit`, {
                accountNumber,
                depositAmount: parseFloat(depositAmount), // Ensure the amount is a number
                paymentMethod,
            }, config);

            if (response.data.success) {
                toast.success("Deposit successful");
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.error("Error during deposit:", error.response ? error.response.data : error.message);
            alert('Deposit failed. Please try again.');
        }
    };

    return (
        <section className="deposit-form">
            <h1>Deposit</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="accountNumber">Account Number:</label>
                    <input
                        type="text"
                        id="accountNumber"
                        placeholder='Enter Account number'
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="depositAmount">Deposit Amount:</label>
                    <input
                        type="number"
                        id="depositAmount"
                        placeholder='Enter Deposit Amount'
                        value={depositAmount}
                        onChange={(e) => setDepositAmount(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method:</label>
                    <select
                        id="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required
                    >
                        <option value="Online Transfer">Online Transfer</option>
                        <option value="Cash">Cash</option>
                        <option value="Cheque">Cheque</option>
                    </select>
                </div>

                <div className="button-container">
                    <button type="submit">Deposit</button>
                </div>

            </form>
        </section>
    );
};

export default Deposit;

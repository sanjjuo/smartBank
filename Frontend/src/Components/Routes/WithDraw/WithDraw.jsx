import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import "../WithDraw/WithDraw.css";
import "../../../Responsive.css"

const Withdraw = ({ url, token }) => {
    const [accountNumber, setAccountNumber] = useState('');
    const [withdrawalAmount, setWithdrawalAmount] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Online Transfer');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Convert the withdrawal amount to a number
        const amount = parseFloat(withdrawalAmount);
        if (isNaN(amount) || amount <= 0) {
            toast.error("Invalid withdrawal amount");
            return;
        }

        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axios.post(`${url}/api/transaction/withdraw`, {
                accountNumber,
                withdrawAmount: amount,
                withdrawDate: new Date().toLocaleDateString(),
                paymentMethod,
            }, config);

            if (response.data.success) {
                toast.success("Money has been withdrawn");
            } else {
                toast.error("Withdrawal failed");
            }
        } catch (error) {
            console.error("Error processing withdrawal:", error);
            toast.error("Withdrawal failed. Please try again.");
        }
    };

    return (
        <section className="withdraw-section">
            <h1>Withdraw Amount</h1>
            <form className="withdraw-form" onSubmit={handleSubmit}>
                {/* Other form fields remain the same */}
                <div className="form-group">
                    <label htmlFor="accountNumber">Account Number:</label>
                    <input
                        type="number"
                        id="accountNumber"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        placeholder='Enter Account Number'
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="withdrawalAmount">Withdrawal Amount:</label>
                    <input
                        type="number"
                        id="withdrawalAmount"
                        value={withdrawalAmount}
                        onChange={(e) => setWithdrawalAmount(e.target.value)}
                        placeholder='Enter Withdrawal Amount'
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
                    <button type="submit">Withdraw</button>
                </div>

            </form>
        </section>
    );
};

export default Withdraw;

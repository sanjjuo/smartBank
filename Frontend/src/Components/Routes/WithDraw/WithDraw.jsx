import React, { useState } from 'react';
import "../WithDraw/WithDraw.css"

const Withdraw = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [accountHolderName, setAccountHolderName] = useState('');
    const [withdrawalAmount, setWithdrawalAmount] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [withdrawalDate, setWithdrawalDate] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Online Transfer');
    const [beneficiaryAccount, setBeneficiaryAccount] = useState('');
    const [referenceNumber, setReferenceNumber] = useState('');
    const [notes, setNotes] = useState('');
    const [securityAnswer, setSecurityAnswer] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <section className="withdraw-section">
            <h1>Withdraw Amount</h1>
            <form className="withdraw-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="accountNumber">Account Number</label>
                    <input
                        type="text"
                        id="accountNumber"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="accountHolderName">Account Holder Name</label>
                    <input
                        type="text"
                        id="accountHolderName"
                        value={accountHolderName}
                        onChange={(e) => setAccountHolderName(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="withdrawalAmount">Withdrawal Amount</label>
                    <input
                        type="number"
                        id="withdrawalAmount"
                        value={withdrawalAmount}
                        onChange={(e) => setWithdrawalAmount(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="withdrawalDate">Withdrawal Date</label>
                    <input
                        type="date"
                        id="withdrawalDate"
                        value={withdrawalDate}
                        onChange={(e) => setWithdrawalDate(e.target.value)}
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="paymentMethod">Payment Method</label>
                    <select
                        id="paymentMethod"
                        value={paymentMethod}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        required
                    >
                        <option value="Online Transfer">Online Transfer</option>
                        <option value="Cash">Cash</option>
                        <option value="Cheque">Cheque</option>
                        {/* Add more payment methods as needed */}
                    </select>
                </div>

                <button type="submit">Withdraw</button>
            </form>
        </section>
    );
};

export default Withdraw;

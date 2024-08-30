import React, { useState } from 'react';
import "../Deposit/Deposit.css"

const Deposit = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [accountHolderName, setAccountHolderName] = useState('');
    const [depositAmount, setDepositAmount] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [depositDate, setDepositDate] = useState('');
    const [paymentMethod, setPaymentMethod] = useState('Online Transfer');
    const [referenceNumber, setReferenceNumber] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
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
                    <label htmlFor="accountHolderName">Account Holder Name:</label>
                    <input
                        type="text"
                        id="accountHolderName"
                        placeholder='Enter Account Holder Name'
                        value={accountHolderName}
                        onChange={(e) => setAccountHolderName(e.target.value)}
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
                    <label htmlFor="currency">Currency:</label>
                    <select
                        id="currency"
                        value={currency}
                        onChange={(e) => setCurrency(e.target.value)}
                        required
                    >
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="INR">INR</option>
                        {/* Add more currency options as needed */}
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="depositDate">Deposit Date:</label>
                    <input
                        type="date"
                        id="depositDate"
                        value={depositDate}
                        onChange={(e) => setDepositDate(e.target.value)}
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

                <div className="form-group">
                    <label htmlFor="referenceNumber">Reference Number (optional):</label>
                    <input
                        type="text"
                        id="referenceNumber"
                        placeholder='Enter Reference Number'
                        value={referenceNumber}
                        onChange={(e) => setReferenceNumber(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="notes">Notes (optional):</label>
                    <textarea
                        rows={4}
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                    ></textarea>
                </div>

                <button type="submit">Deposit</button>
            </form>
        </section>
    );
};

export default Deposit;

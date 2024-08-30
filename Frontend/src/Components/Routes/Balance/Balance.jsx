import React, { useState } from 'react';
import "../Balance/Balance.css"

const Balance = () => {
    const [accountNumber, setAccountNumber] = useState('');
    const [accountType, setAccountType] = useState('Savings');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [pin, setPin] = useState('');

    const handleBalance = () => {
        // Implement balance check functionality
    };

    return (
        <section className="check-balance">
                           <h2>Check Your Balance</h2>
            <div className="account-details">
                <div className="input-group">
                    <label htmlFor="accountNumber">Account Number:</label>
                    <input
                        type="text"
                        id="accountNumber"
                        value={accountNumber}
                        onChange={(e) => setAccountNumber(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="accountType">Account Type:</label>
                    <select
                        id="accountType"
                        value={accountType}
                        onChange={(e) => setAccountType(e.target.value)}
                    >
                        <option value="Savings">Savings</option>
                        <option value="Checking">Checking</option>
                        {/* Add more account types if needed */}
                    </select>
                </div>

                <div className="input-group">
                    <label htmlFor="startDate">Start Date:</label>
                    <input
                        type="date"
                        id="startDate"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="endDate">End Date:</label>
                    <input
                        type="date"
                        id="endDate"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label htmlFor="pin">Account PIN:</label>
                    <input
                        type="password"
                        id="pin"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                    />
                </div>

                <button onClick={handleBalance}>Check Balance</button>
            </div>
        </section>
    );
};

export default Balance;

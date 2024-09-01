import React, { useState } from 'react';
import "../Balance/Balance.css"
import axios from 'axios';

const Balance = ({ url }) => {
    const [accountNumber, setAccountNumber] = useState('');
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState(null);

    const handleBalance = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem("token");
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const response = await axios.post(`${url}/api/transaction/balance`, { accountNumber }, config);

            if (response.data.success) {
                setBalance(response.data.balance);
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            console.error("Error fetching balance:", error);
            setError("Unable to fetch balance. Please try again.");
        }
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

                <button onClick={handleBalance}>Check Balance</button>
                {balance !== null && (
                    <div className="balance-display">
                        <p>Your balance is: <strong>₹{balance}</strong></p>
                    </div>
                )}

                {error && (
                    <div className="error-display">
                        <p>{error}</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Balance;

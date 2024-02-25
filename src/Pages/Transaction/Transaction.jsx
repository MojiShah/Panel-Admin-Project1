import React, { useState } from 'react';
import './Transaction.css';

export default function Transaction() {
    const [customerName, setCustomerName] = useState('');
    const [date, setDate] = useState('');
    const [amount, setAmount] = useState(0);
    const [status, setStatus] = useState('Approved');

    const submitHandler = (event) => {
        event.preventDefault();

        let transactionData = {
            customerName,
            date,
            amount,
            status
        };

        fetch('https://panel-admin-1-default-rtdb.firebaseio.com/transaction.json',
            {
                method: 'POST',
                body: JSON.stringify(transactionData)
            })
            .then(res => console.log('transactionData', res));

        setCustomerName('');
        setDate('');
        setAmount(0);
        setStatus('Approved');

    }

    return (
        <div className='transaction'>
            <form className='transaction-form' onSubmit={submitHandler}>
                <div className='customerName'>
                    <h3>CustomerName: </h3>
                    <input type="text"
                        value={customerName}
                        onChange={e => setCustomerName(e.target.value)}
                    />
                </div>

                <div className="date">
                    <h3>Date: </h3>
                    <input type="date"
                        value={date}
                        onChange={e => setDate(e.target.value)}
                    />
                </div>

                <div className="amount">
                    <h3>Amount: </h3>
                    <input type="number"
                        value={amount}
                        onChange={e => setAmount(e.target.value)}
                    />
                </div>

                <div className="status">
                    <h3>Status: </h3>
                    <select onChange={e => setStatus(e.target.value)}>
                        <option value="Approved">Approved</option>
                        <option value="Declined">Declined</option>
                        <option value="Pending">Pending</option>
                    </select>
                </div>

                <button type="submit" className='submitBtn'>
                    Submit
                </button>

            </form>
        </div>
    )
}

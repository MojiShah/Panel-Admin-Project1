import React, { useEffect, useState } from 'react';
import './SalesForm.css';
import { Monthes } from '../../Data';

export default function SalesForm() {

    const [month, setMonth] = useState('');
    const [sales, setSales] = useState(0);

    useEffect(() => {
        console.log(month);
    }, [month]);

    const SubmitHandler = (e) => {
        e.preventDefault();

        let selesInMonthes = {
            month,
            sales
        }

        fetch('https://panel-admin-1-default-rtdb.firebaseio.com/monthes.json', {
            method: 'POST',
            body: JSON.stringify(selesInMonthes)
        }).
        then(res => console.log(res));
        
    }


    return (
        <div className='SalesForm'>
            <form onSubmit={SubmitHandler} className='form'>

                <select onChange={e => setMonth(e.target.value)}>
                    {Monthes.map(Month => (
                        <option key={Month} value={Month}>
                            {Month}
                        </option>
                    ))}
                </select>

                <input type="text"
                    placeholder='Enter the prefit per month'
                    className='inputStyle'
                    value={sales}
                    onChange={e => setSales(e.target.value)} />

                <button>Submit</button>
            </form>
        </div>
    )
}

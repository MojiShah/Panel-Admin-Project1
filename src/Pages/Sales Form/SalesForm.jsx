import React, { useEffect, useState } from 'react';
import './SalesForm.css';
import { Monthes } from '../../Data';

export default function SalesForm() {

    const [month, setMonth] = useState('');
    const [sales, setSales] = useState('');

    useEffect(() => {
        console.log(month);
    }, [month]);

    const SubmitHandler = (e) => {
        e.preventDefault();


        let selesInMonthes = {
            month,
            sales
        }

        const Response = useFetchPostMethod('https://panel-admin-1-default-rtdb.firebaseio.com/monthes.json', selesInMonthes);

        console.log(Response);
        

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

                <input type="number"
                    placeholder='Enter the prefit per month'
                    className='inputStyle'
                    value={sales}
                    onChange={e => setSales(e.target.value)} />
                {!sales.length &&
                    (<span className='warning'>please enter the sales value</span>)
                }

                {
                    sales.length ?
                        (<button >Submit</button>) 
                        :
                        (<button disabled>Submit</button>)
                }

            </form>
        </div>
    )
}

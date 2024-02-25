import React from 'react';
import './WidgetLgTransaction.css'
import UseGetUsersData from '../../hooks/UseGetUsersData';

export default function WidgetLgTransaction() {

    const selectedTransactions = UseGetUsersData('https://panel-admin-1-default-rtdb.firebaseio.com/transaction.json');

    console.log('selectedTransactions', selectedTransactions);

    const Button = (props) =>
        (<button className={'WidgetLgButton ' + props.type}>{props.type}</button>);


    return (
        <div className='WidgetLgTransaction'>
            <h3 className="WidgetTitle">Latest Transactions</h3>
            <table className="WidgetLgTable">
                <tr className="WidgetLgTr">
                    <th className="WidgetLgTh">Customer Name</th>
                    <th className="WidgetLgTh">Date</th>
                    <th className="WidgetLgTh">Amount</th>
                    <th className="WidgetLgTh">Status</th>
                </tr>
                {
                    selectedTransactions.map((selectedTransaction,index) => (
                        index < 4 && 
                        (
                            <tr className="widgetLgTr" key={selectedTransaction[0]}>
                                <td className="WidgetLgUser">
                                    <img className='WidgetLgUserImg' src="images/Moji3.jpg" alt="Moji" />
                                    <span className="WidgetLgName">{selectedTransaction[1].customerName}</span>
                                </td>

                                <td className="WidgetLgDate">
                                    {selectedTransaction[1].date}
                                </td>

                                <td className='WidgetLgAmount'>
                                    ${selectedTransaction[1].amount}
                                </td>

                                <td className="WidgetLgStatus">
                                    <Button type={selectedTransaction[1].status} />
                                </td>
                            </tr>
                        )
                    ))
                }

            </table>
        </div>
    )
}

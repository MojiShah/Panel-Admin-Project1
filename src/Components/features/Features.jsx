import React from 'react';
import './Features.css';
import { ArrowDownward } from '@mui/icons-material';
import { ArrowUpward } from '@mui/icons-material';

export default function Features(props) {
    return (
        <div className='feature'>

            <div className="feature-title">
                {props.month}
            </div>

            <div className='feature-price'>
                <span className='price'>${props.sales}</span>
                <span className='cost'> {props.sales - 2000} </span>
                <span className='arrow'>
                    {
                        props.sales - 2000 > 0 ?
                            (<ArrowUpward className='greenyellow' sx={{ fontSize: 40 }} />) :
                            (<ArrowDownward className='red' sx={{ fontSize: 40 }} />)
                    }
                </span>
            </div>

            <span className="compare">compared to last month</span>

        </div>
    )
}

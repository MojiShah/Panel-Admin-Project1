import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import ChartSection from '../../../Components/ChartSection/ChartSection';
import { productsSales } from '../../../Data';

export default function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to="/newProduct">
                    <button className="productAddButton">Create</button>
                </Link>
            </div>

            <div className="productTop">
                <div className="productTopLeft">
                    <ChartSection
                        title="Sale In This Month"
                        data={productsSales}
                        dataKey={0.1 * 'sales'}
                        grid
                    />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="/images/laptop/04Acer_Aspire 5 A515-57G_40200.jpg" alt="laptop" className="productInfoImg" />
                        <span className="productName">Acer Aspire 5 A515-57G</span>
                    </div>

                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <div className="productInfoKey">ID:</div>
                            <div className="productInfoValue">132</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Name:</div>
                            <div className="productInfoValue">Acer Aspire 5 A515-57G</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Sales:</div>
                            <div className="productInfoValue">$9000</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">Consent status:</div>
                            <div className="productInfoValue">Yes</div>
                        </div>
                        <div className="productInfoItem">
                            <div className="productInfoKey">In stock:</div>
                            <div className="productInfoValue">NO</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

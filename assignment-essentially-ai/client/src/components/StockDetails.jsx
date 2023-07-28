import React from 'react';
import { StockOutlined } from '@ant-design/icons';
import '../css/StockDetails.css';
const StockDetails = ({ open, high, low, close, volume, stockLogo }) => {
    console.log(open);
    return (
        <div className="stock__details">
            <h1>
                <StockOutlined />
                Stock Details
            </h1>
            <div className="stock__details-head">
                {stockLogo?.length > 0 && (
                    <div className="company-info">
                        <div className="company-img">
                            <img
                                src={stockLogo[0].image}
                                alt={stockLogo[0].name}
                            />
                        </div>
                        <div className="company-details">
                            <div>{stockLogo[0].name}</div>
                            <span>{stockLogo[0].ticker}</span>
                        </div>
                    </div>
                )}
                <div className="stock__details-info">
                    <div className="head">Open</div>
                    <span>{open}</span>
                </div>
                <div className="stock__details-info">
                    <div className="head">High</div>
                    <span className="high">{high}</span>
                </div>
                <div className="stock__details-info">
                    <div className="head">Low</div>
                    <span className="low">{low}</span>
                </div>
                <div className="stock__details-info">
                    <div className="head">Close</div>
                    <span>{close}</span>
                </div>
                <div className="stock__details-info">
                    <div className="head">Volume</div>
                    <span>{volume?.toLocaleString()}</span>
                </div>
            </div>
        </div>
    );
};

export default StockDetails;

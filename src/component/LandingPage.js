import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
    return (
        <div className="container">
            <header className="header">
                <h1>Baton</h1>
                <p>Post-Trade • Redefined</p>
            </header>
            <div className="content">
                <div className="tabs">
                    <div className="tab active">FX</div>
                    <div className="tab">Single Sided Cashflows</div>
                </div>
                <div className="form-section">
                    <div className="form-group">
                        <label htmlFor="number-of-cashflows">NUMBER OF CASHFLOWS:</label>
                        <input type="text" id="number-of-cashflows" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="valid-trade-dates">VALID TRADE DATES:</label>
                        <input type="text" id="valid-trade-dates" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="trading-party">TRADING PARTY:</label>
                        <div className="trading-party-input">
                            <span>TRADING PARTY X</span>
                            <input type="text" id="trading-party" defaultValue="50" />%
                        </div>
                    </div>
                    <button className="generate-button">GENERATE</button>
                </div>
                <div className="sidebar">
                    <div className="sidebar-item active">CASHFLOW COUNT</div>
                    <div className="sidebar-item">COUNTER PARTY</div>
                    <div className="sidebar-item">PRODUCT TYPE</div>
                    <div className="sidebar-item">CURRENCY</div>
                    <div className="sidebar-item">TIMINGS</div>
                    <div className="sidebar-item">SECONDARY CURRENCY</div>
                    <div className="sidebar-item">PRIORITY FLAG</div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage
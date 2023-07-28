import React from 'react';
import '../css/Header.css';
import Phone from '../img/phone.png';
import Pads from '../img/pads.png';
import Stock_up_b from '../img/stock_up_b.png';
import Stock_up_y from '../img/stock_up_y.png';

const Header = () => {
    return (
        <div className="header" data-scroll-section>
            <div className="header-info">
                <h1 data-scroll data-scroll-speed="1.5">
                    Get Stock Data
                    <br />
                    at your fingertips.
                </h1>
                <p data-scroll data-scroll-speed="1">
                    The stock data is provided by polygon free tier api. A stock
                    exchange is an exchange (or bourse) where stockbrokers and
                    traders can buy and sell shares (equity stock), bonds, and
                    other securities.
                </p>
                <div
                    data-scroll
                    data-scroll-speed="0.8"
                    className="header__buttons"
                >
                    <button className="btn-white">
                        Scroll to get stocks info →
                    </button>
                    <a href="https://github.com/ayush1337" className="btn-blue">
                        Github →
                    </a>
                </div>
            </div>

            <div className="header-img">
                <img
                    data-scroll
                    data-scroll-speed="2"
                    src={Phone}
                    alt="phone"
                    className="phone"
                />
                <img
                    data-scroll
                    data-scroll-speed="1.5"
                    src={Pads}
                    alt="pads"
                    className="pads"
                />
                <img src={Stock_up_b} alt="cursor" className="stock_up_b" />
                <img src={Stock_up_y} alt="cursor" className="stock_up_y" />
            </div>
        </div>
    );
};

export default Header;

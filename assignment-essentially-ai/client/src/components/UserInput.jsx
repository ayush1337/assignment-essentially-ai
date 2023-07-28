import React, { useState } from 'react';
import { DatePicker, Form, Button, Input, Spin } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import axios from 'axios';
import LoadingSpinner from './LoadingSpinner';
import loadingState from '../utils/loadingState';
import StockDetails from './StockDetails';
import LoadStockSkeleton from './LoadStockSkeleton';
import ErrorStocks from './ErrorStocks';
import '../css/UserInput.css';
import Chartup from '../img/chart-up.png';

dayjs.extend(customParseFormat);

const dateConfig = {
    rules: [
        {
            type: 'object',
            required: true,
            message: 'Please select date!',
        },
    ],
};

const disabledDate = (currentDate) => {
    return (
        currentDate &&
        (currentDate >= dayjs().endOf('day') ||
            currentDate.isSame(dayjs(), 'day'))
    );
};

const UserInput = () => {
    const [loading, setLoading] = useState(loadingState.IDLE);
    const [stockData, setStockData] = useState(null);
    const [stockLogo, setStockLogo] = useState(null);
    const [form] = Form.useForm();

    const resetForm = () => {
        form.resetFields();
        setStockData(() => null);
        setLoading(() => loadingState.IDLE);
    };
    const onFinish = async (values) => {
        try {
            setLoading(loadingState.LOADING);

            const requestBody = {
                date: values.date.format('YYYY-MM-DD'),
                symbol: values.symbol.toUpperCase(),
            };

            const stockResponse = await axios.post(
                'http://localhost:5000/api/fetchStockData',
                requestBody
            );
            const stockLogo = await axios.get(
                `https://api.api-ninjas.com/v1/logo?ticker=${requestBody.symbol}`,
                {
                    headers: {
                        'X-Api-Key': 'ZnCZc0cWen8w7VezgUUXcw==mBoi9vbqCcVVamhE',
                    },
                }
            );
            setLoading(loadingState.FULFILLED);
            form.resetFields();
            setStockData(() => null);
            setStockLogo(() => stockLogo.data);
            setStockData(() => stockResponse.data);
        } catch (err) {
            setLoading(loadingState.ERROR);
        }
    };
    console.log(loading);
    return (
        <div className="user__input" data-scroll-section>
            <div className="user__input-head">
                <div className="user__input-img">
                    <img src={Chartup} alt="Chartup" />
                </div>
                <div className="user__input-head-info">
                    <h1>Stock Information.</h1>
                    <p>
                        api provided by
                        <a href="https://polygon.io/">polygon.io</a>
                    </p>
                </div>
            </div>
            <Spin
                spinning={loading === loadingState.LOADING ? true : false}
                indicator={<LoadingSpinner />}
            >
                <Form
                    name="basic"
                    form={form}
                    layout="vertical"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={onFinish}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Stock Symbol"
                        name="symbol"
                        rules={[
                            {
                                required: true,
                                message: 'Please enter stock symbol',
                            },
                        ]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="date" label="Date" {...dateConfig}>
                        <DatePicker
                            disabledDate={disabledDate}
                            initialValues={null}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                        <Button htmlType="button" onClick={resetForm}>
                            Reset
                        </Button>
                    </Form.Item>
                </Form>
            </Spin>

            {loading === loadingState.LOADING && <LoadStockSkeleton />}
            {loading === loadingState.ERROR && <ErrorStocks />}
            {loading === loadingState.FULFILLED && stockData && (
                <>
                    <div className="line"></div>

                    <StockDetails {...stockData} stockLogo={stockLogo} />
                </>
            )}
        </div>
    );
};
export default UserInput;

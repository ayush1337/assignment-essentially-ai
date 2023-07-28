import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';

const LoadingSpinner = () => {
    return (
        <LoadingOutlined
            style={{
                fontSize: 24,
            }}
            spin
        />
    );
};

export default LoadingSpinner;

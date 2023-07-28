import React from 'react';
import { Skeleton } from 'antd';
const LoadStockSkeleton = () => {
    return <Skeleton active={true} paragraph={{ rows: 4 }} />;
};

export default LoadStockSkeleton;

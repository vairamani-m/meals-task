import React from 'react'
import { Spin } from 'antd';

const Loader = () => {
  return (
        <Spin tip="Loading" size="large">
            <div className='p-5' />
        </Spin>
  )
}

export default Loader
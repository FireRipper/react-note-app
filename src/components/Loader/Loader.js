import React from 'react'
import { Spin } from 'antd'

export const Loader = () => (
    <div>
        <Spin size='large' tip='Загрузка...' style={{textAlign: 'center' }} />
    </div>
)

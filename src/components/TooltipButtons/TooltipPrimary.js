import React from 'react'
import { Button, Icon, Tooltip } from 'antd'

export const TooltipPrimary = (textTooltip, clsButton, funcClickBtn) => {
    return (
        <Tooltip placement='left' title={`Редактировать ${textTooltip}`}>
            <Button
                size='small'
                type='primary'
                className={clsButton}
                onClick={funcClickBtn}
            >
                <Icon type='edit' theme='filled' />
            </Button>
        </Tooltip>
    )
}

import React from 'react'
import { Button, Icon, Tooltip } from 'antd'

export const TooltipDanger = (textTooltip, clsButton, funcClickBtn) => {
    return (
        <Tooltip placement='rightTop' title={`Удалить ${textTooltip}`}>
            <Button
                size='small'
                type='danger'
                className={clsButton}
                onClick={funcClickBtn}
            >
                <Icon type='delete' theme='filled' />
            </Button>
        </Tooltip>
    )
}

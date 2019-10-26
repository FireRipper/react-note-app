import React from 'react'
import { Button, Icon, Tooltip } from 'antd'

export const TooltipPrimary = (textTooltip, clsButton, funcClickBtn) => {
    const TooltipPrimary = {
        placeTooltip: 'left' || 'top',
        titleTooltip: `Редактировать ${textTooltip}`,
        primaryBtn: {
            type: 'primary',
            clsButton: clsButton || '',
        },
        primaryIcon: {
            typeIcon: 'edit',
            themeIcon: 'filled'
        }
    }

    return (
        <Tooltip placement={TooltipPrimary.placeTooltip} title={TooltipPrimary.titleTooltip}>
            <Button
                size='small'
                type={TooltipPrimary.primaryBtn.type}
                className={TooltipPrimary.primaryBtn.clsButton}
                onClick={funcClickBtn}
            >
                <Icon type={TooltipPrimary.primaryIcon.typeIcon} theme={TooltipPrimary.primaryIcon.themeIcon} />
            </Button>
        </Tooltip>
    )
}

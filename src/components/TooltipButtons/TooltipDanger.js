import React from 'react'
import { Button, Icon, Tooltip } from 'antd'

export const TooltipDanger = (textTooltip, clsButton, funcClickBtn) => {
    const TooltipDanger = {
        placeTooltip: 'rightTop' || 'left',
        titleTooltip: `Удалить ${textTooltip}`,
        dangerBtn: {
            type: 'danger',
            clsButton: clsButton || '',
        },
        dangerIcon: {
            typeIcon: 'delete',
            themeIcon: 'filled'
        }
    }

    return (
        <Tooltip placement={TooltipDanger.placeTooltip} title={TooltipDanger.titleTooltip}>
            <Button
                size='small'
                type={TooltipDanger.dangerBtn.type}
                className={TooltipDanger.dangerBtn.clsButton}
                onClick={funcClickBtn}
            >
                <Icon type={TooltipDanger.dangerIcon.typeIcon} theme={TooltipDanger.dangerIcon.themeIcon} />
            </Button>
        </Tooltip>
    )
}

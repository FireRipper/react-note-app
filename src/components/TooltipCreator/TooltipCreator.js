import React from 'react'
import { Button, Icon, Tooltip } from 'antd'

export const TooltipCreator = (titleTooltip, typeButton, typeIcon, placeTooltip, themeIcon, clsButton, funcClickBtn) =>
    <Tooltip placement={placeTooltip} title={titleTooltip}>
        <Button
            type={typeButton}
            size='small'
            onClick={funcClickBtn}
            className={clsButton}
        >
            <Icon type={typeIcon} theme={themeIcon} />
        </Button>
    </Tooltip>




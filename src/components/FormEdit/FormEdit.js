import React from 'react'
import { Icon, Input } from 'antd'

export const FormEdit = (/*{idNote = '-Ls1zknjbXaeOgZUdcwN', titleNote = 'Сходить на концерт 18.11.19 Stereo Plaza 19.00'}*/) => (
    <form>
        <Input placeholder="Введите название заметки..."
               allowClear
               prefix={<Icon type="pushpin" style={{ color: 'rgba(0,0,0,.25)' }} />}
             /*  id={idNote}
               defaultValue={titleNote}*/
        />
    </form>
)

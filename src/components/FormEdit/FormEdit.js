import React from 'react'
import { Form, Input } from 'antd'

export const FormEdit = Form.create({name: 'form_edit'}) (
    // eslint-disable-next-line
    class extends React.Component{
        render() {
            const {form} = this.props
            const {getFieldDecorator} = form

            return(
                <Form layout='vertical'>
                    <Form.Item label="Заметка">
                        {getFieldDecorator('title', {
                            rules: [{ required: true, message: 'Данное поле нужно заполнить' }],
                        })(<Input />)}
                    </Form.Item>
                </Form>
            )
        }
    }
)

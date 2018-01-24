import React from 'react'
import { Form, Input, Button, Steps, Menu, Select, Cascader, Checkbox, Upload } from 'antd'
import cascaderOptions from '../../../../../utils/CascaderOption'
import QueueAnim from 'rc-queue-anim';
import {Link} from 'react-router'

const Step = Steps.Step;
const FormItem = Form.Item;
const Search = Input.Search;
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const { TextArea } = Input;

class Step2 extends React.Component {

    renderTypeA() {
        const formItemLayout = {
            labelCol: {
                sm: { span: 4 },
            },
            wrapperCol: {
                sm: { span: 10 },
            },
        };
        const formStyle = {
            'padding': '20px',
        }
        const inputStyle = {
            'display': 'inline-block',
            'width': '50px'
        }
        const plainOptions = [
            { label: '爱上古迹', value: '爱上古迹' },
            { label: '逐海踏浪', value: '逐海踏浪' },
            { label: '度假山庄', value: '度假山庄' },
            { label: '激情漂流', value: '激情漂流' },
            { label: '城市观光', value: '城市观光' },
            { label: '乐游山水', value: '乐游山水' },
            { label: '文化追根', value: '文化追根' },
            { label: '水世界', value: '水世界' },
            { label: '冰雪世界', value: '冰雪世界' },
        ];
        const { getFieldDecorator } = this.props.form;
        return (
            <Form style={formStyle}>
                <FormItem {...formItemLayout} label='景点名称'>
                    {
                        getFieldDecorator('resourse', {
                            rule: [{
                                required: true, message: '请输入资源名称搜索'
                            }]
                        })(
                            <Input placeholder='请填写景点名称' />
                            )
                    }

                </FormItem>
                <FormItem {...formItemLayout} label='对应景点'>
                    {
                        getFieldDecorator('resourse', {
                            rule: [{
                                required: true, message: '点击搜索'
                            }]
                        })(
                            <Input placeholder='请输入名称查找相关资源' />
                            )
                    }

                </FormItem>
                <FormItem {...formItemLayout} label='景点级别'>
                    <Select defaultValue="AAAAA" style={{ width: 160 }}>
                        <Option value="AAAAA">AAAAA</Option>
                        <Option value="AAAA">AAAA</Option>
                        <Option value="AAA">AAA</Option>
                        <Option value="AA">AA</Option>
                        <Option value="A">A</Option>
                        <Option value="非A级">非A级</Option>
                    </Select>
                </FormItem>
                <FormItem {...formItemLayout} label='所在景区'>
                    <Cascader options={cascaderOptions} style={{ width: 160 }} placeholder='请选择地区' />
                </FormItem>
                <FormItem {...formItemLayout} label='所在地址'>
                    {
                        getFieldDecorator('address', {
                            rule: [{
                                required: true, message: '点击搜索'
                            }]
                        })(<Input />)
                    }
                </FormItem>
                <FormItem {...formItemLayout} label='联系电话'>
                    {
                        getFieldDecorator('address', {
                            rule: [{
                                required: true, message: '点击搜索'
                            }]
                        })(<Input />)
                    }
                </FormItem>
                <FormItem {...formItemLayout} label='开放时间'>
                    {
                        getFieldDecorator('address', {
                            rule: [{
                                required: true, message: '点击搜索'
                            }]
                        })(<Input />)
                    }
                </FormItem>
                <FormItem {...formItemLayout} wrapperCol={{ span: 12 }} label='旅游主题'>
                    <CheckboxGroup options={plainOptions} />
                </FormItem>
                <FormItem {...formItemLayout} label='预定须知'>
                    {
                        getFieldDecorator('address', {
                            rule: [{
                                required: true, message: '点击搜索'
                            }]
                        })(<TextArea rows={12} />)
                    }
                </FormItem>
                <FormItem {...formItemLayout} label='景点详情'>
                    {
                        getFieldDecorator('address', {
                            rule: [{
                                required: true, message: '点击搜索'
                            }]
                        })(<TextArea rows={12} />)
                    }
                </FormItem>
                <FormItem {...formItemLayout} label='交通指南'>
                    {
                        getFieldDecorator('address', {
                            rule: [{
                                required: true, message: '点击搜索'
                            }]
                        })(<TextArea rows={12} />)
                    }
                </FormItem>
                <FormItem>
                    <Link to='/Step3'>
                        <Button type='primary' style={{'margin-left':'260px'}}>下一步</Button>
                    </Link>
                </FormItem>
            </Form>

            
        )
    }

    render() {
        const menuStyle = {
            "padding": "10px",
            "fontSize": "22px",
            "color": "#303D46"
        },
            stepsStyle = {
                "padding": "60px"
            }
        return (
            <QueueAnim>
                <div key='QueueAnim'>
                    <Menu mode="horizontal" style={menuStyle}>
                        <Menu.Item>产品发布</Menu.Item>
                    </Menu>
                    <Steps current={1} style={stepsStyle}>
                        <Step title="产品类型" />
                        <Step title="产品信息" />
                        <Step title="票类信息" />
                    </Steps>
                    {this.renderTypeA()}
                </div>
            </QueueAnim>

        )
    }
}
export default Form.create()(Step2)
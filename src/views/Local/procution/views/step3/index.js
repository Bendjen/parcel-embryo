import React from 'react'
import { Form, DatePicker, Input, Button, Steps, Menu, Select, Cascader, Checkbox, Upload, Card, Col, Row, Table, Icon } from 'antd'
import cascaderOptions from '../../../../../utils/CascaderOption'
import QueueAnim from 'rc-queue-anim';
import { Link } from 'react-router'
import './index.scss'
const CheckboxGroup = Checkbox.Group;
const { RangePicker } = DatePicker;
const Step = Steps.Step;

class Step2 extends React.Component {
    onTicketClick(){
        confirm('你确定要删除该门票吗？')
    }

    tableRender() {
        const inputStyle = {'width':'80px','textAlign':'center'}
        const dateFormat = 'YYYY-MM-DD'
        const plainOptions = [
            { label: '日', value: 'Sunday' },
            { label: '一', value: 'Monday' },
            { label: '二', value: 'Tuesday' },
            { label: '三', value: 'Wednesday' },
            { label: '四', value: 'Thursday' },
            { label: '五', value: 'Friday' },
            { label: '六', value: 'Saturday' },
          ];
        const columns = [{
            title: '预定时间段（同票类不能重复）',
            dataIndex: 'timeSolt',
            key: 'timeSolt',
            render: (text, record) => (
                <span>
                    <RangePicker format={dateFormat} />
                    <CheckboxGroup options={plainOptions} style={{'width':'260px','marginTop':'20px'}}/>
                </span>
                
            ),
        }, {
            title: '成本价',
            dataIndex: 'stock',
            key: 'stock',
            render: text => (
                <Input value={text} style={inputStyle}/>
            )
        }, {
            title: '成本价',
            dataIndex: 'costPrice',
            key: 'costPrice',
            render: text => (
                <Input value={text} style={inputStyle}/>
            )
        }, {
            title: '建议零售价',
            dataIndex: 'retailPrice',
            key: 'retailPrice',
            render: text => (
                <Input value={text} style={inputStyle}/>
            )
        }, {
            title: '门市价',
            dataIndex: 'rackRate',
            key: 'rackRate',
            render: text => (
                <Input value={text} style={inputStyle}/>
            )
        },{
            title: ' ',
            dataIndex: 'operation',
            key: 'operation',
            render: text => (
                <Icon type="minus-circle" />
            )
        },{
            title: '备注',
            dataIndex: 'remarks',
            key: 'remarks'
        }]


        const data = [{
            key: '1',
            timeSolt: 'John Brown',
            stock: 32,
            costPrice: 'New York No. 1 Lake Park',
            retailPrice: 'New York No. 1 Lake Park',
            rackRate: 'New York No. 1 Lake Park',
            operation:'',
            remarks:'输入-1表示不限'
        }];

        return (
            <Table  columns={columns} dataSource={data} />
        )
    }

    cardRender() {
        const gridStyle = {
            width: '16%',
            textAlign: 'center',
            background: '#fff',
            height: '40px',
            lineHeight: '40px',
            padding:'0',
            margin:'0 5px 10px 0'
        };
        const iconStyle = {
            float : 'right',
            height: '40px',
            lineHeight: '40px',
            fontSize : '16px',
            marginRight: '10px'
        }
        return (
            <Card title="测试分销演出" style={{ background: '#ECECEC' }}>
                <Card.Grid style={gridStyle}>Content<Icon type="close" style={iconStyle} onClick={this.onTicketClick}/></Card.Grid>
                <Card.Grid style={gridStyle}>Content<Icon type="close" style={iconStyle} onClick={this.onTicketClick}/></Card.Grid>
                <Card.Grid style={gridStyle}>Content<Icon type="close" style={iconStyle} onClick={this.onTicketClick}/></Card.Grid>
                <Card.Grid style={gridStyle}>Content<Icon type="close" style={iconStyle} onClick={this.onTicketClick}/></Card.Grid>
                <Card.Grid style={gridStyle}>Content<Icon type="close" style={iconStyle} onClick={this.onTicketClick}/></Card.Grid>
                <Card.Grid style={gridStyle}>Content<Icon type="close" style={iconStyle} onClick={this.onTicketClick}/></Card.Grid>
                <Card.Grid style={gridStyle}>Content<Icon type="close" style={iconStyle} onClick={this.onTicketClick}/></Card.Grid>
            </Card>
        )
    }

    render() {
        const menuStyle = {
            "padding": "10px",
            "fontSize": "22px",
            "color": "#303D46",
        },
            stepsStyle = {
                "padding": "60px"
            }
        return (
            <QueueAnim>
                <div key='QueueAnim'>
                    <Menu mode="horizontal" style={menuStyle}>
                        <Menu.Item>票类信息</Menu.Item>
                    </Menu>
                    <Steps current={2} style={stepsStyle}>
                        <Step title="产品类型" />
                        <Step title="产品信息" />
                        <Step title="票类信息" />
                    </Steps>
                    {this.cardRender()}
                    {this.tableRender()}
                </div>
            </QueueAnim>

        )
    }
}

export default Step2
import React from 'react'
import { Button, Steps, Menu } from 'antd'
import Line from '../../../../../components/Text/Line'
import style from './index.scss'
import QueueAnim from 'rc-queue-anim';
import {Link} from 'react-router'

const Step = Steps.Step;


class TypePicker extends React.Component {
    
    render() {
        const menuStyle = {
            "padding":"10px",
            "fontSize":"22px",
            "color":"#303D46"
        },
        stepsStyle = {
            "padding":"60px"
        }
        return (
            <QueueAnim>
                <div role='container' key='QueueAnim'>
                    <Menu mode="horizontal" style={menuStyle}>    
                        <Menu.Item>产品类型</Menu.Item>
                    </Menu>
                    <Steps current={0} style={stepsStyle}>
                        <Step title="产品类型"/>
                        <Step title="产品信息"/>
                        <Step title="票类信息"/>
                    </Steps>
                    <Line>选择产品类别：</Line> 
                    <div role='typeContainer' className={style.typeContainer}>
                            {_.map([1,2,3,4,5,6,7],(item)=><Link  key={item} to='/Step2'><div className={style[`item${item}`]} type={item} onClick={this.props.onChooseType} ></div></Link>)}
                    </div>
                </div>
            </QueueAnim>      
        )
    }
}


import { connect } from 'react-redux'
import { chooseType } from '../../reducer'

function mapStateToProps(state) { return{} }
    
function mapDispatchToProps(dispatch) {
    return {
        onChooseType: (e) => {              
            dispatch(chooseType(e.currentTarget.getAttribute('type')))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(TypePicker)
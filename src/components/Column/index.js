import React,{PropTypes} from 'react';
import classNames from 'classnames';
import style from './index.scss'
import H1 from '../Text/H1'

import { Rate } from 'antd';

class Column extends React.Component{

    constructor(props){
        super(props)

    }
    static propTypes = {
        imgUrl:PropTypes.string
    }

    static defaultProps = {
        data:{}   
    }

    render(){
        let{imgUrl,title,source,level,progress,href}=this.props.data

        let progressClass = classNames({
            [style.unstart]:progress === '未开始',
            [style.underway]:progress === '进行中',
            [style.finished]:progress === '已完成',
        });
       
        return(
            <div className={style.column}>
                <div role='pic'>
                    <a target='_blank' href={href}>
                        <img src={imgUrl}/>
                    </a>
                </div>
                <div role='info'>
                    <p><a target='_blank' href={href}>{title}</a></p>
                    <p>来源：{source}</p>
                    <p>状态：<span className={progressClass}>{progress}</span></p>
                    <p>级别：<Rate allowHalf disabled defaultValue={level} /></p>    
                </div>
            </div>
        )
    }


}

export default Column
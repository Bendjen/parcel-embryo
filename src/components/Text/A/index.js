import React from 'react';
import style from './index.scss'

class A extends React.Component{
    render(){
        return (
            <a className={style.A}>{this.props.children}</a>
        )
    }
}

export default A
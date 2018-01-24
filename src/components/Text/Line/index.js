import React from 'react';
import style from './index.scss'

class Line extends React.Component{
    render(){
        return (
            <p className={style.Line}>{this.props.children}</p>           
        )
        
    }
}

export default Line
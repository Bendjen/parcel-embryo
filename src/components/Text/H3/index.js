import React from 'react';
import style from './index.scss'

class H3 extends React.Component{
    render(){
        return (
            <div className={style.H3}>{this.props.children}</div>
        )
    }
}

export default H3
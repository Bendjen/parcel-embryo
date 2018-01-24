import React from 'react';
import style from './index.scss'

class H1 extends React.Component{
    render(){
        return (
            <div className={style.H1}>{this.props.children}</div>
        )
    }
}

export default H1
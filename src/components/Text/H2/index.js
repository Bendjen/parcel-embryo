import React from 'react';
import style from './index.scss'

class H2 extends React.Component{
    render(){
        return (
            <div className={style.H2}>{this.props.children}</div>
        )
    }
}

export default H2
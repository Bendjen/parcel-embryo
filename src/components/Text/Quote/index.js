import React from 'react';
import style from './index.scss'

class Quote extends React.Component{
    render(){
        return (
            <p className={style.Quote}>{this.props.children}</p>
        )
    }
}

export default Quote
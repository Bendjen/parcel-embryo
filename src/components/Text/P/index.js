import React from 'react';
import style from './index.scss'

class P extends React.Component{
    render(){
        return (
            <p className={style.P} dangerouslySetInnerHTML={{__html:this.props.children }}></p>
        )
    }
}

export default P
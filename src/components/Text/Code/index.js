import React from 'react';
import classNames from 'classnames';

import style from './index.scss'


class Code extends React.Component{

    static defaultProps = {
        code : 'You can put code here.',
        type : 'js'
    }

   
    render(){
       
        let html;

        if(this.props.type === 'js'){
            html = Prism.highlight(this.props.code, Prism.languages.javascript);
        }else if(this.props.type === 'css'){
            html = Prism.highlight(this.props.code, Prism.languages.css);
        }

        let typeClass = classNames({
            ['language-javascript'] : this.props.type === 'js',
            ['language-css'] : this.props.type === 'css',
        })

        //pre标签也要写入typeClass否则路由切换的时候就会导致显示错误
        let preClass = classNames({
            [style.Code] : true,
            ['language-javascript'] : this.props.type === 'js',     
            ['language-css'] : this.props.type === 'css',
        })

        return (
            <pre className={preClass} > 
                <code className={typeClass} dangerouslySetInnerHTML={{__html:html }}></code>
            </pre>
        )
    }
}

export default Code
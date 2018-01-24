
import style from './index.scss'

import React from 'react';

import { connect } from 'react-redux'


class Header extends React.Component {
    constructor(props) {
        //初始化this,ES6 class没有this
        super(props);

        //初始化state
        this.state = {
            bodyWidth: document.body.clientWidth
        }

        //绑定方法的上下文，否则在调用的时候作用域会混乱
        this.onWindowResize = this.onWindowResize.bind(this)
    }

    static defaultProps = {
        currentIndex: 'home',
    }

    componentDidMount() {
        let that = this;
        window.addEventListener('resize', this.onWindowResize)
        //这里其实有一个BUG，如果是从大模式切换到小模式，是绑定不了这个的，因为这个DOM根本不存在，所以要刷新下
        if(document.querySelector('#icon-menu')){
            document.querySelector('#icon-menu').addEventListener('click',function(e){
                e.stopPropagation();                //取消body的点击事件，以免二次触发
                that.props.onClickToggleIcon()      //特别注意：react的事件通过事件委托在最外层,不用原生的事件的stopPropagation无法清除默认事件，因为e不是当前元素下的
            })
        }
        
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize)   //解绑以解除内存
    }

    onWindowResize() {
        //一定要用setState方法才会触发react的重新渲染
        this.setState({
            bodyWidth: document.body.clientWidth
        })
    }


    render() {
        let bodyWidth = this.state.bodyWidth;
        //bodyWidth >= 900 时渲染
        if (bodyWidth >= 900) {
            return (
                <div className={style.header} role='header'>
                    <div className={style.logo} data-flex='cross:center' role='logo'>
                        <i className='iconfont icon-react'></i>
                        <span>Bendjen</span>
                    </div>
                    <div className={style.tab} data-flex='cross:center' role='tab'>
                        <ul data-flex='main:justify'>
                            <li>
                                <div className={style.searchBox}>
                                    <i className='iconfont  icon-sousuo'></i>
                                    <input type="text" />
                                </div>
                            </li>
                            <li onClick={this.props.onClickTab}>Vendor</li>
                            {/* <li onClick={this.props.onClickTab}>Lab</li>
                            <li onClick={this.props.onClickTab}>Node.js</li> */}
                            <li onClick={this.props.onClickTab}>Issue</li>
                            <li onClick={this.props.onClickTab}>Mark</li>
                            <li onClick={this.props.onClickTab}>Standard</li>
                        </ul>
                    </div>
                </div>
            );

            //bodyWidth < 900 时渲染
        } else if (bodyWidth < 900) {
            return (
                <div className={style.headerShort}>
                    <i id='icon-menu'  className='iconfont icon-menu'></i>
                </div>
            )
        }

    }
}


import {switchTab,toggleMenu} from './reducer'
import {hashHistory} from 'react-router'

function mapStateToProps(state) {
    return {
        currentIndex: state.targetIndex
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onClickTab: (e) => {
            hashHistory.push({pathname:`/${e.currentTarget.innerHTML}/`,query: {}});            
            dispatch(switchTab(e.currentTarget.innerHTML))
        },
        onClickToggleIcon:() => dispatch(toggleMenu())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)



import style from './index.scss'
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import classNames from 'classnames';
import QueueAnim from 'rc-queue-anim';

class Menu extends React.Component {
    constructor(props) {
        //初始化this,ES6 class没有this
        super(props);

        //初始化state
        this.state = {
            bodyWidth: document.body.clientWidth,
            active: !this.props.menuActive

        }

        //绑定方法的上下文，否则在调用的时候作用域会混乱
        this.onClickBody = this.onClickBody.bind(this)
        this.onWindowResize = this.onWindowResize.bind(this)

    }

    static defaultProps = {
        lists: require('@menu/Mark'),

    }

    componentDidMount() {
        window.addEventListener('resize', this.onWindowResize);
        document.querySelector('#content').addEventListener('click', this.onClickBody);
        document.querySelector('#head').addEventListener('click', this.onClickBody);
        //#menu脱离文档流了所以事件绑定，相关冒泡会出错，改为绑定除自身外的其他部分
    }

    //setState生命周期不能写在WillReceiveProps之后会形成死循环
    componentWillReceiveProps() {
        this.setState({
            active: this.props.menuActive   //store更新后再次绑定
        })
    }


    componentWillUnmount() {
        window.removeEventListener('resize', this.onWindowResize)
        document.body.removeEventListener('click', this.onClickBody);
    }


    onClickBody(e) {
        if (this.state.bodyWidth < 900) {   //大屏固定目录，点击无法隐藏掉
            if (this.state.active) {      //如果是要关闭
                this.props.onClickBody()   //这里本来是要用内部事件的，但是外部组件header也会改变是否显示，会导致内外的值不一致，要点击两次才能达到显示/关闭效果
            }

        }
    }
    onWindowResize() {
        //一定要用setState方法才会触发react的重新渲染
        this.setState({
            bodyWidth: document.body.clientWidth
        })
    }

    menuRender() {
        const { lists } = this.props;
        const keys = Object.keys(lists);
        let link = lists['link'] || null;
        let mainLists = _.reject(keys, function (value) { return value === 'link' })
        let that = this;

        return React.Children.map(mainLists, (child, index) => {
            return (
                    <ul key={index}>
                        <h4 data-item={child} onClick={that.props.onClickItem} data-link={link}>{child}</h4>
                        {_.map(lists[child], function (listUrl, listName) {        //二次循环
                            return (<li key={listName} data-url={listUrl} onClick={that.props.onClickDetail}>{listName}</li>)
                        })}
                    </ul>
            )
        })
    }

    tabRender() {
        //bodyWidth >= 900 时渲染
        if (this.state.bodyWidth >= 900) {
            return null;
        } else if (this.state.bodyWidth < 900) {
            return (
                <ul className={style.tab} key={this.state.bodyWidth} id='menuTab'>
                    <li>
                        <div className={style.searchBox}>
                            <i className='iconfont  icon-sousuo'></i>
                            <input type="text" />
                        </div>
                    </li>
                    <h4>导航</h4>
                    <li onClick={this.props.onClickTab}>Vendor</li>
                    <li onClick={this.props.onClickTab}>Lab</li>
                    <li onClick={this.props.onClickTab}>Node.js</li>
                    <li onClick={this.props.onClickTab}>Issue</li>
                    <li onClick={this.props.onClickTab}>Mark</li>
                    <li onClick={this.props.onClickTab}>Standard</li>
                </ul>
            )
        }
    }


    render() {
        let toggleClass = classNames({
            [style.menu]: true,
            [style.menuFixed]: this.state.bodyWidth < 900,
            [style.hide]: !this.state.active,
            [style.show]: this.state.active      //react需要手动脱离文档，而v-if自动包含了这一步
        })

        if (this.state.bodyWidth < 900) {
            return (
                <ReactCSSTransitionGroup component="div" transitionName="menu" transitionEnterTimeout={400} transitionLeaveTimeout={400}>
                    <div className={toggleClass} id='menuLocal' key={this.state.active}>  {/*react与vue不同在于，vue通过v-if来决定何时启动动画，react用key来决定*/}
                        {this.tabRender()}
                        {this.menuRender()}
                    </div>
                </ReactCSSTransitionGroup>
            )
        } else if (this.state.bodyWidth >= 900) {
            {/* >900不需要动画层 */ }
            return (
                <div className={style.menu} id='menuLocal' key={this.state.active}>  {/*react与vue不同在于，vue通过v-if来决定何时启动动画，react用key来决定*/}
                    {this.tabRender()}
                    {this.menuRender()}
                </div>
            )
        }

    }
}


import { hashHistory } from 'react-router';
import { connect } from 'react-redux'
import { turnToDeatile, toggleMenu, switchTab, switchItem } from './reducer'

function mapStateToProps(state) {

    return {
        lists: state.headerReducer.lists,
        menuActive: state.headerReducer.menuActive,
    }
}

function mapDispatchToProps(dispatch, ownProps) {
    return {
        onClickBody: () => dispatch(toggleMenu()),
        onClickTab: (e) => {
            dispatch(switchTab(e.currentTarget.innerHTML));
            e.stopPropagation();
        },
        onClickDetail: (e) => {
            let itemName = $(e.currentTarget).siblings('h4').attr('data-item'),
                linkName = $(e.currentTarget).siblings('h4').attr('data-link'),
                poistionName = e.currentTarget.getAttribute('data-url');

            hashHistory.push({ pathname: `/${linkName}/${itemName}`, query: {} });
            dispatch(switchItem(itemName))
            dispatch(turnToDeatile(poistionName))
        },
        onClickItem: (e) => {
            let itemName = $(e.currentTarget).attr('data-item'),
                linkName = $(e.currentTarget).attr('data-link'),
                poistionName = e.currentTarget.getAttribute('data-url');

            dispatch(switchItem(itemName))
            hashHistory.push({ pathname: `/${linkName}/${itemName}`, query: {} });
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Menu)
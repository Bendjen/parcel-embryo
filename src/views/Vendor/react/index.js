import React from 'react'

import H1 from '../../../components/Text/H1'
import H2 from '../../../components/Text/H2'
import Quote from '../../../components/Text/Quote'

import QueueAnim from 'rc-queue-anim';

class Extend extends React.Component {
    componentDidUpdate() {
        this.scrollToAnchor(this.props.targetPosition)
    }

    scrollToAnchor = (anchorName) => {
        if (anchorName) {
            // 找到锚点
            let anchorElement = document.getElementById(anchorName);
            // 如果对应id的锚点存在，就跳转到锚点
            if (anchorElement) {
                anchorElement.scrollIntoView();

            }
        }
    }


    extendRender() {
        return (
            <div>
                <H1>UI组件：Ant Design</H1>
                <Quote>Ant Design：<a href='https://ant.design/index-cn'>https://ant.design/index-cn</a></Quote>
                <H1>动画方案：Ant Motion</H1>
                <Quote>Ant Motion：<a href='https://motion.ant.design/'>https://motion.ant.design/</a></Quote>
                <H1>可视化图标：Recharts</H1>
                <Quote>Recharts：<a href='http://recharts.org/#/zh-CN/api/Legend'>http://recharts.org/#/zh-CN/api/Legend</a></Quote>
                <H1>数据快照：Immutable</H1>
                <Quote>Immutable.js：<a href='http://facebook.github.io/immutable-js/docs/#/'>http://facebook.github.io/immutable-js/docs/#/</a></Quote>
                <Quote>知乎专栏：<a href='https://zhuanlan.zhihu.com/p/20295971'>https://zhuanlan.zhihu.com/p/20295971</a></Quote>
                <H1>Redux异步方案</H1>
                <Quote>知乎专栏：<a href='https://zhuanlan.zhihu.com/p/24337401'>https://zhuanlan.zhihu.com/p/24337401</a></Quote>
                <H1>React-router@4</H1>
                <Quote>知乎专栏：<a href='https://zhuanlan.zhihu.com/p/22490775'>https://zhuanlan.zhihu.com/p/22490775</a></Quote>
            </div>
        )
    }


    render() {
        return (
            <QueueAnim>
                <div key='QueueAnim'>
                    {this.extendRender()}
                </div>
            </QueueAnim>

        )
    }
}

import { connect } from 'react-redux'

function mapStateToProps(state) {
    return {
        targetPosition: state.menuReducer.targetPosition,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(
    mapStateToProps
)(Extend)

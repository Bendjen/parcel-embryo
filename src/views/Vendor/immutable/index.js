import React from 'react'
import QueueAnim from 'rc-queue-anim';

import H1 from '../../../components/Text/H1'
import H2 from '../../../components/Text/H2'
import H3 from '../../../components/Text/H3'
import P from '../../../components/Text/P'
import Line from '../../../components/Text/Line'
import Code from '../../../components/Text/Code'
import Quote from '../../../components/Text/Quote'

import { transform, transform2, compare, merge, find, add, update, delet, list } from './tpl'

class Immutable extends React.Component {
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

    transformRender() {
        return (
            <div id='transform'>
                <H1>1.与原生JS之间的相互转换</H1>
                <H2>（1）原生JS 转为 immutableData</H2>
                <Code code={transform}></Code>
                <H2>（2）immutableData 回到 原生JS</H2>
                <Code code={transform2}></Code>
            </div>
        )
    }

    compareRender() {
        return (
            <div id='compare'>
                <H1>2.比较两个immutableData是否一致</H1>
                <Code code={compare}></Code>
            </div>
        )
    }

    mergeRender() {
        return (
            <div id='merge'>
                <H1>3.合并两个immutableData</H1>
                <Code code={merge}></Code>
            </div>
        )
    }

    operationRender() {
        return (
            <div id='operation'>
                <H1>4.增删改查</H1>
                <H2>（1）查</H2>
                <Code code={find}></Code>
                <H2>（2）增</H2>
                <Code code={add}></Code>
                <H2>（3）改</H2>
                <Code code={update}></Code>
                <H2>（4）删</H2>
                <Code code={delet}></Code>
                <H2>List类型的增删改查</H2>
                <Code code={list}></Code>
            </div>
        )
    }

    reduxImmutableRender() {
        return (
            <div id='aboutRedux'>
                <H1>5.与 Redux 搭配使用</H1>
                <Quote><a href='https://github.com/indexiatech/redux-immutablejs' target='_blank'>redux-immutablejs</a></Quote>
            </div>
        )
    }

    render() {
        return (
            <QueueAnim>
                <div key='QueueAnim'>
                    {this.transformRender()}
                    {this.compareRender()}
                    {this.mergeRender()}
                    {this.operationRender()}
                    {this.reduxImmutableRender()}
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
)(Immutable)

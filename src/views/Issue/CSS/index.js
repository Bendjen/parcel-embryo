import React from 'react';
import QueueAnim from 'rc-queue-anim';

import H1 from '../../../components/Text/H1'
import H2 from '../../../components/Text/H2'
import H3 from '../../../components/Text/H3'
import P from '../../../components/Text/P'
import Line from '../../../components/Text/Line'
import Code from '../../../components/Text/Code'

import { direction, dir, wrap, content, main, items, cross, box, bfc, media } from './tpl'

class Components extends React.Component {

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

    flexRender() {
        return (
            <div id='Flex'>
                <H1>Flex布局</H1>
                <H2>1.容器属性</H2>

                <H2>(1) flex-direction</H2>
                <P>规定主轴的方向（即项目的排列方向）。</P>
                <Code type='css' code={direction}></Code>
                <Line>对应属性flex：</Line>
                <Code code={dir}></Code>

                <H2>(2) flex-wrap</H2>
                <P>默认情况下，项目都排在轴线上。该属性规定如果一条轴线排不下，如何换行。</P>
                <Code type='css' code={wrap}></Code>

                <H2>(3) justify-content</H2>
                <P>规定项目在主轴上的对齐方式。</P>
                <Code type='css' code={content}></Code>
                <Line>对应属性flex：</Line>
                <Code code={main}></Code>

                <H2>(4) align-items</H2>
                <P>规定项目在交叉轴上如何对齐。</P>
                <Code type='css' code={items}></Code>
                <Line>对应属性flex：</Line>
                <Code code={main}></Code>

                <H2>(*) flex-box属性说明</H2>
                <P>取值范围(0-10)，单独设置子元素多余空间的如何分配，设置为0，则子元素不占用多余的多余空间多余空间分配 = 当前flex-box值/子元素的flex-box值相加之和。</P>

                <H2>2.项目属性</H2>

                <H2>(*) flex属性下的项目属性</H2>
                <Code type='css' code={box}></Code>

                <H2>(1) order</H2>
                <P>order属性定义项目的排列顺序。数值越小，排列越靠前，默认为0。</P>

                <H2>(2) flex-grow</H2>
                <P>flex-grow属性定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。</P>
                <P>如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。</P>

                <H2>(3) flex-shrink</H2>
                <P>flex-shrink属性定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。</P>
                <P>如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。</P>

                <H2>(4) flex-basis</H2>
                <P>flex-basis属性定义了在分配多余空间之前，项目占据的主轴空间。</P>
                <P>它的默认值为auto，即项目的本来大小。可以设置成百分比或固定长度。</P>

                <H2>(5) align-self</H2>
                <P>align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto。</P>
            </div>
        )
    }

    bfcRender() {
        return (
            <div id='Bfc'>
                <H1>Bfc布局</H1>
                <P>例：右边元素宽度自适应变化</P>
                <Code type='css' code={bfc}></Code>
            </div>
        )
    }

    mediaRender() {
        return (
            <div id='Media'>
                <H1>@media 媒体查询</H1>
                <P>苹果手机个尺寸适配</P>
                <Code type='css' code={media}></Code>
            </div>
        )
    }

    render() {
        return (
            <QueueAnim>
                <div key='QueueAnim'>
                    {this.flexRender()}
                    {this.bfcRender()}
                    {this.mediaRender()}
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
)(Components)


import React from 'react';
import Column from '@components/Column'
import H1 from '@components/Text/H1'
import QueueAnim from 'rc-queue-anim';
import lists from './tpl'

class Mark extends React.Component {

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

    listRender() {
        let monthList = Object.keys(lists)
        return React.Children.map(monthList, (child, index) => {
            return (
                <div>
                    <H1 key={index}>{child}</H1>
                    <QueueAnim>
                        {_.map(lists[child], (data, index) => {
                            return (
                                <Column key={index} data={data} />
                            )
                        })}
                    </QueueAnim>
                </div>
            )
        })
    }

    render() {
        return (
            <div>
                {this.listRender()}
            </div>

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
)(Mark)


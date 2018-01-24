import React from 'react';

import H1 from '../../../components/Text/H1'
import H2 from '../../../components/Text/H2'
import P from '../../../components/Text/P'
import Line from '../../../components/Text/Line'
import Code from '../../../components/Text/Code'

import 'antd/dist/antd.css';
import { Button } from 'antd';
import QueueAnim from 'rc-queue-anim';

import { decorator1,decorator2,decorator3,decorator4,decorator5,decorator6 } from './tpl'

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
                anchorElement.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
            }
        }
    }

    letRender() {
        return (
            <div id='let和const'>
                <H1>1.Let与Const</H1>
                <H2>(1) 不存在变量提升</H2>
                <P>var命令会发生”变量提升“现象，即变量可以在声明之前使用，值为undefined。</P>
                <P>let命令改变了语法行为，它所声明的变量一定要在声明后使用，否则报错。</P>

                <H2>(2) 暂时性死区</H2>
                <P>只要块级作用域内存在let命令，它所声明的变量就“绑定”（binding）这个区域，不再受外部的影响。</P>

                <H2>(3) 不允许重复声明</H2>
                <P>let不允许在相同作用域内，重复声明同一个变量。</P>

                <H2>(4) 块级作用域</H2>
                <P>ES5 规定，函数只能在顶层作用域和函数作用域之中声明，不能在块级作用域声明。</P>
                <P>ES6 规定，1.允许在块级作用域内声明函数。2.函数声明类似于var，即会提升到全局作用域或函数作用域的头部。3.同时，函数声明还会提升到所在的块级作用域的头部。</P>
                <H2>(5) const</H2>
                <P>
                    const实际上保证的，并不是变量的值不得改动，而是变量指向的那个内存地址不得改动。对于简单类型的数据（数值、字符串、布尔值），值就保存在变量指向的那个内存地址，因此等同于常量。但对于复合类型的数据（主要是对象和数组），变量指向的内存地址，保存的只是一个指针，const只能保证这个指针是固定的，至于它指向的数据结构是不是可变的，就完全不能控制了。
                </P>

            </div>
        )
    }

    srtingRender() {
        return (
            <div id='字符串的扩展'>
                <H1>2.字符串的扩展</H1>
                <H2>(1) 遍历器接口</H2>
                <P>ES6为字符串添加了遍历器接口，使得字符串可以被for...of循环遍历。</P>
                <H2>(2) charAt()与at()</H2>
                <P>返回字符串给定位置的字符</P>
                <P>ES5：charAt()</P>
                <P>ES6：at()  （只是提案）</P>
                <H2>(3) includes(), startsWith(), endsWith()</H2>
                <P>includes()：返回布尔值，表示是否找到了参数字符串。</P>
                <P>startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。</P>
                <P>endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。</P>
                <H2>(4) repeat()</H2>
                <P>repeat方法返回一个新字符串，表示将原字符串重复n次。</P>
                <Code code={`'x'.repeat(3) // "xxx"`}></Code>
                <H2>(5) padStart()，padEnd() </H2>
                <P>如果某个字符串不够指定长度，会在头部或尾部补全。</P>
                <Code code={`'x'.padStart(5, 'ab') // 'ababx'
'x'.padStart(4, 'ab') // 'abax'

'x'.padEnd(5, 'ab') // 'xabab'
'x'.padEnd(4, 'ab') // 'xaba`}></Code>
                <H2>(6) 字符模版</H2>
                <Code code="`${x} + ${y} = ${x + y}`"></Code>
            </div>
        )
    }

    numberRender() {
        return (
            <div id='数值的扩展'>
                <H1>3.数值的扩展</H1>
                <H2>Number.isFinite(), Number.isNaN()</H2>
                <H2>Number.parseInt(), Number.parseFloat()</H2>
                <H2>Number.isInteger()</H2>
            </div>
        )
    }

    decoratorRender(){
        return (
            <div id='Decorator'>
                <H1>4.Decorator</H1>
                <H2>(1) 类的修饰</H2>
                <Code code={decorator1}></Code>
                <H2>(2) 方法的修饰</H2>
                <Code code={decorator2}></Code>
                <Code code={decorator3}></Code>
                <H2>(3) 修饰器不能用于函数</H2>
                <P>修饰器只能用于类和类的方法，不能用于函数，因为存在函数提升。使得用于修饰的函数可能会被置于被修饰的函数之后，使得内部代码顺序混乱。所以修饰函数的行为应该用高阶函数替代。</P>
                <Line>原本顺序：</Line>
                <Code code={decorator4}></Code>
                <Line>实际顺序：</Line>
                <Code code={decorator5}></Code>
                <Line>高阶函数：</Line>
                <Code code={decorator6}></Code>
                <H2>(4) 用Decorator实现自动发布</H2>
                <H2>(2) 用Decorator实现Mixin</H2>
            </div>
        )
    }

    render() {
        return (
            <QueueAnim >
                <div key='QueueAnim'>
                    {this.letRender()}
                    {this.srtingRender()}
                    {this.numberRender()}
                    {this.decoratorRender()}
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


'use strict';

import React from 'react';
import ReactDom from 'react-dom';
import { createStore, compose } from 'redux';
import { Provider } from 'react-redux';

import './layouts/base/index.scss';

//路由
import Route from './routes/index';
import Header from './layouts/header/index';   //import组件名如果和export default不同会出现不报错，但是渲染空的情况
import Menu from './layouts/menu/index'

//react-reduxz
import mainReducer from './layouts/mainReducer'
import DevTools from './containers/DevTools'


const enhancer = compose(
    DevTools.instrument()
);

const store = createStore(mainReducer, enhancer);

//渲染路由header
ReactDom.render(
    <Provider store={store}>
        <div>
            <Header />
            {/* <DevTools /> */}
        </div>
    </Provider>,
    document.getElementById('head'));   //不能用header作为ID，关键字会报错

ReactDom.render(
    <Provider store={store}>
        <div>
            <Menu />,
        {/* <DevTools /> */}
        </div>
    </Provider>,
    document.getElementById('menu'));
ReactDom.render(
    <Provider store={store}>
        <div>
            {Route}
            {/* <DevTools /> */}
        </div>
    </Provider>,
    document.getElementById('content'));   //注意这里的Route不能写成<route/>因为他已经是标签了  

    

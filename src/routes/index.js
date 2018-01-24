/**
 * Created by ZhengJS on 2017/8/10.
 */


import React from 'react';   //React一定要引用,虽然没有写到
import { Router, Route, hashHistory, IndexRoute } from 'react-router';


//Issue
import CSS from '../views/Issue/CSS'

//Vendor
import Immutable from '../views/Vendor/immutable'
import Extend from '../views/Vendor/react/index'

//Mark
import {Mark_CSS,Mark_JavaScript,Mark_React,Mark_Vue,Mark_Other} from '../views/Mark/index'

//Standard
import Standard from '../views/Standard/ECMAScript6/index'

let route = (
    <Router history={hashHistory}>
        <Route path='/'>
            <IndexRoute component={Mark_CSS}/>
            <Route path='Vendor'>
                <IndexRoute component={Immutable} />
                <Route path='Immutable' component={Immutable}/>
                <Route path='React' component={Extend}/>
            </Route>
            <Route path='Mark'>
                <IndexRoute component={Mark_React} />
                <Route path='CSS' component={Mark_CSS}/>
                <Route path='JavaScript' component={Mark_JavaScript}/>
                <Route path='React' component={Mark_React}/>
                <Route path='Vue' component={Mark_Vue}/>
                <Route path='其他' component={Mark_Other}/>
            </Route>
            <Route path='Issue'>
                <IndexRoute component={CSS} />
                <Route path='CSS' component={CSS}/>
                {/* <Route path='JS' component={Components}/> */}
            </Route>
            <Route path='Standard'>
                <IndexRoute component={Standard} />
                <Route path='ECMAScript 6' component={Standard}/>
            </Route>
        </Route>
    </Router>
)

export default route




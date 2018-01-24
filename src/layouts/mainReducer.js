import {combineReducers} from 'redux';

import headerReducer from './header/reducer';
import menuReducer from './menu/reducer';
import procutionReducer from '../views/Local/procution/reducer'

let mainReducer = combineReducers({
    headerReducer,
    menuReducer,
    procutionReducer
})

export default mainReducer

//1.CONSTANT
const TRUN_TO_DETAIL = 'TRUN_TO_DETAIL',
    SWITCH_TAB = 'SWITCH_TAB',
    SWITCH_ITEM = 'SWITCH_ITEM',
    TOGGLE_MENU = 'TOGGLE_MENU';

//2.ActionCreater
const switchItem = (Item) => {
    return {
        type: SWITCH_ITEM,
        payload: Item
    }
}

const turnToDeatile = (url) => {
    return {
        type: TRUN_TO_DETAIL,
        payload: url
    }
}

const toggleMenu = () => {
    return {
        type: TOGGLE_MENU,
        payload: null
    }
}

const switchTab = (index) => {
    return {
        type: SWITCH_TAB,
        payload: index
    }
}
//3.initState
const defaultState = {
    targetPosition: '',  //目标页内位置
    targetIndex: '',    //目标索引
    menuActive: true,   //是否开启动态菜单
    targetItem: '',     //目标目录大标题
    lists: ''  //当前渲染目录
}

//4.Reducer
const menuReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SWITCH_ITEM:
            return {
                ...state,
                targetItem: action.payload
            }
        case TRUN_TO_DETAIL:
            return {
                ...state,
                targetPosition: action.payload
            }
        case TOGGLE_MENU:
            return {
                ...state,
                menuActive: !state.menuActive
            }
        case SWITCH_TAB:
            return {
                ...state,
                menuActive: !state.menuActive,
                targetIndex: action.payload,
                lists: require(`@menu/${action.payload}.js`)
            }
        default:
            return state
    }
}

export default menuReducer
export { turnToDeatile, toggleMenu, switchTab ,switchItem}
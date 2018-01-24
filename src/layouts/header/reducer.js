
//1.CONSTANT
const TOGGLE_MENU = 'TOGGLE_MENU',
    SWITCH_TAB = 'SWITCH_TAB';

//2.ActionCreater
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
    menuActive: true,
    targetIndex: 'home'
}

//4.Reducer
const headerReducer = (state = defaultState, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return {
                ...state,
                menuActive: !state.menuActive
            }
        case SWITCH_TAB:
            return {
                ...state,
                targetIndex: action.payload,
                menuActive: !state.menuActive,
                lists: require(`@menu/${action.payload}.js`)
            }
        default:
            return state
    }
}

export default headerReducer
export { toggleMenu, switchTab }

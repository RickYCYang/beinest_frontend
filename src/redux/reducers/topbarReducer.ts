import { OPEN_DRAWER } from '../actionTypes';
import { topbarState } from '../../interface/topbarInterface';

const initState: topbarState = {
    openDrawer: false
}

const topbarReducer = (state = initState, action: any) => {
    switch(action.type) {
        case OPEN_DRAWER: {
            return {...state, openDrawer: !state.openDrawer};
        }
        default: return state;
    }
}

export default topbarReducer;
import itemsReducer from './items-reducer';

import {combineReducers} from 'redux';

const allReducers = combineReducers({
    itemsReducer: itemsReducer
});

export default allReducers;
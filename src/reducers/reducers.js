
import { combineReducers } from 'redux';

import freePlayShipReducer from './freePlayShipReducers';
import freePlayBombReducer from './freePlayBombReducer';
import normalPlayBombReducer from './normalPlayBombReducer';
import normalPlayShipReducers from './normalPlayShipReducers';
import aiShipReducer from './aiShipReducer';

export default combineReducers({
    aiShip: aiShipReducer,
    normalShip: normalPlayShipReducers,
    normalBomb: normalPlayBombReducer,
    free: freePlayShipReducer,
    bomb: freePlayBombReducer
})
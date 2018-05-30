import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import players from '../helpers/players';
import { addPlayer } from './actions';
import reducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer)
export const persistor = persistStore(store)

const initStore = () => {
  players.map(player => store.dispatch(addPlayer(player)))
}

initStore()
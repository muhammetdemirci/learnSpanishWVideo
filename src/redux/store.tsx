import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import thunkMiddleware from 'redux-thunk'
import { rootReducer } from './rootReducer'
import AsyncStorage from '@react-native-async-storage/async-storage'

const persistConfig = {
    key: 'root',

    storage: AsyncStorage,

    whitelist: [],
    blacklist: [],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    applyMiddleware(thunkMiddleware)
)

let persistor = persistStore(store)

export { store, persistor }

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
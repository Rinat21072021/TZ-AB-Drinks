import {applyMiddleware, combineReducers, createStore} from "redux";
import {drinksReducer} from "./Drinks-Reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	drinks:drinksReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk))
export type AppRootStateType = ReturnType<typeof rootReducer>

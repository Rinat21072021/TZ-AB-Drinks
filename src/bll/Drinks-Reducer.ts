import {DrinkApi, DrinksType, ItemType} from "../api/DrinkApi";
import {Dispatch} from "redux";

export type ActionsType = setDrinkAT | setLikeAT | changeFilterAT | deleteCardAT

export const initialState: DrinksType = {drinks: []}

export type FilterValueType = boolean

export enum Action_Type {
	SET_DRINKS = 'SET_DRINKS',
	SET_LIKE = 'SET_LIKE',
	CHANGE_FILTER = 'CHANGE-TODOLIST-FILTER',
	DELETE_CARD = 'DELETE-CARD'
}

export const drinksReducer = (state = initialState, action: ActionsType): DrinksType => {
	switch (action.type) {
		case Action_Type.SET_DRINKS:
			return {...state, drinks: action.drinks}
		case Action_Type.SET_LIKE:
			return {
				...state,
				drinks: state.drinks.map(el => el.idDrink === action.id ? {
					...el,
					like: !el.like,
					filter: !el.filter,
				} : el)
			}
		case Action_Type.CHANGE_FILTER: {
			return <DrinksType>{
				...state,
				drinks: state.drinks.map(el => el.idDrink === action.id ?
					{...el, filter: action.filter} : el)
			}
		}
		case Action_Type.DELETE_CARD: {
			return {
				...state,
				drinks: state.drinks.filter(d => d.idDrink !== action.id)
			}
		}
		default:
			return state;
	}
}

type setDrinkAT = ReturnType<typeof setDrinksAC>
export const setDrinksAC = (drinks: Array<ItemType>) => ({type: Action_Type.SET_DRINKS, drinks} as const)

type setLikeAT = ReturnType<typeof setLikeAC>
export const setLikeAC = (id: string, filter: boolean) => ({type: Action_Type.SET_LIKE, id, filter} as const)

type changeFilterAT = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (id: string, filter: FilterValueType) => ({
	type: Action_Type.CHANGE_FILTER,
	id,
	filter
} as const)

type deleteCardAT = ReturnType<typeof deleteCardAC>
export const deleteCardAC = (id: string) => ({type: Action_Type.DELETE_CARD, id} as const)

export const setDrinksThunk = async (dispatch: Dispatch) => {
	try {
		const res = await DrinkApi.getDrink()
		dispatch(setDrinksAC(res.data.drinks))
	} catch (err) {
		console.log('Error')
	}
}

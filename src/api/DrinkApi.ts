import axios from "axios";
import {FilterValueType} from "../bll/Drinks-Reducer";



export type ItemType = {
	strDrink: string
	strDrinkThumb: string
	idDrink: string
	like?:boolean
	filter:FilterValueType


}
export type DrinksType = {
	drinks: Array<ItemType>
}
export const DrinkApi = {
	getDrink() {
		return axios.get<DrinksType>('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')

	}
}
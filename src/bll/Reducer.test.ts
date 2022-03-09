import {changeFilterAC, deleteCardAC, drinksReducer} from "./Drinks-Reducer";
import {DrinksType} from "../api/DrinkApi";

let startState: DrinksType

beforeEach(() => {
	startState = {
		drinks: [
			{strDrink: 'Absinthe', idDrink: '1', strDrinkThumb: 'img', like: false, filter: false},
			{strDrink: 'Martini', idDrink: '2', strDrinkThumb: 'img', like: false, filter: false,},

		]
	}
})
test('correct card should be deleted ', () => {
	const action = deleteCardAC("2");
	const endState = drinksReducer(startState, action)

	expect(endState).toEqual(
		{drinks: [{strDrink: 'Absinthe', idDrink: '1', strDrinkThumb: 'img', like: false, filter: false},]}
	);
});
test('correct card should be filtered', () => {
	const action = changeFilterAC('2', true);
	const endState = drinksReducer(startState, action)

	expect(endState).toEqual(
		{
			drinks: [
				{strDrink: 'Absinthe', idDrink: '1', strDrinkThumb: 'img', like: false, filter: false},
				{strDrink: 'Martini', idDrink: '2', strDrinkThumb: 'img', like: false, filter: true,}
			]
		}
	);
});
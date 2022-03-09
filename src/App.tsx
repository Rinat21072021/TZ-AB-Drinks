import React, {  useEffect, useState } from 'react';
import { ItemType } from './api/DrinkApi';
import { useDispatch, useSelector } from 'react-redux';
import { AppRootStateType } from './bll/Store';
import {  setDrinksThunk, } from './bll/Drinks-Reducer';
import './App.css'
import { DrinkCard } from './components/DrinkCard';

export const App = () => {
  const [toggle, setToggle] = useState(false);
  const drinks = useSelector<AppRootStateType, Array<ItemType>>(state => state.drinks.drinks)
  const dispatch = useDispatch()

  const onChangeHandler = () => {
    setToggle(!toggle);
    setFilter(!filter);
  }

  const [filter, setFilter] = useState(false)

  useEffect(() => {
    dispatch(setDrinksThunk)
  }, []);

  let mapperDrinks = drinks
  if (filter) {
    mapperDrinks = mapperDrinks.filter((d) => d.filter)
  }

  if (!drinks) {
    return <div>loading...</div>
  }

  return (
    <div className="App">
      <label className="switch">
        <input className="input" type="checkbox" checked={toggle} onChange={onChangeHandler}/>
        <span className="round"/>
      </label>
      <div className="items">
        {mapperDrinks.map(d => {
          return (
            <DrinkCard
              key={d.idDrink}
              strDrink={d.strDrink}
              strDrinkThumb={d.strDrinkThumb}
              idDrink={d.idDrink}
              filter={d.filter}
            />
          )
        })}
      </div>
    </div>
  );
}

